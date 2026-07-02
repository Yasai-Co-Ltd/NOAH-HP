<?php
/**
 * フォールバックテンプレート。
 *
 * カテゴリ・年別アーカイブや検索結果など、専用テンプレートを持たない
 * 一覧系リクエストはニュース一覧 (home.php) と同じ体裁で表示する。
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

include get_template_directory() . '/home.php';
