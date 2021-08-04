<?php
//http://localhost/sites/mundois/php/aadjogadorxml.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nomeJogador = $_POST['nomeJogador'];
$nacionalidade = $_POST['nacionalidade'];
$skin = $_POST['pele'];
$posicao = $_POST['posicao'];
$media = $_POST['media'];
$passe = $_POST['passe'];
$salario = $_POST['salario'];
$timeAtual = $_POST['timeAtual'];
$dataCriouJogador = date("d/m/Y-H:i");

$nomeJogadorCadastrado=false;

/*$nomeJogador = "Jogador Keko";
$nacionalidade = "Brasil";
$posicao = "Goleiro";
$media = "10";
$passe = "2304";
$salario = "12351";
$timeAtual = "sem time";*/

$busca= mysql_query("SELECT * FROM jogadores");
while ($row = mysql_fetch_array($busca)) {
	if($row['nome']==$nomeJogador)
	$nomeCadastrado = true;
}



if (!$nomeCadastrado) {
	$result = mysql_query("INSERT INTO `jogadores` (`$nomeJogador`, `$nacionalidade`, `$skin`, `$posicao`, `$media`, `$passe`, `$salario`, `energia`, `escalado`, `suspenso`, `lesionado`, `diaTreino`, `cartoesAmarelos`, `cartoesVermelhos`, `gols`, `$timeAtual`, `avenda`, `dataCriouJogador`, `jogadorID`) VALUES ('$nome', '$nacionalidade', '$skin', '$pos', '$media', '$valorPasse', '$salario', '100', '0', '0', '0', '0', '0', '0', '0', '', '0', '', '');");
	 
	$jogadorIDbusca = mysql_query("SELECT userID FROM cadastros WHERE user='$nomeJogador'");
	while ($row3 = mysql_fetch_array($jogadorIDbusca)) {
		$userID = $row3['userID'];
	}
	
	if($result) {
		echo "<xmlbacia><resposta>Registrado</resposta><userid>$userID</userid></xmlbacia>";
	} else {
		die("Erro: " . mysql_error());
	}
} else if ($nomeJogador)   {
	echo "<xmlbacia><resposta>Jogador já existe</resposta><userid>$userID</userid></xmlbacia>";
}

?>