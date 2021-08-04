<?php
//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$tabela = $_POST['tabela'];
$campo = $_POST['campo'];
$valor = $_POST['valor'];

if(isset($valor) && $valor!="undefined")
	$q = "SELECT * FROM $tabela WHERE $campo='$valor'";
else
	$q = "SELECT * FROM $tabela";

$res = mysqli_query($con, $q);
//echo $q;
//die;
if($res) {
	$rows = array();
	while($r = mysqli_fetch_assoc($res)) {
    	$rows[] = $r;
	}
	print json_encode($rows);
} else {
	echo "mysql_query_erro";//retorna um json vazio
	//echo $q;
	die;
}

?>