<!DOCTYPE html>

<html>


	<head>
	
	
		<title><?php echo $meta_title ?></title>

		<meta http-equiv="Content-Type" content="text/HTML; charset=iso-8859-1" />
		<meta http-equiv="expires" content="0" /> 
		<meta http-equiv="Cache-control" content="max-age=86400,public">
		
		<meta name="title" content="<?php echo $meta_title ?>" />
		<meta name="description" content="<?php echo $meta_description ; ?>" />
		<meta name="keywords" content="<?php echo $meta_keywords ; ?>" />
		<meta name="robots" content="<?php echo $meta_robots ; ?>" />
		<meta property="og:title" content="<?php $meta_title ?>" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://www.ultima-fixations.com/" />
		<meta property="og:image" content="http://ultima-fixations.com/images/ogpicture.png" />
		
		<link rel="shortcut icon" type="image/jpg" href="<?php echo PATH_IMG ; ?>favicon.ico" />
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,500,600|Raleway:500,600' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="<?php echo PATH_STL ; ?>main.css" />
		<?php echo @$CSS_More ; ?>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>
		
		<script type="text/javascript" src="<?php echo PATH_SPT ; ?>main.js"></script>
		<?php echo @$JS_More ; ?>
		
		<style type="text/css">
		 
			#body-content
				{
				
					background-image: url(images/<?php echo $Body_Content_Background ; ?>);
					background-position: top left;
					background-repeat: no-repeat;
									
				}
				
			<?php echo @$CSS_More_Live ; ?>
				
		</style>
		
		<script type="text/javascript">
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()
			{
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})
			(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-48632320-1', 'garis.fr');
			ga('send', 'pageview');
		</script>

	</head>

	
	<body>
		
		
	<!-- Facebook -->
		<div id="fb-root"></div>
		<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.3";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>
	<!-- Twitter -->
		<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
	<!-- Google+ -->
		<script src="https://apis.google.com/js/platform.js" async defer>{lang: 'fr'}</script>
	<!-- Fin RS -->

		<div id="header">
		
				<div id="header-content">
					
					<div id="header-content-logo">
						<a href=" <?php echo SITE_URL; ?> ">
							<img src="<?php echo PATH_IMG ; ?>header_content_logo.png" />
						</a>
					</div>
					<!-- <div id="header-content-accroche">
						Outillage
					</div>
 -->
					<div id="header-content-menu">
						<div id="header-content-menu-fond"></div>
						<table><tr><?php echo implode ( $Header_Menu ) ; ?></tr></table>
					</div>
					
				</div>

		</div>
	
		
		<div id="body">
		
			<div id="body-colonne">
				<div id="body-sousmenu">
					<?php echo implode ( $Body_Sous_Menu ) ; ?>
	 				</div>
	 			</div>
	 			<div id="body-colonne-extra">
					<div id="body-colonne-extra-recherche">
						RECHERCHER :<br />
						<form name="recherche"  id="body-colonne-extra-recherche-form" action="resultat-recherche.html" method="POST">
							<input type="text" value="<?php echo @$_POST['src'] ; ?>" id="body-colonne-extra-recherche-input" name="src" maxlength="77" autocomplete="off" />
						</form>
						<div id="body-colonne-extra-recherche-resultat">
						</div>
					</div>
	 				<a href="page-revendeurs.html" id="" alt="Trouver un revendeur proche de chez vous !">
		 				<div id="body-colonne-extra-revendeurs"></div>
	 				<a href="page-contact.html" id="body-colonne-extra-projet" alt="Un projet de construction, de rénovation ? Contactez-nous !"></a>
	 				<!-- <div id="body-colonne-extra-conseils"></div> -->
	 				</a>
		 		</div>
			</div>
			
			<div id="body-content">
