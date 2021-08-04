<?php
//http://localhost/sites/mundois/php/alterestadio.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$valor = $_POST['valor'];
$nomeEstadio = $_POST['nomeEstadio'];
$userID = $_POST['userID'];

/*$campo = "vendedores";
$valor = 1;
$nomeEstadio = "Coqueiros";
$userID = 28;*/

$dataUltimoLog = date("d/m/Y-H:i");


$altera = mysql_query("UPDATE estadios SET $campo='$valor' WHERE nome='$nomeEstadio' LIMIT 1 ;");

if($altera) {
	echo "<xmlbacia><alterado>$valor</alterado><campo>$campo</campo></xmlbacia>";
} else {
	die("Erro: $valor $campo" . mysql_error());
}


//USER ID para alterar a data do ultimo log
$altera = mysql_query("UPDATE `cadastros` SET `dataUltimoLog` = '$dataUltimoLog ' WHERE `userID` =$userID LIMIT 1;");

if($altera) {
	echo "<xmlbacia><valor>$valor</valor><campo>$campo</campo><nometime>$nomeTime</nometime></xmlbacia>";
} else {
	die("Erro USERID: " . mysql_error());
}
?>