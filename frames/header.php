<?php

// Récupération du menu dans SQL

$sql = "SELECT * 
			FROM utm_famille
			LEFT OUTER JOIN utm_chapitre
				ON chp_id = fam_id_chp
			ORDER BY fam_ordre" ;
			
$result = SQL_Query ( $sql ) ;



// Formatage du tableau du menu et des couleurs de chapitre

while ( $data = mysql_fetch_array ( $result ) )
	{
	
		$Header_Menu[] = '<td><a href="#" id="' . $data['fam_id'] . '" couleur="' . $data['chp_couleur'] . '" link="' . SITE_URL . 'c' . $data['fam_id'] . '-' . Rewrite_url ( $data['fam_nom'] ) . '.html"><div class="header-content-menu-puce"></div>&nbsp;' . $data['fam_nom'] . '</a></td>
		' ;
		
	}



// Récupération du sous-menu dans SQL

$sql = "SELECT * 
			FROM utm_gamme
			LEFT OUTER JOIN utm_famille
				ON fam_id = gam_id_fam
			LEFT OUTER JOIN utm_chapitre
				ON chp_id = fam_id_chp
			ORDER BY chp_ordre, fam_ordre, gam_ordre" ;
			
$result = SQL_Query ( $sql ) ;
		

		
// Formatage du tableau du sous-menu et du sous-sous-menu

$_SousMenu_Famille = '' ;
$body_soussousmenu = '' ;

while ( $data = mysql_fetch_array ( $result ) )
	{
		
		if ( $data['fam_id'] !== $_SousMenu_Famille )
			{
				
				$body_sousmenu_display = ( isset ( $_GET['fam'] ) && $_GET['fam'] == $data['fam_id'] ) ? ' display:block;' : '' ;
				$body_sousmenu_hover = ( isset ( $_GET['gam'] ) && $_GET['gam'] == $data['gam_id'] ) ? ' body-sousmenu-a-hover' : '' ;
				$body_sousmenu_hover_css = ( isset ( $_GET['gam'] ) && $_GET['gam'] == $data['gam_id'] ) ? 'color:#' . $data['chp_couleur'] . ';' : '' ;
				$body_soussousmenu_display = ( isset ( $_GET['fam'] ) && $_GET['fam'] == $data['fam_id'] ) ? ' display:block;' : '' ;
				
				/*$Body_Sous_Menu[] = $body_soussousmenu . '<div id="' . $data['fam_id'] . '" class="body-sousmenu-a disabled' . $body_sousmenu_hover . '" couleur="' . $data['chp_couleur'] . '" style="' . $body_sousmenu_display . $body_sousmenu_hover_css . '"><a href="c' . $data['chp_id'] . 'f' . $data['fam_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] ) . '.html" class="body-sousmenu-fleche"></a>' . $data['fam_nom'] . '</div><div class="body-soussousmenu" famille="' . $data['fam_id'] . '" style="' . $body_soussousmenu_display . '">' ;*/
				$Body_Sous_Menu[] = $body_soussousmenu . '<div class="body-soussousmenu" famille="' . $data['fam_id'] . '" style="' . $body_soussousmenu_display . '">' ;
				
			}

		$body_soussousmenu_display = ( isset ( $_GET['chp'] ) && $_GET['chp'] == $data['chp_id'] ) ? ' display:block;' : '' ;
		$body_soussousmenu_hover = ( isset ( $_GET['gam'] ) && $_GET['gam'] == $data['gam_id'] ) ? ' body-soussousmenu-a-hover' : '' ;
		$body_soussousmenu_stay = ( isset ( $_GET['gam'] ) && $_GET['gam'] == $data['gam_id'] ) ? 'title="this is it"' : '' ;
		$body_soussousmenu_hover_css = ( isset ( $_GET['gam'] ) && $_GET['gam'] == $data['gam_id'] ) ? 'active' : '' ;
			
		$_SousMenu_Famille = stripslashes($data['fam_id']) ;
		$body_soussousmenu = '</div>' ;
			
		$Body_Sous_Menu[] = '<a href="c' . $data['chp_id'] . 'f' . $data['fam_id'] . 'g' . $data['gam_id'] . '-' . Rewrite_url ( $data['chp_nom'] . '-' . $data['fam_nom'] . '-' . $data['gam_nom'] ) . '.html" id="' . $data['gam_id'] . '" class="body-soussousmenu-a ' . $body_soussousmenu_hover_css . '" couleur="' . $data['chp_couleur'] . '" style="' . $body_soussousmenu_display . '" ' . $body_soussousmenu_stay . '>' . stripslashes ($data['gam_nom']) . '</a>' ;
	
		$CSS_Couleur = "" ;
	
		//Récupération des variables xtn2, chapitres et sous chapitres
		$tableauN2 = array('Non Classes', 'Home', 'Revendeurs', 'Institutionnel', 'Visserie_Acier', 'Fixation_Et_Collier', 'Visserie_Inox', 'Goupilles', 'Circlips');
		if(isset ( $_GET['fam'] ) && $_GET['fam'] == $data['fam_id'] ){
			$n2AT = capitalize(Rewrite_url($data['fam_nom']), '_');
			$tmp = $n2AT;
		}
		if(isset ( $_GET['gam'] ) && $_GET['gam'] == $data['gam_id'] ){
			$chapAT = capitalize(Rewrite_url($data['gam_nom']), '_');
		}
		
	}

?>