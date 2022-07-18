<?php
function add_supports(){
    add_theme_support('custom-logo');
}
function register_menus(){
    register_nav_menus(
        array(
            'menu_main'=>('menu_main'),
            'menu_social_media'=>('menu_social_media'),
        )
    );
}
function get_logo(){
    $custom_logo_id=get_theme_mod('custom_logo');
    $urlLogo=wp_get_attachment_image_src($custom_logo_id);
    return $urlLogo[0];
}
add_filter('init','add_supports');
add_action('init','register_menus');