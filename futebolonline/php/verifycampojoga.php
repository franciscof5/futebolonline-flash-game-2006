<?php
//http://localhost/sites/futebolonline/php/verifycampojoga.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
//$nomeJoga = $_POST['jogaNome'];
$userID = $_POST['userID'];


//$dataUltimoLog = date("now");
$dataUltimoLog = date("now");


$buscampo = mysqli_query($con, "SELECT $campo FROM cadastros WHERE userID='$userID'");
if($buscampo) {
	while ($row = mysqli_fetch_array($buscampo)) {
		echo "<xmlbacia><conteudo>".$row["$campo"]."</conteudo><campo>$campo</campo></xmlbacia>";
		//echo "<xmlbacia><conteudo>".$row["$campo"]."<timeid>".$row["timeID"]."</timeid><campo>$campo</campo></xmlbacia>";
	}
} else {
	echo "<xmlbacia><erro1>ERRO AO BAIXAR DADOS</erro1><campo>$campo</campo></xmlbacia>"; 
}

?>