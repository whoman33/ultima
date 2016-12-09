<?php

// Changement de page si page de donnée à rechercher

if ( !isset ( $_POST['src'] ) AND !isset ( $_GET['src'] ) AND !isset ( $_GET['chp'] ) )
	{
	
		header ( 'Location:' . SITE_URL ) ;		
	
	}



// Changement du POST en GET en cas d'envoi via le formulaire

if ( isset ( $_POST['src'] ) AND $_POST['src'] !== '' )
	{
	
		$_GET['src'] = strip_tags($_POST['src']) ;
		$_GET['typ'] = 'form' ;
		
	}
	

	
// Préparation de la requête SQL classique

if ( isset($_GET['chp']) AND $_GET['chp'] !== "" )
	{
		
		unset ( $_GET['pag'], $SQL_Where ) ;
		
		foreach ( $_GET as $key => $value )
			{
			
				$SQL_Where[] = $key . '_id = ' . $value  ;
			
			}
		
		$SQL_Select = "*" ;
		
		$_GET['typ'] = 'total' ;
		$visuel_resultat = "AND vis_ordre = 1" ;
		
	}



// Préparation de la requête SQL AJAX et Formulaire

elseif ( isset($_GET['src']) && isset($_GET['typ']) )
	{

		// Récupération de la configuration
		
		if ( $_GET['typ'] !== 'form' )
			{
			
				header('Content-Type: text/html; charset=iso-8859-1'); 
				include ( '../includes/configuration.php' ) ;
				include ( '../' . PATH_INC . 'fonctions.php' ) ;
				include ( '../' . PATH_INC . 'sql.php' ) ;
			
			}		
		
		
		
		// Formatage du WHERE
		
		$SQL_Where[] = 'CONCAT(chp_nom, "$", fam_nom, "$", gam_nom, "$", pdt_nom, "$", pdt_accroche, "$", pdt_plus_produit, "$", pdt_descriptif) COLLATE latin1_swedish_ci LIKE "%' . $_GET['src'] . '%"
						OR CONCAT(art_reference, "$", art_designation) COLLATE latin1_swedish_ci LIKE "%' . $_GET['src'] . '%"
						OR vis_legende COLLATE latin1_swedish_ci LIKE "%' . $_GET['src'] . '%"' ;
		
		
		
		// Formatage du SELECT
		
		if ( $_GET['typ'] == 'nombre' )
			{
				
				$SQL_Select = "COUNT(*)" ;
				$visuel_resultat = "" ;
			
			}
			
		elseif ( $_GET['typ'] == 'total' || $_GET['typ'] == 'form' )
			{
				
				$SQL_Select = "*" ;
				$visuel_resultat = "AND vis_ordre = 1" ;
			
			}
			
	}



// Execution de la requête SQL

$sql = "SELECT  " . $SQL_Select . "
			FROM utm_produit
				LEFT OUTER JOIN utm_gamme
					ON gam_id = pdt_id_gam
				LEFT OUTER JOIN utm_famille
					ON fam_id = gam_id_fam
				LEFT OUTER JOIN utm_chapitre
					ON chp_id = fam_id_chp
				LEFT OUTER JOIN utm_visuel
					ON vis_id_pdt = pdt_id
						" . $visuel_resultat . "
				LEFT OUTER JOIN utm_article
					ON art_id_pdt = pdt_id
			WHERE " . implode ( ' AND ', $SQL_Where ) . "
			GROUP BY pdt_id
			ORDER BY chp_ordre, fam_ordre, gam_ordre, pdt_ordre" ;
			
$result = SQL_Query ( $sql ) ;



// Formatage du résultat selon Type Total ou Formulaire

if ( $_GET['typ'] == 'total' || $_GET['typ'] == 'form'  )
	{
		
		// Initialisation de la Mini Navigation
		
		$Navigation_Mini_Liens = '' ;
		$Navigation_Mini_CSS = '' ;
		$Navigation_Mini_CSS_Current = 'style="color:#e95a0c;"' ;
		
		
		// Si aucun produit n'est trouvé
		
		if ( mysql_num_rows ( $result ) < 1 )
			{
			
				$Resultat_Produits[] = '<tr><td></td></tr>' ;
				$Resultat_Produits_Comble[] = "" ;
				$Resultat_Libelle = 'Aucun produit trouvé' ;
			
			}
			
			
		// Sinon on formate
		
		else
			{
						
				// Création du tableau des produits trouvés
				
				while ( $data = mysql_fetch_array ( $result ) )
					{
						
						// Tableau des produits
						
						$Resultat_Produits[] = '
						<td>
							<div class="resultat-titre" couleur="' . $data['chp_couleur'] . '">
							<a href="c' . $data['chp_id'] . 'f' . $data['fam_id'] . 'g' . $data['gam_id'] . 'p' . $data['pdt_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] . '-' . $data['gam_nom'] . ':' . $data['pdt_nom'] ) . '.html" class="resultat-titre-a">' . $data['pdt_nom'] . '</a>
							</div>
							<div class="resultat-image"><img src="' . PATH_PBD . $data['vis_nom'] . '" /></div>
						</td>' ;
						
						
						
						// Préparation de la mini navigation Chapitre
						
						$Navigation_Chapitre = '' ;
						
						if ( isset ( $_GET['chp'] ) && $_GET['chp'] !== '' )
							{
								$Navigation_Mini_CSS = 'style="color:#999;"' ;
								/*$Navigation_Chapitre = '<span ' . $Navigation_Mini_CSS . '>' . $data['chp_nom'] . '</span> > ' ;*/
								$Navigation_Chapitre = '' ;
							}
						
						
						
						// Préparation de la mini navigation Famille
						
						$Navigation_Famille = '' ;
						
						if ( isset ( $_GET['fam'] ) && $_GET['fam'] !== '' )
							{
								$Navigation_Famille = '<a href="c' . $data['chp_id'] . 'f' . $data['fam_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] ) . '.html" ' . $Navigation_Mini_CSS . '>' . $data['fam_nom'] . '</a>' ;
							}
						
						
						
						// Préparation de la mini navigation Gamme
						
						$Navigation_Gamme = '' ;
						
						if ( isset ( $_GET['gam'] ) && $_GET['gam'] !== '' )
							{
								$Navigation_Gamme = ' » ' . '<a href="c' . $data['chp_id'] . 'f' . $data['fam_id'] . 'g' . $data['gam_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] . '-' . $data['gam_nom'] ) . '.html" ' . $Navigation_Mini_CSS_Current . '>' . $data['gam_nom'] . '</a>' ;
							}
						
						
						
						// Préparation de la mini navigation Complete
						
						$Navigation_Mini_Liens = $Navigation_Chapitre . $Navigation_Famille . $Navigation_Gamme ;
						
						
						// Referencement
						
						$Meta_Keyword[] = $data['chp_nom'] . ' ' . $data['fam_nom'] . ' ' . $data['gam_nom'] . ' ' . $data['pdt_nom'] ;
				
				
					}
		
				
				
				// Formatage du tableau
				
				for ( $i = 0 ; $i < count ( $Resultat_Produits ) ; $i++ )
					{
					
						if ( $i < 1 OR $i % 3 == 0 )
							{
								$Resultat_Produits[$i] = '<tr>' . $Resultat_Produits[$i] ;
							}
				
						if ( ( $i + 1 ) % 3 == 0 )
							{
								$Resultat_Produits[$i] = $Resultat_Produits[$i] . '</tr>' ;
							}
					
					}
				
				
				
				// Remplissage des cellules pour combler les trous
				
				$Resultat_Produits_Comble[] = '' ;
				
				if ( count ( $Resultat_Produits ) % 3 > 0 )
					{
				
						for ( $i = 0 ; $i < ( 3 - ( ( count ( $Resultat_Produits ) + 3 ) % 3 ) ) ; $i ++ )
							{
								
								$Resultat_Produits_Comble[] = '<td><div id="resultat-titre">&nbsp;</div></td>' ;
									
							}
							
						$Resultat_Produits_Comble[] = '</tr>' ;
				
					}
								
				
				
				// Libellé du résultat
				
				$Resultat_Libelle =  ( mysql_num_rows ( $result ) > 1 ) ? mysql_num_rows ( $result ) . " produits correspondent à votre recherche" : mysql_num_rows ( $result ) . " produit correspond à votre recherche" ;
				// $Resultat_Libelle .=  ( $Navigation_Mini_Liens !== '' ) ? ' dans : ' . $Navigation_Mini_Liens : '' ;

			}
	
	
	
		// AJAX affichage du résultat
		
		if ( $_GET['typ'] == 'total' && !isset($_GET['chp']) )
			{
				
				echo '<div id="body-content-page-resultat-libelle">' . $Resultat_Libelle . '</div>' ;	
				echo '<table>' ;
				echo  ( implode ( '', $Resultat_Produits ) ) ;
				echo  ( implode ( '', $Resultat_Produits_Comble ) ) ;
				echo '</table>' ;
			
			}
			
			
			
		// Sinon Style et Script supplémentaires
		
		else
			{
			
				// Définition des scripts spécifiques
				
				$JS_More = '<script type="text/javascript" src="' . PATH_SPT . 'resultat.js"></script>' . "\n" ;
				
				
				
				// Définition des styles spécifiques
				
				$CSS_More = "\t" . '<link rel="stylesheet" type="text/css" href="' . PATH_STL . 'resultat.css" />' . "\n" ;
				
			}		

	}



// Formatage du résultat selon Type Nombre

elseif ( $_GET['typ'] == 'nombre' )
	{
		
		if ( mysql_num_rows ( $result ) > 0 )
			{
			
				$number = mysql_num_rows ( $result ) ;
				
				$libelle = ( $number > 1 ) ? " Produits trouvés" : " Produit trouvé" ;
				
			}
		
		else
			{
				
				$number = "" ;
				
				$libelle = "Aucun produit trouvé" ;
			
			}
		
		echo $number . $libelle ;
	
	}

?>