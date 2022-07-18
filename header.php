<?php get_template_part( 'templates/partials/document-open' );
if(!is_page('inicio')):
     ?>
     <style>
        .header{
            box-shadow:0 1px 5px 0 #F5F5F5;
        }
     </style>
     <?php
endif;
?>
<header id="header" class="header w-full h-28 py-2 bg-transparent transition-colors duration-200" >
    <div class="container  h-full">
        <div class="h-full flex flex-row items-center justify-between">
            <div class="logo">
                <a href="<?= bloginfo('home'); ?>">
                    <div class="flex flex-col sm:flex-row sm:items-center lg:flex-col 2xl:flex-row">
                        <h1 class="font-bold min-w-max pb-1 sm:pb-0 sm:pr-6 lg:pr-0 lg:pb-1 2xl:pr-6 2xl:pb-0 font-prelo">grupo tendenze comunicaciones</h1>
                        <img class="min-w-[200px]" src="<?= get_logo(); ?>" alt="logo grupo tendenze" title="logo grupo tendenze">
                    </div>
                </a>
            </div>
            <div class="menu-nav-mobile">
                <?php
                $argsMenuMobile=array(
                    'theme_location'=>'menu_main',
                    'container'=>'nav',
                    'container_class'=>'navbar-mobile',
                    'container_id'=>'navbar_mobile'
                );
                wp_nav_menu($argsMenuMobile);
                ?>
            </div>
            <div class="menu-nav-desktop">
                <?php
                $argsMenuDesktop=array(
                    'theme_loaction'=>'menu_main',
                    'container'=>'nav',
                    'container_class'=>'navbar-desktop',
                    'container_id'=>'nabvar_desktop',
                );
                wp_nav_menu($argsMenuDesktop);
                ?>
            </div>
            <div class="icon-bars text-3xl">
                <button class="button-bars cursor-pointer w-10 h-10 transition-colors duration-300 " id="button-bars">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </div>
</header> 
<main class="w-full h-full">

