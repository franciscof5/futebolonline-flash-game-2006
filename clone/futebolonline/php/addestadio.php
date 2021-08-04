<?php
//http://localhost/sites/futebolonline/php/addestadio.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$timeNome = $_POST['timeNome'];

//$timeNome = "sao pualo";

$dataUltimoLog = date("d/m/Y-H:i");

$dataultimolog = mysql_query("UPDATE `cadastros` SET `dataUltimoLog` = '$dataUltimoLog ' WHERE `userID` =$userID LIMIT 1 ;");


$altera = mysql_query("

INSERT INTO `estadios` ( `nome` , `capacidade` , `entrada` , `vendedores` , `barracasComida` , `barracasUniforme` , `estadioID` )
VALUES (
'$timeNome', '1000', '0', '0', '0', '0', ''
);

");

if($altera) {
	echo "<xmlbacia><alterado>".$valor."</alterado><campo>".$campo."</campo></xmlbacia>";
} else {
	die("Erro: " . mysql_error() . "  $userID $valor  $campo $nomeJoga");
}


?>