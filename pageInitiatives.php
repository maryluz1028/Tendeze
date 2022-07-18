<?php
/*
Template Name:Iniciativas
Template Post Type:post,page,event
*/
get_header();
?>
<div class="initiatives container w-full my-8">
    <?php
    if(have_posts()):
        while(have_posts()):
            the_post();
            the_content();
        endwhile;
    endif;
    ?>
</div>
<?php
get_footer();