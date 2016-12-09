<?php

require_once('parameters.php');
// Mode de debug : 0 => Désactivé ; E_ALL ou 1 => Activé

error_reporting ( E_ALL ) ;
$_SESSION['log_sql'] = $debug_mode ;



// Connexion à la base de données

define ( 'SQL_SERVER', $sql_server ) ;
define ( 'SQL_LOGIN', $sql_login ) ;
define ( 'SQL_PASSWORD', $sql_password ) ;
define ( 'SQL_DATABASE', $sql_database ) ;


// Site défiinition

define ( 'SITE_URL', 'http://' . $_SERVER["SERVER_NAME"]) ;
define ( 'SITE_URL_RS', 'http://ultima-fixations.fr') ;
define ( 'SITE_ROOT', './' ) ;
define ( 'SITE_PREFIX', 'utm' ) ;
define ( 'SITE_NOM', 'Ultima' ) ;
define ( 'SITE_MAIL', 'commandes@afdb.fr' ) ; //jonathan.esedji@afdb.fr define ( 'SITE_MAIL', 'stephane.jarry@afdb.fr' ) ;
define ( 'SITE_MAIL_PRO', 'commandes@afdb.fr' ) ;



// Chemin des dossiers

define ( 'PATH_STL', 'styles/' ) ;
define ( 'PATH_IMG', 'images/' ) ;
define ( 'PATH_INC', 'includes/' ) ;
define ( 'PATH_MDA', 'media/' ) ;
define ( 'PATH_PBD', PATH_MDA . 'photos/photos_bd/' ) ;
define ( 'PATH_PHD', PATH_MDA . 'photos/photos_hd/' ) ;
define ( 'PATH_SBD', PATH_MDA . 'schemas/schemas_bd/' ) ;
define ( 'PATH_SHD', PATH_MDA . 'schemas/schemas_hd/' ) ;
define ( 'PATH_PIC', PATH_MDA . 'pictos/' ) ;
define ( 'PATH_PDF', PATH_MDA . 'pdf/' ) ;
define ( 'PATH_FRM', 'frames/' ) ;
define ( 'PATH_SPT', 'scripts/' ) ;
define ( 'PATH_TPL', 'templates/' ) ;


?>