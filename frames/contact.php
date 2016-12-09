<?php


// Définition des styles propres

$CSS_More = '<link rel="stylesheet" type="text/css" href="' . PATH_STL . 'contact.css" />' . "\n" ;



// Traitement Javascript particulier

$JS_More = '<script type="text/javascript" src="' . PATH_SPT . 'contact.js"></script>' . "\n" ;



// Initialisation des variables

$Contact_Alerte = '' ;
$Contact_Confirmation = @$_SESSION['Contact_Confirmation'] ;
unset ( $_SESSION['Contact_Confirmation'] ) ;



// Traitement du formulaire

if ( isset ( $_POST['contact_envoi'] ) )
	{
	
		// Vérification avant traitement
		
		$Contact_Validation = 0 ;

		if ( preg_match ( "#^[a-zA-ZéèêëàâäöôòïîìñçÉÈÊËÀÂÄÖÔÒÏÎÌÑÇ\\\' -]{3,128}$#", $_POST['contact_nom'] ) )
			{
				$Contact_Validation = $Contact_Validation + 1 ;
			}

		if ( preg_match ( "#^[a-zA-ZéèêëàâäöôòïîìñçÉÈÊËÀÂÄÖÔÒÏÎÌÑÇ\\\' -]{3,128}$#", $_POST['contact_prenom'] ) )
			{
				$Contact_Validation = $Contact_Validation + 1 ;
			}

		if ( preg_match ( "#^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$#", $_POST['contact_mail'] ) )
			{
				$Contact_Validation = $Contact_Validation + 1 ;
			}
			
		if ( strlen ( $_POST['contact_texte'] ) > 3 )
			{
				$Contact_Validation = $Contact_Validation + 1 ;
			}
		
		if ( $Contact_Validation !== 4 )
			{
				$Contact_Alerte = '<div class="contact_alerte">Les champs n\'ont pas tous été renseignés correctement...</div>' ;
			}
			
		elseif ( isset ( $_SESSION['contact_envoi'] ) AND ( date ('U') - $_SESSION['contact_envoi'] < 600 ) )
			{
			
				$Contact_Restant = abs ( date ('U') - $_SESSION['contact_envoi'] - 600 ) ;
				
				$Contact_Alerte = '<div class="contact_alerte">Une limite de 10 minutes entre chaque message est imposée.<br />Prochain message possible dans ' . $Contact_Restant . ' secondes.</div>' ;

				unset ( $_POST ) ;
			
			}
		
			
			
			
		// Vérification ok => Traitement
		
		else
			{
				
				// envoi du mail
				
				$Mail_Sujet = "[ Ultima ] - Message à partir du site" ;
				
				$Mail_Entete = 'MIME-Version: 1.0'."\n";
				$Mail_Entete .= "Content-Type: text/html; charset='iso-8859-1'\n" ;
				$Mail_Entete .= "From: " . $_POST['contact_mail'] . "\n" ;
				
				$Mail_Corps = nl2br ( strip_tags ( stripslashes ( substr ( $_POST['contact_texte'], 0, 4000 ) ), '<p><a><b><u><i>' ) ) . "<br /><br />" ;
				$Mail_Corps .= stripslashes ( $_POST['contact_prenom'] . ' ' . $_POST['contact_nom'] . '<br />' . @$_POST['contact_fonction'] . '<br />' . @$_POST['contact_telephone'] . '<br /><br />' . @$_POST['contact_raison'] . '<br />' . @$_POST['contact_activite'] ) ;
				
				sleep ( 2 ) ;
				
				$Mail_Qui = ( $_POST['contact_type'] == 'Pro' ) ? SITE_MAIL_PRO : SITE_MAIL ;
						
				mail ( $Mail_Qui, $Mail_Sujet, $Mail_Corps, $Mail_Entete ) ;
				
			
				
				// Rafraichissement de la page
				
				unset ( $_POST ) ;
				
				$_SESSION['contact_envoi'] = date ('U') ;
				
				$_SESSION['Contact_Confirmation'] = '<div class="contact_confirmation">Votre message a bien été envoyé. Nous vous en remercions.</div>' ;
				
				header('Location:page-contact.html') ;
				
			}

	}
	

?>