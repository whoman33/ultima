<?php


// Connexion au serveur

$SQL_cnx = mysql_connect ( SQL_SERVER, SQL_LOGIN, SQL_PASSWORD ) ;





// Selection de la base de donnees

$SQL_db = mysql_select_db ( SQL_DATABASE, $SQL_cnx ) ;


?>