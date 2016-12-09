<?php

// INDEX

if ( $Frame == 'accueil' )
	{
	
		// Titre
			
		$meta_title = SITE_NOM  . ' | Visser, fixer, coller' ;
	
	
	
		// Description
			
		$meta_description = 'Page d\'accueil du site ' . SITE_NOM . ' - Visser, fixer, coller : Visserie acier, visserie inox, fixations et colliers, goupilles, circlips' ;
		
		
		
		// Mots-clés
		
		$meta_keywords = strip_tags ( implode ( ', ', $Body_Sous_Menu ) ) ;
		
		
		
		// Robots
		
		$meta_robots = 'index, follow, noarchive' ;
	
	}




// Contact

elseif ( $Frame == 'contact' )
	{
	
		// Titre
			
		$meta_title = SITE_NOM . ' | Contactez-nous' ;
	
	
	
		// Description
			
		$meta_description = 'Contacter via ce formulaire la société ' . SITE_NOM ;
		
		
		
		// Mots-clés
		
		$meta_keywords = 'Contact' ;
		
		
		
		// Robots
		
		$meta_robots = 'index, nofollow, archive' ;
	
	}




// Revendeurs

elseif ( $Frame == 'revendeurs' )
	{
	
		// Titre
			
		$meta_title = SITE_NOM . ' | Liste de nos revendeurs agréés' ;
	
	
	
		// Description
			
		$meta_description = 'Liste de nos revendeurs agréés de la marque ' . SITE_NOM ;
		
		
		
		// Mots-clés
		
		$meta_keywords = 'Liste, revendeurs, agréés, marque, ' . SITE_NOM ;
		
		
		
		// Robots
		
		$meta_robots = 'index, nofollow' ;
	
	}


// Mentions Legales

elseif ( $Frame == 'mentionslegales' )
	{
	
		// Titre
			
		$meta_title = SITE_NOM . ' | Liste de nos revendeurs agréés' ;
	
	
	
		// Description
			
		$meta_description = 'Les mentions légales de la marque ' . SITE_NOM ;
		
		
		
		// Mots-clés
		
		$meta_keywords = 'Mentions, légales, marque, ' . SITE_NOM;
		
		
		
		// Robots
		
		$meta_robots = 'index, nofollow' ;
	
	}


// Produit

elseif ( $Frame == 'produit' )
	{
	
		// Titre
			
		$meta_title = SITE_NOM . ' | ' . strip_tags ( $Navigation_Mini_Liens . ' : ' . $Produit_Nom ) ;
	
	
	
		// Description
			
		$meta_description = 'Fiche ' . SITE_NOM . ' du produit : ' . $Produit_Nom ;
		
		
		
		// Mots-clés

		$meta_keywords = Keywords_extract ( $meta_title . ' ' . $Produit_Accroche . ' ' . $Produit_Plus . ' ' . $Produit_Descriptif . ' ', '4' )  ;
		
		
		
		// Robots
		
		$meta_robots = 'index, follow, archive' ;
	
	}




// Resultat

elseif ( $Frame == 'resultat' )
	{
	
		// Titre
		
			// Recherche
			
			if ( isset($_GET['src']) )
				{
					$meta_title = SITE_NOM . ' | Recherche : ' . $_GET['src'] ;
				}


			// Chapitres
			
			else
				{
					$meta_title = SITE_NOM . ' | ' . strip_tags ( $Navigation_Mini_Liens ) ;
				}
	
	
		// Description
		
			// Recherche
			
			if ( isset($_GET['src']) )
				{
					$meta_description = SITE_NOM . ' | Résultat de la recherche : ' . $_GET['src'] ;
				}


			// Chapitres
			
			else
				{
					$meta_description = SITE_NOM . ' | Navigation par produits : ' . strip_tags ( $Navigation_Mini_Liens ) ;
				}
		
		
		
		// Mots-clés
		if(isset($Meta_Keyword)){
			$meta_keywords = Keywords_extract ( implode(' ', $Meta_Keyword), '4' )  ;
		} else {
			$meta_keywords = 'Aucun produit trouvé'  ;
		}
		
		
		
		// Robots
		
		$meta_robots = 'index, follow, noarchive' ;
	
	}

?>