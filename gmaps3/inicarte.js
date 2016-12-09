var mapMenuOpen = true;

var shadow = new google.maps.MarkerImage(
	'gmaps3/img/shadow.png',
	new google.maps.Size(97,60),
	new google.maps.Point(0,0),
	new google.maps.Point(23,35)
);

function mapMenuClose() {
	if (!mapMenuOpen) {
		$('#cartePopUp').css('display', 'none');
		mapMenuOpen = true;
	}
}


$(function() {

	// map initialisation
	$("#googleMap").gmap3({
		map:{
			options: {
				center:[48.8456879,2.357275],
				zoom: 9,
				panControl: true,
				overviewMapControl: false,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				zoomControl: true,
				maxZoom: 16,
				minZoom: 5
			} //options
		},
		marker: {
			values: list, // from js/listemagasins.js

			// single marker options
			options: {
				draggable: false,
				shadow: shadow
			},
			// événements liés à un marqueur seul
			events:{
				click: function(marker, event, context){
					mapMenuOpen = true;
					var map = $(this).gmap3('get');
					var scale = Math.pow(2, map.getZoom());
					var nw = new google.maps.LatLng(
					map.getBounds().getNorthEast().lat(), map.getBounds().getSouthWest().lng());
					var worldCoordinateNW = map.getProjection().fromLatLngToPoint(nw);
					var worldCoordinate = map.getProjection().fromLatLngToPoint(marker.getPosition());
					var pixelOffset = new google.maps.Point(Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale), Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale));
					var mapposition = $("#googleMap").position();

					if (context.data.type != "siege") {

						$.ajax({
							type: "POST" ,
							url: "gmaps3/popup_simple.php",
							data: context.data
						})
						.done(function( msg ) {
							$(".accordion").html(msg);

							getadresse_arrivee(context);
						});

						$("#cartePopUp").css('display', 'block')
						.css('left', (pixelOffset.x + mapposition.left + 15 - 30 + 'px'))
						.css('top', (pixelOffset.y + mapposition.top - 15 - 20 + 'px'));

						$('body').on("click mousedown mouseup focus blur keydown keyup change",function(){
							isInputEmpty ();
						});
					}
				},
				mouseout: function () {
					mapMenuOpen = false;
					setTimeout("mapMenuClose()", 100);
				}
			} //events
		}
	});

	$("#cartePopUp").mouseover(function() {
		mapMenuOpen = true;
		$("#cartePopUp").css('display', 'block');
	})
	.mouseout(function() {
		$('#cartePopUp').css('display', 'none');
	});
	$("#allerIDF").click(function() {
		$("#googleMap").gmap3('get').setZoom(11);
		$("#googleMap").gmap3('get').setCenter(new google.maps.LatLng(48.869344, 2.338754));
	});
	$("#allerCentre").click(function() {
		$("#googleMap").gmap3('get').setZoom(11);
		$("#googleMap").gmap3('get').setCenter(new google.maps.LatLng(45.753735, 4.907631));
	});
	$("#allerSud").click(function() {
		$("#googleMap").gmap3('get').setZoom(7);
		$("#googleMap").gmap3('get').setCenter(new google.maps.LatLng(43.287889, 5.601393));
	});

	function isInputEmpty () {

		if($("input[name='depart']").val() != "" && $("input[name='arrivee']").val() != "") {
			$("button[value='valider']").removeAttr("disabled", "enabled");
			return false;
		} else {
			$("button[value='valider']").attr("disabled", "disabled");
			return true;
		}
	}

	function getadresse_arrivee (context) {
		$("#btnItineraire").click(function() {
			$('#depart').focus();
			$("input[name='arrivee']").val(context.data.adresse + ' ' + context.data.zip + ' ' + context.data.city);
			var arrivee = $("input[name='arrivee']").val();

			$("button[value='valider']").click(function() {
				$("#listItineraire").empty();
				var depart  = $("input[name='depart']").val();
				getItineraire(depart, arrivee, context.data.lat, context.data.lng);
			});
		});
	}

	function getItineraire (depart, arrivee, lat, lng) {
		//Création du popup
		$("input[name='arrivee']").attr('disabled, disabled');
		$("<div id='popup_container'></div>").appendTo("body");

		$("#popup_container").append("<div id='carteMain'><div id='googleMap' class='googleMap'></div></div>");
		$("#popup_container").append("<div id='listItineraire'></div>");
		$("#popup_container").append("<div id='mapItineraire'></div>");
		$('#carteMain').remove();

		//Génération de la carte
		$('.googleMap, #carteMain').css({
			width: '500px',
			height: '300px',
			'box-shadow': '0px -8px 20px #333'
		});

		$("#googleMap").gmap3({
			map:{
				options: {
					center:[48.8456879,2.357275],
					zoom: 9,
					panControl: true,
					overviewMapControl: false,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					zoomControl: true,
					maxZoom: 16,
					minZoom: 5

				}
			}
		})
		.gmap3({
			getroute:{
				options:{
					origin:depart,
					destination: arrivee,
					travelMode: google.maps.DirectionsTravelMode.DRIVING,
					optimizeWaypoints : true
				},

				callback: function(results){
					if (!results) return;
					$("#listItineraire").empty();
					$("#googleMap").gmap3({
						map:{
							options:{
								center: (new google.maps.LatLng(lat, lng))
							}
						},
						directionsrenderer:{
							container: $("#listItineraire"),
							options:{
								directions:results
							}
						}
					});

				}
			}
		});
		//Création du bouton pour fermer la popup
		$("#carteMain").append("<img src='images/close_icon.png' id='close'  />");
		$("img#close").click(function() {
			location.reload();
		});
	}

}); // end of $(function()
