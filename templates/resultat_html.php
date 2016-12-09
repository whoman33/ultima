
			<div id="body-content-page">
				
				<div id="body-content-page-resultat-libelle-liens">
					<?php echo $Navigation_Mini_Liens ; ?>
				</div>

				<div id="body-content-page-resultat-libelle-nb">
					<?php echo $Resultat_Libelle ; ?>
				</div>

				<table>
					<?php echo implode ( '', $Resultat_Produits ) ; ?>
					<?php echo implode ( '', $Resultat_Produits_Comble ) ; ?>
				</table>
				
			</div>