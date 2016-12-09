<?php
include('./includes/menu.html');
?>  
     
     
      <form method="POST" action="page-gammes.html">
        <p>AJOUTER UNE GAMME</p>
                    
          <label ><span class="gammes">Nom</span></label>
          <input type="text" name="gamNom" id="gamNom" class="article" />
          			          
          <label ><span class="gammes">Ordre</span></label>
          <input type="text" name="gamOrdre" id="gamOrdre" class="gammes" />
          
          <select name="gamIdFam" />
            <?php
            for ($i = 0, $size = count($familleNum); $i < $size; $i++){
              echo '<option value=\'' . $familleNum[$i] . '\'>' . $familleNom[$i] . '</option>';
            }
            ?>
          
          </select>  
                  
          <input type="reset" value="Annuler" />
          <input type="submit" name="gammesEnvoie" id="gammesEnvoie" value="Envoyer" />
					
        </form>