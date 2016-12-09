
// –––––––––––––––––––––––––––––––––––––––––––

// VARIABLES GLOBALES

// –––––––––––––––––––––––––––––––––––––––––––

Map_Revendeur_Marker_selected = '' ;



// –––––––––––––––––––––––––––––––––––––––––––

// JQUERY

// –––––––––––––––––––––––––––––––––––––––––––

$(window).load(function()
	{

		
		// MAP -- Variables initiales
		
		var Map_Center_Coor = new google.maps.LatLng (48.90, 2.3509871) ;
		
		var Map_Options =
			{
				zoom: 13,
				center: Map_Center_Coor,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		
		Map_Creation = new google.maps.Map
			(
				document.getElementById('revendeurs-map'),
				Map_Options
			);
		
		bounds = new google.maps.LatLngBounds();

		
		// MAP -- Chargement des adresses
		
		Map_Revendeur_Marker = [] ;

		$.post('frames/revendeurs_ajax.php?action=liste', function ( data )
			{

 		  		Map_Markers = data.split('||') ;
				
				for ( i=0 ; i<Map_Markers.length ; i++ )
					{
					
 		  				Map_Marker = Map_Markers[i].split('|') ;
						
						Map_Marker_Creator ( Map_Marker[0], Map_Marker[1], Map_Marker[2], Map_Marker[3], Map_Marker[4] ) ;
						
					}
		
				Map_Creation.fitBounds(bounds);
									
			});

	}) ;



// –––––––––––––––––––––––––––––––––––––––––––

// FONCTIONS

// –––––––––––––––––––––––––––––––––––––––––––

function Map_Marker_Creator ( Id, Lng, Lat, Nom, Type )
	{
 		
 		icone = ( Type == "pdv" ) ? "" : "_cc" ;
		
		Map_Revendeur_Marker[Id] = new google.maps.Marker (
			{
				position: new google.maps.LatLng (Lng, Lat),
				map: Map_Creation,
				title: Nom,
				id: Id,
				icon: "/images/map_marker" + icone + "_off.png"
			});
        
		bounds.extend(Map_Revendeur_Marker[Id].getPosition());


		google.maps.event.addListener ( Map_Revendeur_Marker[Id], "click", function()
			{
				
		        if ( Map_Revendeur_Marker_selected )
		        	{
		            	Map_Revendeur_Marker_selected.setIcon("/images/map_marker" + icone + "_off.png");
		        	}
			
				Map_Marker_Detail ( this.id, Type ) ;
								
			});
	
	}
	
	
function Map_Marker_Detail ( Id, Type )
	{
		
 		icone = ( Type == "pdv" ) ? "" : "_cc" ;

		if ( Map_Revendeur_Marker_selected == Map_Revendeur_Marker[Id] )
			{
				$("#revendeurs-detail").html('Cliquer sur un emplacement pour voir le détail du magasin.') ;
            	Map_Revendeur_Marker_selected.setIcon("/images/map_marker" + icone + "_off.png");
            	Map_Revendeur_Marker_selected = '' ;
			}
			
		else
			{
				
		        Map_Revendeur_Marker[Id].setIcon("/images/map_marker" + icone + "_on.png");
		        Map_Revendeur_Marker_selected = Map_Revendeur_Marker[Id];

				$.post('frames/revendeurs_ajax.php?action=detail&rev_id='+Id, function ( data )
					{
						$("#revendeurs-detail").html(data) ;
					});
					
			}
	
	}
	