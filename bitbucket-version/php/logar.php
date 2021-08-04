<?php
global $con;
HOST NAME
$con = mysqli_connect("localhost", "root", "teste123", "futebol") or die("Não pode conectar: " . mysqli_error());

#mysql_select_db("futebol");

?>