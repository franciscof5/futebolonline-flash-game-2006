criado por Francisco Matelli Matulovic
v0.1 - 2005-11-09 11:47
v1.0 - 2017-06-02

//v1.0

//v0.1
* fica recebendo os dados do mysql até //que alguem entre na sala (saberá pois o timeAD //será diferente de vaziop
* Precisa receber as salas e o nome to time que fez e tb tem que dar pra crira um sala (nao precisa ser no banco de dados) pode ser no txt - 25/out/2005 - 20:33
* sons do botão
* nome do time não pode ser "sem time" e nem "podeCriar" (JA TAVA FEITOOOO)
* por um selinho do game reportes, com link (JERAIS, COM SOM ATÉ)
* criar times está com erros (QUE ERROS?AGORA SIM, NAO TEM ERRO, PORISSO QUE ERROS(?)!)
* IMPORTANTE carregando com pau, carrega mas erra em algumas var, vai vai vai conserta 17 de jan of 2--6, 16:37
* mascara do aqui_mc
* IMPORTANTE voltar do ingame carrega tudo de novo
* IMPORTANTE times que não tem estadio ficam com pau no estadio, deve ser moleza ajeitar isso (FIM DO PROBLEMA)
* jogadores e times verificados no lowercase para evitar pAlmeras paLmeras PalMeras
* IMPORTANTE quando clicar em sala verificar se esta vazia (UHUUU MATEI A PAU LALAU merece até data sexta feira 20 de janeiro de 2006, 17:45)
* get a versão do player
* em vez 10.000 = 100 lugar 100.000 = 1000 lugares qqr coisa assim pra não ficar gastando o server subindop de 1000 lugares pra 30000 (RIDICULAMENTE EASY)
* -+Seleção do fundo
* Frases do carregandoingame diferentes da carregando
* Quando der erro em todos os campos dos times poder ser que o timeAtual esteja não definido - 9 nov 2005 11:47

//ideias/features importantes
* vendedores e barraca funcionar, naõ só adicionar ou remover, no jogo também
* IMPORTANTE pau nos jogadores em procurar e escalar, essa vai ser tenso ( FOI FODA, MAS JA ERA< TINHA QUE USAR UM RECEBE_XML EXCLUSIVO)
* mais nacionalidades poxa! huahauh, banco de dados com nacionalidades
* quando estiver em time manager e clicar em sair zerar TUDO TUDO TUDO terça, 17 de jan de 2006
* calcular a renda do ultimo jogo (RENDA MAIS BEM CALCULADA QUE O IR)
* deletar a conta
* rodas as salas se tiver mais de 8
* IMPORTANTE banners funcionando, fazer seu banner
* -+ IMPORTANTE aumentar o numero de torcedor no fim do jogo quando ganha e perde, cuidado pra nao ficar negativo (OPAAAA)
* -+ IMPORTANTE quando comprar o jogador ver se ele ja não foi comprado 

//rascunhos de ideias/bugs
* tudo errado as transações de compra de jogadores (TUDO CERTO AGORA NOW)
* enviar e receber mensagens
* melhorar in game, renda e resultados com sorte msm (EM TESTES< SEI LA QUANDO ACABEI MAS SÒ VI AGORA HUHAUHS)
* IMPORTANTE metodos de compra funcionarem 2.0 (COLOQUE IMPORTANTE AGORA PORQUE ERA MESMO, NEM DA PRA COMPRAR, SOLVED IN 26 JAN 2006 3:11)
* quando acaba o jogo contra o ajax e eu jogar contra o pc jogo de novo com o ajax, fazer função para corrigir isso meu caro
* em duvida se devo fazer a função para no carregando, depois de um tempo prosseguir o carregamento mesmo sem estar carregando verdadeiramente, aprox. 5s (SOLUÇÃO, DEPOIS DE 5 SEGUNDO VOLTA A CARREGAR TUUUUDO DE NOVO)
* Varias formas de arrecadar dinheiro, mandar fazer boné, roupa pra vender no estadio, fazer turne com o time (acaba com os jogadores :( ...)
* faz logo os calculos da moral e confiança da torcida mesmo que seja um calculo fraquinho
* Juizes podem ser ladrões
* Frases randomicas em baixo de Fute Bolon Line
* O usuario necessita de um treinamento antes de ser tandnar tecnico, também haverá uma avaliação e depois o usuario terá que ganhar um jogo
* Há uma foto de uma bola murcha, pode ser usada quando o time tiver com a bola murcha ou etc.
* criar tabela patrocinadores, com campos como nome, dinheiro q da por partida, etc...
* ALERTA, patrocinadores são empresas reais, viagem total
* Moral é calculado pelo numero de Jogos Vit Empate Derrota
* Confiança da diretoria é pela confiança da torcida e pelo dinheiro em caixa
* TIME TO TO PUBLISH sabado, 21 de janeiro de 2006


//ideias de outras etapas de desenvolvimento, arquivo
* musicas de fundo, achas umas midis... midi não da.
* consertar cookie
* a flag do manage nao carrega porra nenhum porra
* user o mousewhell para trackear os jogadores em manage
* botão de atualizar jogadores a venda (SOLUÇÂO ALTERNATIVA, QUANDO VOLTA PARA O ESTADIO ATUALIZA, E TB OS SEUS)
* IMPORTANTE dinheiroOUT agora sera o gasto do ultimo jogo, e o dinheiroOUT vai ser calculado toda a hora (EM TRANSE, NAO MAIS)
* errinho no jogo, quem ta jogando sempre ganha, ops, acho que no big problens, só usar a var hospedeiro para saber quem é time1, nao faço isso agora pois é (ISSO MESMO, GENIO)
* Time jogando com menos do que 11 jogadores começa a perder
* força, cada jogador a menos tira 20% da força por ex.
//+ antes de publicar altere:
//+ fps 12
//+ link tem que ser "php/"
//+ mandar o logar.php do ofmm_275....
//+ mudar senhavar e uservar
//+ camada do ingame virar guide
//var link = "http://localhost/sites/futebolonline/php/";
//Adicionar uma sala e remover se já existir
//Serve para carregar os arrays com as salas
//verifica qualquer valor do campo da sala, mas tem que
//esperar para o XML receber
//nem precisa explicar 27/out/2005
//Precisa receber as Estadios e o nome to time que fez e tb tem que dar pra crira um Estadio nao precisa ser no banco de dados pode ser no txt - 25/out/2005 - 20:33
//verifica qualquer valor do campo da Estadio, mas tem que //esperar para o XML receber //nem precisa explicar 27/out/2005
//http://scriptbrasil.com.br/forum/index.php?showtopic=66572&st=0&#entry307836
//Sera que função está confusa? vamus explicar
//Caso o xml ainda esteja recebendo dados
//ele seta um intervalo para ficar vendo
//quando ele ficara livre, quando ficar funciona
//if(!recebeCookie_xml.loaded) {
//erroEmTempoDeCompilacaoParaGravar = setInterval(function () {
