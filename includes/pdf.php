<?php

session_start ( ) ;

include ( '../includes/configuration.php' ) ;


header("Content-type: application/pdf"); 
header("Content-Disposition: attachment; filename=" . $_GET['pdf'] . ".pdf"); 
readfile('../' . PATH_PDF . $_GET['pdf'] . '.pdf' );

?>
