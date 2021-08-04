<?php
//http://localhost/sites/futebolonline/php/addtimexml.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nomeTime = $_POST['nomaoTime'];
$nomeTimeBusca = $_POST['nomaoTime'];
$numeroBandeiraUniforme = $_POST['bandeiraTipo'];
$estado = $_POST['estado'];
$corPrimaria = $_POST['corPrimaria'];
$corSecundaria = $_POST['corSecundaria'];
$dinheiroIN = $_POST['dinheiroIN'];

$nomeTimeCadastrado = false;


/*$nomeTime = "Auadio Pulas";
$nomeTimeBusca = "Masaneiro";
$numeroBandeiraUniforme = 3;
$estado = "Acre";
$corPrimaria = "0xFF9900";
$corSecundaria = "0x5577FF";
$dinheiroIN = 7;*/

$buscatimea = mysql_query("SELECT nomeTime FROM times");

while ($row = mysql_fetch_array($buscatimea)) {
	if($row[0] == $nomeTimeBusca)
	$nomeTimeCadastrado = true;
}

//echo "Pice of the shit of man";

if (!$nomeTimeCadastrado) {
	$result = mysql_query(" INSERT INTO `times` ( `nomeTime` , `numeroBandeiraUniforme` , `estado` , `corPrimaria` , `corSecundaria` , `dinheiroIN` , `ultimaRenda` , `estadioNome` , `torcedores` , `emprestimos` , `timeID` )
VALUES (
'$nomeTime', '$numeroBandeiraUniforme', '$estado', '$corPrimaria', '$corSecundaria', '$dinheiroIN', '0', 'sem estadio', '200', '0', '');");
	 
	/*$jogadorIDbusca = mysql_query("SELECT userID FROM cadastros WHERE user='$nomeJogador'");
	
	while ($row3 = mysql_fetch_array($jogadorIDbusca)) {
		$userID = $row3['userID'];
	}*/
	
	if($result) {
		echo "<xmlbacia><resposta>Registrado</resposta><userid>$timeID</userid></xmlbacia>";
	} else {
		die("Erro: " . mysql_error());
	}
} else {
	echo "<xmlbacia><resposta>Esse time já existe!</resposta><userid>$timeID</userid></xmlbacia>";
}

?>