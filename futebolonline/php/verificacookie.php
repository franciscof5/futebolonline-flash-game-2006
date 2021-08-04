<?php
//http://localhost/sites/mundois/php/abrecookie.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
//include("logar.php");

$nomeCookie = $_POST["nomeCookie"];

//function verificaCookie () {
	if(isset($_COOKIE[$nomeCookie])) {
		echo "<xmlbacia><verifica>1</verifica><cookieconteudo>$_COOKIE[$nome]</cookieconteudo><cookienome>$nomeCookie</cookienome></xmlbacia>";
	} else {
		echo "<xmlbacia><verifica>0</verifica><cookieconteudo>0</cookieconteudo><cookienome>$nomeCookie</cookienome></xmlbacia>";
	}
//};
//verificaCookie ($nome);
?>