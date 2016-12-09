		<div id="body-content-page">
		<?php $n2AT = 'Revendeurs'; ?>
			<h2>Liste de nos revendeurs par régions</h2>
			
			<table border="0" id="legende" class="regions">
				<tr id="body-content-page-button">
					<td><a id="allerIDF"><h5>Paris</h5></a></td>
					<td><a id="allerCentre"><h5>Lyon</h5></a></td>
					<td><a id="allerSud"><h5>Sud</h5></a></td>
				</tr>
			</table>
			<div id="itineraire">

				<div id="formItineraire">
					<div class="row">
						<label class="col1" for="depart">D&eacute;part</label>
						<label class="col2" for="arrivee">Arriv&eacute;e</label>
					</div>
					<div class="row">
						<input type="text" id="depart" class="inputItineraire col1 " name="depart" placeholder="Saisir l'adresse de d&eacute;part">
						<input type="text" id="arrivee" class="inputItineraire col2" name="arrivee" placeholder="Cliquez sur un point de vente" disabled>
						<button value="valider" class="col3" disabled="disabled" >Valider</button>
					</div>
				</div>


			</div>

			<div id="map">
				<div id="cartePopUp">
					<div class="arrow"></div>
					<div class="carteWrapper">
						<div class="top"></div>
						<div class="content">
							<div class="container">
								<div class="accordion"></div>
							</div>
						</div>
					</div>
				</div>
				<div id="carteMain">
					<div id="googleMap" class="googleMap"> </div>
				</div>
			</div>
		</div>			

				