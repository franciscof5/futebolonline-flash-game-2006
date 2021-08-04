<?php
//http://localhost/sites/futebolonline/php/verifycampojoga.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$nomeJoga = $_POST['jogaNome'];


$dataUltimoLog = date("d/m/Y-H:i");


$buscampo = mysql_query("SELECT $campo FROM jogadores WHERE nome ='$nomeJoga'");
if($buscampo) {
	while ($row = mysql_fetch_array($buscampo)) {
		echo "<xmlbacia><conteudo>".$row['0']."<timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>";
	}
} else {
	echo "<xmlbacia><erro2>".mysql_error()."</erro2><timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>"; 
}

?>