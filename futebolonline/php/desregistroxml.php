<?php
//http://localhost/sites/mundois/php/desregistroxml.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

//Recebido do FLASH
$userID = $_POST[userID];
//$userID = 9;

#mysql_connect("localhost", "root", "931777") or die("Não pode conectar: " . mysqli_error());
#mysql_select_db("futebol");

$result = mysqli_query($con, "DELETE FROM cadastros WHERE userID='$userID' LIMIT 1");
if($result) {
	echo "<xmlbacia><resposta>Conta Deletada</resposta><userid>$userID</userid></xmlbacia>";
} else {
	die("<xmlbacia><resposta>erro do mysql</resposta><userid>$userID</userid></xmlbacia>");
}

?>