		<div id="body-content-page">
			<?php $n2AT = 'Non Classes'; ?>
				<h2>Pour nous contacter, remplissez le formulaire suivant :</h2>
				<p>&nbsp;</p>
				<?php echo $Contact_Confirmation ?>
				<?php echo $Contact_Alerte ?>
				<form name="contact_form" id="contact_form" method="post" action="page-contact.html">
					<table>
						<tr>
							<td id="contact_radios">
								<input type="radio" name="contact_type" id="contact_pro" class="contact_radio_type" value="Pro" checked="checked" />
								<label for="contact_pro"><span class="contact_libelle_3">Professionnel</span></label>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<input type="radio" name="contact_type" id="contact_part" class="contact_radio_type" value="Particulier" />	
								<label for="contact_part"><span class="contact_libelle_3">Particulier</span></label>
							</td>
						</tr>
						<tr>
							<td>
								<span class="contact_libelle" id="libelle_nom">Nom <span class="star">*</span></span>
								<input type="text" maxlength="128" name="contact_nom" id="contact_nom" class="contact_input" value="<?php echo @$_POST['contact_nom'] ?>" />	
							</td>
						</tr>
						<tr>
							<td>
								<span class="contact_libelle" id="libelle_prenom">Prénom <span class="star">*</span></span>
								<input type="text" maxlength="128" name="contact_prenom" id="contact_prenom" class="contact_input" value="<?php echo @$_POST['contact_prenom'] ?>" />
							</td>
						</tr>
						<tr class="pro">
							<td>
								<span class="contact_libelle" id="libelle_fonction">Fonction</span>
								<input type="text" maxlength="128" name="contact_fonction" id="contact_fonction" class="contact_input" value="<?php echo @$_POST['contact_fonction'] ?>" />
							</td>
						</tr>
						<tr class="pro">
							<td>
								<span class="contact_libelle" id="libelle_raison">Raison sociale</span>
								<input type="text" maxlength="128" name="contact_raison" id="contact_raison" class="contact_input" value="<?php echo @$_POST['contact_raison'] ?>" />	
							</td>
						</tr>
						<tr class="pro">
							<td>
								<span class="contact_libelle" id="libelle_activite">Activité(s)</span>
								<input type="text" maxlength="128" name="contact_activite" id="contact_activite" class="contact_input" value="<?php echo @$_POST['contact_activite'] ?>" />
							</td>
						</tr>
						<tr>
							<td>
								<span class="contact_libelle" id="libelle_mail">Mail <span class="star">*</span></span>
								<input type="text" maxlength="128" name="contact_mail" id="contact_mail" class="contact_input" value="<?php echo @$_POST['contact_mail'] ?>" />
							</td>
						</tr>
						<tr>
							<td>
								<span class="contact_libelle" id="libelle_telephone">Téléphone</span>
								<input type="text" maxlength="128" name="contact_telephone" id="contact_telephone" class="contact_input" value="<?php echo @$_POST['contact_telephone'] ?>" />
							</td>
						</tr>
						<tr>
							<td>
								<span class="contact_libelle" id="libelle_texte">Message <span class="star">*</span></span>
								<textarea name="contact_texte" id="contact_texte" class="contact_input"><?php echo @$_POST['contact_texte'] ?></textarea>
								<br />
								<span class="contact_legende" id="contact_legende">3000 caractères maximum.
									<br>
									<span class="star">*</span> Champs obligatoires
								</span>
							</td>
						</tr>
					</table>
					
					<p class="contact_bouton">
						<input type="submit" name="contact_envoi" id="contact_envoi" value="Envoyer" class="cta" />
					</p>
				</form>
		</div>
				