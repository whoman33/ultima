<?php

// Fichiers de bases
header('Content-Type: text/html; charset=iso-8859-1'); 
include ( '../includes/configuration.php' ) ;
include ( '../' . PATH_INC . 'fonctions.php' ) ;
include ( '../' . PATH_INC . 'sql.php' ) ;



// Création du carroussel de produits

	// Requête SQL
	//gam_id = " . intval ( $_GET['id'] ) . "AND  
						
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
	
	$Produits_Publicites = '' ;
	$Produits_Publicites_Menu = '';
	$ligne = 1 ;
				
	while ( $data = mysql_fetch_array ( $result ) )
		{
			
			if ( $ligne == 1 )
				{	
					
					$Produits_Publicites_Titre = ( $data['gam_nom'] == $data['fam_nom'] ) ? $data['gam_nom'] : $data['fam_nom'] . ' - ' . $data['gam_nom'] ;
					
					$Produits_Publicites .= '
						<div class="slide" ref="c' . $data['chp_id'] . 'f' . $data['fam_id'] . 'g' . $data['gam_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] . '-' . $data['gam_nom'] ) . '.html">
							<div class="slide-info">
								<div class="slide-heading">' . $Produits_Publicites_Titre . '</div>
								<div class="slide-texte">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</div>
							</div>
							<img src="' . PATH_PBD . $data['vis_nom'] . '" />';

					$Produits_Publicites_Menu .= '
						<li class="menuItem"><a href=""><img src="images/thumb_macbook.png" /></a></li>';

				}
				
			else
				{

					$Produits_Publicites .= '
							<img src="' . PATH_PBD . $data['vis_nom'] . '" />' ;
				
				} 
				
			$ligne = 18632 ;
				
		}
		
		$Produits_Publicites .= '
			</div>' ;

		echo $Produits_Publicites ;	
			

?>