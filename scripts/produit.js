
// –––––––––––––––––––––––––––––––––––––––––––

// INITIALISATIONS

// –––––––––––––––––––––––––––––––––––––––––––


// Menu -- Récupération de l'id Chapitre

Chapitre_Id = document.location.pathname ;
Chapitre_Id = Chapitre_Id.substring(Chapitre_Id.lastIndexOf("/")+2,Chapitre_Id.indexOf("f")) ;



// –––––––––––––––––––––––––––––––––––––––––––

// JQUERY

// –––––––––––––––––––––––––––––––––––––––––––

$(document).ready(function()
	{
		
		// Menu -- Affichage de l'onglet
		
		Menu_Onglet_Affichage ( $("#"+Chapitre_Id) ) ;
		Menu_Onglet_Effet ( $("#"+Chapitre_Id) ) ;

		
		
		// Menu -- Retour de l'onglet à sa place
		
		$("#header-content-menu").mouseleave(function()
			{
		
				if ( Menu_Clique == '' )
					{
						Menu_Onglet_Retour ( $("#"+Chapitre_Id) ) ;
					}
				else
					{
						Menu_Onglet_Retour ( Menu_Clique ) ;
					}
					
			});
		
		
		
		// Produit -- Masquage-Affichage d'un onglet
		
		$('.produit-onglet-bouton').live(
			{
				
		        mouseenter:function()
					{
						$(this).css('color','e95a0c') ;
					},
					
				mouseleave:function()
					{
						$(this).css('color','#999999') ;
					}
			
			});

		$('.produit-onglet-bouton').click(function()
			{
				
				Onglet = $(this).parent().children('.produit-tableau') ;
				
				Onglet.fadeToggle(300) ;
				
				if ( $(this).text() == 'Masquer' )
					{
						$(this).text('Afficher') ;
					}
				else
					{
						$(this).text('Masquer') ;
					}
			
			});
		
		
		
		// Image -- Affichage du Zoom
		
		$(".visuel").bind("click",function(e)
			{
				
				// Durée de l'animation
				
				Animate_Time = ( ShiftKey_Pressed == true ) ? Animate_Time_Lent : Animate_Time_Normal ;



				// Récupération des coordonnées de l'image
				
				Zoom_Start_Height = $(this).height() ;
				Zoom_Start_Width = $(this).width() ;
				Zoom_Start_Top = $(this).offset().top ;
				Zoom_Start_Left = $(this).offset().left ;
				Zoom_Id = $(this).attr('id') ;


				
				// Recuperation de l'image HD
				
				Visuel_HD = $(this).attr('src') ;
				
				var Reg_Def = new RegExp("(_bd)", "g") ;
				
				Visuel_HD = Visuel_HD.replace(Reg_Def, '_hd');
				
				
				
				// Ajout d'un fond sur schema
				
				Visuel_Type = $(this).attr('src') ;
				
				var Reg_Type = new RegExp("(schemas)", "g") ;
				
				Visuel_Schema = (Visuel_Type.match(Reg_Type)) ? " schema" : "" ;
				

				
				// Création de la div Zoom à la taille de l'image
				
				$('body').prepend('<div id="zoom" class="zoom-transition' + Visuel_Schema + '"><img src="' + Visuel_HD + '" style="height: 75%; width: 75%;"></div>') ;
				
				$('#zoom').css('top',Zoom_Start_Top) ;
				$('#zoom').css('left',Zoom_Start_Left) ;
				$('#zoom').css('width',Zoom_Start_Width) ;
				$('#zoom').css('height',Zoom_Start_Height) ;

				
				
				// Affichage du zoom seul et réglage CSS de transition

				Zoom_End_Left = ( ( $('body').width()-1040 ) < 0 ) ? 0 : Math.round(( $('body').width()-1040 ) / 2) ;
				
				$('#header').fadeOut(Animate_Time) ;
				$('#body').fadeOut(Animate_Time) ;
				$('#footer').fadeOut(Animate_Time) ;
					
				$('#zoom').animate({width:"1000px",height:"1000px",top:"20px",left:Zoom_End_Left+"px"}, Animate_Time+50) ;
			
				    	$('body').css('height','1080px') ;
				
				
				// Fin de transition : réglage CSS finaux

				$('#zoom').switchClass('zoom-transition','zoom',0) ;
				
				$("#zoom").fadeIn(0,function()
					{
				    	
				    	Visuel_Style = $("#zoom").attr('style') ;

				    	$("#zoom").removeAttr('style') ;
				    	
				    	$('body').css('height','1080px') ;
				    	
					});
				
				
				
				// Image -- Masquage du Zoom
				
				$('#zoom').bind('click',function()
					{
				
						// Durée de l'animation
						
						Animate_Time = ( ShiftKey_Pressed == true ) ? Animate_Time_Lent : Animate_Time_Normal ;


		
						// Récupération des coordonnées de l'image
						
						Dezoom_Start_Height = $(this).height() ;
						Dezoom_Start_Width = $(this).width() ;
						Dezoom_Start_Top = $(this).offset().top ;
						Dezoom_Start_Left = $(this).offset().left ;
						
						
						// Début de transition : suppression des CSS finaux
						
						$('#zoom').css('top',Dezoom_Start_Top) ;
						$('#zoom').css('left',Dezoom_Start_Left) ;
						$('#zoom').css('width',Dezoom_Start_Width) ;
						$('#zoom').css('height',Dezoom_Start_Height) ;
						$('#zoom').switchClass('zoom','zoom-transition',0) ;
				    	
				    	$("body").removeAttr('style') ;

						$('#body').css('display','block') ;
						Zoom_Final_Left = $('#'+Zoom_Id).offset().left ;
						$('#body').css('display','none') ;
						
						
						
						// Dezoom proprement dit
						
						$('#zoom').animate({width:Zoom_Start_Width+"px",height:Zoom_Start_Height+"px",top:Zoom_Start_Top+"px",left:Zoom_Final_Left+"px"}, Animate_Time) ;
						
						$('#header').fadeIn(Animate_Time) ;
						$('#body').fadeIn(Animate_Time) ;
						$('#footer').fadeIn(Animate_Time) ;
						
						$("#zoom").fadeIn(0,function()
							{
							
								$('#zoom').remove() ;

								Menu_Onglet_Affichage ( $("#"+Chapitre_Id) ) ;

							});
							
					});
					
			});

	});
