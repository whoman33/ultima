<?php

// Fichiers de bases

header('Content-Type: text/html; charset=utf-8'); 
include ( '../includes/configuration.php' ) ;
include ( '../' . PATH_INC . 'fonctions.php' ) ;
include ( '../' . PATH_INC . 'sql.php' ) ;


$geocoder = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=";

		$sql = "SELECT *
					FROM utm_revendeur
					WHERE rev_actif = 0
					ORDER BY rev_id" ;
				
		$result = SQL_Query ( $sql ) ;
		
		
		
		// Traitement du résultat et Geocodeur
		
		$i = 0 ;
		
		while ( $data = mysql_fetch_array ( $result ) )
			{
				
				// Pas de coordonnées ? => Geocodage pour les mettres en base
				
				if ( $data['rev_latitude'] == '' AND $data['rev_longitude'] == '')
					{
						$adresse = $data['rev_adresse'] . ' ' . $data['rev_cp'] . ' ' . $data['rev_ville'] ;
						$url_adress = utf8_encode ( $adresse ) ;
						$url_adress = urlencode ( $url_adress ) ;
						
						echo $geocoder . $adresse . '<br/>';
						
					}
			}
			
?>