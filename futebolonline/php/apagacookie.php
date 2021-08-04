<?php
//http://localhost/sites/mundois/php/apagacookie.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nome = $_POST[nome];

function apagaCookie ($nome) {
	if(isset($_COOKIE[$nome])) {
		echo "<xmlbacia><deletado>1</deletado><cookieconteudo>$_COOKIE[$nome]</cookieconteudo><cookienome>$nome</cookienome></xmlbacia>";
		
	} else {
		echo "<xmlbacia><deletado>0</deletado><cookieconteudo>$_COOKIE[$nome]</cookieconteudo><cookienome>$nome</cookienome></xmlbacia>";
	}
};
apagaCookie ($nome);
?>