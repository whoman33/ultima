				
			<div id="body-content-page-resultat-libelle"><?php echo $Navigation_Mini_Liens ; ?></div>

			<div id="body-content-page">
				
				<h2>
					<?php echo $Produit_Nom ; ?>
					<div id="pdf-download">
						<?php echo @$Produit_PDF ; ?>
					</div>
				</h2>
				<div class="top-blocks">
					<div class="block-orange"></div>
					<div class="block-gris"></div>
				</div>
				<div id="produit-texte">
					<?php echo @$Produit_Accroche ; ?>
					<?php echo @$Produit_Plus ; ?>
					<?php echo @$Produit_Descriptif ; ?> 
				</div>
				<div class="bottom-blocks">
					<div class="block-orange"></div>
					<div class="block-gris"></div>
				</div>
				<?php echo @$Produit_Picto_Html ; ?>
					<?php echo $Produit_Lien_AFDB ; ?>
				<?php echo @$Produit_Visuel_Html ; ?>
				<?php echo @$Produit_Schema_Html ; ?>
					<?php echo $Produit_Lien_AFDB ; ?>
				<?php echo @$Produit_Article_Html ; ?>
				<?php echo @$Produit_Associe_Html ; ?>
			</div>
			