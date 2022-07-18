<!-- Site footer markup goes here -->
</main>
<footer class="w-full bg-black-color text-white" id="contacto">
    <div class="container flex flex-col gap-8 justify-center py-20 lg:flex-row lg:py-12 lg:justify-between lg:items-center">
        <div class="contact-informaction lg:flex lg:flex-row lg:gap-12 lg:items-center">
            <div class="mb-8 lg:mb-0">
                <p><?= get_field('address_contact','widget_'.'nav_menu-5'); ?></p>
                <p><?= get_field('phone_contact','widget_'.'nav_menu-5'); ?></p>
            </div>
            <div class="email">
                <a href="mailto:<?= get_field('email_contact','widget_'.'nav_menu-5'); ?>" class="relative inline-block w-full py-2 px-12 border-2 border-solid border-yellow-color text-center text-lg font-semibold">Contacto</a>
            </div>
        </div>
        <div class="social-media">
            <?php
            $argsMenuSocialMedia=array(
                'theme_location'=>'menu_social_media',
                'container'=>'nav',
                'container_class'=>'navbar-social-media',
                'container_id'=>'navbar_social_media'
            );
            wp_nav_menu($argsMenuSocialMedia);
            ?>
        </div>
    </div>
</footer>
<?php get_template_part( 'templates/partials/document-close' );
