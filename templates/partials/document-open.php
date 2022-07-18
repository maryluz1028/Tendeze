 

<!doctype html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport"
		content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="icon" href='../tendenze/wp-content/themes/tendenze/build/img/favicon.ico'>
		<link rel="apple-touch" href='../tendenze/wp-content/themes/tendenze/build/img/favicon.ico'>
		<meta name="theme-color" content="#fae800">
  		<title><?= wp_get_document_title() ?></title>
 		<script>document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js');</script>
		<?php 
		wp_head();
		if(is_admin_bar_showing()):
			?>
			<style>
				header{
					top:46px !important;
				}
				@media(min-width:783px){
					header{
						top:32px !important;
					}
					.menu-nav-mobile{
					margin-top:calc(7rem + 32px) !important;
				}
				}
				.menu-nav-mobile{
					margin-top:calc(7rem + 46px);
				}
			</style>
			<?php
		endif;
		?>
	</head>
	<body <?php body_class() ?>>
