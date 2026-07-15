<?php
/**
 * NOAH Corporate theme functions.
 *
 * テンプレート(front-page.php / templates/*.php / home.php / single.php)は
 * scripts/build-wp-theme.mjs が Next.js の静的エクスポートから生成する。
 * このファイルは共通定数・ヘルパー・初期セットアップの読み込みのみを担う。
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * 画像などの静的アセットのベースURL。
 * 生成テンプレート内の `<?php echo NOAH_ASSETS; ?>` から参照される。
 */
define( 'NOAH_ASSETS', get_template_directory_uri() . '/assets/img' );

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'automatic-feed-links' );
	}
);

// 生成テンプレートは <head> を自前で持つため、WP 既定の余分な出力を抑える。
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'wp_head', 'wp_generator' );

/**
 * 投稿の先頭カテゴリ名を返す。未分類・カテゴリなしは「お知らせ」扱い。
 *
 * @param WP_Post|int|null $post 投稿。省略時は現在の投稿。
 * @return string カテゴリ名。
 */
function noah_post_category_name( $post = null ) {
	$categories = get_the_category( $post instanceof WP_Post ? $post->ID : $post );
	if ( $categories && '未分類' !== $categories[0]->name ) {
		return $categories[0]->name;
	}
	return 'お知らせ';
}

require get_template_directory() . '/inc/setup-content.php';
require get_template_directory() . '/inc/contact.php';
