<?php
//http://localhost/sites/mundois/php/selecionajogadores.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nomeTime = $_POST['timeSendoCarregado'];

//if(!isset($nomeTime)) {
//	$nomeTime = "Palmitos";
//}

$num = 0;
//$num2 = 0;

$buscajogadores = mysqli_query($con, "SELECT * FROM `jogadores` WHERE timeAtual='$nomeTime' ");
//$buscajogadores2 = mysqli_query($con, "SELECT * FROM `jogadores` WHERE timeAtual='$nomeTime' ");

if($buscajogadores) {
	echo "<xmlbacia>";
	/*while ($row = mysqli_fetch_array($buscajogadores)) {
		$num2++;
	}*/
	echo "<numeroJogadores>".mysqli_num_rows($buscajogadores)."</numeroJogadores>";
	while ($row = mysqli_fetch_array($buscajogadores)) {
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
	echo "erro ao carregar os jogadores do seu time";
}


















/*
//http://localhost/sites/mundois/php/verifycampotime.php

$campo = $_POST['campo'];
$nomeTime = $_POST['nomeTime'];


$nomeTime = "Coqueiros";
$campo = "corSecundaria";



mysql_connect("localhost", "root", "931777") or die("N?o pode conectar: " . mysqli_error());
mysql_select_db("futebol");

$dataUltimoLog = date("now");
$busca = mysqli_query($con, "SELECT timeID FROM `times` WHERE nomeTime='$nomeTime'");
if($busca) {
	while ($row = mysqli_fetch_array($busca)) {
		//if($row['nomeTime']==$nomeTime)
		$timeID = $row[0];
	}
} else {
	echo "<xmlbacia><erro2>erro do mysql</erro2><timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>"; 
}

$buscampo = mysqli_query($con, "SELECT $campo FROM times WHERE nomeTime='$nomeTime'");
if($buscampo) {
	while ($row = mysqli_fetch_array($buscampo)) {
		echo "<xmlbacia><conteudo>".$row['0']."<timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>";
	}
} else {
	echo "<xmlbacia><erro2>erro do mysql</erro2><timeid>$timeID</timeid><campo>$campo</campo></xmlbacia>"; 
}
*/
?>