<?php
//http://localhost/sites/futebolonline/php/altercampojoga.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$valor = $_POST['valor'];
//$nomeJoga = $_POST['nomeJoga'];
$userID = $_POST['userID'];


/*$campo = "avenda";
$valor = 0;
$nomeJoga = "Amauri Jr.";
$userID = 28;*/


//$dataUltimoLog = date("d/m/Y-H:i");
$dataUltimoLog = date("now");


$q = "UPDATE cadastros SET $campo='$valor' WHERE userID=$userID";

$altera = mysqli_query($con, $q);

$altera2 = mysqli_query($con, "UPDATE cadastros SET dataUltimoLog=$dataUltimoLog WHERE userID=$userID");
var_dump("PHP: campo:$campo valor:$valor userID:$userID q:$q altera:$altera ");

if($altera) {
	echo "<xmlbacia><alterado>".$valor."</alterado><campo>".$campo."</campo></xmlbacia>";
} else {
	die("Erro ao atualizar jogador");
}/*else {
	die("Erro: " . mysql_error() . "  $userID $valor  $campo $nomeJoga");
}*/

?>