<?php
//http://localhost/sites/mundois/php/aadjogadorxml.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nomeJogador = $_POST['nomeJogador'];
$nacionalidade = $_POST['nacionalidade'];
//$skin = $_POST['pele'];
$skin = 1;
$posicao = $_POST['posicao'];
$media = $_POST['media'];
$valorPasse = $_POST['passe'];
$salario = $_POST['salario'];
$timeAtual = $_POST['timeAtual'];
$dataCriouJogador = date("now");

$nomeJogadorCadastrado=false;

/*$nomeJogador = "Jogador Keko";
$nacionalidade = "Brasil";
$posicao = "Goleiro";
$media = "10";
$passe = "2304";
$salario = "12351";
$timeAtual = "sem time";*/

$busca= mysqli_query($con, "SELECT * FROM jogadores");
while ($row = mysqli_fetch_array($busca)) {
	if($row['nome']==$nomeJogador)
	$nomeCadastrado = true;
}



if (!$nomeCadastrado) {
	$q = "INSERT INTO `jogadores` (`nome`, `nacionalidade`, `skin`, `posicao`, `media`, `valorPasse`, `salario`, `energia`, `escalado`, `suspenso`, `lesionado`, `diaTreino`, `cartoesAmarelos`, `cartoesVermelhos`, `gols`, `timeAtual`, `avenda`, `dataCriouJogador`, `jogadorID`) VALUES ('$nomeJogador', '$nacionalidade', '$skin', '$posicao', '$media', '$valorPasse', '$salario', '100', '0', '0', '0', '0', '0', '0', '0', '$timeAtual', '0', '', '');";
	var_dump($q);
	$result = mysqli_query($con, $q);
	 
	/*$jogadorIDbusca = mysqli_query("SELECT userID FROM cadastros WHERE user='$nomeJogador'");

	while ($row3 = mysqli_fetch_array($jogadorIDbusca)) {
		$userID = $row3['userID'];
	}*/
	
	if($result) {
		echo "<xmlbacia><resposta>Registrado</resposta><userid>$userID</userid></xmlbacia>";
	} else {
		die("Erro ao registrar jogador");
	}
} else if ($nomeJogador)   {
	echo "<xmlbacia><resposta>Jogador já existe</resposta><userid>$userID</userid></xmlbacia>";
}

?>