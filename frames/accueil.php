<?php

// Création du carroussel de produits
	// Requête SQL => Récupération des ID Gamme
	
	$sql = "SELECT * FROM utm_gamme
				LEFT OUTER JOIN utm_famille
					ON gam_id_fam = fam_id
				LEFT OUTER JOIN utm_chapitre
					ON fam_id_chp = chp_id
				LEFT OUTER JOIN utm_produit
					ON pdt_id_gam = gam_id
				LEFT OUTER JOIN utm_visuel
					ON vis_id_pdt = pdt_id
						AND fam_id_chp = 3241
						AND vis_type = 'photos'
						AND vis_ordre = 1
				WHERE 	pdt_id = vis_id_pdt 
				ORDER BY RAND()
				LIMIT 6" ;
			
	$result = SQL_Query ( $sql ) ;
	


	// Traitement du résultat
	
	$Publicite_Numero = 1 ;
	$Produits_Publicites = '' ;
	$Produits_Publicites_Menu = '';
	$Produits_Publicites_Texte = '';
	$Temp_Gam_Id = 0 ;
				
	while ( $data = mysql_fetch_array ( $result ) )
		{
			if($Publicite_Numero < 6)
			{
				if( $data['gam_nom'] == $data['fam_nom'] ) {
					$Produits_Publicites_Titre = $data['gam_nom'];
				}
				else{
					$Produits_Publicites_Titre = $data['fam_nom'] . ' :';
					$Produits_Publicites_Texte = $data['gam_nom'];
				}
				
				
				$Produits_Publicites .= '
					<div class="slide" numero="' . $Publicite_Numero . '">
						<a href="c' . $data['chp_id'] . 'f' . $data['fam_id'] . 'g' . $data['gam_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] . '-' . $data['gam_nom'] ) . '.html">
							<div class="slide-info">
								<div class="slide-heading">' . $Produits_Publicites_Titre . '</div>
								<div class="slide-texte">' . $Produits_Publicites_Texte . '</div>
							</div>
						</a>
						<img src="' . PATH_PBD . $data['vis_nom'] . '" alt="">
					</div>' ;
					
				$Produits_Publicites_Menu .= '<li class="menuItem"><a href="">' . $Publicite_Numero . '</a></li>';
				$Publicite_Numero = $Publicite_Numero + 1 ;
			}
		}
	
	
// Définition des styles d'accueil

$CSS_More = "\t\t" . '<link rel="stylesheet" type="text/css" href="' . PATH_STL . 'accueil.css" />' . "\n" ;



// Traitement Javascript particulier

$JS_More = '<script type="text/javascript" src="' . PATH_SPT . 'accueil.js"></script>' . "\n" ;


?>