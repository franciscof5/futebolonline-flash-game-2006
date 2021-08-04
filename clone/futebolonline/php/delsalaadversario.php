<?php
//http://localhost/sites/mundois/php/delsala.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

//Recebido do FLASH
$timeAdversario = $_POST['timeAdversario'];

$result = mysql_query("DELETE FROM salas WHERE timeAdversario='$timeAdversario'");
if($result) {
	echo "<xmlbacia><resposta>Sala Deletada</resposta><sala>$timeAdversario</sala></xmlbacia>";
} else {
	die("<xmlbacia><resposta>".mysql_error()."</resposta><userid>$userID</userid></xmlbacia>");
}

?>