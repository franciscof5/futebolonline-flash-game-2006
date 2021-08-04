<?php
//http://localhost/sites/mundois/atualizacadastros.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

//for($i=0;$i<50;$i++) {
$buscampo = mysqli_query($con, "SELECT estadioNome FROM times WHERE estadioNome=''");

if($buscampo) {
	while ($row = mysqli_fetch_array($buscampo)) {
		for($i=0;$i<50;$i++)
		$atercampo = mysqli_query($con, "UPDATE times SET estadioNome='Sem estadio' WHERE timeID=$i LIMIT 1 ;");
		$row['estadioNome'] = "Sem estádio";
		echo "Ficou : ".$row['estadioNome'];
	}
} else {
	echo "Erro ".mysqli_error(); 
}


?>