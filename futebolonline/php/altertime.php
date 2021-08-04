<?php
//http://localhost/sites/mundois/php/altertime.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$valor = $_POST['valor'];
$nomeTime = $_POST['timeNome'];
$userID = $_POST['userID'];

/*$campo = "dinheiroIN";
$valor = 1.34;
$nomeTime = "Timex";*/
//$userID = $_POST['userID'];

$dataUltimoLog = date("now");

if($campo=="dinheiroIN") {// or $campo=="dinheiroOUT") {
	$valoAntes = mysqli_query($con, "SELECT ".$campo." FROM times WHERE nomeTime='$nomeTime'");
	while ($row = mysqli_fetch_array($valoAntes)) {
		$dinheirodotime = $row[0];
	}
	$valor+=$dinheirodotime;
	$altera = mysqli_query($con, "UPDATE `times` SET `".$campo."` = '$valor' WHERE nomeTime='$nomeTime' LIMIT 1 ;");
} else {
	$altera = mysqli_query($con, "UPDATE `times` SET `".$campo."` = '$valor' WHERE nomeTime='$nomeTime' LIMIT 1 ;");
}

$altera = mysqli_query($con, "UPDATE `cadastros` SET `dataUltimoLog` = '$dataUltimoLog ' WHERE `userID` =$userID LIMIT 1 ;");

if($altera) {
	echo "<xmlbacia><valor>$valor</valor><campo>$campo</campo><nometime>$nomeTime</nometime></xmlbacia>";
} else {
	die("Erro: " . mysqli_error());
}

?>