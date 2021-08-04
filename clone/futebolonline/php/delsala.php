<?php
//http://localhost/sites/mundois/php/delsala.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

//Recebido do FLASH
$nomeSala = $_POST['nomeSala'];

$result = mysql_query("DELETE FROM salas WHERE nomeSala='$nomeSala' LIMIT 1");
if($result) {
	echo "<xmlbacia><resposta>Sala Deletada</resposta><sala>$nomeSala</sala></xmlbacia>";
} else {
	die("<xmlbacia><resposta>".mysql_error()."</resposta><userid>$userID</userid></xmlbacia>");
}

?>