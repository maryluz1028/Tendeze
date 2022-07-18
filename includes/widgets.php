<?php
function widgets_active(){
    $args=array(
        'name'=>'Datos de contacto',
        'id'=>'contact_information',
        'before_widget'=>'<div>',
        'after_widget'=>'</div>'
    );
    register_sidebar($args);
}

add_action('widgets_init','widgets_active');
add_action('in_widget_form', 'awts_get_widget_id');
function awts_get_widget_id($widget_instance)
{
// Check if the widget is already saved or not.   
if ($widget_instance->number=="__i__"){
echo "<p><strong>Widget ID is</strong>: Pls save the widget first!</p>" ;
} else {
echo "<p><strong>Widget ID is: </strong>" .$widget_instance->id. "</p>";
}
}