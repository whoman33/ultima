<?php
if (estVisiteurConnecte()){ 
try
{
	$bdd = new PDO('mysql:host=mysql5-8.720;dbname=auforumdhrc;charset=utf8', 'auforumdhrc', 'afdbhrc33');
}
catch(Exception $e)
{
        die('Erreur ');
} 

// D�finition des styles d'accueil

$CSS_More = "\t\t" . '<link rel="stylesheet" type="text/css" href="' . PATH_STL . 'backoffice.css" />' . "\n" ;



        $reqGamme = 'SELECT gam_nom, gam_id FROM utm_gamme'; 
        $result = SQL_Query ( $reqGamme ) ;
        //print_r($data);
        //var_dump($data);
        while ( $data = mysql_fetch_array ( $result ) ){
            $gammeNum[] = $data['gam_id'] ;
            $gammeNom[] = $data['gam_nom'];
        }
        
        
        $reqProduit = 'SELECT * FROM utm_produit'; 
        $resultProduit = SQL_Query ( $reqProduit ) ;
        while ( $data = mysql_fetch_array ( $resultProduit ) ){
            $produitNum[] = $data['pdt_id'] ;
            $produitNom[] = $data['pdt_nom'];
        }
        

if (isset ( $_POST['produitEnvoie'] ) ){

        $req = $bdd->prepare('INSERT INTO utm_produit(pdt_id, pdt_nom, pdt_id_gam, pdt_accroche, pdt_plus_produit, pdt_descriptif, pdt_ordre) 
        VALUES(:pdt_id, :pdt_nom, :pdt_id_gam, :pdt_accroche, :pdt_plus_produit, :pdt_descriptif, :pdt_ordre)'); 
        $req->execute(array(
          'pdt_id' => NULL,
          'pdt_nom' => $_POST['nomProduit'],
        	'pdt_id_gam' => $_POST['gamme'],
        	'pdt_accroche' => $_POST['accrocche'],
        	'pdt_plus_produit' => $_POST['sousAccroche'],
        	'pdt_descriptif' => $_POST['descriptif'],
        	'pdt_ordre' => $_POST['ordre']
  	    )); 
        
  
  
  echo '<script language="Javascript">
  <!--
  document.location.replace("page-admin.html");
  // -->
  </script>';
}

if (isset ( $_POST['articleEnvoie'] ) ){

        $req = $bdd->prepare('INSERT INTO utm_article(art_id, art_id_pdt, art_reference, art_designation, art_chrono, art_ordre) 
        VALUES(:art_id, :art_id_pdt, :art_reference, :art_designation, :art_chrono, :art_ordre)');       
        $req->execute(array(
          'art_id' => NULL,
          'art_id_pdt' => $_POST['artNumProduit'],
        	'art_reference' => $_POST['artRef'],
        	'art_designation' => $_POST['artDesignation'],
          'art_chrono' => $_POST['artChrono'],
        	'art_ordre' => $_POST['artOrdre']
  	    )); 
        

  echo '<script language="Javascript">
  <!--
  document.location.replace("page-admin.html");
  // -->
  </script>';
}

if (isset ( $_POST['visuelEnvoie'] ) ){

        $req = $bdd->prepare('INSERT INTO utm_visuel(vis_id, vis_type, vis_nom, vis_id_pdt, vis_legende, vis_ordre) 
        VALUES(:vis_id, :vis_type, :vis_nom, :vis_id_pdt, :vis_legende, :vis_ordre)');
        
        $req->execute(array(
          'vis_id' => NULL,
          'vis_type' => $_POST['visType'],
          'vis_nom' => $_POST['visNom'],
        	'vis_id_pdt' => $_POST['visNumProduit'],
        	'vis_legende' => $_POST['visLegende'],
        	'vis_ordre' => $_POST['visOrdre']
  	    )); 
        
  
  
  echo '<script language="Javascript">
  <!--
  document.location.replace("page-admin.html");
  // -->
  </script>';
}


if (isset ( $_POST['imageBdEnvoie'] ) ){
  
     $maxsize=FALSE;
     $extensions=FALSE;
     $destination= "media/photos/photos_bd/".$_FILES['image']['name'];
     //Test1: fichier correctement uploadé
     if (!isset($_FILES['image']) OR $_FILES['image']['error'] > 0) return FALSE;
     //Test2: taille limite
     if ($maxsize !== FALSE AND $_FILES['image']['size'] > $maxsize) return FALSE;
     //Test3: extension
     $ext = substr(strrchr($_FILES['image']['name'],'.'),1);
     if ($extensions !== FALSE AND !in_array($ext,$extensions)) return FALSE;
     //Déplacement
     move_uploaded_file($_FILES['image']['tmp_name'], $destination);

        
  
  echo '<script language="Javascript">
  <!--
  document.location.replace("page-admin.html");
  // -->
  </script>';
}

if (isset ( $_POST['imageHdEnvoie'] ) ){
  
     $maxsize=FALSE;
     $extensions=FALSE;
     $destination= "media/photos/photos_hd/".$_FILES['image']['name'];
     //Test1: fichier correctement uploadé
     if (!isset($_FILES['image']) OR $_FILES['image']['error'] > 0) return FALSE;
     //Test2: taille limite
     if ($maxsize !== FALSE AND $_FILES['image']['size'] > $maxsize) return FALSE;
     //Test3: extension
     $ext = substr(strrchr($_FILES['image']['name'],'.'),1);
     if ($extensions !== FALSE AND !in_array($ext,$extensions)) return FALSE;
     //Déplacement
     move_uploaded_file($_FILES['image']['tmp_name'], $destination);

        
  
  echo '<script language="Javascript">
  <!--
  document.location.replace("page-admin.html");
  // -->
  </script>';
}

}
else{
echo '<p>Vous n\'êtes pas connecté</p>';
//header('Location:'. SITE_URL . '/page-connection.html');
echo '<script language="Javascript">
<!--
document.location.replace("page-connection.html");
// -->
</script>';
}
?>