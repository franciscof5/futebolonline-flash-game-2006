<?php
//http://localhost/sites/mundois/php/registroxml.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nome = $_POST[nome];
$email = $_POST[email];
$sexo = $_POST[sexo];
$usuario = $_POST[usuario];
$senha = $_POST[senha];

$userCadastrado=false;
$emailCadastrado=false;

//$nome = "keko";
//$email = "asds";
//$sexo = "macho";
//$usuario = "chicos";
//$senha = "1234";


$userbusca = mysql_query("SELECT * FROM cadastros");
while ($row = mysql_fetch_array($userbusca)) {
	if($row['user']==$usuario)
	$userCadastrado = true;
	
	if($row['email']==$email)
	$emailCadastrado = true;
}
//mysql_free_result($userbusca);

$dataCriouConta = date("d/m/Y-H:i");

if (!$userCadastrado and !$emailCadastrado) {
	$result = mysql_query("	INSERT INTO `cadastros` ( `nome` , `email` , `sexo` , `user` , `pass` , `dataCriouConta` , `dataUltimoLog` , `tecnico` , `timeQueDesejaDirigir` , `notaProvao` , `timeAtual` , `timesPassados` , `jogos` , `vitorias` , `derrotas` , `userID` ) VALUES ('$nome', '$email', '$sexo', '$usuario', '$senha', '$dataCriouConta', '$dataCriouConta', '0', '0', 'podeCriar', '0', '0', '0', '0', '0', '' );");
	 
	$userIDbusca = mysql_query("SELECT userID FROM cadastros WHERE user='$usuario'");
	while ($row3 = mysql_fetch_array($userIDbusca)) {
		$userID = $row3['userID'];
	}
	
	if($result) {
		echo "<xmlbacia><resposta>Registrado</resposta><userid>$userID</userid></xmlbacia>";
	} else {
		die("Erro: " . mysql_error());
	}
} else if ($userCadastrado)   {
	echo "<xmlbacia><resposta>Usu?rio j? existe</resposta><userid>$userID</userid></xmlbacia>";
} else if ($emailCadastrado)   {
	echo "<xmlbacia><resposta>Email j? existe</resposta><userid>$userID</userid></xmlbacia>";
}

?>