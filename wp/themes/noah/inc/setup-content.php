<?php
/**
 * テーマ有効化時の初期セットアップ。
 *
 * - 固定ページ階層の作成とページテンプレートの割り当て (inc/pages-map.php)
 * - フロントページ/投稿ページ(ニュース)の表示設定
 * - ニュースカテゴリと初期記事の投入 (inc/seed-news.php)
 * - パーマリンク構造 (/news/%postname%/) の設定
 *
 * 既存データがある場合は再作成しない(再有効化しても安全)。
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'after_switch_theme', 'noah_setup_site_content' );
add_action( 'init', 'noah_sync_site_content' );

/**
 * テーマ上書きデプロイ後にページ構成の差分を自動補充する。
 *
 * after_switch_theme は再有効化しないと走らないため、pages-map / seed-news の
 * 内容ハッシュを option と比較し、変化があった時だけ冪等なセットアップを再実行する。
 */
function noah_sync_site_content() {
	$map_file  = get_template_directory() . '/inc/pages-map.php';
	$seed_file = get_template_directory() . '/inc/seed-news.php';
	$version   = md5(
		( file_exists( $map_file ) ? md5_file( $map_file ) : '' ) .
		( file_exists( $seed_file ) ? md5_file( $seed_file ) : '' )
	);

	if ( get_option( 'noah_content_version' ) === $version ) {
		return;
	}

	// 同時アクセスによる二重実行を防ぐ (noah_ensure_page は存在チェック→作成のため)。
	if ( get_transient( 'noah_content_sync_lock' ) ) {
		return;
	}
	set_transient( 'noah_content_sync_lock', 1, MINUTE_IN_SECONDS );

	noah_setup_pages();
	noah_setup_news();

	update_option( 'noah_content_version', $version );
	delete_transient( 'noah_content_sync_lock' );
}

/**
 * サイト初期コンテンツを作成する。
 */
function noah_setup_site_content() {
	// 日本のサイトのため JST に固定。当日日付の記事が UTC 判定で
	// 「予約投稿」扱いになるのも防ぐ (シードは日付のみ・00:00 起点)。
	update_option( 'timezone_string', 'Asia/Tokyo' );

	noah_setup_pages();
	noah_setup_news();
	noah_setup_permalinks();
}

/**
 * 固定ページを作成し、テンプレートと表示設定を割り当てる。
 */
function noah_setup_pages() {
	$map_file = get_template_directory() . '/inc/pages-map.php';
	$pages    = file_exists( $map_file ) ? require $map_file : array();

	// 親ページが先に存在するよう、パスの浅い順に作成する。
	uksort(
		$pages,
		function ( $a, $b ) {
			return substr_count( $a, '/' ) <=> substr_count( $b, '/' );
		}
	);

	foreach ( $pages as $path => $page ) {
		noah_ensure_page( $path, $page['title'], $page['template'] );
	}

	$front_id = noah_ensure_page( 'home', 'ホーム', '' );
	$news_id  = noah_ensure_page( 'news', 'ニュース', '' );

	if ( $front_id && $news_id ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $front_id );
		update_option( 'page_for_posts', $news_id );
	}
}

/**
 * パスで固定ページを検索し、無ければ作成してIDを返す。
 *
 * @param string $path     ページパス (例: "about/history")。
 * @param string $title    ページタイトル。
 * @param string $template ページテンプレートの相対パス。空なら割り当てない。
 * @return int ページID。失敗時は 0。
 */
function noah_ensure_page( $path, $title, $template ) {
	$existing = get_page_by_path( $path );
	if ( $existing ) {
		if ( $template ) {
			update_post_meta( $existing->ID, '_wp_page_template', $template );
		}
		return $existing->ID;
	}

	$parts     = explode( '/', $path );
	$slug      = array_pop( $parts );
	$parent_id = 0;
	if ( $parts ) {
		$parent    = get_page_by_path( implode( '/', $parts ) );
		$parent_id = $parent ? $parent->ID : 0;
	}

	$page_id = wp_insert_post(
		array(
			'post_type'    => 'page',
			'post_status'  => 'publish',
			'post_title'   => $title,
			'post_name'    => $slug,
			'post_parent'  => $parent_id,
			'post_content' => '',
		)
	);

	if ( is_wp_error( $page_id ) || ! $page_id ) {
		return 0;
	}
	if ( $template ) {
		update_post_meta( $page_id, '_wp_page_template', $template );
	}
	return $page_id;
}

/**
 * ニュースカテゴリと初期記事を投入する。
 * 同じスラッグの投稿が既にある記事はスキップする(再有効化しても安全)。
 */
function noah_setup_news() {
	$seed_file = get_template_directory() . '/inc/seed-news.php';
	if ( ! file_exists( $seed_file ) ) {
		return;
	}

	$items = require $seed_file;

	foreach ( array_reverse( $items ) as $item ) { // 古い記事からIDを採番。
		if ( get_page_by_path( $item['slug'], OBJECT, 'post' ) ) {
			continue;
		}
		$category_id = noah_ensure_category( $item['category'] );

		wp_insert_post(
			array(
				'post_type'     => 'post',
				'post_status'   => 'publish',
				'post_title'    => $item['title'],
				'post_name'     => $item['slug'],
				'post_date'     => $item['date'],
				'post_excerpt'  => $item['excerpt'],
				'post_content'  => $item['content'],
				'post_category' => $category_id ? array( $category_id ) : array(),
			)
		);
	}
}

/**
 * カテゴリ名からタームIDを取得し、無ければ作成する。
 *
 * @param string $name カテゴリ名。
 * @return int タームID。失敗時は 0。
 */
function noah_ensure_category( $name ) {
	$existing = term_exists( $name, 'category' );
	if ( $existing ) {
		return (int) ( is_array( $existing ) ? $existing['term_id'] : $existing );
	}
	$created = wp_insert_term( $name, 'category' );
	return is_wp_error( $created ) ? 0 : (int) $created['term_id'];
}

/**
 * 投稿のURLを /news/スラッグ/ にするパーマリンク設定。
 */
function noah_setup_permalinks() {
	global $wp_rewrite;
	$wp_rewrite->set_permalink_structure( '/news/%postname%/' );
	update_option( 'category_base', 'news/category' );
	flush_rewrite_rules( true );
}
