<?php
//http://localhost/sites/mundois/php/verifycampotime.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$nomeTime = $_POST['timeNome'];


//$nomeTime = "Coqueiros";
//$campo = "corSecundaria";


$buscarmpo = mysql_query("SELECT $campo FROM times WHERE nomeTime='$nomeTime'");

if($buscarmpo) {
	while ($rows =  mysql_fetch_array($buscarmpo)) {
	echo "<xmlbacia><conteudo>".$rows['0']."</conteudo><timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>";
}
} else {
	echo "<xmlbacia><erro2>".mysql_error()."</erro2><timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>"; 
}

?>