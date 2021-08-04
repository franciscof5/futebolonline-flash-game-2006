<?php
//http://localhost/sites/futebolonline/php/alterconta.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$valor = $_POST['valor'];
$userID = $_POST['userID'];


//$campo = "tecnico";
//$valor = 0;
//$tabela = "cadastros";
//$userID = 28;

$dataUltimoLog = date("now");

$altera = mysqli_query($con, "UPDATE `cadastros` SET `".$campo."` = '$valor' WHERE `userID` =$userID LIMIT 1 ;");

$altera = mysqli_query($con, "UPDATE `cadastros` SET `dataUltimoLog` = '$dataUltimoLog ' WHERE `userID` =$userID LIMIT 1 ;");

if($altera) {
	echo "<xmlbacia><alterado>1</alterado></xmlbacia>";
} else {
	die("Erro: " . mysqli_error());
}









//Ainda não usa user e pass para logar, mas seria uma boa
/*$user = $_POST['user'];
$pass = $_POST['pass'];
//
$tecnico = $_POST['tecnico'];
$timeDeseja = $_POST['timeDeseja'];
$nota = $_POST['nota'];
$timeAtual = $_POST['timeAtual'];
$timesPassado = $_POST['timesPassado'];
//
$dataCriouConta = date("now");

mysql_connect("localhost", "root", "931777") or die("Não pode conectar: " . mysqli_error());
mysql_select_db("futebol");

$alterando = mysqli_query($con, " INSERT INTO `cadastros` (`dataUltimoLog` , `tecnico` , `timeQueDesejaDirigir` , `notaProvao` , `timeAtual` , `timesPassados`) 
VALUES ('$dataCriouConta', '$tecnico', '$timeDeseja', '$nota', '$timeAtual', '$timesPassado');");

if($alterando) {
	echo "<xmlbacia><alterado>1</alterado><user>$user</user></xmlbacia>";
} else {
	die("Erro: " . mysqli_error());
}*/
?>