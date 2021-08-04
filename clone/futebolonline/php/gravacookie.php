<?php
//http://localhost/sites/mundois/php/gravacookie.php

$nome           = $_POST[nome];
$conteudo       = $_POST[conteudo];
$tempoDeVida    = $_POST[tempoDeVida];

function setaCookie ($nome, $conteudo, $tempoDeVida) {
	//Tempo de vida é passado em segundos e vira TCHAM minutos
	$tempoDeVida *=60;
	setcookie($nome, $conteudo);//, time() + $tempoDeVida, "/");
	echo "<xmlbacia><set>Setando</set><cookienome>$nome</cookienome></xmlbacia>";
};
setaCookie ($nome, $conteudo, $tempoDeVida);
?>