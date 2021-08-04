<?php
//http://localhost/sites/mundois/php/logarxml.php

//2017-06-01-03:42 - Estou aqui recuperando todo esse trampo, não acredito que estou fazendo isso, parece impossível de crer que todo esse trampo estava parado, sem servidor, fui sabotado pela falta de recursos, continuo sofrendo muito, não passo fome, mas é foda tentar fazer algumas coisas e ninguém entender, recuperar esse jogo é outro coisa que parece só ter valor para mim, mas não tem problema, estou muito feliz em estar tendo progresso, quero integrar com o wordpress e a Fnetwork, vai ser um grande salta, to aqui tomando um café de madruga e passeando com o pirata! adorei conversar comigo mesmo por comentários!

//Abrir arqvuio externo para conectar no banco de dados 29 out 2005
include("logar.php");

if($_POST) {
	$usuario = $_POST["usuario"];
	$senha = $_POST["senha"];
}

//$usuario = "chico";
//$senha = "1234";

#echo "<xmlbacia><aceito>1</aceito><tecnico>1</tecnico><userID>60</userID></xmlbacia>";

#var_dump($con);
#var_dump($_POST);die;
$result = mysqli_query($con, "SELECT userID,pass,tecnico FROM cadastros WHERE user='$usuario' LIMIT 1");
if($result) {
	while ($row = mysqli_fetch_array($result)) {
		if($senha == $row["pass"]) {
			echo "<xmlbacia><aceito>1</aceito><tecnico>".$row['tecnico']."</tecnico><userID>".$row['userID']."</userID></xmlbacia>";
		}
		//while ($row = mysqli_query($result, $con)) {
		//$result2 = mysqli_query($con, "SELECT * FROM cadastros WHERE userID='$row[0]'");
		//if($result2) {
			//while ($row = mysqli_fetch_array($result2)) {
				//if ($row['user']==$usuario and $row['pass']==$senha)
				//echo "<xmlbacia><aceito>1</aceito><tecnico>".$row['tecnico']."</tecnico><userID>".$row['userID']."</userID></xmlbacia>";
				//else
				//echo "<xmlbacia><aceito>0</aceito><tecnico>0</tecnico></xmlbacia>";
			//}
		//} 
		/*else {
			die('Erro: ' . mysqli_error($con));
		}*/
		
	}
} /*else {
	die('Erro: ' . mysqli_error($con));
}
mysqli_free_result($result);
mysqli_free_result($result2);*/
?>