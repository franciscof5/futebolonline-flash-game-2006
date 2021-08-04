<?php
//http://localhost/sites/mundois/php/abrecookie.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$nome = $_POST[nome];

function verificaCookie ($nome) {
/*
// define os cookies
setcookie("cookie[three]", "cookiethree");
setcookie("cookie[two]", "cookietwo");
setcookie("cookie[one]", "cookieone");

// após a pagina recarregar, mostra eles
if (isset($_COOKIE['cookie'])) {
   foreach ($_COOKIE['cookie'] as $name => $value) {
       echo "$name : $value <br />\n";
   }
}*/
	if(isset($_COOKIE[$nome])) {
		echo "<xmlbacia><verifica>1</verifica><cookieconteudo>$_COOKIE[$nome]</cookieconteudo><cookienome>$nome</cookienome></xmlbacia>";
	} else {
		echo "<xmlbacia><verifica>0</verifica><cookieconteudo>$_COOKIE[$nome]</cookieconteudo><cookienome>$nome</cookienome></xmlbacia>";
	}
};
verificaCookie ($nome);
?>