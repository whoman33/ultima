<?php

// Fichiers de bases

header('Content-Type: text/html; charset=utf-8'); 
include ( '../includes/configuration.php' ) ;
include ( '../' . PATH_INC . 'fonctions.php' ) ;
include ( '../' . PATH_INC . 'sql.php' ) ;



// R�cup�ration de la liste des Revendeurs

if ( isset($_GET['action']) AND $_GET['action'] == 'liste' )
	{
	
		// Initialisation de l'URL du g�ocodeur
		
		$geocoder = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=";
		
		
		
		// Requ�te SQL
		
		$sql = "SELECT *
					FROM utm_revendeur
					WHERE rev_actif = 1
					ORDER BY rev_id" ;
				
		$result = SQL_Query ( $sql ) ;
		
		
		
		// Traitement du r�sultat et Geocodeur
		
		$i = 0 ;
		
		while ( $data = mysql_fetch_array ( $result ) )
			{
				
				// Pas de coordonn�es ? => Geocodage pour les mettres en base
				
				if ( $data['rev_latitude'] == '' AND $data['rev_longitude'] == '')
					{
					
						$adresse = $data['rev_adresse'] . ' ' . $data['rev_cp'] . ' ' . $data['rev_ville'] ;
				
						$url_adress = utf8_encode ( $adresse ) ;
						$url_adress = urlencode ( $url_adress ) ;
			
						$ch = curl_init();
						
						curl_setopt($ch, CURLOPT_URL, $geocoder.$url_adress);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
						curl_setopt($ch, CURLOPT_PROXYPORT, 3128);
						curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
						curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
						
						$map_json = json_decode ( curl_exec ( $ch ), true ) ;
						
						curl_close($ch);
	
						$map_coor = $map_json['results'][0]['geometry'];
						
						$map_longitude = $map_coor['location']['lat'];
						$map_latitude = $map_coor['location']['lng'];
						
						SQL_Query ( "UPDATE utm_revendeur SET rev_latitude = " . $map_latitude . ", rev_longitude = " . $map_longitude . " WHERE rev_id = " . $data['rev_id'] ) ;
						
						mysql_close() ;
						
					}
				
					
				// Coordonn�es pr�sentes en base => On les envoies pour Javascript directement
				
				else
					{
						$map_latitude = $data['rev_latitude'] ;
						$map_longitude = $data['rev_longitude'] ;
					}
				
				
				// Ecriture de l'array Javascript
				
				$revendeurs[] = $data['rev_id'] . '|' . $map_longitude . '|' . $map_latitude . '|' . $data['rev_nom'] . '|' . $data['rev_type'] ;
				
				$i++ ;
				
			}
	 	
	 	
	 	
	 	// Affichage du resultat
	
		echo utf8_encode ( implode ( '||', $revendeurs ) ) ;

	}



// R�cup�ration du d�tail d'un revendeur

elseif ( isset($_GET['action']) AND $_GET['action'] == 'detail' )
	{
		
		// Requ�te SQL
		
		$sql = "SELECT *
					FROM utm_revendeur
					WHERE rev_id = " .  $_GET['rev_id'] ;
				
		$result = SQL_Query ( $sql ) ;
		
		
		
		// Traitement du r�sultat
		
		$data = mysql_fetch_array ( $result ) ;
		
		$revendeur_detail = '<div id="revendeur-detail-texte">' ;
		$revendeur_detail .= '<h5>' . $data['rev_nom'] . '</h5>' ;
		$revendeur_detail .= '<p>' . $data['rev_adresse'] . '</p>' ;
		$revendeur_detail .= '<p>' . $data['rev_cp'] . ' ' . $data['rev_ville'] . '</p>' ;
		$revendeur_detail .= '<p><br/>T�l�phone : ' . $data['rev_tel'] . '</p>' ;
		$revendeur_detail .= '</div>' ;
		
		$revendeur_image = ( $data['rev_visuel'] !== '' ) ? '<img src="media/revendeurs/' . $data['rev_visuel'] . '" />' : '' ;
		
		$revendeur_detail .= '<div id="revendeur-detail-visuel">' . $revendeur_image . '<div>' ;
		
		
		
		// Affichage du r�sultat
		
		echo utf8_encode ( $revendeur_detail ) ; 
		
	}
	

?>