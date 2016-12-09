
// –––––––––––––––––––––––––––––––––––––––––––

// INITIALISATIONS

// –––––––––––––––––––––––––––––––––––––––––––

// Initialisations -- Variables
	
var ShiftKey_Pressed ;
var Animate_Time ;
var Animate_Time_Lent = 3000 ;
var Animate_Time_Normal = 300 ;
var Timer_Onglet ;
var Menu_Clique = '' ;


// –––––––––––––––––––––––––––––––––––––––––––

// FONCTIONS

// –––––––––––––––––––––––––––––––––––––––––––

// Menu -- affichage et positionnement de l'onglet

function Menu_Onglet_Affichage ( id )
	{

	/*	$("#header-content-menu-fond").css('left',id.position().left+"px") ;
		$("#header-content-menu-fond").css('width',id.width()+26+"px") ;
		$("#header-content-menu-fond").css('display','block');
	*/
	}



// Menu -- défilement de l'onglet

function Menu_Onglet_Effet ( id )
	{

		/*Animate_Time = ( ShiftKey_Pressed == true ) ? Animate_Time_Lent : Animate_Time_Normal ;

		$("#header-content-menu-fond").stop() ;
		$("#header-content-menu-fond").animate({left:id.position().left+"px",width:250+"px",backgroundColor:"#"+id.attr("couleur")}, Animate_Time) ;*/
	
	}



// Menu -- retour à sa place de l'onglet

function Menu_Onglet_Retour ( id )
	{

		/*Animate_Time = ( ShiftKey_Pressed == true ) ? Animate_Time_Lent : Animate_Time_Normal ;

		$("#header-content-menu-fond").stop() ;
		$("#header-content-menu-fond").delay(100).animate({left:$(id).position().left+"px",width:250+"px",backgroundColor:"#"+$(id).attr("couleur")}, Animate_Time) ;

		return true ;
		*/
	}
	
	
	
// Menu -- masquage de l'onglet

function Menu_Onglet_Masquage ( )
	{
		/*
		$("#header-content-menu-fond").css('display','none');
		$("#body-sousmenu").find(".body-sousmenu-a,.body-soussousmenu-a").hide() ;
		
		Menu_Clique = '' ;*/
				
	}



// –––––––––––––––––––––––––––––––––––––––––––

// JQUERY

// –––––––––––––––––––––––––––––––––––––––––––

// General -- Détection de la touche Shift enfoncée

$(document).bind('keyup keydown',function(event)
	{
		
		ShiftKey_Pressed = event.shiftKey ;
 	
	});



// Resize -- Remise en place de 'longlet

$(window).resize(function()
	{
  		
  		if ( typeof ( Menu_Clique ) == 'undefined' || Menu_Clique == '' )
  			{

  				if ( typeof ( Chapitre_Id ) !== 'undefined' && Chapitre_Id !== '' && isNaN(Chapitre_Id) == false )
  					{

						Menu_Onglet_Affichage ( $( "#" + Chapitre_Id ) ) ;
						
  					}
  			
  			}
  			
  		else
  			{
  			
				Menu_Onglet_Affichage ( Menu_Clique ) ;
  			
  			}

	});



// General -- Diverses actions

$(document).ready(function()
	{
		
		// Récupération du type de page chargée
			
		Page_Ok = document.location.pathname ;
		Page_Ok = Page_Ok.substring(Page_Ok.lastIndexOf("/")+1,Page_Ok.lastIndexOf("/")+2) ;
		$(".soussousmenu-a[title='this is it']").addClass("active");


		// Menu -- Transition
		
		$("#header-content-menu a").mouseover(function()
			{
			
				window.clearTimeout (Timer_Onglet) ;

				if ($('#header-content-menu-fond').is(':hidden') )
					{
					
						Menu_Onglet_Affichage ( $(this) ) ;
						
					}
				
				Menu_Onglet_Effet ( $(this) ) ;
			
			});
		
		
		
		// Menu -- Masquage ou Retour a sa place
		
		$("#header-content-menu").mouseleave(function()
			{
				
				// On agit que si la page n'est pas Resultat ou Produit
				
				if ( Page_Ok !== 'c' )
					{

						if ( Menu_Clique !== '' )
							{		
								Menu_Onglet_Retour ( Menu_Clique ) ;
							}
							
						else
							{
								Timer_Onglet = window.setTimeout ( "Menu_Onglet_Masquage()", 250 ) ;
							}
						
					}
					
			});
		
		
		
		// Sous-Menu -- Affichage
		
		$("#header-content-menu a").live('click',function()
			{	
				
				$(".body-soussousmenu-a, .body-sousmenu-a, .body-soussousmenu").each(function()
					{
						$(this).hide() ;
					});
					
					
				// Affichage des sous-Menu liés
				
				Sous_Sous_Menu_Selector = $(this).attr('id') ;
				
				$(".body-sousmenu-a[id!=" + $(this).attr('id') + "]").each(function()
					{
						$(this).css('color', '') ;
						$(this).removeClass('body-sousmenu-a-hover') ;
					});
					
				$(".body-soussousmenu").each(function()
					{
						
						if ( $(this).attr('famille') == Sous_Sous_Menu_Selector )
							{
							
								$(this).fadeIn(250) ;
						
								$(this).children().css('display','block') ;
								
							}
						else
							{
								$(this).hide() ;
							}
							
					});
				
					
				// Le menu est cliqué
				
				Menu_Clique = $(this) ;
				
			}) ;
			
		
		
		// Sous-Menu -- Hover
		
		$(".body-sousmenu-a").live(
			{
			
		        mouseenter:function()
					{
						$(this).css('color', '#' + $(this).attr('couleur')) ;
						$(this).addClass('body-sousmenu-a-hover') ;
					},
					
				mouseleave:function()
					{
						
						if ( $(".body-soussousmenu[famille=" + $(this).attr('id') + "]").css('display') != 'block' )
							{
								$(this).css('color', '') ;
								$(this).removeClass('body-sousmenu-a-hover') ;
							}
					}
					
			});
			
		
		
		// Sous-Menu -- Fleche pour navigation
		
		$(".body-sousmenu-a").live(
			{
			
		        mouseenter:function()
					{
						$(this).children().css('display', 'block') ;
						$(this).children().css('height', $(this).height()+"px") ;
					},
					
				mouseleave:function()
					{
						$(this).children().css('display', 'none') ;
					}
					
			});
			
		
		
		// Sous-Menu-Fleche -- Hover
		
		$(".body-sousmenu-fleche").live(
			{
			
		        mouseenter:function()
					{
						$(this).addClass('body-sousmenu-fleche-hover') ;
					},
					
				mouseleave:function()
					{
						$(this).removeClass('body-sousmenu-fleche-hover') ;
					}
					
			});
			
			
		
		// Sous-Sous-Menu -- Affichage

		$(".body-sousmenu-a").bind('click',function()
			{	

				Sous_Sous_Menu_Selector = $(this).attr('id') ;
				
				$(".body-sousmenu-a[id!=" + $(this).attr('id') + "]").each(function()
					{
						$(this).css('color', '') ;
						$(this).removeClass('body-sousmenu-a-hover') ;
					});
					
				$(".body-soussousmenu").each(function()
					{
						
						if ( $(this).attr('famille') == Sous_Sous_Menu_Selector )
							{
							
								$(this).fadeIn(250) ;
						
								$(this).children().css('display','block') ;
								
							}
						else
							{
								$(this).hide() ;
							}
							
					});

			}) ;
			
		
		
		// Sous-Sous-Menu -- Hover
		
		$(".body-soussousmenu-a").live(
			{
			
		        mouseenter:function()
					{
						$(this).css('backgroundColor', '#' + $(this).attr('couleur')) ;
						if ( $(this).attr('title') !== 'this is it' )
							{
								$(".body-soussousmenu-a[title='this is it']").css('backgroundColor', '') ;
								$(".body-soussousmenu-a").each(function(){$(this).attr('title','')}) ;
							}
					},
					
				mouseleave:function()
					{
						if ( $(this).attr('title') !== 'this is it' )
							{
								$(this).css('backgroundColor', '') ;
							}
					}
					
			});

			
			
		// Recherche -- Initialisation
		
		$("#body-colonne-extra-recherche-input").keyup(function(e)
			{
			
				// Initialisation des variables
				
				Recherche_Taille = $(this).val().length ;
				
				Recherche_Valeur = $(this).val() ;

				Page_Encours = document.location.pathname ;
				Page_Encours = Page_Encours.substring(Page_Encours.lastIndexOf("/")+1,Page_Encours.lastIndexOf("/")+9) ;
					


				// 3 caractères minimum
				
				if ( Recherche_Taille < 3 )
					{
					
						$("#body-colonne-extra-recherche-resultat").html("3 caractères minimum") ;
						
						$("#body-colonne-extra-recherche-resultat").css('cursor', 'default') ;

					}
				
				else if ( Page_Encours == 'resultat' )
					{
					
						$("#body-colonne-extra-recherche-resultat").html("") ;
					
					}
					
					
				// Lancement d'AJAX
				
				var xhr = AJAX_Init ( ) ;
				
				
				
				// La page n'est pas Résultat : Requete du nombre de résultat
				
				if ( Recherche_Taille > 2 && Page_Encours !== 'resultat' )
					{
					
						Type = "nombre" ;
						
						Affichage = $("#body-colonne-extra-recherche-resultat") ;
						
						$("#body-colonne-extra-recherche-resultat").css('cursor', 'pointer') ;
						
					}
				
				
				
				// La page est Résultat : Requete complete
				
				else if ( Recherche_Taille > 2 && Page_Encours == 'resultat' )
					{
					
						Type = "total" ;
						
						Affichage = $("#body-content-page") ;
						
					}
				
				
				
				// On défini ce qu'on va faire quand on aura la réponse
		
				xhr.onreadystatechange = function ( )
					{
					
						// On ne fait quelque chose que si on a tout reçu et que le serveur est ok
						
						if ( xhr.readyState == 4 && xhr.status == 200 )
							{
								
								
								// On ajoute les éléments dans la page
								
								Resultat_Recherche = xhr.responseText ;
								
								Affichage.html(Resultat_Recherche) ;
									
							}
							
					}
				
				
				
				// Envoi de la requete Ajax à SQL
	
				if ( Recherche_Taille > 2 )
					{
							
						xhr.open ( "GET", "frames/resultat.php?src="+Recherche_Valeur+"&typ="+Type, true ) ;
						
						xhr.send ( null ) ;
						
					}
					
			}) ;



		// Recherche -- Ré-initialisation
		
		$("#body-colonne-extra-recherche-input").blur(function(e)
			{

				if ( $("#body-colonne-extra-recherche-resultat").html() == "3 caractères minimum" )
					{
					
						$("#body-colonne-extra-recherche-resultat").html("") ;
						$("#body-colonne-extra-recherche-input").val("") ;
						$("#body-colonne-extra-recherche-resultat").css('cursor', 'default') ;
					
					}
					
			}) ;



		// Recherche -- Fermeture
		
		$("#body-colonne-extra-recherche-form").submit(function(e)
			{
				
				Recherche_Taille = $("#body-colonne-extra-recherche-input").val().length ;

				Recherche_Utile = $("#body-colonne-extra-recherche-resultat").html() ;
				Recherche_Utile = Recherche_Utile.substring(0,1) ;
								
				if ( Recherche_Taille < 3 || Recherche_Utile < 1 )
					{
						return false ;
					}
					
			}) ;
		
			
		
		// Recherche -- Submit par un click
		
		$("#body-colonne-extra-recherche-resultat").click(function()
			{
			
				if ( $("#body-colonne-extra-recherche-resultat").css('cursor') == 'pointer' )
					{
					
						$("#body-colonne-extra-recherche-form").submit() ;
					
					}
		
			}) ;
			
	}) ;



// –––––––––––––––––––––––––––––––––––––––––––

// AJAX

// –––––––––––––––––––––––––––––––––––––––––––

// AJAX -- Initialisation

function AJAX_Init ( )
	{
	
		var xhr = null ;
		
		if ( window.XMLHttpRequest )
			{ 
				xhr = new XMLHttpRequest ( ) ;
			}
		
		else if ( window.ActiveXObject ) 
			{
				try
					{
						xhr = new ActiveXObject ( "Msxml2.XMLHTTP" ) ;
					}
				
				catch (e)
					{
						xhr = new ActiveXObject ( "Microsoft.XMLHTTP" ) ;
					}
			}
			
		else
			{ 
				alert ( "Votre navigateur ne supporte pas les objets XMLHTTPRequest..." ) ; 
				xhr = false; 
			}

		return xhr ;
		
	}
