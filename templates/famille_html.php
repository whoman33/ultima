<?php
include('./includes/menu.html');
?>  
     
     
      <form method="POST" action="page-famille.html">
        <p>AJOUTER UNE FAMILLE</p>
                    
          <label ><span class="famille">Nom</span></label>
          <input type="text" name="famNom" id="famNom" class="article" />
          			          
          <label ><span class="famille">Ordre</span></label>
          <input type="text" name="famOrdre" id="famOrdre" class="gammes" />
          
          <select name="famIdChp" />
            <?php
            for ($i = 0, $size = count($chapitreNum); $i < $size; $i++){
              echo '<option value=\'' . $chapitreNum[$i] . '\'>' . $chapitreNom[$i] . '</option>';
            }
            ?>
          
          </select>  
                  
          <input type="reset" value="Annuler" />
          <input type="submit" name="familleEnvoie" id="familleEnvoie" value="Envoyer" />
					
        </form>