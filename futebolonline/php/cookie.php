<?php
//http://localhost/sites/mundois/php/cookie.php

$chamadaDeFlash = $_POST[chamadaDeFlash];
$nome           = $_POST[nome];
$conteudo       = $_POST[conteudo];
$tempoDeVida    = $_POST[tempoDeVida];


if($chamadaDeFlash=="setar") {
	setaCookie($nome , $conteudo, $tempoDeVida);
} else if ($chamadaDeFlash=="verificar") {
	verificaCookie($nome);
}

function setaCookie ($nome, $conteudo, $tempoDeVida) {
	//Tempo de vida é passado em segundos e vira TCHAM minutos
	$tempoDeVida /=60;
	setcookie($nome, $conteudo);//, time() + $tempoDeVida, "/");
	echo "<xmlbacia><set>Setando</set><cookienome>$nome</cookienome></xmlbacia>";
};

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
		echo "<xmlbacia><verifica>1</verifica><cookienome>$_COOKIE[$nome]</cookienome></xmlbacia>";
	} else {
		echo "<xmlbacia><verifica>0</verifica><cookienome>$nome</cookienome></xmlbacia>";
	}
};

?>