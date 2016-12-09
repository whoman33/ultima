<?php

// Définition des styles spécifiques

$CSS_More = "\t" . '<link rel="stylesheet" type="text/css" href="' . PATH_STL . 'produit.css" />' . "\n" ;



// Définition des scripts spécifiques

$JS_More = '<script type="text/javascript" src="' . PATH_SPT . 'produit.js"></script>' . "\n" ;



// Execution de la requête SQL Produit

$sql = "SELECT * 
			FROM utm_produit
				LEFT OUTER JOIN utm_gamme
					ON gam_id = pdt_id_gam
				LEFT OUTER JOIN utm_famille
					ON fam_id = gam_id_fam
				LEFT OUTER JOIN utm_chapitre
					ON chp_id = fam_id_chp 
			WHERE pdt_id = " . $_GET['pdt'] ;
			
$result = SQL_Query ( $sql ) ;



// Evitement du Hack

if ( mysql_num_rows ( $result ) < 1 )
	{
		
		header ( 'Location:' . SITE_URL ) ;		
		
	}
	
	
	
// Sinon : Formatage du résultat

else
	{
		
		// Récupération SQL

		$data = mysql_fetch_array ( $result ) ;
		
		
		
		// Formatage de la fiche Produit
		
		$Produit_Nom = $data['pdt_nom'] ;

		$Produit_Lien_AFDB = '<a class="cta" href="http://www.afdb.fr/recherche?paper_catalog_page=&query=' . str_replace( "_", " ", Rewrite_url( $data['pdt_nom'] ) ) . '&aggregations%5BMARQUE%5D%5B%5D=' . SITE_NOM . '" title="" target="_blank">acheter cet article chez nos revendeurs</a>';

		$Produit_Accroche = ( $data['pdt_accroche'] !== '' ) ? '<div id="produit-accroche">' . nl2br ( $data['pdt_accroche'] ) . '</div>' : '' ;

		$Produit_Plus = ( $data['pdt_plus_produit'] !== '' ) ? '<div id="produit-plus">' . nl2br ( $data['pdt_plus_produit'] ) . '</div>' : '' ;
		
		$Produit_Descriptif = ( $data['pdt_descriptif'] !== '' ) ? '<div id="produit-descriptif">' . nl2br ( $data['pdt_descriptif'] ) . '</div>' : '' ;
		
		
		
		// Gestion des pictos
		
			// Requete SQL
			
			$sql_p = "SELECT *
						FROM utm_picto_link
						LEFT OUTER JOIN utm_picto
							ON utm_picto.pic_id = utm_picto_link.pic_id
						WHERE utm_picto_link.pdt_id = " . $_GET['pdt'] . "
						ORDER BY utm_picto.pic_id" ;
			
			$result_p = SQL_Query ( $sql_p ) ;
			
			
			
			// Formatage des pictos
			
			while ( $data_p = mysql_fetch_array ( $result_p ) )
				{
				
					$Produit_Picto[] = '
					<img src="' . PATH_PIC . $data_p['pic_fichier'] . '" />
					' ;
					
				}
				
			if ( isset ( $Produit_Picto ) && count ( $Produit_Picto ) > 0 )
				{
				
					$Produit_Picto_Html = '
						<div id="produit-picto">
							' . implode ( '', $Produit_Picto ) . '
						</div>' ;
					
				}
		
		
		
		// Gestion des Visuels
		
			// Requete SQL
			
			$sql_v = "SELECT *
						FROM utm_visuel
						WHERE vis_id_pdt = " . $_GET['pdt'] . "
						ORDER BY vis_ordre" ;
			
			$result_v = SQL_Query ( $sql_v ) ;
			
			
			
			// Formatage des visuels Produits et Schemas
			
			$Produit_Visuel_Nombre = 0 ;
			$Produit_Schema_Nombre = 0 ;
			
			while ( $data_v = mysql_fetch_array ( $result_v ) )
				{

					if ( $data_v['vis_type'] == 'photos' ) 
						{
						
							$Produit_Visuel_Nombre =  $Produit_Visuel_Nombre + 1 ;
							
						}
				
					
					if ( $data_v['vis_type'] == 'schemas' ) 
						{
						
							$Produit_Schema_Nombre =  $Produit_Schema_Nombre + 1 ;
							
						}
				
					
					if ( $data_v['vis_type'] == 'pdf' ) 
						{
						
							$Produit_PDF =  '<a href="pdf-' . str_replace( '.pdf', '', $data_v['vis_nom']) . '.html" border="0" title="Télécharger la version PDF de ce produit"><img src="images/pdf.jpg" /></a>' ;
							
						}
				
				}
			
			$CSS_Div_Visuel = ( $Produit_Visuel_Nombre < 3 ) ? 'produit-visuel-image-grand' : 'produit-visuel-image' ;
			$CSS_Div_Schema = ( $Produit_Schema_Nombre < 3 ) ? 'produit-schema-image-grand' : 'produit-schema-image' ;
			
			$result_v = SQL_Query ( $sql_v ) ;

			while ( $data_v = mysql_fetch_array ( $result_v ) )
				{

					if ( $data_v['vis_type'] == 'photos' ) 
						{
						
							$Produit_Visuel[] = '
							<td>
								<div class="' . $CSS_Div_Visuel . '">
									<img src="' . PATH_PBD . $data_v['vis_nom'] . '" border="0" class="visuel" id="' . substr_replace ( $data_v['vis_nom'], '', -4 ) . '" />
								</div>
								
							</td>' ;
							
						}
				
					
					if ( $data_v['vis_type'] == 'schemas' ) 
						{
						
							$Produit_Schema[] = '
							<td>
								<div class="' . $CSS_Div_Schema . '">
									<img src="' . PATH_SBD . $data_v['vis_nom'] . '" border="0" class="visuel" id="' . substr_replace ( $data_v['vis_nom'], '', -4 ) . '" />
								</div>
								<div class="produit-schema-legende">' . $data_v['vis_legende'] . '</div>
							</td>' ;
							
						}
				
				}	
			
			
			
			// HTML des visuels Produits

			if ( isset ( $Produit_Visuel ) && count ( $Produit_Visuel ) > 0 )
				{
					
					// Formatage du tableau
					
					for ( $i = 0 ; $i < count ( $Produit_Visuel ) ; $i++ )
						{
						
							if ( $i < 1 OR $i % 4 == 0 )
								{
									$Produit_Visuel[$i] = '<tr>' . $Produit_Visuel[$i] ;
								}
					
							if ( ( $i + 1 ) % 4 == 0 )
								{
									$Produit_Visuel[$i] = $Produit_Visuel[$i] . '</tr>' ;
								}
						
						}
					
					
					
					// Remplissage des cellules pour combler les trous
					
					$Produit_Visuel_Comble[] = '' ;
					
					if ( count ( $Produit_Visuel ) % 4 > 0 )
						{
					
							for ( $i = 0 ; $i < ( 4 - ( ( count ( $Produit_Visuel ) + 4 ) % 4 ) ) ; $i ++ )
								{
									
									$Produit_Visuel_Comble[] = '<td>&nbsp;</td>' ;
										
								}
								
							$Produit_Visuel_Comble[] = '</tr>' ;
					
						}
						
						
						
					// Création du tableaux Visuels Produits
				
					$Produit_Visuel_Html = '
						<div class="produit-onglet">
							<div class="produit-onglet-libelle">VISUELS</div>
							<div class="produit-onglet-bouton">masquer</div>
							<div class="produit-tableau">
								<table>
									' . implode ( '', $Produit_Visuel ) . '
									' . implode ( '', $Produit_Visuel_Comble ) . '
								</table>
							</div>
						</div>' ;
				
				}
			
			
			
			// HTML des visuels Schemas

			if ( isset ( $Produit_Schema ) && count ( $Produit_Schema ) > 0 )
				{
					
					// Formatage du tableau
					
					for ( $i = 0 ; $i < count ( $Produit_Schema ) ; $i++ )
						{
						
							if ( $i < 1 OR $i % 4 == 0 )
								{
									$Produit_Schema[$i] = '<tr>' . $Produit_Schema[$i] ;
								}
					
							if ( ( $i + 1 ) % 4 == 0 )
								{
									$Produit_Schema[$i] = $Produit_Schema[$i] . '</tr>' ;
								}
						
						}
					
					
					
					// Remplissage des cellules pour combler les trous
					
					$Produit_Schema_Comble[] = '' ;
					
					if ( count ( $Produit_Schema ) % 4 > 0 )
						{
					
							for ( $i = 0 ; $i < ( 4 - ( ( count ( $Produit_Schema ) + 4 ) % 4 ) ) ; $i ++ )
								{
									
									$Produit_Schema_Comble[] = '<td>&nbsp;</td>' ;
										
								}
								
							$Produit_Schema_Comble[] = '</tr>' ;
					
						}
						
						
						
					// Création du tableaux Visuels Schemas
				
					$Produit_Schema_Html = '
						<div class="produit-onglet">
							<div class="produit-onglet-libelle">SCHEMAS</div>
							<div class="produit-onglet-bouton">masquer</div>
							<div class="produit-tableau">
								<table>
									' . implode ( '', $Produit_Schema ) . '
									' . implode ( '', $Produit_Schema_Comble ) . '
								</table>
							</div>
						</div>' ;
				
				}
		
		
		
		// Gestion des articles
		
			// Requete SQL
			
			$sql_a = "SELECT *
						FROM utm_article
						WHERE art_id_pdt = " . $_GET['pdt'] . "
						ORDER BY art_ordre" ;
			
			$result_a = SQL_Query ( $sql_a ) ;
			
			
			
			// Formatage des Articles
			
			$Article_Ligne_Couleur = "article-ligne-sombre" ;
			
			while ( $data_a = mysql_fetch_array ( $result_a ) )
				{
					
					$Produit_Articles[] = '
					<tr class="' . $Article_Ligne_Couleur . '">
						<td class="produit-article-reference">
							' . $data_a['art_reference'] . '
						</td>
						<td class="produit-article-designation">
							' . $data_a['art_designation'] . '
						</td>
					</tr>' ;
					
					$Article_Ligne_Couleur = ( $Article_Ligne_Couleur == "article-ligne-sombre" ) ? "article-ligne-claire" : "article-ligne-sombre" ;
					
				}
				
				
				
			// Création du tableaux Article
		
			$Produit_Article_Html = '
				<div class="produit-onglet"><div class="produit-onglet-libelle">ARTICLES</div>
					<div class="produit-onglet-bouton">masquer</div>
					<div class="produit-tableau-articles">
						<table>
							<thead>
								<td>Référence</td>
								<td>Dénomination</td>
							</thead>
							<tbody>
								' . implode ( '', $Produit_Articles ) . '
							</tbody>
						</table>
					</div>
				</div>' ;
		
		
		
		// Gestion des produits associés
		
			// Requete SQL
			
			$sql_l = "SELECT *
						FROM utm_associe
						LEFT OUTER JOIN utm_produit
							ON utm_produit.pdt_id = utm_associe.pdt_associe
						LEFT OUTER JOIN utm_visuel
							ON utm_associe.pdt_associe = vis_id_pdt
								AND vis_ordre = 1
						LEFT OUTER JOIN utm_gamme
							ON pdt_id_gam = gam_id
						LEFT OUTER JOIN utm_famille
							ON gam_id_fam = fam_id
						LEFT OUTER JOIN utm_chapitre
							ON fam_id_chp = chp_id
						WHERE utm_associe.pdt_id = " . $_GET['pdt'] . "
						GROUP BY utm_produit.pdt_id
						ORDER BY pdt_nom" ;
			
			$result_l = SQL_Query ( $sql_l ) ;
			
			
			
			// Formatage des Associes
			
			$Produit_Associe_Html = '' ;
			
			if ( mysql_num_rows ( $result_l ) > 0 )
				{

					while ( $data_l = mysql_fetch_array ( $result_l ) )
						{
						
							$Produit_Associés[] = '
							<tr class="produit-associe-ligne">
								<td class="produit-associe-image">
									<img src ="' . PATH_PBD . $data_l['vis_nom'] . '" />
								</td>
								<td class="produit-associe-lien">
									' . $data_l['chp_nom'] . ' > ' . $data_l['fam_nom'] . ' > ' . $data_l['gam_nom'] . ' :<br />
									<a href="c' . $data_l['chp_id'] . 'f' . $data_l['fam_id'] . 'g' . $data_l['gam_id'] . 'p' . $data_l['pdt_id'] . '-' . Rewrite_url ( $data_l['chp_nom'] . '-' . $data_l['fam_nom'] . '-' . $data_l['gam_nom'] . ':' . $data_l['pdt_nom'] ) . '.html">' . $data_l['pdt_nom'] . '</a>
								</td>
							</tr>' ;
						
						}
						
					$Produit_Associe_Html = '
					<div class="produit-onglet">
						<div class="produit-onglet-libelle">Produits associés</div>
						<div class="produit-onglet-bouton">Masquer</div>
						<div class="produit-tableau">
							<table>
								' . implode ( '', $Produit_Associés ) . '
							</table>
						</div>
					</div>' ;
				
				}
				
		
		
		// Préparation de la mini navigation Chapitre

		$Navigation_Mini_CSS = 'style="color:#999;"' ;
		$Navigation_Mini_CSS_Current = 'style="color:#e95a0c;"' ;

		// $Navigation_Chapitre = '<span ' . $Navigation_Mini_CSS . '>' . $data['chp_nom'] . '</span> > ' ;
		$Navigation_Chapitre = '' ;


		
		// Préparation de la mini navigation Famille
		
		$Navigation_Famille = '<a href="c' . $data['chp_id'] . 'f' . $data['fam_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] ) . '.html" ' . $Navigation_Mini_CSS . '>' . $data['fam_nom'] . '</a>' ;
		
		
		
		// Préparation de la mini navigation Gamme
		
		$Navigation_Gamme = ' » ' . '<a class="current" href="c' . $data['chp_id'] . 'f' . $data['fam_id'] . 'g' . $data['gam_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] . '-' . $data['gam_nom'] ) . '.html" ' . $Navigation_Mini_CSS_Current . '>' . $data['gam_nom'] . '</a>' ;
		
		
		
		// Préparation de la mini navigation Complete
		
		$Navigation_Mini_Liens = $Navigation_Chapitre . $Navigation_Famille . $Navigation_Gamme ;
		
		
		
		// CSS particulier
		
		$CSS_More_Live = '' ;

	}


?>