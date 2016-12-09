<?php

// Ouverture de session

ini_set ( 'session.use_trans_sid', '0' ) ;
session_set_cookie_params ( 0 ) ;
session_name ( "UTM" ) ;
session_start ( ) ;

// Récupération de la configuration

include ( 'includes/configuration.php' ) ;
include ( PATH_INC . 'fonctions.php' ) ;
include ( PATH_INC . 'sql.php' ) ;



// Choix de la Frame centrale

if ( !isset ( $_GET['pag'] ) )
	{
		$Frame = 'accueil' ;
	}
	
elseif ( file_exists ( PATH_FRM . $_GET['pag'] . '.php' ) )
	{
		$Frame = $_GET['pag'] ;
	}

else
	{
		header ( 'Location:' . SITE_URL ) ;		
	}



// Détermination de l'image de fond

$Body_Content_Background_Number = mt_rand ( 1, 6 ) ;
$Body_Content_Background = "body_content_background_" . $Body_Content_Background_Number . ".png" ;



// Traitement des frames

include ( PATH_FRM . $Frame . '.php' ) ;
include ( PATH_FRM . 'header.php' ) ;
include ( PATH_INC . 'referencement.php' ) ;



// Compilation de la page

include ( PATH_TPL . 'header_html.php' ) ;	
include ( PATH_TPL . $Frame . '_html.php' ) ;
include ( PATH_TPL . 'footer_html.php' ) ;



// Securite : suppression du GET

unset ( $_GET['pag'] ) ;


?>