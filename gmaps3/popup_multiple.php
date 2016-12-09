<div id='<?php echo $_POST['id'] ?>' class='accordionButton'><?php echo $_POST['nom'] ?></div>
<div class='accordionContent'>
	<div class='left'>
		<div class='infosmagasin' id='infosmagasin'><?php echo $_POST['infos'] ?></div>
		<div class='adressemagasin' id='adressemagasin'> <?php echo $_POST['adresse'] ?><br /><?php echo $_POST['zip'] ?> <?php echo $_POST['city'] ?></div>
		<div class='horairesmagasin' id='horairesmagasin'><?php echo $_POST['tel'] ?></div>
		<div class='horairesmagasin' id='horairesmagasin'>
			<?php echo $_POST['horaires'] ?>
			<br><br>
			<button id='btnItineraire'> JE VEUX Y ALLER</button> 
		</div>
	</div>
	<div class='right'>
		<div class='urunlogo'>
			<img id='magasinbrosur' src='gmaps3/img/agence/<?php echo $_POST['agence'] ?>' width='250' height='150'>
		</div>
	</div>
</div>
<?php //var_dump($_POST); ?>