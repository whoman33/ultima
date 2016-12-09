
// ñññññññññññññññññññññññññññññññññññññññññññ

// JQUERY

// ñññññññññññññññññññññññññññññññññññññññññññ

$(document).ready(function()
	{
	
		// CONTACT -- Gestion du textarea de contact
		
		$("#contact_texte").keyup(function()
			{
				Contact_Textarea ( ) ;
			});



		// CONTACT -- VÈrification du bon remplissage du nom et prÈnom
		
		$("#contact_nom, #contact_prenom").keyup(function()
			{
				
				Verif_Texte = new RegExp ( "^[a-zA-ZÈËÍÎ‡‚‰ˆÙÚÔÓÏÒÁ…» À¿¬ƒ÷‘“œŒÃ—«\' -]*$", "g" ) ; ;

				if ( Verif_Texte.test($(this).val() ) == false )
					{
					
		 				$(this).addClass('contact_input_alert') ;
		 			
					}
					
				else
					{
								 				
		 				$(this).removeClass('contact_input_alert') ;
					
					}
					
			});



		// CONTACT -- VÈrification du bon remplissage du mail
		
		$("#contact_mail").bind('keyup blur focus',function()
			{
				
				Verif_Mail 	= new RegExp ( "^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$", "g" ) ; ;

				if ( Verif_Mail.test($(this).val() ) == false )
					{
					
		 				$("#contact_mail").addClass('contact_input_alert') ;
		 			
					}
					
				else
					{
								 				
		 				$("#contact_mail").removeClass('contact_input_alert') ;
					
					}
					
			});



		// CONTACT -- VÈrification au submit
		
		$("#contact_form").submit(function()
			{

				if ( $("#contact_nom, #contact_prenom, #contact_mail").is('.contact_input_alert') == true || 
						$("#contact_texte").val().length < 10 ||
						$("#contact_nom").val().length < 2 ||
						$("#contact_prenom").val().length < 2 ||
						$("#contact_mail").val().length < 1 )
					{
						return false ;
					}
					
				else
					{
						return true ;
					}
				
			});
			
		
		
		// CONTACT -- Type : Pro ou particulier
		
		$(".contact_radio_type").click(function()
			{
				if ( $('input:radio[name=contact_type]:checked').attr('id') == 'contact_part' )
					{
						$('.pro').hide() ;
					}
				else
					{
						$('.pro').show() ;
					}
					
			});

	}) ;



// ñññññññññññññññññññññññññññññññññññññññññññ

// FONCTIONS

// ñññññññññññññññññññññññññññññññññññññññññññ

// CONTACT -- Gestion du textarea de contact

function Contact_Textarea ( )
	{
		
		//Redimensionnement si nÈcessaire
		
		document.getElementById ( "contact_texte" ).style.height = "23px";
		document.getElementById ( "contact_texte" ).style.height = document.getElementById ( "contact_texte" ).scrollHeight + "px" ;
				
		if ( document.documentElement.clientHeight < ( document.getElementById ( "contact_envoi" ).offsetTop + 80 ) )
			{
				window.scrollTo ( 0, ( document.getElementById ( "contact_envoi" ).offsetTop - document.documentElement.clientHeight + 80 ) ) ;
			}
		
		
		
		// Maximum de caractËres
		
		longueur_texte = document.getElementById ( "contact_texte" ).value.length ;
		
		if ( longueur_texte < 3000 )
			{
			
				document.getElementById ( "contact_legende" ).innerHTML = longueur_texte + ' sur 3000 caractËres maximum' ;
			
			}
			
		else if ( longueur_texte > 3000 )
			{
			
				document.getElementById ( "contact_legende" ).innerHTML = 'Vous avez atteint le maximum de caractËres.' ;
				document.getElementById ( "contact_texte" ).value = document.getElementById ( "contact_texte" ).value.substr ( 0, 3000 ) ;
			
			}
		
	}
