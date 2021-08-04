<?php
//http://localhost/sites/mundois/php/verifycampotime.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$campo = $_POST['campo'];
$nomeTime = $_POST['timeAtual'];


//$nomeTime = "Coqueiros";
//$campo = "corSecundaria";

$buscarmpo = mysqli_query($con, "SELECT $campo FROM times WHERE nomeTime='$nomeTime'");

if($buscarmpo) {
	while ($rows =  mysqli_fetch_array($buscarmpo)) {
	echo "<xmlbacia><conteudo>".$rows['0']."</conteudo><campo>$campo</campo></xmlbacia>";
}
} else {
	echo "<xmlbacia><erro2>erro ao carregar dados do time</erro2><campo>$campo</campo></xmlbacia>"; 
}

?>