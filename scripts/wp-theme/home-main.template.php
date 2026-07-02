<main><section class="%%page_hero%%" aria-labelledby="news-page-title" style="background-image:linear-gradient(90deg, rgba(5, 39, 102, 0.92) 0%, rgba(5, 39, 102, 0.66) 52%, rgba(5, 39, 102, 0.18) 100%), url(<?php echo NOAH_ASSETS; ?>/news/default-eyecatch.png)"><div class="%%page_heroOverlay%%"></div><div class="container %%page_heroInner%%"><div class="%%Reveal_root%% %%Reveal_directionLeft%%"><p class="%%page_heroEyebrow%%">NEWS</p><h1 id="news-page-title" class="%%page_heroTitle%%">ニュース</h1><p class="%%page_heroLead%%">お知らせ、プレスリリース、事業に関する最新の取り組みや更新情報を順次掲載します。</p></div></div></section><section class="%%page_newsSection%%" aria-labelledby="news-list-title"><div class="container"><div class="%%Reveal_root%% %%Reveal_directionUp%%"><div class="%%page_newsHeader%%"><div><p class="%%SectionLabel_label%%">NEWS LIST <span class="%%SectionLabel_subtitle%%">お知らせ一覧</span></p><h2 id="news-list-title" class="%%page_sectionTitle%%">最新のお知らせ</h2></div></div></div><div class="%%page_newsLayout%%"><div class="%%page_newsMain%%">
<?php
$noah_default_eyecatch = NOAH_ASSETS . '/news/default-eyecatch-noah.png';
$noah_index            = 0;
$noah_list_open        = false;

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post();
		$noah_title    = get_the_title();
		$noah_excerpt  = get_the_excerpt();
		$noah_category = noah_post_category_name();
		$noah_image    = get_the_post_thumbnail_url( null, 'large' );
		if ( ! $noah_image ) {
			$noah_image = $noah_default_eyecatch;
		}
		$noah_is_featured = ( 0 === $noah_index && ! is_paged() );

		if ( $noah_is_featured ) :
			?>
<div class="%%Reveal_root%% %%Reveal_directionUp%% %%page_featuredReveal%%"><article class="%%page_featuredRow%%"><div class="%%page_featuredImageWrap%%"><img alt="<?php echo esc_attr( $noah_title ); ?>" loading="lazy" decoding="async" class="%%page_cardImage%%" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent;object-fit:cover" src="<?php echo esc_url( $noah_image ); ?>"/></div><div class="%%page_featuredBody%%"><div class="%%page_newsMeta%%"><time datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( get_the_date( 'Y.m.d' ) ); ?></time><span><?php echo esc_html( $noah_category ); ?></span></div><h3><?php echo esc_html( $noah_title ); ?></h3><p><?php echo esc_html( $noah_excerpt ); ?></p></div><a class="%%page_rowArrow%%" aria-label="<?php echo esc_attr( $noah_title ); ?>の詳細を見る" href="<?php the_permalink(); ?>">→</a></article></div>
			<?php
		else :
			if ( ! $noah_list_open ) {
				echo '<div aria-label="その他のお知らせ">';
				$noah_list_open = true;
			}
			$noah_delay = min( ( $noah_index - ( is_paged() ? 0 : 1 ) ) * 80, 480 );
			?>
<div class="%%Reveal_root%% %%Reveal_directionUp%% %%page_listReveal%%"<?php echo $noah_delay > 0 ? ' style="--reveal-delay:' . esc_attr( $noah_delay ) . 'ms"' : ''; ?>><article class="%%page_newsRow%%"><div class="%%page_rowImageWrap%%"><img alt="<?php echo esc_attr( $noah_title ); ?>" loading="lazy" decoding="async" class="%%page_cardImage%%" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent;object-fit:cover" src="<?php echo esc_url( $noah_image ); ?>"/></div><div class="%%page_rowBody%%"><div class="%%page_newsMeta%%"><time datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( get_the_date( 'Y.m.d' ) ); ?></time><span><?php echo esc_html( $noah_category ); ?></span></div><h3><?php echo esc_html( $noah_title ); ?></h3><p><?php echo esc_html( $noah_excerpt ); ?></p></div><a class="%%page_rowArrow%%" aria-label="<?php echo esc_attr( $noah_title ); ?>の詳細を見る" href="<?php the_permalink(); ?>">→</a></article></div>
			<?php
		endif;
		$noah_index++;
	endwhile;

	if ( $noah_list_open ) {
		echo '</div>';
	}

	the_posts_pagination(
		array(
			'mid_size'  => 1,
			'prev_text' => '← 前へ',
			'next_text' => '次へ →',
			'class'     => 'noah-pagination',
		)
	);
else :
	?>
<p class="noah-news-empty">お知らせはまだありません。</p>
<?php endif; ?>
</div><div class="%%Reveal_root%% %%Reveal_directionRight%% %%page_sidebarReveal%%"><aside class="%%page_newsSidebar%%" aria-label="ニュース絞り込み"><div class="%%page_filterPanel%%"><h3>カテゴリ</h3>
<?php
$noah_news_home  = get_option( 'page_for_posts' ) ? get_permalink( get_option( 'page_for_posts' ) ) : home_url( '/news/' );
$noah_post_count = wp_count_posts();
?>
<a class="%%page_filterItem%%" href="<?php echo esc_url( $noah_news_home ); ?>"><b>すべて</b><em><?php echo esc_html( (int) $noah_post_count->publish ); ?></em></a>
<?php foreach ( get_categories( array( 'hide_empty' => true ) ) as $noah_cat ) : ?>
<a class="%%page_filterItem%%" href="<?php echo esc_url( get_category_link( $noah_cat ) ); ?>"><b><?php echo esc_html( $noah_cat->name ); ?></b><em><?php echo esc_html( (int) $noah_cat->count ); ?></em></a>
<?php endforeach; ?>
</div><div class="%%page_archivePanel%%"><h3>ARCHIVE</h3>
<?php
global $wpdb;
$noah_years = $wpdb->get_results(
	"SELECT YEAR(post_date) AS y, COUNT(*) AS c
	 FROM {$wpdb->posts}
	 WHERE post_type = 'post' AND post_status = 'publish'
	 GROUP BY y ORDER BY y DESC"
);
foreach ( $noah_years as $noah_year ) :
	?>
<a class="%%page_archiveItem%%" href="<?php echo esc_url( get_year_link( $noah_year->y ) ); ?>"><b><?php echo esc_html( $noah_year->y ); ?></b><em><?php echo esc_html( (int) $noah_year->c ); ?></em></a>
<?php endforeach; ?>
</div></aside></div></div></div></section><section class="%%page_cta%%" aria-labelledby="news-cta-title"><div class="container %%page_ctaInner%%"><div class="%%Reveal_root%% %%Reveal_directionLeft%% %%page_ctaCopy%%"><h2 id="news-cta-title">事業や取り組みに関する<br/>ご相談はこちら。</h2><p>再生可能エネルギー、蓄電池、水素、AIデータセンターなど、 目的に合わせてご相談を承ります。</p></div><div class="%%Reveal_root%% %%Reveal_directionRight%% %%page_ctaActions%%"><a class="%%Button_button%% %%Button_primary%% %%page_ctaPrimary%%" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">お問い合わせ<span aria-hidden="true" class="%%Button_arrow%%">→</span></a><a class="%%Button_button%% %%Button_white%%" href="<?php echo esc_url( home_url( '/business/' ) ); ?>">事業紹介を見る<span aria-hidden="true" class="%%Button_arrow%%">→</span></a></div></div></section></main>
