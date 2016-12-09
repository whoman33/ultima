<?php
 
// Définition des styles d'accueil
$CSS_More = "\t\t" . '<link rel="stylesheet" type="text/css" href="' . PATH_STL . 'backoffice.css" />' . "\n" ;

try
{
	$bdd = new PDO('mysql:host=mysql5-8.720;dbname=auforumdhrc;charset=utf8', 'auforumdhrc', 'afdbhrc33');
}
catch(Exception $e)
{
        die('Erreur ');
} 
 
  
  if (count($_POST)==0)
    {
      $etape = 1;
    }
    else
    {
            $query = 'SELECT * FROM users';
            $result = SQL_Query ($query);
            
            while ( $data = mysql_fetch_array ( $result ) ){
                $mdp[] = $data['users_mdp'];
                $nom[] = $data['users_login'];
            }

      // Si l'identification est réussie (les informations utilisateur sont fournies 
      // sous forme de tableau)
      
      for ($i = 0, $size = count($mdp); $i < $size; $i++){
          if ($mdp[$i] == ($_POST['password']) && $nom[$i] == ($_POST['users'])) 
          { 
              affecterInfosConnecte($nom[$i], $mdp[$i]);
              //header('Location:page-admin.html');
              echo '<script language="Javascript">
              <!--
              document.location.replace("page-admin.html");
              // -->
              </script>';
          }
          
      
          else 
          {
              //header('Location:' . SITE_URL . '/page-connection.html');
              echo '<script language="Javascript">
              <!--
              document.location.replace("page-connection.html");
              // -->
              </script>';
             
          }
      
      
      }
      
}

?>