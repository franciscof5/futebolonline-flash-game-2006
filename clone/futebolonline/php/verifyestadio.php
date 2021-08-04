<?php
//http://localhost/sites/mundois/php/verifyestadio.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$nomeEstadio = $_POST['nomeEstadio'];

/*$campo = "time1pronto";
$nomeEstadio = "Timex";
*/

$dataUltimoLog = date("d/m/Y-H:i");

$buscampo = mysql_query("SELECT $campo FROM estadios WHERE nome='$nomeEstadio'");

if($buscampo) {
	while ($row = mysql_fetch_array($buscampo)) {
		echo "<xmlbacia><nome>".$row['0']."</nome></xmlbacia>";
	}
} else {
	echo "<xmlbacia><erro>".mysql_error()."</erro><time>$nomeTime</time><campo>$campo</campo></xmlbacia>"; 
}


?>