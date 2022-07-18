
<?php
/*
Template Name: Inicio
Template Post Type: post, page, event
*/ 
get_header();
?>
<section class="banner w-full mb-6" id="banner">
    <div class="banner-image relative">
        <?php
        $banner_image=get_field('banner_image');
        if(!empty($banner_image)):
            ?>
            <img class="h-[60vh] sm:h-auto w-full object-cover" src="<?= esc_url($banner_image['url']) ?>" alt="<?= esc_attr($banner_image['alt']) ?>">
            <?php
        endif;
        ?>
        <div class="container absolute top-0 bottom-0 left-0 right-0">
            <div class="slogan h-full w-full flex flex-row items-center">
                    <?php
                    $banner_image=get_field('banner_slogan');
                    if(!empty($banner_image)):
                        ?>
                        <img class=" h-4/5 lg:pb-4" src="<?= esc_url($banner_image['url']) ?>" alt="<?= esc_attr($banner_image['alt']) ?>">
                        <?php
                    endif;?>
            </div>
        </div>
    </div>
</section>
<section class="prestige w-full bg-yellow-color py-8 lg:py-16" id="que-hacemos">
    <div class="container w-full">
        <div class="grid gap-12 grid-cols-2 lg:grid-cols-4">
        <?php 
        if(have_rows('prestige')):
            while(have_rows('prestige')):
                the_row();
                ?>
                <div class="flex flex-col items-center">
                        <span class="text-5xl font-black w-full text-center"><?= get_sub_field('pretige_number') ?></span>
                        <span class="text-xl font-bold w-full text-center"><?= get_sub_field('prestige_description')?></span>
                </div>
                <?php
            endwhile;
        endif;
        ?>
        </div>
    </div>
</section>
<section class="slider-information bg-white py-12" id="slider_information">
    <div class="container">
        <?php
        echo do_shortcode('[slide-anything id=184]');
        ?>
    </div>
</section>
<section class="promotional-video w-full" id="promotional">
    <div class="flex flex-col lg:flex-row lg:gap-2">
        <div class="phrase bg-black-color p-16 flex items-center justify-center">
                <?php
                $phrase=get_field('phrase');
                if(!empty($phrase)):
                    ?>
                    <h2 class="text-[2rem] lg:text-[3rem] text-white-color"><?= $phrase ?></h2>
                    <?php
                endif;
                ?>
        </div>
        <div class="video p-4 bg-yellow-color flex items-center lg:px-0 lg:py-8">
        <?php
            $promotional_video=get_field('promotional_video');
            if(!empty($promotional_video)):
                ?>
                <video src="<?= esc_url($promotional_video['url']) ?>" controls></video>
                <?php
            endif;
            ?>
        </div>
    </div>
</section>
<section class="how-we-do w-full py-12" id="como-hacemos" >
    <div class="container w-full">
        <div class="how-do-title grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-16 lg:px-20">
            <h2 class="text-3xl lg:text-7xl font-bold"><?=  get_field('how_do_title'); ?></h2>
            <h3 class="text-xl lg:text-3xl font-prelo lg:font-bold"><?= get_field('how_do_description'); ?></h3>
        </div>
        <div class="services grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <?php
            if(have_rows('services')):
                while(have_rows('services')):
                    the_row();
                    ?>
                    <article class="flex-col service">
                        <div class="service-image w-full mb-2 lg:mb-6">
                            <?php
                            $service_image=get_sub_field('service_image');
                            ?>
                            <img src="<?=esc_url($service_image['url']); ?>" alt="" class="w-full">
                        </div>
                        <div class="service-name w-full mb-2">
                            <h4 class="w-full py-1 bg-yellow-color text-xl text-center font-bold capitalize sm:uppercase "><?= get_sub_field('service_name'); ?></h4>
                        </div>
                        <div class="service-description w-full">
                            <p class="text-center font-semibold sm:text-lg lg:px-2"><?= get_sub_field('service_description'); ?></p>
                        </div>
                    </article>
                    <?php
                endwhile;
            endif;
            ?>
        </div>
    </div>
</section>
<section class="categories w-full bg-no-repeat bg-center bg-cover bg-fixed h-[70vh] lg:h-[40vw]" id="experiencia" style="background-Image:url(<?=esc_url(get_field('categories_image')['url']);?>)">
    <div class="container text-white h-full">
        <div class="h-full flex flex-col justify-center">
            <h2 class="text-3xl sm:text-4xl lg:text-7xl w-max bg-black-color mb-8 lg:w-1/2"><?= get_field('categories_title');?></h2>
            <div class="category-list lg:flex lg:flex-row lg:justify-center">
                <p class="p-4 bg-black-alpha-color sm:text-2xl lg:text-3xl lg:w-1/2 lg:py-8"> <?= get_field('category_list'); ?></p>
            </div>
        </div>
    </div>
</section>
<section class="brands w-full py-12" id="brands">
    <div class="container w-full">
        <h2 class="text-3xl lg:text-5xl mb-16"><?= get_field('brand_title');?></h2>
        <div class="w-full flex flex-row flex-wrap items-center justify-center">
            <?php 
            if(have_rows('brands')):
                while(have_rows('brands')):
                    the_row();
                    $brand_logo=get_sub_field('brand_logo');
                    ?>
                    <div class="py-6 w-1/4 lg:w-auto">
                        <img class="w-full" src="<?= esc_url($brand_logo['url']) ?>" alt="<?= get_sub_field('branch_logo_name');?>" title="<?= get_sub_field('branch_logo_name');?>">
                    </div>
                    <?php
                endwhile;
            endif;
            ?>
        </div>
    </div>
</section>
<section class="gallery w-full mb-6" id="galeria">
    <div class="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <?php 
        if(have_rows('gallery')):
            while(have_rows('gallery')):
                the_row();
                ?>
                <img src="<?= esc_url( get_sub_field('image_gallery')['url']); ?>" alt="<?= get_sub_field('image_name_gallery'); ?>">
                <?php
            endwhile;
        endif;
        ?>
    </div>
</section>
<?php
get_footer();