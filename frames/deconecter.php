<?php
$CSS_More = "\t\t" . '<link rel="stylesheet" type="text/css" href="' . PATH_STL . 'backoffice.css" />' . "\n" ;

  deconnecterVisiteur() ;  
  //header('Location:page-connection.html') ;
  echo '<script language="Javascript">
  <!--
  document.location.replace("page-connection.html");
  // -->
  </script>';

?>