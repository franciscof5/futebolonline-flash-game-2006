<?php
//http://localhost/sites/futebolonline/php/altersalaespecial.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$timeAdversario  = $_POST['timeAdversario'];
$sorte = $_POST['sorte'];
$nomeSala = $_POST['nomeSala'];
$userID = $_POST['userID'];


/*$timeAdversario  = "aasdasdasdj";
$sorte = 8;
$nomeSala = "huji";
$userID = 28;*/


$dataUltimoLog = date("now");


$altera1 = mysqli_query($con, "UPDATE `salas` SET `timeAdversario` = '$timeAdversario' WHERE `nomeSala` ='$nomeSala'");

$altera2 = mysqli_query($con, "UPDATE `salas` SET `sorte` = '$sorte' WHERE `nomeSala` ='$nomeSala'");


if($altera1 and $altera2) {
	echo "<xmlbacia>Especial</xmlbacia>";
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