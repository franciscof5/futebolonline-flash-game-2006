
-- phpMyAdmin SQL Dump
-- version 2.6.3-pl1
-- http://www.phpmyadmin.net
-- 
-- Servidor: localhost
-- Tempo de Geração: Fev 18, 2006 as 02:40 AM
-- Versão do Servidor: 5.0.18
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
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=60 ;

-- --------------------------------------------------------

-- 
-- Estrutura da tabela `estadios`
-- 

CREATE TABLE `estadios` (
  `nome` varchar(40) NOT NULL default '',
  `capacidade` int(6) NOT NULL default '0',
  `entrada` int(3) NOT NULL default '0',
  `vendedores` int(2) NOT NULL default '0',
  `barracasComida` int(2) NOT NULL default '0',
  `barracasUniforme` int(2) NOT NULL default '0',
  `estadioID` int(5) NOT NULL auto_increment,
  PRIMARY KEY  (`estadioID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

-- --------------------------------------------------------

-- 
-- Estrutura da tabela `jogadores`
-- 

CREATE TABLE `jogadores` (
  `nome` varchar(30) NOT NULL,
  `nacionalidade` varchar(50) NOT NULL default '',
  `skin` int(2) NOT NULL,
  `posicao` varchar(20) NOT NULL default '',
  `media` int(2) NOT NULL default '0',
  `valorPasse` decimal(4,2) NOT NULL default '0.00',
  `salario` int(6) NOT NULL default '0',
  `energia` int(2) NOT NULL default '0',
  `escalado` int(1) NOT NULL default '0',
  `suspenso` int(1) NOT NULL default '0',
  `lesionado` int(11) NOT NULL,
  `diaTreino` int(2) NOT NULL,
  `cartoesAmarelos` int(5) NOT NULL,
  `cartoesVermelhos` int(5) NOT NULL,
  `gols` int(4) NOT NULL,
  `timeAtual` varchar(20) NOT NULL default '',
  `avenda` int(1) NOT NULL default '0',
  `dataCriouJogador` varchar(20) NOT NULL default '',
  `refazer` int(1) NOT NULL,
  `jogadorID` int(10) NOT NULL auto_increment,
  PRIMARY KEY  (`jogadorID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=194 ;

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

-- --------------------------------------------------------

-- 
-- Estrutura da tabela `salas`
-- 

CREATE TABLE `salas` (
  `nomeSala` varchar(20) NOT NULL default '',
  `timeAdversario` varchar(20) NOT NULL default '',
  `sorte` decimal(3,2) NOT NULL default '0.00',
  `aposta` double(4,2) NOT NULL default '0.00'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
  `ultimaRenda` int(4) NOT NULL default '0',
  `estadioNome` varchar(20) NOT NULL default '',
  `torcedores` int(6) NOT NULL default '0',
  `emprestimos` int(1) NOT NULL default '0',
  `timeID` int(5) NOT NULL auto_increment,
  PRIMARY KEY  (`timeID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=65 ;
