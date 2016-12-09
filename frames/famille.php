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



        $reqChapitre = 'SELECT * FROM utm_chapitre'; 
        $result = SQL_Query ( $reqChapitre ) ;
        //print_r($data);
        //var_dump($data);
        while ( $data = mysql_fetch_array ( $result ) ){
            $chapitreNum[] = $data['chp_id'] ;
            $chapitreNom[] = $data['chp_nom'];
        }
        
if (isset ( $_POST['familleEnvoie'] ) ){

        $req = $bdd->prepare('INSERT INTO utm_famille(fam_id, fam_nom, fam_ordre, fam_id_chp) 
        VALUES(:fam_id, :fam_nom, :fam_ordre, :fam_id_chp)'); 
        $req->execute(array(
          'fam_id' => NULL,
          'fam_nom' => $_POST['famNom'],
        	'fam_ordre' => $_POST['famOrdre'],
        	'fam_id_chp' => $_POST['famIdChp']
  	    )); 
        
  
  echo '<script language="Javascript">
  <!--
  document.location.replace("page-admin.html");
  // -->
  </script>';
}
}