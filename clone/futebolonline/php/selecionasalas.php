<?php
//http://localhost/sites/mundois/php/selecionasalas.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$numSalas = 0;

$buscaSala = mysql_query("SELECT `nomeSala` FROM salas");
$buscaSala2 = mysql_query("SELECT `nomeSala` FROM salas");

if($buscaSala) {
	echo "<xmlbacia>";
	
	while ($row = mysql_fetch_array($buscaSala)) {
		$numSalas++;
	}
	echo "<numerosalas>$numSalas</numerosalas>";
	
	while ($row = mysql_fetch_array($buscaSala2)) {
		echo "<salaJogadorCriou>".$row['nomeSala']."</salaJogadorCriou>";
	}
	
	echo "</xmlbacia>";
} else {
	echo "erro : ".mysql_error();
}


mysql_close();















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