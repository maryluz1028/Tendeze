<?php
/*
Template Name:Videos
Template Post Type: post, page, event
*/
get_template_part('templates/partials/document-open');
?>
<header class="header w-full py-8 lg:py-4 bg-white-color" >
    <div  class="container w-full ">
        <div  class=" flex flex-row justify-between items-center">
            <a href="<?=bloginfo('home')?>">
                <h1 class="text-[11px] sm:text-base md:text-2xl font-bold">grupo tendenze comunicaciones</h1>
            </a>
            <div class="inline-flex items-center" >
                <a href="<?=bloginfo()?>" class="font-medium tracking-wide  text-[10px] sm:text-[16px]   md:text-[19px]  " >www.tendenzeperu.com</a>
                <a href="https://api.whatsapp.com/send?phone=998193771&text=Hola%20Tendenze%20Perú.%20Necesito%20m%C3%A1s%20informaci%C3%B3n" target="_blank" class=" text-[18px] md:text-[2.5rem] font-medium ml-4 md:ml-7  "  ><i class="fab fa-whatsapp"></i></a> 
            </div>
        </div>
    </div>
</header>
<main>
    <section class="banner-videos">
        <img class="w-full" src="<?= esc_url(get_field('banner_videos')['url']);?>" alt="banner de videos">
    </section>
    <section class="videos py-8 sm:py-12">
        <div class="container">
            <!--<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 sm:gap-y-14 md:gap-y-16 gap-x-4 md:gap-x-12">-->
                <div class="videos-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 sm:gap-y-14 md:gap-y-16 lg:gap-y-20 gap-x-4 md:gap-x-14">
                <?php
                if(have_rows('videos')):
                    while(have_rows('videos')):
                        the_row();
                        ?>
                        <article class="video-card">
                            <?php $imgVideo=get_sub_field('video_image'); ?>
                            <div class="video-img relative flex justify-center items-center cursor-pointer" data-video="<?= esc_url(get_sub_field('video')['url']); ?>">
                                <img class="max-w-full w-full object-cover h-auto" src="<?= esc_url($imgVideo['url']);?>" alt="<?= esc_attr($imgVideo['alt']) ?>">
                            </div>
                            <h2 class="px-[3px] font-semibold text-[#333] md:text-[26px] mt-4"><?= get_sub_field('video_title'); ?></h2>
                        </article>
                        <?php
                    endwhile;
                endif;
                ?>
            </div>
        </div>
    </section>
    <div id="videos-modal" class="videos-modal fixed top-0 left-0 bottom-0 right-0 ">
        <div class="video-modal-container cursor-pointer w-full h-full flex justify-center items-center  bg-black-alpha-color">
            <div class="relative cursor-default px-4">
                <button id="videos-close-modal" class="videos-close-modal absolute flex justify-center items-center w-[45px] h-[45px] rounded-full bg-black-color left-1/2 -translate-x-1/2 -top-14"></button>
                <div class="video">
                </div>
            </div>
        </div>
    </div>
<?php
get_footer();
