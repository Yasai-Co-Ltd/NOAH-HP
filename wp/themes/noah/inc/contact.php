<?php
/**
 * お問い合わせ / 採用エントリーフォームのサーバー側送信処理。
 *
 * 生成テンプレート内のフォーム (data-noah-form="contact" | "recruit") から
 * theme.js が REST API (POST /noah/v1/contact) へ送信し、wp_mail() で
 * 窓口宛にメールを送る。外部サービスに依存せず WordPress 内で完結する。
 *
 * 送信先アドレス・送信元(From)は「設定 → 一般」で変更できる。
 *
 * スパム対策: ハニーポット (fax) / 送信元オリジン照合 / nonce /
 * IP 単位のレート制限。
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// 既定の送信先。管理画面で上書きできる。
define( 'NOAH_CONTACT_TO_DEFAULT', 'info@genshinn.com' );
define( 'NOAH_RECRUIT_TO_DEFAULT', 'saiyou@genshinn.com' );

// レート制限: 同一 IP から 1 時間あたりの上限。
define( 'NOAH_CONTACT_RATE_MAX', 8 );
define( 'NOAH_CONTACT_RATE_WINDOW', HOUR_IN_SECONDS );

/**
 * サイトドメインを使った既定の送信元アドレスを返す。
 *
 * @return string 例: noreply@example.com
 */
function noah_default_mail_from() {
	$host = wp_parse_url( home_url(), PHP_URL_HOST );
	$host = $host ? preg_replace( '/^www\./', '', $host ) : 'localhost';
	return 'noreply@' . $host;
}

/* ------------------------------------------------------------------ *
 * 管理画面: 送信先アドレス設定 (設定 → 一般)
 * ------------------------------------------------------------------ */

add_action( 'admin_init', 'noah_register_contact_settings' );

/**
 * お問い合わせ関連のオプションを「設定 → 一般」に登録する。
 */
function noah_register_contact_settings() {
	register_setting( 'general', 'noah_contact_to', array(
		'type'              => 'string',
		'sanitize_callback' => 'sanitize_email',
		'default'           => NOAH_CONTACT_TO_DEFAULT,
	) );
	register_setting( 'general', 'noah_recruit_to', array(
		'type'              => 'string',
		'sanitize_callback' => 'sanitize_email',
		'default'           => NOAH_RECRUIT_TO_DEFAULT,
	) );
	register_setting( 'general', 'noah_mail_from', array(
		'type'              => 'string',
		'sanitize_callback' => 'sanitize_email',
		'default'           => '',
	) );

	add_settings_section(
		'noah_contact_section',
		'NOAH お問い合わせ設定',
		function () {
			echo '<p>フォームからのメール送信先と送信元アドレスを設定します。</p>';
		},
		'general'
	);

	$fields = array(
		'noah_contact_to' => 'お問い合わせ送信先',
		'noah_recruit_to' => '採用エントリー送信先',
		'noah_mail_from'  => '送信元アドレス (From)',
	);
	foreach ( $fields as $option => $label ) {
		add_settings_field(
			$option,
			esc_html( $label ),
			function () use ( $option ) {
				$placeholder = 'noah_mail_from' === $option ? noah_default_mail_from() : '';
				printf(
					'<input type="email" name="%1$s" id="%1$s" value="%2$s" class="regular-text" placeholder="%3$s" />',
					esc_attr( $option ),
					esc_attr( get_option( $option, '' ) ),
					esc_attr( $placeholder )
				);
				if ( 'noah_mail_from' === $option ) {
					echo '<p class="description">空欄の場合はサイトドメインの noreply@ を使用します。到達率のためサイトと同じドメインのアドレスを推奨します。</p>';
				}
			},
			'general',
			'noah_contact_section'
		);
	}
}

/* ------------------------------------------------------------------ *
 * フロント: エンドポイントと nonce を JS へ渡す
 * ------------------------------------------------------------------ */

add_action( 'wp_head', 'noah_contact_head_config', 1 );

/**
 * theme.js が参照する送信先エンドポイントと nonce を出力する。
 * theme.js は静的 <script src> 読み込みのため wp_localize_script が使えず、
 * グローバル変数で受け渡す。
 */
function noah_contact_head_config() {
	printf(
		"<script>window.NOAH_CONTACT=%s;</script>\n",
		wp_json_encode( array(
			'endpoint' => esc_url_raw( rest_url( 'noah/v1/contact' ) ),
			'nonce'    => wp_create_nonce( 'wp_rest' ),
		) )
	);
}

/* ------------------------------------------------------------------ *
 * REST API: 送信ハンドラ
 * ------------------------------------------------------------------ */

add_action( 'rest_api_init', 'noah_register_contact_route' );

/**
 * 送信用 REST ルートを登録する。
 */
function noah_register_contact_route() {
	register_rest_route(
		'noah/v1',
		'/contact',
		array(
			'methods'             => 'POST',
			'callback'            => 'noah_handle_contact',
			'permission_callback' => '__return_true',
		)
	);
}

/**
 * 送信リクエストを検証し、問題なければ窓口宛にメールを送る。
 *
 * @param WP_REST_Request $request リクエスト。
 * @return WP_REST_Response JSON レスポンス。
 */
function noah_handle_contact( WP_REST_Request $request ) {
	// 送信元オリジン照合 (CSRF 対策)。ヘッダがある場合のみ厳格判定。
	$site_host = wp_parse_url( home_url(), PHP_URL_HOST );
	$origin    = $request->get_header( 'origin' );
	if ( ! $origin ) {
		$referer = $request->get_header( 'referer' );
		$origin  = $referer ? $referer : '';
	}
	if ( $origin && wp_parse_url( $origin, PHP_URL_HOST ) !== $site_host ) {
		return noah_contact_error( '送信元が確認できませんでした。', 403 );
	}

	// nonce 検証。期限切れ等はページ再読み込みで回復。
	if ( ! wp_verify_nonce( $request->get_header( 'x_wp_nonce' ), 'wp_rest' ) ) {
		return noah_contact_error( 'セッションの有効期限が切れました。ページを再読み込みしてもう一度お試しください。', 403 );
	}

	$params = $request->get_json_params();
	if ( ! is_array( $params ) ) {
		$params = $request->get_params();
	}

	// ハニーポット: 入力があればボットとみなし、成功を装って何もしない。
	if ( ! empty( $params['fax'] ) ) {
		return new WP_REST_Response( array( 'success' => true ), 200 );
	}

	// レート制限。
	$ip   = noah_contact_client_ip();
	$key  = 'noah_contact_rl_' . md5( $ip );
	$hits = (int) get_transient( $key );
	if ( $hits >= NOAH_CONTACT_RATE_MAX ) {
		return noah_contact_error( '送信回数の上限に達しました。しばらく時間をおいてからお試しください。', 429 );
	}

	// 必須項目の検証。
	$name  = isset( $params['name'] ) ? sanitize_text_field( wp_unslash( $params['name'] ) ) : '';
	$email = isset( $params['email'] ) ? sanitize_email( wp_unslash( $params['email'] ) ) : '';
	$agree = ! empty( $params['agree'] );

	if ( '' === $name ) {
		return noah_contact_error( 'お名前を入力してください。' );
	}
	if ( ! is_email( $email ) ) {
		return noah_contact_error( 'メールアドレスの形式が正しくありません。' );
	}
	if ( ! $agree ) {
		return noah_contact_error( '個人情報の取り扱いへの同意が必要です。' );
	}

	// フォーム種別 → 送信先と件名。
	$form = isset( $params['form'] ) && 'recruit' === $params['form'] ? 'recruit' : 'contact';
	if ( 'recruit' === $form ) {
		$to      = get_option( 'noah_recruit_to', NOAH_RECRUIT_TO_DEFAULT );
		$subject = '採用エントリー';
	} else {
		$to      = get_option( 'noah_contact_to', NOAH_CONTACT_TO_DEFAULT );
		$subject = 'お問い合わせ';
	}
	if ( ! is_email( $to ) ) {
		return noah_contact_error( '送信先が正しく設定されていません。サイト管理者へお問い合わせください。', 500 );
	}
	if ( ! empty( $params['subject'] ) ) {
		$subject = sanitize_text_field( wp_unslash( $params['subject'] ) );
	}

	// 本文: クライアントが組んだ {label, value} の一覧から生成。
	$body = noah_contact_build_body( $params, $name, $email );

	// 送信元。到達率のためサイトドメインのアドレスを From にし、
	// Reply-To を送信者にする。
	$from    = get_option( 'noah_mail_from', '' );
	$from    = is_email( $from ) ? $from : noah_default_mail_from();
	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		sprintf( 'From: %s <%s>', wp_specialchars_decode( get_bloginfo( 'name' ) ), $from ),
		sprintf( 'Reply-To: %s <%s>', $name, $email ),
	);

	$sent = wp_mail( $to, $subject, $body, $headers );

	if ( ! $sent ) {
		return noah_contact_error( '送信に失敗しました。お手数ですが時間をおいて再度お試しください。', 500 );
	}

	// 成功時のみレート制限カウントを進める。
	set_transient( $key, $hits + 1, NOAH_CONTACT_RATE_WINDOW );

	return new WP_REST_Response(
		array(
			'success' => true,
			'message' => 'お問い合わせを受け付けました。担当者より折り返しご連絡いたします。',
		),
		200
	);
}

/**
 * 送信本文を組み立てる。
 *
 * @param array  $params リクエストパラメータ。
 * @param string $name   検証済みの名前。
 * @param string $email  検証済みのメールアドレス。
 * @return string 本文テキスト。
 */
function noah_contact_build_body( $params, $name, $email ) {
	$lines = array();

	// クライアントが送るラベル付きフィールド一覧を優先。
	if ( ! empty( $params['fields'] ) && is_array( $params['fields'] ) ) {
		foreach ( $params['fields'] as $field ) {
			if ( ! is_array( $field ) || ! isset( $field['label'] ) ) {
				continue;
			}
			$label = sanitize_text_field( wp_unslash( $field['label'] ) );
			$value = isset( $field['value'] ) ? sanitize_textarea_field( wp_unslash( $field['value'] ) ) : '';
			if ( '' === $label ) {
				continue;
			}
			$lines[] = $label . ': ' . ( '' !== $value ? $value : '（未入力）' );
		}
	}

	// フィールド一覧が無い場合の保険。
	if ( empty( $lines ) ) {
		$lines[] = 'お名前: ' . $name;
		$lines[] = 'メールアドレス: ' . $email;
		if ( ! empty( $params['message'] ) ) {
			$lines[] = '';
			$lines[] = 'お問い合わせ内容:';
			$lines[] = sanitize_textarea_field( wp_unslash( $params['message'] ) );
		}
	}

	return implode( "\n", $lines );
}

/**
 * クライアント IP を取得する。
 *
 * @return string IP アドレス。
 */
function noah_contact_client_ip() {
	$ip = isset( $_SERVER['REMOTE_ADDR'] ) ? wp_unslash( $_SERVER['REMOTE_ADDR'] ) : '';
	return sanitize_text_field( $ip );
}

/**
 * エラーレスポンスを生成する。
 *
 * @param string $message ユーザー向けメッセージ。
 * @param int    $status  HTTP ステータス。
 * @return WP_REST_Response
 */
function noah_contact_error( $message, $status = 400 ) {
	return new WP_REST_Response(
		array(
			'success' => false,
			'message' => $message,
		),
		$status
	);
}
