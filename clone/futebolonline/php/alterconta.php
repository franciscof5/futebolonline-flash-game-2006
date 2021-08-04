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

$dataUltimoLog = date("d/m/Y-H:i");

$altera = mysql_query("UPDATE `cadastros` SET `".$campo."` = '$valor' WHERE `userID` =$userID LIMIT 1 ;");

$altera = mysql_query("UPDATE `cadastros` SET `dataUltimoLog` = '$dataUltimoLog ' WHERE `userID` =$userID LIMIT 1 ;");

if($altera) {
	echo "<xmlbacia><alterado>1</alterado></xmlbacia>";
} else {
	die("Erro: " . mysql_error());
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
$dataCriouConta = date("d/m/Y-H:i");

mysql_connect("localhost", "root", "931777") or die("Não pode conectar: " . mysql_error());
mysql_select_db("futebol");

$alterando = mysql_query(" INSERT INTO `cadastros` (`dataUltimoLog` , `tecnico` , `timeQueDesejaDirigir` , `notaProvao` , `timeAtual` , `timesPassados`) 
VALUES ('$dataCriouConta', '$tecnico', '$timeDeseja', '$nota', '$timeAtual', '$timesPassado');");

if($alterando) {
	echo "<xmlbacia><alterado>1</alterado><user>$user</user></xmlbacia>";
} else {
	die("Erro: " . mysql_error());
}*/
?>