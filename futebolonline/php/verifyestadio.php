<?php
//http://localhost/sites/mundois/php/verifyestadio.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$nomeEstadio = $_POST['estadioNome'];

/*$campo = "time1pronto";
$nomeEstadio = "Timex";
*/

$dataUltimoLog = date("now");

$buscampo = mysqli_query($con, "SELECT $campo FROM estadios WHERE nome='$nomeEstadio'");

if($buscampo) {
	while ($row = mysqli_fetch_array($buscampo)) {
		echo "<xmlbacia><nome>".$row['0']."</nome></xmlbacia>";
	}
} else {
	echo "<xmlbacia><erro>erro do mysql</erro><campo>$campo</campo></xmlbacia>"; 
}


?>