			</div>
			
		</div>
		<?php $annee = date("Y"); ?>
		
		<div id="footer">
			<div id="footer-content-social">
				<div class="footer-content">
					<div class="fb-like" data-href="<?php echo SITE_URL_RS; ?>" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>
					<a href="https://twitter.com/share" class="twitter-share-button" data-url="<?php echo SITE_URL_RS; ?>" data-lang="fr" data-hashtags="Hanger">Tweeter</a>
					<div class="g-plusone" data-size="medium" data-href="<?php echo SITE_URL_RS; ?>"></div>
				</div>
			</div>
			<div id="footer-content-partenaires">
				<div class="footer-content">
					Nos partenaires :
					<a href="http://www.afdb.fr">Au Forum du Bâtiment</a>, 
					<a href="http://garis.fr">Garis</a>,
					<a href="http://hangertools.com">Hanger</a>, 
					<a href="http://heracles.fr">Heracles</a>
				</div>
			</div>
			<div id="footer-content-droits">
				<div class="footer-content">
					<p><?php echo SITE_NOM." &copy;". $annee ; ?>  Tous droits réservés - <a href="page-mentionslegales.html">Mentions légales</a></p>
				</div>
			</div>
		</div>
		<?php 
		/**************************************** RECUPERATION VARIABLE POUR AT INTERNET ****************************************/
			//Récupération de l'identifiant de la variable xtn2
			foreach ($tableauN2 as $key => $value) {	if ($n2AT == $value) {$n2AT = $key;}   }

		?>
		
		<script type="text/javascript">
				getATInfos();
				function getATInfos() {
					n2 = 
					"<?php
						if(isset($n2AT)){echo $n2AT;}
					 ?>";
					chap = 
					"<?php 
						if(isset($chapAT)){echo $chapAT ;} 
					?>";
					pageAT = 
					"<?php 
						if(isset($Produit_Nom) && $Produit_Nom != 'Remplissez le formulaire suivant pour nous contacter' && $Produit_Nom != 'Liste de nos revendeurs agréés et Centres Conseils' ) { echo Rewrite_url($Produit_Nom); } 
					?>";
					if (n2.length > 0){	console.log("N2 : "+n2); }
					
					xtpageInfo = "";
				}
					if (chap.length > 0){ xtpageInfo += chap; }
					if (pageAT.length > 0) { xtpageInfo += "::"+pageAT; }
					if (xtpageInfo.length > 0) { console.log(xtpageInfo); }
		</script>

		<!-- **************************************** AT INTERNET **************************************** -->
		<!-- MARQUEURS ROI -->

		<!-- MARQUEURS SPECIFIQUES -->

		<!-- MARQUEUR PRINCIPAL -->
		<script type="text/javascript">
		<!--
			xtnv = document;        //parent.document or top.document or document         
			xtsd = "https://logs1406";
			xtsite = "551417";
			xtn2 = n2;        // level 2 site ID
			xtpage = xtpageInfo;        //page name (with the use of :: to create chapters)
			xtdi = "";        //implication degree
			xt_multc = "";		//all the xi indicators (like "&x1=...&x2=....&x3=...")
			xt_an = "";        //user ID
			xt_ac = "";        //category ID
			
			//do not modify below
			if (window.xtparam!=null){window.xtparam+="&ac="+xt_ac+"&an="+xt_an+xt_multc;}
			else{window.xtparam="&ac="+xt_ac+"&an="+xt_an+xt_multc;};
		//-->
		</script>
		<script type="text/javascript" src="<?php echo PATH_SPT ; ?>xtcore.js"></script> 
		<noscript>
		<img width="1" height="1" alt="" src="https://logs1406.xiti.com/hit.xiti?s=551417&s2=&p=&di=&an=&ac=" >
		</noscript>
				
	</body>
	
	
</html>