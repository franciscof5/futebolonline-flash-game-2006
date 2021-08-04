<?php
//http://localhost/sites/mundois/php/verifycampo.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
//$tabela = $_POST['tabela'];
$userID = $_POST['userID'];


/*
$campo = "timeAtual";
$tabela = "cadastros";
$userID = 28;
*/

//$dataUltimoLog = date("d/m/Y-H:i");
$dataUltimoLog = date("now");

$buscampo = mysqli_query("SELECT $campo FROM cadastros WHERE userID='$userID'");


if($buscampo) {
	while ($row = mysqli_fetch_array($buscampo, MYSQL_BOTH)) {
		echo "e a row e : ";
		echo $row['0'];
		echo "<xmlbacia><conteudo>".$row['0']."</conteudo><campo>$campo</campo></xmlbacia>";
		
		//echo "<xmlbacia><conteudo>".$nomeTime."</conteudo><campo>$campo</campo></xmlbacia>";
	}
} else {
	echo "<xmlbacia><erro1>ERRO AO BAIXAR DADOS</erro1><time>$nomeTime</time><campo>$campo</campo></xmlbacia>"; 
}


?>