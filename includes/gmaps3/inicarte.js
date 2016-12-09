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
							minZoom: 5,
						}
					}
				});
				
				$("#googleMap").gmap3({
					marker: {
						values: list, // from js/afdblist.js
						
						// single marker options
						options: {
							draggable: false,
							shadow: shadow,
						},
						// single marker events
						events:{
							mouseover: function(marker, event, context){
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
									var contenu = "<div class='left'><div class='nommagasin' id='nommagasin'> " + context.data.nom + "</div><div class='infosmagasin' id='infosmagasin'>" + context.data.infos + "</div><div class='adressemagasin' id='adressemagasin'> " + context.data.adresse + "<br />" + context.data.zip + " " + context.data.city + "</div><div class='horairesmagasin' id='horairesmagasin'>" + context.data.tel + "</div><div class='horairesmagasin' id='horairesmagasin'>" + context.data.horaires + "</div></div><div class='right'><div class='urunlogo' onClick='CreatePresentation("+ context.data.brosurID +",1,2);'> <img id='magasinbrosur' src='gmaps3/img/agence/"+ context.data.agence +"' width='300' height='200'></div></div></div>";
									
									$(".accordion").html(contenu);
									
									$("#cartePopUp").css('display', 'block');
									$("#cartePopUp").css('left', (pixelOffset.x + mapposition.left + 15 + 'px'));
									$("#cartePopUp").css('top', (pixelOffset.y + mapposition.top - 62 + 'px'));

								}
							},
							mouseout: function () {
								mapMenuOpen = false;
								var t = setTimeout("mapMenuClose()", 500)
							}
						},
						
						// cluster definition
						cluster:{
							radius:50,
							
							// This style will be used for clusters with more than 0 markers
							0: {
								content: "<div class='cluster cluster-1'>CLUSTER_COUNT</div>",
								width: 52,
								height: 52
							},
							// This style will be used for clusters with more than 10 markers
							10: {
								content: "<div class='cluster cluster-2'>CLUSTER_COUNT</div>",
								width: 56,
								height: 56
							},
							// This style will be used for clusters with more than 20 markers
							20: {
								content: "<div class='cluster cluster-3'>CLUSTER_COUNT</div>",
								width: 66,
								height: 66
							},
							events: {
								mouseover: function(cluster, event, context){
									var contenu = "";
									

									
									// If more than 7 markers, don't display the panel
									if(context.data.markers.length > 7 ){
										return;
									}
									for (i = 0; i < context.data.markers.length; i++) {
										contenu += "<div class='accordionButton'>" + context.data.markers[i].data.nom + "</div><div class='accordionContent'><div class='left'><div class='infosmagasin' id='infosmagasin'>" + context.data.markers[i].data.infos + "</div><div class='adressemagasin' id='adressemagasin'> " + context.data.markers[i].data.adresse + "<br />" + context.data.markers[i].data.zip + " " + context.data.markers[i].data.city + "</div><div class='horairesmagasin' id='horairesmagasin'>" + context.data.markers[i].data.tel + "</div><div class='horairesmagasin' id='horairesmagasin'>" + context.data.markers[i].data.horaires + "</div></div><div class='right'><div class='urunlogo'> <img id='magasinbrosur' src='gmaps3/img/agence/"+context.data.markers[i].data.agence+"' width='250' height='150'></div></div></div>";
									}
									
									$(".accordion").html(contenu);
									$("#cartePopUp").css('display', 'block');

                  					var wFenetre = $(window).width();
									if (wFenetre <= 1002) {
										var leftvalue = $(cluster.main.getDOMElement()).offset().left - 190;
									} else {
										var tmp = (wFenetre - 1002) / 2;
										var leftvalue = $(cluster.main.getDOMElement()).offset().left - (190 + tmp);
									};


									$("#cartePopUp").css('left', ( leftvalue +'px'));
                  					$("#cartePopUp").css('top', ( ($(cluster.main.getDOMElement()).offset().top + ($(cluster.main.getDOMElement()).height()/2) - 320) +'px'));

									
									

									$(cluster.main.getDOMElement()).css('border', '0px solid #FF0000');
									
									$('.accordionButton').click(function () {
										$('.accordionButton').removeClass('on');
										$('.accordionContent').slideUp('normal');
										if ($(this).next().is(':hidden')) {
										$(this).addClass('on'); 
										$(this).next().slideDown('normal');
										}
									});
									
									$('.accordionContent').hide();
								},
								mouseout: function (cluster, event) {
									mapMenuOpen = false;
									var t = setTimeout("mapMenuClose()", 500)
								},
								click: function (cluster, event, context){
									var map = $(this).gmap3('get');
									mapMenuOpen = false;
									var t = setTimeout("mapMenuClose()", 100)				
									map.setCenter(context.data.latLng);
									map.setZoom(map.getZoom() + 1);
								}
							}
						}           
					}
				});
				
				$("#cartePopUp").mouseover(function() {
					mapMenuOpen = true;
					$("#cartePopUp").css('display', 'block');
				});

				$("#cartePopUp").mouseout(function() {
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

			}); // end of $(function()			