<?php
//http://localhost/sites/futebolonline/php/altersala.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$valor = $_POST['valor'];
$nomeSala = $_POST['nomeSala'];
$userID = $_POST['userID'];

/*$campo = "timeAdversario";
$valor = "adsad";
$nomeSala = "Coqueiros";
$userID = 28;*/

$dataUltimoLog = date("now");


$altera = mysqli_query($con, "UPDATE `salas` SET `$campo` = '$valor' WHERE  `nomeSala` ='$nomeSala'");

if($altera) {
	echo "<xmlbacia><alterado>$valor</alterado><campo>$campo</campo></xmlbacia>";
} else {
	die("ERRO EM GRAVAR: $valor $campo" . mysqli_error());
}


//USER ID para alterar a data do ultimo log
$altera = mysqli_query($con, "UPDATE `cadastros` SET `dataUltimoLog` = '$dataUltimoLog ' WHERE `userID` =$userID LIMIT 1;");

if($altera) {
	echo "<xmlbacia><valor>$valor</valor><campo>$campo</campo><nometime>$nomeTime</nometime></xmlbacia>";
} else {
	die("USER ID ERRO: " . mysqli_error());
}
?>