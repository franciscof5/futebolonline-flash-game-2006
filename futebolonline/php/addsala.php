<?php
//http://localhost/sites/futebolonline/php/addsala.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nomeTime = $_POST['timeAtual'];
$aposta = $_POST['aposta'];
$sorte = $_POST['sorte'];
//
$salaCriada = false;
$nsalas = 0;
//
$busca = mysqli_query($con, "SELECT * FROM salas");
//
while ($row = mysqli_fetch_array($busca)) {
	if($row['nomeSala'] == $nomeTime)
	$salaCriada = true;
	$nsalas++;
}

if (!$salaCriada) {
	$result = mysqli_query($con, "INSERT INTO `salas` ( `nomeSala` , `timeAdversario` , `sorte` , `aposta` )
VALUES (
'$nomeTime', 'vazia', '$sorte' , '$aposta' );");
	if($result) {
		echo "<xmlbacia><nsalas>$nsalas</nsalas><resposta>$nomeTime</resposta><userid>ACERTO</userid></xmlbacia>";
	} else {
		echo "<xmlbacia><resposta>$nomeTime</resposta><userid>Resultado invalido</userid></xmlbacia>";
	}
}/* else  {
	$delete = mysqli_query($con, "DELETE FROM `salas` WHERE `nomeTime`='$nomeTime' LIMIT 1;");
	if($delete) {
		echo "<xmlbacia><nsalas>$nsalas</nsalas><resposta>$nomeTime</resposta><userid>Sala deletada</userid></xmlbacia>";
	} else {
		echo "<xmlbacia><resposta>$nomeTime</resposta><userid>Salá ja existe e não deletou-se</userid></xmlbacia>";
	}
}*/

?>