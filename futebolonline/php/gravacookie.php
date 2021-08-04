<?php
//http://localhost/sites/mundois/php/gravacookie.php



//function setaCookie () {
$nomeCookie           = $_POST["nomeCookie"];
$conteudo       = $_POST["conteudo"];
$tempoDeVida    = $_POST["tempoDeVida"];
//Tempo de vida é passado em segundos e vira TCHAM minutos
//$tempoDeVida *=60;
setcookie($nomeCookie, $conteudo);//, time() + $tempoDeVida, "/");
echo "<xmlbacia><set>Setando</set><conteudo>$conteudo</conteudo><cookienome>$nomeCookie</cookienome></xmlbacia>";

//};
//setaCookie ();
?>