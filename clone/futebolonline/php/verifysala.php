<?php
//http://localhost/sites/futebolonline/php/verifysala.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$nomeSala = $_POST['nomeSala'];
$userID = $_POST['userID'];

/*$campo = "sorte";
$nomeSala = "Coqueiros";
$userID = 28;*/

$dataUltimoLog = date("d/m/Y-H:i");

$buscampo = mysql_query("SELECT $campo FROM salas WHERE nomeSala='$nomeSala'");

if($buscampo) {
	while ($row = mysql_fetch_array($buscampo)) {
		echo "<sorte>".$row['0']."</sorte>";
	}
} else {
	echo "<xmlbacia><erro>".mysql_error()."</erro><time>$nomeTime</time><campo>$campo</campo></xmlbacia>"; 
}


?>