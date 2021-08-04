<?
//http://localhost/sites/mundois/php/preenchertabela.php
mysql_connect("localhost", "futebol", "167943fu") or die("Não pode conectar: " . mysql_error());
mysql_select_db("futebol2");

$result = mysql_query("
-- phpMyAdmin SQL Dump
-- version 2.6.3-pl1
-- http://www.phpmyadmin.net
-- 
-- Servidor: localhost
-- Tempo de Geração: Out 28, 2005 as 06:54 PM
-- Versão do Servidor: 4.1.14
-- Versão do PHP: 5.0.5
-- 
-- Banco de Dados: `futebol`
-- 

-- --------------------------------------------------------

-- 
-- Estrutura da tabela `cadastros`
-- 

CREATE TABLE `cadastros` (
  `nome` varchar(40) NOT NULL default '',
  `email` varchar(40) NOT NULL default '',
  `sexo` varchar(10) NOT NULL default '',
  `user` varchar(10) NOT NULL default '',
  `pass` varchar(10) NOT NULL default '',
  `dataCriouConta` varchar(20) NOT NULL default '',
  `dataUltimoLog` varchar(20) NOT NULL default '',
  `tecnico` int(2) NOT NULL default '0',
  `timeQueDesejaDirigir` varchar(20) NOT NULL default '',
  `notaProvao` int(2) NOT NULL default '0',
  `timeAtual` varchar(20) NOT NULL default '',
  `timesPassados` varchar(255) NOT NULL default '',
  `jogos` int(10) NOT NULL default '0',
  `vitorias` int(10) NOT NULL default '0',
  `derrotas` int(10) NOT NULL default '0',
  `userID` int(10) NOT NULL auto_increment,
  PRIMARY KEY  (`userID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=48 ;

-- 
-- Extraindo dados da tabela `cadastros`
-- 

INSERT INTO `cadastros` VALUES ('Jose Alvorado', 'josalv@hotmail.com', 'masculino', 'joselito', 'jose', '27/10/2005-11:51', '27/10/2005-12:03', 1, '0', 8, 'Vassoura', '0', 0, 0, 0, 47);
INSERT INTO `cadastros` VALUES ('Francisco Matelli4', 'okemail@ig.com4', 'masculino', 'deusoke4', '931777', '24/10/2005-18:47', '24/10/2005-18:48', 1, '0', 8, 'Chico Matulovic', '0', 0, 0, 0, 46);
INSERT INTO `cadastros` VALUES ('Francisco Matelli3', 'okemail@ig.com3', 'masculino', 'deusoke3', '931777', '23/10/2005-23:56', '27/10/2005-11:22', 1, '0', 8, 'S C Santa Catarina', '0', 0, 0, 0, 45);
INSERT INTO `cadastros` VALUES ('Francisco Matelli2', 'okemail@ig.com2', 'masculino', 'deusoke2', '9317772', '23/10/2005-19:22', '27/10/2005-10:02', 1, '0', 8, 'Timex', '0', 0, 0, 0, 44);
INSERT INTO `cadastros` VALUES ('Luciano Matelli', 'lucianomatelli@hotmail.com', 'masculino', 'luciano', '123456', '22/10/2005-16:53', '22/10/2005-17:48', 1, '0', 8, 'Itapetininga F.C.', '0', 0, 0, 0, 43);
INSERT INTO `cadastros` VALUES ('Francisco Matelli', 'okemail@ig.com', 'masculino', 'deusoke1', '931777', '21/10/2005-00:25', '21/10/2005-00:26', 1, '0', 8, 'Josãã?', '0', 0, 0, 0, 42);
INSERT INTO `cadastros` VALUES ('Francisco Matelli Matulovic', 'okemail@ig.com.br', 'masculino', 'deusoke', '931777', '20/10/2005-10:22', '27/10/2005-14:48', 1, '0', 0, 'Coqueiros', '0', 0, 0, 0, 40);

-- --------------------------------------------------------

-- 
-- Estrutura da tabela `jogadores`
-- 

CREATE TABLE `jogadores` (
  `nome` varchar(255) NOT NULL default '',
  `nacionalidade` varchar(50) NOT NULL default '',
  `posicao` varchar(20) NOT NULL default '',
  `media` int(2) NOT NULL default '0',
  `valorPasse` decimal(4,2) NOT NULL default '0.00',
  `salario` int(6) NOT NULL default '0',
  `energia` int(2) NOT NULL default '0',
  `escalado` int(1) NOT NULL default '0',
  `suspenso` int(1) NOT NULL default '0',
  `timeAtual` varchar(20) NOT NULL default '',
  `avenda` int(1) NOT NULL default '0',
  `dataCriouJogador` varchar(20) NOT NULL default '',
  `jogadorID` int(10) NOT NULL auto_increment,
  PRIMARY KEY  (`jogadorID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=133 ;

-- 
-- Extraindo dados da tabela `jogadores`
-- 

INSERT INTO `jogadores` VALUES ('Amauri Jr.', 'Brasil', 'Zagueiro', 10, 999.99, 10000, 0, 1, 0, 'sem time', 0, 'hoje', 1);
INSERT INTO `jogadores` VALUES ('Jogador Keko', 'Brasil', 'Goleiro', 10, 999.99, 12351, 0, 0, 0, 'sem time', 0, '17/10/2005-17:14', 2);
INSERT INTO `jogadores` VALUES ('Mercenário Objeto', 'Brasil', 'Lateral Esq', 14, 5.76, 17, 0, 1, 0, 'S C Santa Catarina', 0, '17/10/2005-17:15', 3);
INSERT INTO `jogadores` VALUES ('54455', 'Brasil', 'Zagueiro', 1, 0.00, 1, 0, 1, 0, 'S C Santa Catarina', 0, '17/10/2005-17:26', 4);
INSERT INTO `jogadores` VALUES ('Francisco Matelli', 'Brasil', 'Zagueiro', 1, 0.00, 1, 0, 0, 0, 'sem time', 0, '17/10/2005-17:26', 5);
INSERT INTO `jogadores` VALUES ('Marcos', 'Brasil', 'Goleiro', 3, 0.00, 4, 0, 1, 0, 'S C Santa Catarina', 0, '19/10/2005-10:58', 7);
INSERT INTO `jogadores` VALUES ('João Paulo', 'Brasil', 'Lateral Esq', 3, 0.00, 4, 0, 0, 0, 'Palmeiras', 0, '19/10/2005-10:58', 8);
INSERT INTO `jogadores` VALUES ('Marcio', 'Brasil', 'Goleiro', 5, 0.00, 7, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:39', 9);
INSERT INTO `jogadores` VALUES ('Leandro', 'Brasil', 'Zagueiro', 3, 0.51, 11, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:40', 10);
INSERT INTO `jogadores` VALUES ('Roberto', 'Brasil', 'Zagueiro', 3, 0.00, 15, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:40', 11);
INSERT INTO `jogadores` VALUES ('Edson', 'Brasil', 'Lateral Esq', 0, 0.00, 15, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:40', 12);
INSERT INTO `jogadores` VALUES ('Robson', 'Brasil', 'Lateral Dir', 4, 0.00, 20, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:41', 13);
INSERT INTO `jogadores` VALUES ('Alex', 'Brasil', 'Meio-Campo', 4, 1.00, 25, 0, 1, 0, 'S C Santa Catarina', 0, '19/10/2005-18:41', 14);
INSERT INTO `jogadores` VALUES ('Denis', 'Brasil', 'Meio-Campo', 3, 1.00, 29, 0, 1, 0, 'Coqueiros', 0, '19/10/2005-18:41', 15);
INSERT INTO `jogadores` VALUES ('Pedro', 'Brasil', 'Meio-Campo', 4, 1.00, 34, 0, 1, 0, 'Timex', 0, '19/10/2005-18:42', 16);
INSERT INTO `jogadores` VALUES ('Luciano', 'Brasil', 'Atacante', 25, 1.35, 33, 0, 1, 0, 'Palmitos', 0, '22/10/2005-17:05', 82);
INSERT INTO `jogadores` VALUES ('Renato', 'Brasil', 'Atacante', 23, 1.25, 30, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-17:05', 83);
INSERT INTO `jogadores` VALUES ('Edilson', 'Brasil', 'Lateral Esq', 3, 2.00, 54, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:42', 19);
INSERT INTO `jogadores` VALUES ('Vagem', 'Brasil', 'Meio-Campo', 9, 2.00, 65, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:43', 20);
INSERT INTO `jogadores` VALUES ('jairo', 'Brasil', 'Goleiro', 10, 3.00, 78, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:43', 21);
INSERT INTO `jogadores` VALUES ('Duda', 'Brasil', 'Zagueiro', 4, 3.00, 84, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:44', 22);
INSERT INTO `jogadores` VALUES ('Tonio', 'Brasil', 'Lateral Dir', 9, 3.00, 95, 0, 1, 0, 'Palmitos', 0, '19/10/2005-18:44', 23);
INSERT INTO `jogadores` VALUES ('Kibo', 'Brasil', 'Goleiro', 3, 7.25, 4, 0, 0, 0, 'Palmitos', 0, '19/10/2005-21:35', 24);
INSERT INTO `jogadores` VALUES ('Cocrete', 'Brasil', 'Zagueiro', 2, 0.00, 7, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:35', 25);
INSERT INTO `jogadores` VALUES ('Empada', 'Brasil', 'Zagueiro', 0, 0.00, 7, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:36', 26);
INSERT INTO `jogadores` VALUES ('Cada', 'Brasil', 'Lateral Esq', 2, 1.53, 10, 0, 0, 0, 'Palmitos', 0, '19/10/2005-21:36', 27);
INSERT INTO `jogadores` VALUES ('Anota', 'Brasil', 'Lateral Dir', 4, 0.00, 15, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:36', 28);
INSERT INTO `jogadores` VALUES ('Tudo', 'Brasil', 'Meio-Campo', 2, 0.00, 17, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:36', 29);
INSERT INTO `jogadores` VALUES ('Coxinha', 'Brasil', 'Atacante', 5, 1.00, 24, 0, 0, 0, 'Palmitos', 0, '19/10/2005-21:36', 30);
INSERT INTO `jogadores` VALUES ('Coxinha2', 'Brasil', 'Atacante', 6, 1.00, 32, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:36', 31);
INSERT INTO `jogadores` VALUES ('Coxinha3', 'Brasil', 'Atacante', 6, 1.00, 40, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:36', 32);
INSERT INTO `jogadores` VALUES ('Coxinha4', 'Brasil', 'Atacante', 9, 2.00, 51, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:36', 33);
INSERT INTO `jogadores` VALUES ('Coxola', 'Brasil', 'Atacante', 6, 2.00, 59, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:36', 34);
INSERT INTO `jogadores` VALUES ('Coxola1', 'Brasil', 'Atacante', 2, 2.00, 62, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:36', 35);
INSERT INTO `jogadores` VALUES ('Coxola5', 'Brasil', 'Atacante', 3, 2.00, 65, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:37', 36);
INSERT INTO `jogadores` VALUES ('Coxola6', 'Brasil', 'Atacante', 0, 2.00, 65, 0, 0, 0, 'Pri S C La', 0, '19/10/2005-21:37', 37);
INSERT INTO `jogadores` VALUES ('adsasdas', 'Brasil', 'Zagueiro', 1, 0.00, 2, 0, 0, 0, 'Forense', 0, '19/10/2005-21:56', 38);
INSERT INTO `jogadores` VALUES ('3682775', 'Brasil', 'Zagueiro', 5, 0.00, 7, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 39);
INSERT INTO `jogadores` VALUES ('241765', 'Brasil', 'Zagueiro', 4, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 40);
INSERT INTO `jogadores` VALUES ('3499274', 'Brasil', 'Zagueiro', 0, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 41);
INSERT INTO `jogadores` VALUES ('218061', 'Brasil', 'Zagueiro', 0, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 42);
INSERT INTO `jogadores` VALUES ('4857465', 'Brasil', 'Zagueiro', 0, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 43);
INSERT INTO `jogadores` VALUES ('1609978', 'Brasil', 'Zagueiro', 0, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 44);
INSERT INTO `jogadores` VALUES ('1729373', 'Brasil', 'Zagueiro', 0, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 45);
INSERT INTO `jogadores` VALUES ('1104775', 'Brasil', 'Zagueiro', 0, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 46);
INSERT INTO `jogadores` VALUES ('112913', 'Brasil', 'Zagueiro', 0, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 47);
INSERT INTO `jogadores` VALUES ('4897286', 'Brasil', 'Zagueiro', 0, 0.00, 12, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 48);
INSERT INTO `jogadores` VALUES ('3458042', 'Brasil', 'Zagueiro', 10, 1.00, 25, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 49);
INSERT INTO `jogadores` VALUES ('1481378', 'Brasil', 'Zagueiro', 10, 1.00, 38, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 50);
INSERT INTO `jogadores` VALUES ('4209307', 'Brasil', 'Zagueiro', 10, 2.00, 51, 0, 0, 0, 'Mattos', 0, '19/10/2005-23:54', 51);
INSERT INTO `jogadores` VALUES ('4882935', 'Brasil', 'Zagueiro', 0, 0.00, 1, 0, 0, 0, 'SOzul', 0, '20/10/2005-00:21', 52);
INSERT INTO `jogadores` VALUES ('Kadu', 'Brasil', 'Zagueiro', 8, 0.00, 11, 0, 0, 0, 'undefined', 0, '20/10/2005-17:20', 53);
INSERT INTO `jogadores` VALUES ('Cachorro', 'Brasil', 'Zagueiro', 25, 1.00, 33, 0, 0, 0, 'undefined', 0, '20/10/2005-17:21', 54);
INSERT INTO `jogadores` VALUES ('Fefeu', 'Brasil', 'Zagueiro', 18, 1.00, 24, 0, 0, 0, 'undefined', 0, '20/10/2005-17:22', 55);
INSERT INTO `jogadores` VALUES ('JoÃ£o NinguÃ©m', 'Brasil', 'Zagueiro', 13, 0.00, 17, 0, 0, 0, 'undefined', 0, '20/10/2005-17:22', 56);
INSERT INTO `jogadores` VALUES ('Vidal', 'Brasil', 'Zagueiro', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 57);
INSERT INTO `jogadores` VALUES ('Lurdes', 'Brasil', 'Zagueiro', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 58);
INSERT INTO `jogadores` VALUES ('Gilberto', 'Brasil', 'Zagueiro', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 59);
INSERT INTO `jogadores` VALUES ('Lilo', 'Brasil', 'Zagueiro', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 60);
INSERT INTO `jogadores` VALUES ('Metaleiro', 'Brasil', 'Lateral Esq', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 61);
INSERT INTO `jogadores` VALUES ('Irapuã', 'Brasil', 'Lateral Dir', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 62);
INSERT INTO `jogadores` VALUES ('Pau no Cu', 'Brasil', 'Meio-Campo', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 63);
INSERT INTO `jogadores` VALUES ('Lazaro Ramos', 'Brasil', 'Atacante', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 64);
INSERT INTO `jogadores` VALUES ('Podridao', 'Brasil', 'Atacante', 3, 0.25, 4, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 65);
INSERT INTO `jogadores` VALUES ('Pensador', 'Brasil', 'Atacante', 5, 0.35, 7, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 66);
INSERT INTO `jogadores` VALUES ('João Ninguém', 'Brasil', 'Goleiro', 9, 0.55, 12, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 67);
INSERT INTO `jogadores` VALUES ('Cavalo', 'Brasil', 'Goleiro', 9, 0.55, 12, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 68);
INSERT INTO `jogadores` VALUES ('Atoladinho', 'Brasil', 'Goleiro', 9, 0.55, 12, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 69);
INSERT INTO `jogadores` VALUES ('Zoeing Splash', 'Brasil', 'Lateral Dir', 9, 0.55, 12, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:26', 70);
INSERT INTO `jogadores` VALUES ('Carlos Manuel', 'Brasil', 'Lateral Esq', 9, 0.55, 12, 0, 0, 0, 'Josãã?', 0, '21/10/2005-00:27', 71);
INSERT INTO `jogadores` VALUES ('Chulapa', 'Brasil', 'Goleiro', 25, 1.35, 33, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-16:58', 72);
INSERT INTO `jogadores` VALUES ('Marcelo', 'Brasil', 'Goleiro', 12, 0.70, 16, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-16:58', 73);
INSERT INTO `jogadores` VALUES ('Carlinhos', 'Brasil', 'Zagueiro', 25, 1.35, 33, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-16:59', 74);
INSERT INTO `jogadores` VALUES ('Adalberto', 'Brasil', 'Zagueiro', 25, 1.35, 33, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-16:59', 75);
INSERT INTO `jogadores` VALUES ('Flavio', 'Brasil', 'Lateral Esq', 25, 1.35, 33, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-16:59', 76);
INSERT INTO `jogadores` VALUES ('Cléber', 'Brasil', 'Lateral Dir', 25, 1.35, 33, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-17:00', 77);
INSERT INTO `jogadores` VALUES ('Sanchés', 'Bolívia', 'Lateral Dir', 25, 1.35, 33, 0, 1, 0, 'Timex', 0, '22/10/2005-17:00', 78);
INSERT INTO `jogadores` VALUES ('Alexandre', 'Brasil', 'Meio-Campo', 25, 1.35, 33, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-17:01', 79);
INSERT INTO `jogadores` VALUES ('Rafael', 'Brasil', 'Meio-Campo', 25, 1.35, 33, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-17:03', 80);
INSERT INTO `jogadores` VALUES ('Gustavo', 'Brasil', 'Meio-Campo', 20, 1.10, 27, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-17:04', 81);
INSERT INTO `jogadores` VALUES ('Ramón', 'Argentina', 'Atacante', 24, 1.30, 32, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-17:05', 84);
INSERT INTO `jogadores` VALUES ('Tadeu', 'Brasil', 'Meio-Campo', 21, 1.15, 28, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-17:06', 85);
INSERT INTO `jogadores` VALUES ('Lucas', 'Brasil', 'Atacante', 24, 1.30, 32, 0, 0, 0, 'Itapetininga F.C.', 0, '22/10/2005-17:07', 86);
INSERT INTO `jogadores` VALUES ('Jesus', 'Brasil', 'Zagueiro', 5, 0.35, 7, 0, 1, 0, 'Timex', 0, '23/10/2005-19:23', 87);
INSERT INTO `jogadores` VALUES ('Vinicius', 'Brasil', 'Zagueiro', 5, 0.35, 7, 0, 1, 0, 'Coqueiros', 0, '23/10/2005-19:23', 88);
INSERT INTO `jogadores` VALUES ('Ximarrão', 'Brasil', 'Zagueiro', 5, 0.35, 7, 0, 1, 0, 'S C Santa Catarina', 0, '23/10/2005-19:23', 89);
INSERT INTO `jogadores` VALUES ('Corno', 'Brasil', 'Zagueiro', 8, -0.25, -8, 0, 1, 0, 'Timex', 0, '23/10/2005-19:23', 90);
INSERT INTO `jogadores` VALUES ('Artista', 'Brasil', 'Zagueiro', 8, -0.25, -8, 0, 1, 0, 'Timex', 0, '23/10/2005-19:23', 91);
INSERT INTO `jogadores` VALUES ('Paulo', 'Brasil', 'Zagueiro', 8, -0.25, -8, 0, 1, 0, 'Timex', 0, '23/10/2005-19:23', 92);
INSERT INTO `jogadores` VALUES ('Zéquinha', 'Brasil', 'Zagueiro', 8, -0.25, -8, 0, 1, 0, 'Coqueiros', 0, '23/10/2005-19:23', 93);
INSERT INTO `jogadores` VALUES ('Slipknot', 'Brasil', 'Zagueiro', 16, -1.45, -39, 0, 1, 0, 'Coqueiros', 1, '23/10/2005-19:24', 94);
INSERT INTO `jogadores` VALUES ('José Alguém', 'Brasil', 'Zagueiro', 16, -1.45, -39, 0, 1, 0, 'Timex', 0, '23/10/2005-19:24', 95);
INSERT INTO `jogadores` VALUES ('Joia', 'Brasil', 'Zagueiro', 16, -1.45, -39, 0, 1, 0, 'Coqueiros', 1, '23/10/2005-19:24', 96);
INSERT INTO `jogadores` VALUES ('Timexa', 'Brasil', 'Zagueiro', 16, -1.45, -39, 0, 1, 0, 'Coqueiros', 1, '23/10/2005-19:24', 97);
INSERT INTO `jogadores` VALUES ('Extremista', 'Brasil', 'Zagueiro', 16, -1.45, -39, 0, 0, 0, 'Palmitos', 0, '23/10/2005-19:24', 98);
INSERT INTO `jogadores` VALUES ('Lesado', 'Brasil', 'Zagueiro', 16, -1.45, -39, 0, 1, 0, 'Timex', 0, '23/10/2005-19:24', 99);
INSERT INTO `jogadores` VALUES ('Cu Sujo', 'Brasil', 'Zagueiro', 16, -1.45, -39, 0, 1, 0, 'Timex', 0, '23/10/2005-19:24', 100);
INSERT INTO `jogadores` VALUES ('To Quartz', 'Brasil', 'Zagueiro', 5, 0.35, 7, 0, 1, 0, 'S C Santa Catarina', 0, '23/10/2005-23:57', 102);
INSERT INTO `jogadores` VALUES ('Jr. Juninho', 'Brasil', 'Goleiro', 5, 0.35, 7, 0, 0, 0, 'S C Santa Catarina', 0, '23/10/2005-23:57', 101);
INSERT INTO `jogadores` VALUES ('Brain Demage', 'Brasil', 'Zagueiro', 5, 0.35, 7, 0, 1, 0, 'S C Santa Catarina', 0, '23/10/2005-23:57', 103);
INSERT INTO `jogadores` VALUES ('Xobai', 'Brasil', 'Zagueiro', 5, 0.35, 7, 0, 1, 0, 'S C Santa Catarina', 0, '23/10/2005-23:57', 104);
INSERT INTO `jogadores` VALUES ('Beto', 'Brasil', 'Lateral Esq', 5, 0.35, 7, 0, 1, 0, 'S C Santa Catarina', 0, '23/10/2005-23:57', 105);
INSERT INTO `jogadores` VALUES ('Virgulino', 'Brasil', 'Lateral Esq', 5, 0.35, 7, 0, 1, 0, 'S C Santa Catarina', 0, '23/10/2005-23:58', 106);
INSERT INTO `jogadores` VALUES ('Espirilo', 'Brasil', 'Lateral Dir', 5, 0.35, 7, 0, 1, 0, 'Coqueiros', 0, '23/10/2005-23:58', 107);
INSERT INTO `jogadores` VALUES ('Pira', 'Brasil', 'Lateral Dir', 5, 0.35, 7, 0, 1, 0, 'Coqueiros', 0, '23/10/2005-23:58', 108);
INSERT INTO `jogadores` VALUES ('Merdolino', 'Brasil', 'Meio-Campo', 5, 0.35, 7, 0, 0, 0, 'Palmitos', 0, '23/10/2005-23:58', 109);
INSERT INTO `jogadores` VALUES ('Mantiroso', 'Brasil', 'Meio-Campo', 5, 0.35, 7, 0, 1, 0, 'Coqueiros', 0, '23/10/2005-23:58', 110);
INSERT INTO `jogadores` VALUES ('Senhor da Morte', 'Brasil', 'Meio-Campo', 5, 0.35, 7, 0, 0, 0, 'Palmitos', 0, '23/10/2005-23:58', 111);
INSERT INTO `jogadores` VALUES ('Avançadinho', 'Brasil', 'Atacante', 5, 0.35, 7, 0, 1, 0, 'S C Santa Catarina', 0, '23/10/2005-23:58', 112);
INSERT INTO `jogadores` VALUES ('Deuz', 'Brasil', 'Atacante', 5, 0.35, 7, 0, 0, 0, 'Timex', 0, '23/10/2005-23:58', 113);
INSERT INTO `jogadores` VALUES ('Francisco', 'Brasil', 'Atacante', 5, 0.35, 7, 0, 0, 0, 'S C Santa Catarina', 1, '23/10/2005-23:58', 114);
INSERT INTO `jogadores` VALUES ('Elias', 'Brasil', 'Atacante', 5, 0.35, 7, 0, 0, 0, 'S C Santa Catarina', 0, '23/10/2005-23:58', 115);
INSERT INTO `jogadores` VALUES ('Calouro', 'Brasil', 'Goleiro', 5, 0.35, 7, 0, 1, 0, 'Vassoura', 0, '27/10/2005-11:54', 116);
INSERT INTO `jogadores` VALUES ('Marcos Motta', 'Brasil', 'Zagueiro', 5, 0.35, 7, 0, 1, 0, 'Vassoura', 0, '27/10/2005-11:54', 117);
INSERT INTO `jogadores` VALUES ('José da Silva Xavier', 'Brasil', 'Zagueiro', 5, 0.35, 7, 0, 1, 0, 'Vassoura', 0, '27/10/2005-11:54', 118);
INSERT INTO `jogadores` VALUES ('Ximarruts', 'Brasil', 'Lateral Dir', 8, 0.50, 11, 0, 1, 0, 'Vassoura', 0, '27/10/2005-11:58', 119);
INSERT INTO `jogadores` VALUES ('Meiucho', 'Brasil', 'Meio-Campo', 18, 1.00, 24, 0, 1, 0, 'Vassoura', 0, '27/10/2005-11:59', 120);
INSERT INTO `jogadores` VALUES ('Aceleradinho', 'Brasil', 'Atacante', 18, 1.00, 24, 0, 1, 0, 'Vassoura', 0, '27/10/2005-12:00', 121);
INSERT INTO `jogadores` VALUES ('Olivio', 'Brasil', 'Atacante', 15, 1.75, 43, 0, 1, 0, 'Vassoura', 0, '27/10/2005-12:00', 122);
INSERT INTO `jogadores` VALUES ('Boxer', 'Brasil', 'Atacante', 8, 2.15, 54, 0, 1, 0, 'Vassoura', 0, '27/10/2005-12:00', 123);
INSERT INTO `jogadores` VALUES ('Real', 'Brasil', 'Zagueiro', 24, 1.30, 32, 0, 0, 0, 'Vassoura', 0, '27/10/2005-12:00', 124);
INSERT INTO `jogadores` VALUES ('Bambo', 'Brasil', 'Zagueiro', 12, 1.90, 47, 0, 0, 0, 'Vassoura', 0, '27/10/2005-12:00', 125);
INSERT INTO `jogadores` VALUES ('Cerebro Ataque', 'Brasil', 'Atacante', 7, 2.25, 56, 0, 1, 0, 'Vassoura', 0, '27/10/2005-12:01', 126);
INSERT INTO `jogadores` VALUES ('Soco Certeiro', 'Brasil', 'Meio-Campo', 0, 2.25, 56, 0, 1, 0, 'Vassoura', 0, '27/10/2005-12:01', 127);
INSERT INTO `jogadores` VALUES ('Short Churto', 'Brasil', 'Meio-Campo', 3, 2.40, 60, 0, 0, 0, 'Vassoura', 0, '27/10/2005-12:01', 128);
INSERT INTO `jogadores` VALUES ('Mes que Vem', 'Brasil', 'Lateral Esq', 2, 2.50, 63, 0, 1, 0, 'Vassoura', 0, '27/10/2005-12:01', 129);
INSERT INTO `jogadores` VALUES ('Habilidoso', 'Brasil', 'Lateral Esq', 1, 2.55, 64, 0, 0, 0, 'Vassoura', 1, '27/10/2005-12:01', 130);
INSERT INTO `jogadores` VALUES ('TotÃ³zitos', 'Brasil', 'Lateral Esq', 1, 2.60, 65, 0, 0, 0, 'Vassoura', 1, '27/10/2005-12:02', 131);
INSERT INTO `jogadores` VALUES ('Sem pontos', 'Brasil', 'Lateral Dir', 0, 2.60, 65, 0, 0, 0, 'Vassoura', 0, '27/10/2005-12:02', 132);

-- --------------------------------------------------------

-- 
-- Estrutura da tabela `juizes`
-- 

CREATE TABLE `juizes` (
  `juizNome` varchar(20) NOT NULL default '',
  `jogosApitados` int(4) NOT NULL default '0',
  `avaliacao` int(1) NOT NULL default '0',
  `dureza` int(1) NOT NULL default '0',
  `corrupto` char(1) NOT NULL default '',
  `cartoesVermelhos` int(4) NOT NULL default '0',
  `cartoesAmarelos` int(4) NOT NULL default '0',
  `juizID` int(5) NOT NULL auto_increment,
  PRIMARY KEY  (`juizID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- 
-- Extraindo dados da tabela `juizes`
-- 


-- --------------------------------------------------------

-- 
-- Estrutura da tabela `provao`
-- 

CREATE TABLE `provao` (
  `questaoID` int(2) NOT NULL auto_increment,
  `questao` tinytext NOT NULL,
  `resposta1` varchar(255) NOT NULL default '',
  `resposta2` varchar(255) NOT NULL default '',
  `resposta3` varchar(255) NOT NULL default '',
  `resposta4` varchar(255) NOT NULL default '',
  `respostacerta` int(2) NOT NULL default '0',
  PRIMARY KEY  (`questaoID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

-- 
-- Extraindo dados da tabela `provao`
-- 

INSERT INTO `provao` VALUES (1, 'Quando o brasil foi pentacampeão da copa do mundo?', '1988 quando bateu a Argentina', '2002 vencendo a Alemanha', '1950 no Brasil mesmo, contra o Uruguai', '1994 nos penaltis contra a Italia', 2);
INSERT INTO `provao` VALUES (2, 'Quem era o tecnico da seleção Brasileiro em 1994', 'Emerson Leão', 'Luiz Felipe Escolari', 'Mario Jorge Lobo Zagallo', 'Levir Culpi', 3);
INSERT INTO `provao` VALUES (3, 'Quantas vezes o Brasil foi ouro em Olimpíadas?', 'Uma vez, em Atlanta 1996', 'Cinco Vezes', 'Tres Vezes', 'Nunca', 4);
INSERT INTO `provao` VALUES (4, 'Qual o número da camisa do Pelé nos tempos em que atuava pela Seleção Brasileira?', '10', '7', '9', '4', 1);
INSERT INTO `provao` VALUES (5, 'Tirando a Copa do Mundo da Alemanha 2006, quantas copas o Brasil entrou?', '16 (todas)', '15', '20', '11', 1);
INSERT INTO `provao` VALUES (6, 'Qual a maior goleada Brasileira?', 'Brasil 9x2 Equador', 'Brasil 7x0 Paraguai', 'Brasil 10x1 Bolívia', 'Brasil 21x3 Argentina', 3);
INSERT INTO `provao` VALUES (7, 'Quem introduziu o futebol no Brasil?', 'Michael Jonatan', 'Muhem Hudson', 'Marcelo Pereira', 'Charles Miller', 4);
INSERT INTO `provao` VALUES (8, 'Quantas finais da Copa do Mundo foram decididas nos penaltis?', 'Duas vezes, Uruguai (30) e México (70)', 'Apenas EUA (94)', 'Apenas México (70)', 'Quatro vezes, Uruguai (30) Chile (62) Inglaterra (66) Espanha (82)', 2);
INSERT INTO `provao` VALUES (9, 'Quanta seleções participaram de TODAS as copas do mundo?', 'A seleção brasileira foi a única Seleção que participou de todas as Copas do Mundo', 'Brasil, Argentina e Alemanha (Ocidental e Oriental) participaram de todas', 'Mexico e Argentina', 'Camarões, Brasil, Espanha e França', 1);
INSERT INTO `provao` VALUES (10, 'Qual foi o único campeão brasileiro invicto?', 'Único campeão brasileiro invicto:Vasco(2001)', 'Único campeão brasileiro invicto:Ponte Petra (2001)', 'Único campeão brasileiro invicto:Palmeiras(1996)', 'Único campeão brasileiro invicto:Inter (1979)', 4);
INSERT INTO `provao` VALUES (11, 'Qual o maior estadio de futebol do mundo?', 'Paris', 'Maracanã', 'Noucamp', 'Benfica', 2);
INSERT INTO `provao` VALUES (12, 'Quem inventou o gol de bicicleta?', 'Leônidas da Silva', 'Jônidas da Silva', 'Leônidas Souza', 'Jônidas Souza', 1);
INSERT INTO `provao` VALUES (13, 'Que ano aconteceu a primeira partida de futebol no Brasil?', '1859', '1950', '1895', '1932', 3);
INSERT INTO `provao` VALUES (14, 'Quem marcou o primeiro gol brasileiro em copas do mundo?', 'Leão', 'Preguinho', 'Tito', 'Alves Gonçalves', 2);

-- --------------------------------------------------------

-- 
-- Estrutura da tabela `salas`
-- 

CREATE TABLE `salas` (
  `nomeSala` varchar(20) NOT NULL default '',
  `timeAdversario` varchar(20) NOT NULL default '',
  `valorAposta` double(4,2) NOT NULL default '0.00'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Extraindo dados da tabela `salas`
-- 

INSERT INTO `salas` VALUES ('Teste', 'Coqueiros', 0.00);

-- --------------------------------------------------------

-- 
-- Estrutura da tabela `times`
-- 

CREATE TABLE `times` (
  `nomeTime` varchar(20) NOT NULL default '',
  `numeroBandeiraUniforme` int(2) NOT NULL default '0',
  `estado` varchar(20) NOT NULL default '',
  `corPrimaria` varchar(8) NOT NULL default '0',
  `corSecundaria` varchar(8) NOT NULL default '0',
  `dataCriouJogador` varchar(10) NOT NULL default '',
  `dinheiroIN` decimal(4,2) NOT NULL default '0.00',
  `dinheiroOUT` decimal(4,2) NOT NULL default '0.00',
  `estadio` int(3) NOT NULL default '0',
  `torcedores` int(6) NOT NULL default '0',
  `moral` int(2) NOT NULL default '0',
  `emprestimos` int(1) NOT NULL default '0',
  `timeID` int(5) NOT NULL auto_increment,
  PRIMARY KEY  (`timeID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

-- 
-- Extraindo dados da tabela `times`
-- 

INSERT INTO `times` VALUES ('Palmitos', 5, 'São Paulo', '0x66FF66', '0xF9840F', '21/10/2005', 0.30, 11.95, 1, 0, 80, 0, 3);
INSERT INTO `times` VALUES ('Coqueiros', 2, 'São Paulo', '0xDDBAA8', '0xC0E4AA', '20/10/2005', 619.20, -1.85, 1, 0, 80, 0, 2);
INSERT INTO `times` VALUES ('Totó', 3, 'Tocantins', '0xD7A0E6', '0x94D7BF', '21/10/2005', 1.00, 0.00, 1, 0, 80, 0, 4);
INSERT INTO `times` VALUES ('Itapetininga F.C.', 1, 'São Paulo', '0xF9840F', '0x000000', '22/10/2005', 1.00, 0.00, 1, 0, 80, 0, 5);
INSERT INTO `times` VALUES ('Timex', 3, 'Acre', '0x9CD4E9', '0xF9840F', '23/10/2005', 158.96, 6.05, 1, 0, 80, 0, 6);
INSERT INTO `times` VALUES ('S C Santa Catarina', 2, 'Santa Catarina', '0xFF0000', '0x00FFFF', '23/10/2005', 276.29, 7.11, 1, 0, 80, 0, 7);
INSERT INTO `times` VALUES ('Maneiro', 3, 'Acre', '0xFF9900', '0x5577FF', '24/10/2005', 0.00, 0.00, 0, 0, 0, 0, 8);
INSERT INTO `times` VALUES ('Vassoura', 2, 'São Paulo', '0xFFFF00', '0x3366CC', '27/10/2005', 5.00, 0.00, 0, 0, 0, 0, 15);
INSERT INTO `times` VALUES ('Francisco Matel', 2, 'SÃ£o Paulo', '0x66FFCC', '0xFFFF00', '24/10/2005', 0.00, 0.00, 0, 0, 0, 0, 10);
INSERT INTO `times` VALUES ('Francisc', 2, 'SÃ£o Paulo', '0x66CCFF', '0x00FF00', '24/10/2005', 0.00, 0.00, 0, 0, 0, 0, 11);
INSERT INTO `times` VALUES ('Franci', 3, 'SÃ£o Paulo', '0xFF0000', '0x66FF66', '24/10/2005', 1.00, 0.00, 0, 0, 0, 0, 12);
INSERT INTO `times` VALUES ('Dinheirudo', 3, 'SÃ£o Paulo', '0x9CD4E9', '0xF9840F', '24/10/2005', 3.00, 0.00, 0, 0, 0, 0, 13);
INSERT INTO `times` VALUES ('Chico Matulovic', 1, 'São Paulo', '0x3366CC', '0x66CCFF', '24/10/2005', 2.00, 0.00, 0, 0, 0, 0, 14);");

?>
