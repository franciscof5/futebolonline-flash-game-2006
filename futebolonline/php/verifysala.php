<?php
//http://localhost/sites/futebolonline/php/verifysala.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$nomeSala = $_POST['nomeSala'];
$userID = $_POST['userID'];

$dataUltimoLog = date("now");

$result = mysqli_query($con, "SELECT $campo FROM salas WHERE nomeSala='$nomeSala'");
$row = mysqli_fetch_assoc($result);

if($row["timeAdversario"]) {
	//while ($row = mysqli_fetch_array($result)) {
		echo "<xmlbacia><value>".$row["timeAdversario"]."</value><campo>$campo</campo></xmlbacia>";
	//}
} else {
	echo "<xmlbacia><erro>erro do mysql</erro><campo>$campo</campo><nomesala>$nomeSala</nomesala></xmlbacia>"; 
}


?>