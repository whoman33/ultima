<?php 
//include ( '../includes/fonctions.php' ) ;
//initSession();

if (estVisiteurConnecte()){ 
try
{
	$bdd = new PDO('mysql:host=mysql5-8.720;dbname=auforumdhrc;charset=utf8', 'auforumdhrc', 'afdbhrc33');
}
catch(Exception $e)
{
        die('Erreur ');
} 
//include ( '../includes/configuration.php' ) ;
error_reporting(E_ALL);
// D�finition des styles d'accueil

$CSS_More = "\t\t" . '<link rel="stylesheet" type="text/css" href="' . PATH_STL . 'backoffice.css" />' . "\n" ;



        $reqFamille = 'SELECT * FROM utm_famille'; 
        $result = SQL_Query ( $reqFamille ) ;
        //print_r($data);
        //var_dump($data);
        while ( $data = mysql_fetch_array ( $result ) ){
            $familleNum[] = $data['fam_id'] ;
            $familleNom[] = $data['fam_nom'];
        }
        
if (isset ( $_POST['gammesEnvoie'] ) ){

        $req = $bdd->prepare('INSERT INTO utm_gamme(gam_id, gam_nom, gam_ordre, gam_id_fam) 
        VALUES(:gam_id, :gam_nom, :gam_ordre, :gam_id_fam)'); 
        $req->execute(array(
          'gam_id' => NULL,
          'gam_nom' => $_POST['gamNom'],
        	'gam_ordre' => $_POST['gamOrdre'],
        	'gam_id_fam' => $_POST['gamIdFam']
  	    )); 
        
  
  echo '<script language="Javascript">
  <!--
  document.location.replace("page-admin.html");
  // -->
  </script>';
}
}