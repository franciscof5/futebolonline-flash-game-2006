<?php
//http://localhost/sites/mundois/php/verifycampotime.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

//$campo = $_POST['campo'];
$nomeTime = $_POST['timeAdversario'];


//$nomeTime = "Coqueiros";
//$campo = "corSecundaria";

$buscarmpo = mysqli_query($con, "SELECT * FROM times WHERE nomeTime='$nomeTime'");

if($buscarmpo) {
	/*while ($rows =  mysqli_fetch_array($buscarmpo)) {
		echo "".$rows['0']."</conteudo><campo>$campo</campo></xmlbacia>";
	}*/
	$rows = array();
	while($r = mysqli_fetch_assoc($buscarmpo)) {
    	$rows[] = $r;
	}
	print json_encode($rows);
} else {
	echo "<xmlbacia><erro2>erro ao carregar dados do time</erro2><campo>$campo</campo></xmlbacia>"; 
}

?>