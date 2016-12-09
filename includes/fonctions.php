<?php
	
//------------------------------------------------------------------------------------------------------------------------

	
// TEXTE -- Formatage des césures du textes

function Texte_sans_cesure ( $texte )
	{
	
		$texte = str_replace ( array ( '« ', ' »', ' ;', ' :', ' !', ' ?', '( ', ' )' ), array ( '«&nbsp;', '&nbsp;»', '&nbsp;;', '&nbsp;:', '&nbsp;!', '&nbsp;?', '(&nbsp;', '&nbsp;)' ), $texte ) ;
		
		return ( $texte ) ;	
		
	}



//------------------------------------------------------------------------------------------------------------------------

// URL -- Fonction de Rewriting

function Rewrite_url ( $texte )
	{
	
		$url = '' ;
		$url = strtolower ( $texte ) ;
		$url = str_replace ( '<br />', '_', $url ) ;
		$url = str_replace ( '<br/>', '_', $url ) ;
		$url = strip_tags ( $url ) ;
		$url = strtr ( $url, "ÉÈÊÀàäâéèëêïîöôüûç", "eeeaaaaeeeeiioouuc" ) ;
		$url = str_replace ( '-', '_', $url ) ;
		$url = preg_replace ( '#[^a-z0-9-\.]#i', '_', $url ) ; 
		$url = preg_replace ( '[_+]', '_', $url ) ; 
		$url = str_replace ( array ( '_a_', '_l_', '_d_', '_c_' ), '_', $url ) ;
		$url = ( strrpos ( $url, '_' ) == strlen ( $url ) - 1 ) ? substr ( $url, 0, ( strlen ( $url ) - 1 ) ) : $url ;
		
		return ( $url ) ;
		
	}



// REFERENCEMENT -- Récupération de mots-clés

function Keywords_extract ( $texte, $taille )
	{
		
		if ( $texte !== '' )
			{
			
				$kwds = strip_tags ( $texte ) ;
				$kwds = html_entity_decode ( $kwds ) ;
				$kwds = strtr ( $kwds, ".,:!?()[]'\"/+-=*@|", "                   " ) ;
				$kwds = strtr ( $kwds, ",", " " ) ;
				$kwds = strtr ( $kwds, "\n", " " ) ;
				$kwds = strtr ( $kwds, ";", " " ) ;
				$kwds = strtr ( $kwds, "  ", " " ) ;
				$kwds = explode ( ' ', $kwds ) ;
				$kwds = array_unique ( $kwds ) ;
				
				$forbidden = array ( "Le", "La", "Les", "Ce", "Ça", "Ces", "Ma", "Mes", "Me", "Mon", "Ta", "Tes", "Ton", "Te", "Leur", "Sa", "Ses", "Son", "Se", "Ne", "Pas", "Qui", "Que", "Quoi", "Dont", "Ou", "Où", "Quel", "Quelle", "Mais", "Et", "Donc", "Or", "Ni", "Car", "Qu'", "Voici", "Voilà", "Voila", "Je", "Tu", "Il", "Elle", "Nous", "Vous", "Ils", "Elles", "Un", "Une" ) ;
				
				array_filter ( $kwds ) ;
		
				foreach ( $kwds as $kwd )
					{
					
						// if ( ( strlen ( $kwd ) > $taille OR ereg ( "^[A-Z]{1}[a-zA-Z ]+$", $kwd ) ) AND ( in_array ( $kwd, $forbidden ) == false ) )
						// 	{
							
								$motsclés[] = $kwd ;
							
							// }
					
					}
				
				@sort ( $motsclés ) ;
		
				$motsclés = @implode ( ', ', $motsclés ) ;
				
				return ( $motsclés ) ;
			
			}
		
		else
			{
				return ( '' ) ;
			}
		
	}



//------------------------------------------------------------------------------------------------------------------------

// SQL -- Fonction de requete

function SQL_Query ( $sql ) 
	{
		
		if ( isset($_SESSION['log_sql']) AND $_SESSION['log_sql'] > 0 )
			{
				$result = mysql_query ( $sql ) or die ( "<b>Erreur SQL :</b> <pre>$sql</pre> <br />" . mysql_error () . "<hr/>" ) ;
			}
		else
			{
				$result = mysql_query ( $sql ) or die ( "<b>Erreur SQL :</b> Contacter l'administrateur.<hr/>" ) ;
			}
			
		return ( $result ) ;
		
	}



// SQL -- Fonction libere la memoire

function SQL_Free ( $result )
	{

		mysql_free_result ( $result ) ;
		
	}
	
	
	
	
//------------------------------------------------------------------------------------------------------------------------

// AT Internet -- Similaire à Rewrite_url

function removeSpecialChars($chaine)
	{
		$accent = array('%C3%80'=>'','%C3%81'=>'','%C3%82'=>'A','%C3%83'=>'A','%C3%84'=>'A','%C3%85'=>'A','%C3%A0'=>'','%C3%A1'=>'','%C3%A2'=>'a','%C3%A3'=>'a','%C3%A4'=>'a','%C3%A5'=>'a','%C3%92'=>'O','%C3%93'=>'O','%C3%94'=>'O','%C3%95'=>'O','%C3%96'=>'O','%C3%98'=>'O','%C3%B2'=>'o','%C3%B3'=>'o','%C3%B4'=>'o','%C3%B5'=>'o','%C3%B6'=>'o','%C3%B8'=>'o','%C3%88'=>'E','%C3%89'=>'E','%C3%8A'=>'E','%C3%8B'=>'E','%C3%A8'=>'e','%C3%A9'=>'e','%C3%AA'=>'e','%C3%AB'=>'e','%C3%87'=>'C','%C3%A7'=>'c','%C3%8C'=>'I','%C3%8D'=>'I','%C3%8E'=>'I','%C3%8F'=>'I','%C3%AC'=>'i','%C3%AD'=>'i','%C3%AE'=>'i','%C3%AF'=>'i','%C3%99'=>'U','%C3%9A'=>'U','%C3%9B'=>'U','%C3%9C'=>'U','%C3%B9'=>'u','%C3%BA'=>'u','%C3%BB'=>'u','%C3%BC'=>'u','%C3%BF'=>'y','%C3%91'=>'N','%C3%B1'=>'n', 'l%27'=>'', 'd%27'=>''); 
		
		$chaine = urlencode($chaine); 
		foreach ($accent as $key => $value) {
			$chaine = str_replace($key,$value,$chaine); 
		} 
		return urldecode($chaine);
	}
	
	function removeSpaces($chaine, $search)
	{
		$chaine = str_replace(" ", "_", $chaine);
		$chaine = preg_replace("/[".$search."]+/", $search, $chaine);
		return $chaine;
	}

	function capitalize($chaine, $char){
		$finStr = strlen($chaine);
		$chaine = ucfirst($chaine);
		for ($i=1; $i < $finStr; $i++) { 
			if ($chaine[$i-1] == $char) {
				$chaine[$i] = strtoupper($chaine[$i]);
			}
		}
		return $chaine;
	}

	function strToAT($chaine, $search, $capitalize=false){
		if ($capitalize == true) {
			return capitalize( removeSpaces( removeSpecialChars($chaine), $search), $search);	
		} 
		elseif ($capitalize == false) {
			return strtolower( removeSpaces( removeSpecialChars($chaine), $search) );
		}
		return removeSpaces(removeSpecialChars($chaine), $search);
	}
  
  


/** 
 * Démarre ou poursuit une session.                     
 *
 * @return void
 */
function initSession() {
session_start();
}

/** 
 * Fournit l'id du visiteur connecté.                     
 *
 * Retourne l'id du visiteur connecté, une chaîne vide si pas de visiteur connecté.
 * @return string id du visiteur connecté
 */
function obtenirIdUserConnecte() {
    $ident="";
    if ( isset($_SESSION["loginUser"]) ) {
        $ident = (isset($_SESSION["idUser"])) ? $_SESSION["idUser"] : '';   
    }  
    return $ident ;
}

/**
 * Conserve en variables session les informations du visiteur connecté
 * 
 * Conserve en variables session l'id $id et le login $login du visiteur connecté
 * @param string id du visiteur
 * @param string login du visiteur
 * @return void    
 */
function affecterInfosConnecte($id, $login) {
    $_SESSION["idUser"] = $id;
    $_SESSION["loginUser"] = $login;
}



/** 
 * Vérifie si un visiteur s'est connecté sur le site.                     
 *
 * Retourne true si un visiteur s'est identifié sur le site, false sinon. 
 * @return boolean échec ou succès
 */
function estVisiteurConnecte() {
    // actuellement il n'y a que les visiteurs qui se connectent
    return isset($_SESSION["loginUser"]);
}

/** 
 * Déconnecte le visiteur qui s'est identifié sur le site.                     
 *
 * @return void
 */
function deconnecterVisiteur() {
    unset($_SESSION["idUser"]);
    unset($_SESSION["loginUser"]);
}?>

<script type="text/javascript">
	String.prototype.sansAccent = function(){
		var accent = [
			/[\300-\306]/g, /[\340-\346]/g, // A, a
			/[\310-\313]/g, /[\350-\353]/g, // E, e
			/[\314-\317]/g, /[\354-\357]/g, // I, i
			/[\322-\330]/g, /[\362-\370]/g, // O, o
			/[\331-\334]/g, /[\371-\374]/g, // U, u
			/[\321]/g, /[\361]/g, // N, n
			/[\307]/g, /[\347]/g, // C, c
			"-", " ",
		];
		var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c','_','_'];
		 
		var str = this;
		for(var i = 0; i < accent.length; i++){
			str = str.replace(accent[i], noaccent[i]);
		}
		 
		return str;
	}
</script>