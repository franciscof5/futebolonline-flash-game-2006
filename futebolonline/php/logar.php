<?php
global $con;
$con = mysqli_connect("localhost", "root", "teste123", "futebol") or die("N�o pode conectar: " . mysqli_error());

#mysql_select_db("futebol");

?>