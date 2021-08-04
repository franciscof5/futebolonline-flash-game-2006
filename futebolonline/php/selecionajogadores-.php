<?php
//http://localhost/sites/mundois/php/selecionajogadores.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nomeTime = $_POST['timeNome'];

//if(!isset($nomeTime)) {
//	$nomeTime = "Palmitos";
//}

$num = 0;
$num2 = 0;

$buscajogadores = mysql_query("SELECT * FROM `jogadores` WHERE timeAtual='$nomeTime' ");
$buscajogadores2 = mysql_query("SELECT * FROM `jogadores` WHERE timeAtual='$nomeTime' ");

if($buscajogadores) {
	echo "<xmlbacia>";
	while ($row = mysql_fetch_array($buscajogadores)) {
		$num2++;
	}
	echo "<numeroJogadores>$num2</numeroJogadores>";
	while ($row = mysql_fetch_array($buscajogadores2)) {
		echo "<jogador$num>";
			echo "<nome>".$row['nome']."</nome>";
			echo "<nacionalidade>".$row['nacionalidade']."</nacionalidade>";
			echo "<posicao>".$row['posicao']."</posicao>";
			echo "<media>".$row['media']."</media>";
			echo "<valorPasse>".$row['valorPasse']."</valorPasse>";
			echo "<salario>".$row['salario']."</salario>";
			echo "<avenda>".$row['avenda']."</avenda>";
			echo "<energia>".$row['energia']."</energia>";
			echo "<escalado>".$row['escalado']."</escalado>";
			echo "<timeatual>".$row['timeAtual']."</timeatual>";
			echo "<suspenso>".$row['suspenso']."</suspenso>";
			echo "<diaTreino>".$row['diaTreino']."</diaTreino>";
			echo "<gols>".$row['gols']."</gols>";
			echo "<CardVermelho>".$row['cartoesVermelhos']."</CardVermelho>";
			echo "<CardAmarelo>".$row['cartoesAmarelos']."</CardAmarelo>";
			echo "<Lesionado>".$row['lesionado']."</Lesionado>";
			echo "<Skin>".$row['skin']."</Skin>";
			echo "<refazer>".$row['refazer']."</refazer>";
		echo "</jogador$num>";
		$num++;
	}
	echo "</xmlbacia>";
} else {
	echo "erro : ".mysql_error();
}


















/*
//http://localhost/sites/mundois/php/verifycampotime.php

$campo = $_POST['campo'];
$nomeTime = $_POST['nomeTime'];


$nomeTime = "Coqueiros";
$campo = "corSecundaria";



mysql_connect("localhost", "root", "931777") or die("Não pode conectar: " . mysql_error());
mysql_select_db("futebol");

$dataUltimoLog = date("d/m/Y-H:i");
$busca = mysql_query("SELECT timeID FROM `times` WHERE nomeTime='$nomeTime'");
if($busca) {
	while ($row = mysql_fetch_array($busca)) {
		//if($row['nomeTime']==$nomeTime)
		$timeID = $row[0];
	}
} else {
	echo "<xmlbacia><erro2>".mysql_error()."</erro2><timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>"; 
}

$buscampo = mysql_query("SELECT $campo FROM times WHERE nomeTime='$nomeTime'");
if($buscampo) {
	while ($row = mysql_fetch_array($buscampo)) {
		echo "<xmlbacia><conteudo>".$row['0']."<timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>";
	}
} else {
	echo "<xmlbacia><erro2>".mysql_error()."</erro2><timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>"; 
}
*/
?>