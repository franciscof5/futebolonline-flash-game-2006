<?php
//http://localhost/sites/mundois/atualizacadastros.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

//for($i=0;$i<50;$i++) {
$buscampo = mysql_query("SELECT estadioNome FROM times WHERE estadioNome=''");

if($buscampo) {
	while ($row = mysql_fetch_array($buscampo)) {
		for($i=0;$i<50;$i++)
		$atercampo = mysql_query("UPDATE times SET estadioNome='Sem estadio' WHERE timeID=$i LIMIT 1 ;");
		$row['estadioNome'] = "Sem estádio";
		echo "Ficou : ".$row['estadioNome'];
	}
} else {
	echo "Erro ".mysql_error(); 
}


?>