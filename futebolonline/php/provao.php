<?php
//http://localhost/sites/mundois/php/provao.php

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

$numeroDaQuestao = $_POST["numeroDaQuestao"];

//$qc = "SELECT COUNT(*) FROM provao";
//$numeroDaQuestao = mysqli_query($con, $qc);

$result = mysqli_query($con, "SELECT * FROM provao");
$totalQuestoes = mysqli_num_rows($result);

$numeroDaQuestao = rand(1, $numeroDaQuestao);
$userbusca = mysqli_query($con, "SELECT * FROM provao WHERE questaoID=$numeroDaQuestao");

while ($row = mysqli_fetch_array($userbusca)) {
	//echo $numeroDaQuestao;
	echo "<provao>";
	echo "<questao>".$row["questao"]."</questao>";
	echo "<resposta1>".$row["resposta1"]."</resposta1>";
	echo "<resposta2>".$row["resposta2"]."</resposta2>";
	echo "<resposta3>".$row["resposta3"]."</resposta3>";
	echo "<resposta4>".$row["resposta4"]."</resposta4>";
	echo "<respostacerta>".$row["respostacerta"]."</respostacerta>";
	echo "<questaoJaFoi>$numeroDaQuestao</questaoJaFoi>";
	echo "</provao>";
}

?>