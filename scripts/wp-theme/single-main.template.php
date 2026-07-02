<?php
the_post();
$noah_image = get_the_post_thumbnail_url( null, 'full' );
if ( ! $noah_image ) {
	$noah_image = NOAH_ASSETS . '/news/default-eyecatch-noah.png';
}
$noah_category  = noah_post_category_name();
$noah_excerpt   = has_excerpt() ? get_the_excerpt() : '';
$noah_news_home = get_option( 'page_for_posts' ) ? get_permalink( get_option( 'page_for_posts' ) ) : home_url( '/news/' );
?>
<main><section class="%%page_hero%%" aria-labelledby="news-detail-title"><img alt="" decoding="async" class="%%page_heroImage%%" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent;object-fit:cover" src="<?php echo esc_url( $noah_image ); ?>"/><div class="%%page_heroShade%%"></div><div class="container %%page_heroInner%%"><div class="%%Reveal_root%% %%Reveal_directionLeft%%"><nav class="%%page_breadcrumb%%" aria-label="パンくず"><a href="<?php echo esc_url( $noah_news_home ); ?>">NEWS</a><span><?php echo esc_html( $noah_category ); ?></span></nav><div class="%%page_heroMeta%%"><time datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( get_the_date( 'Y.m.d' ) ); ?></time><span><?php echo esc_html( $noah_category ); ?></span></div><h1 id="news-detail-title" class="%%page_heroTitle%%"><?php the_title(); ?></h1><?php if ( $noah_excerpt ) : ?><p class="%%page_heroLead%%"><?php echo esc_html( $noah_excerpt ); ?></p><?php endif; ?></div></div></section><section class="%%page_articleSection%%" aria-labelledby="article-title"><div class="container %%page_articleGrid%%"><div class="%%Reveal_root%% %%Reveal_directionUp%% %%page_articleReveal%%"><article class="%%page_articleBody%%"><h2 id="article-title" class="%%page_articleTitle%%"><?php the_title(); ?></h2><?php if ( $noah_excerpt ) : ?><p class="%%page_articleLead%%"><?php echo esc_html( $noah_excerpt ); ?></p><?php endif; ?><div class="noah-article-content"><?php the_content(); ?></div></article></div><div class="%%Reveal_root%% %%Reveal_directionRight%% %%page_sideReveal%%"><aside class="%%page_sideColumn%%" aria-label="記事情報"><div class="%%page_infoCard%%"><h2>ARTICLE INFO</h2><dl><div><dt>日付</dt><dd><?php echo esc_html( get_the_date( 'Y.m.d' ) ); ?></dd></div><div><dt>カテゴリ</dt><dd><?php echo esc_html( $noah_category ); ?></dd></div></dl><a class="%%page_backLink%%" href="<?php echo esc_url( $noah_news_home ); ?>">ニュース一覧へ戻る</a></div>
<?php
$noah_related = get_posts(
	array(
		'numberposts'  => 2,
		'post__not_in' => array( get_the_ID() ),
	)
);
if ( $noah_related ) :
	?>
<div class="%%page_relatedCard%%"><h2>RELATED NEWS</h2><div class="%%page_relatedList%%">
	<?php foreach ( $noah_related as $noah_rel ) : ?>
<a class="%%page_relatedItem%%" href="<?php echo esc_url( get_permalink( $noah_rel ) ); ?>"><time datetime="<?php echo esc_attr( get_the_date( 'Y-m-d', $noah_rel ) ); ?>"><?php echo esc_html( get_the_date( 'Y.m.d', $noah_rel ) ); ?></time><span><?php echo esc_html( noah_post_category_name( $noah_rel ) ); ?></span><b><?php echo esc_html( get_the_title( $noah_rel ) ); ?></b></a>
	<?php endforeach; ?>
</div></div>
<?php endif; ?>
</aside></div></div></section></main>
