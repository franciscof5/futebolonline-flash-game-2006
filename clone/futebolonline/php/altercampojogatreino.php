<?php
//http://localhost/sites/futebolonline/php/altercampojogatreino.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nome = $_POST['nome'];
$media = $_POST['media'];
$salario = $_POST['salario'];
$valorPasse = $_POST['valorPasse'];
$energia = $_POST['energia'];
$diaTreino = $_POST['diaTreino'];
$lesionado = $_POST['lesionado'];
$suspenso = $_POST['suspenso'];
$morto = $_POST['morto'];
$userID = $_POST['userID'];

/*$nome = "Edson";
$media = 50;
$salario = 12000;
$valorPasse = 1.8;
$energia = 80;
$diaTreino = 0;
$lesionado = 0;
$suspenso = 0;
$morto = 1;
$userID = 48;*/

if(!$morto) {
	//Media++
	$mediaAntes = mysql_query("SELECT `media` FROM `jogadores` WHERE nome='$nome'");
	while ($row1 = mysql_fetch_array($mediaAntes)) {
		$mediaAdd = $row1['media'];
	}
	$media += $mediaAdd;
	
	//Salario++
	$salarioAntes = mysql_query("SELECT `salario` FROM `jogadores` WHERE nome='$nome'");
	while ($row2 = mysql_fetch_array($salarioAntes)) {
		$salarioAdd = $row2['salario'];
	}
	$salario += $salarioAdd;
	
	//passe++
	$valorPasseAntes = mysql_query("SELECT `valorPasse` FROM `jogadores` WHERE nome='$nome'");
	while ($row3 = mysql_fetch_array($valorPasseAntes)) {
		$valorPasseAdd = $row3['valorPasse'];
	}
	$valorPasse += $valorPasseAdd;
	
	$dataUltimoLog = date("d/m/Y-H:i");
	$altera = mysql_query("UPDATE `jogadores` SET `media` = '$media', `salario` = '$salario', `valorPasse` = '$valorPasse', `energia` = '$energia', `suspenso` = '$suspenso', `lesionado` = '10', `diaTreino` = '$diaTreino' WHERE `nome` = '$nome' LIMIT 1;");
	$altera2 = mysql_query("UPDATE `cadastros` SET `dataUltimoLog` = '$dataUltimoLog ' WHERE `userID` =$userID LIMIT 1 ;");
	
	if($altera) {
		echo "<xmlbacia><alterado>".$valor."</alterado><campo>".$campo."</campo></xmlbacia>";
	} else {
		die("Erro: " . mysql_error() . "  $userID $valor  $campo $nomeJoga");
	}
} else {
	$dataUltimoLog = date("d/m/Y-H:i");
	$deleta = mysql_query("DELETE FROM `jogadores` WHERE `nome` = '$nome' LIMIT 1;");
	$altera = mysql_query("UPDATE `cadastros` SET `dataUltimoLog` = '$dataUltimoLog ' WHERE `userID` =$userID LIMIT 1 ;");
	
	if($deleta) {
		echo "<xmlbacia><alterado>".$valor."</alterado><campo>".$campo."</campo></xmlbacia>";
	} else {
		die("Erro: " . mysql_error() . "  $userID $valor  $campo $nomeJoga");
	}

}