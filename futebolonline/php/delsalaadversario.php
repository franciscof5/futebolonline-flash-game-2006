<?php
//http://localhost/sites/mundois/php/delsala.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

//Recebido do FLASH
$timeAdversario = $_POST['timeAdversario'];

$result = mysqli_query($con, "DELETE FROM salas WHERE timeAdversario='$timeAdversario'");
if($result) {
	echo "<xmlbacia><resposta>Sala Deletada</resposta><sala>$timeAdversario</sala></xmlbacia>";
} else {
	die("<xmlbacia><resposta>erro do mysql</resposta><userid>$userID</userid></xmlbacia>");
}

?>