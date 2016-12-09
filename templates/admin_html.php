<?php
include('./includes/menu.html');
?> 


        <form method="POST" action="page-admin.html">
        <p>AJOUTER UN PRODUIT</p>
          <label ><span class="Produit">Nom produit</span></label>
          <input type="text" name="nomProduit" id="nomProduit" class="produit" />
          
          <label ><span class="Produit">Gamme</span></label>
          <select name="gamme" />
            <?php
            for ($i = 0, $size = count($gammeNum); $i < $size; $i++){
              echo '<option value=\'' . $gammeNum[$i] . '\'>' . $gammeNom[$i] . '</option>';
            }
            ?>
          
          </select>
          
          <label ><span class="Produit">Accrocche</span></label>
          <input type="text" name="accrocche" id="accrocche" class="produit" />
					
          <label ><span class="Produit">Sous accroche</span></label>
          <input type="text" name="sousAccroche" id="sousAccroche" class="produit" />
          
          <label ><span class="Produit">Descriptif</span></label>
          <textarea name="descriptif" id="descriptif" class="produit" /> </textarea>
   
          <label ><span class="Produit">Ordre</span></label>
          <input type="text" name="ordre" id="ordre" class="produit" />
          
          <input type="reset" value="Annuler" />
          <input type="submit" name="produitEnvoie" id="produitEnvoie" value="Envoyer" />
					
        </form>
        
        <form method="POST" action="page-admin.html">
        <p>AJOUTER UN ARTICLE</p>
          <label ><span class="article">Produits</span></label>
          <select name="artNumProduit" />
            <?php
            for ($i = 0, $size = count($produitNum); $i < $size; $i++){
              echo '<option value=\'' . $produitNum[$i] . '\'>' . $produitNom[$i] . '</option>';
            }
            
            ?>
          </select>
          
          <label ><span class="article">R&eacute;f&eacute;rence AX</span></label>
          <input type="text" name="artRef" id="artRef" class="article" />
          
          <label ><span class="article">D&eacute;signation</span></label>
          <input type="text" name="artDesignation" id="artDesignation" class="article" />
          
          <label ><span class="article">Chrono</span></label>
          <input type="text" name="artChrono" id="artChrono" class="article" />
					          
          <label ><span class="article">Ordre</span></label>
          <input type="text" name="artOrdre" id="artOrdre" class="article" />
          
          <input type="reset" value="Annuler" />
          <input type="submit" name="articleEnvoie" id="articleEnvoie" value="Envoyer" />
					
        </form>
         
        <form method="POST" action="page-admin.html">
        <p>AJOUTER UNE IMAGE</p>
          <label ><span class="visuel">Type</span></label>
          <input type="text" name="visType" id="visType" class="visuel" />
          
          <label ><span class="visuel">Nom</span></label>
          <input type="text" name="visNom" id="visNom" class="visuel" />
          
          <label ><span class="visuel">Produits</span></label>
          <select name="visNumProduit" />
            <?php
            for ($i = 0, $size = count($produitNum); $i < $size; $i++){
              echo '<option value=\'' . $produitNum[$i] . '\'>' . $produitNom[$i] . '</option>';
            }
            ?>
          
          </select>
					
          <label ><span class="visuel">L&eacute;gende</span></label>
          <input type="text" name="visLegende" id="visLegende" class="visuel" />
          
          <label ><span class="visuel">Ordre</span></label>
          <input type="text" name="visOrdre" id="visOrdre" class="visuel" />
          
          <input type="reset" value="Annuler" />
          <input type="submit" name="visuelEnvoie" id="visuelEnvoie" value="Envoyer" />
					
        </form>
        
        
        <form method="post" action="page-admin.html" enctype="multipart/form-data">
           <p>UPLOADER UNE IMAGE BASSE DEFINITION</p>
           <label for="image">Images basses definition (tous formats | max. 5 Mo) :</label><br />
           <input type="hidden" name="MAX_FILE_SIZE" value="5242880" />
           <input type="file" name="image" id="image" /><br />
           
           <input type="reset" value="Annuler" />
           <input type="submit" name="imageBdEnvoie" id="imageBdEnvoie" value="Uploader" />
        </form>
        
        <form method="post" action="page-admin.html" enctype="multipart/form-data">
           <p>UPLOADER UNE IMAGE HAUTE DEFINITION</p>
           <label for="image">Images hautes definition (tous formats | max. 5 Mo) :</label><br />
           <input type="hidden" name="MAX_FILE_SIZE" value="5242880" />
           <input type="file" name="image" id="image" /><br />
           
           <input type="reset" value="Annuler" />
           <input type="submit" name="imageHdEnvoie" id="imageHdEnvoie" value="Uploader" />
        </form>
        
    
