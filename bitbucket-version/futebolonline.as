//futebolonline.as
//2017-06-02 maior parte do código foi removido do .fla e (re-re)organizado
//necessita grande refatoração para criar classes e uma pequena refatoração para rodar o básico
//autor: Francisco Matelli Matulovic

//vars
{
	//SYSTEM VARS
	//var link = "php/"; //used for no-domain specification, not work direct on flash
	var link = "https://www.f5sites.com/futebolonline/php/"; //used to compile direct from flash
	var car1 = "Fazendo uma ola!";
	var car2 = "Comprando a treta dos camarada!";
	var car3 = "Voltando para casa porque deixo a torneira pingando!";
	var car4 = "Se pergunta porque seu time está perdendo!";
	var car5 = "Comendo um chugato na porta do estadio!";
	var car5 = "Atirando copos (de plástico) no jogadores!";


	//user var
	var user_var = "";
	var pass_var = "";
	var resp_var = "";
	var timeAtual;
	var numeroJogadoresEscalados = 0;
	var timeAdversario;
	var hospedeiro = false;

	//login vars
	var loga_lv = new LoadVars();
	var loga_xml = new XML();
	var ConteudoQueColocarasNoCookie = "test_login";
	var tentativasDeLogar = 0;
	var tecnico;
	var userID;

	//coookie vars
	var enviaCookie_lv = new LoadVars();
	var recebeCookie1_xml = new XML();
	var recebeCookie_carregando = false;
	var cookieSetado;
	var cookieConteudo;

	//conta vars
	var enviaConta1_lv = new LoadVars();
	var recebeConta1_xml = new XML();
	var recebeConta_carregando = false;

	//time vars
	var enviaTime1_lv = new LoadVars();
	var recebeTime1_xml = new XML();
	var recebeTime_carregando = false;
	//setted in recebeXML
	var corPrimaria;
	var corSecundaria;
	//adversario time
	var recebeTimeAdversario_xml = new XML();
	var timeAdversario;//o nome para carregar o JSON
	var corPrimariaAdversario;
	var numeroBandeiraUniformeAdversario;
	var corSecundariaAdversario;
	var forcaTimeAdversario;


	//jogadores vars
	var enviaJoga1_lv = new LoadVars();
	var recebeListaDeJogadores_xml = new XML();
	/*var recebeJoga2_xml = new XML();
	var recebeJoga3_xml = new XML();
	var recebeJoga32_xml = new XML();
	var recebeJoga33_xml = new XML();*/
	var recebeJoga_carregando = false;
	var todosOsJogadores_array = new Array();
	var todosOsJogadoresAdversario_array = Array();
	var numeroJogadores = 0;

	//jogadores_a_venda vars
	var enviaJogaAvenda1_lv = new LoadVars();
	var recebeJogaAvenda1_xml = new XML();
	/*var recebeJogaAvenda2_xml = new XML();*/
	var recebeJogaAvenda_carregando = false;
	var todosOsJogadoresAvenda_array = new Array();
	var numeroJogaAvendadorCarregado = 0;

	//salas vars
	var enviaSala1_lv = new LoadVars();
	var recebeGrupoSalas_xml = new XML();
	/*var recebeSala3_xml = new XML();
	var recebeSala2_xml = new XML();
	var recebeSala4_xml = new XML();*/
	var recebeSala_carregando = false;
	var salas_array = new Array();
	var salas_numero = 0;
	_global.vrs3;

	//estadio vars
	var enviaEstadio1_lv = new LoadVars();
	var recebeEstadio1_xml = new XML();
	/*var recebeEstadio2_xml = new XML();
	var recebeEstadio3_xml = new XML();*/
	var recebeEstadio_carregando = false;
	_global.vre;

	//criar_time vars
	var addtime_lv = new LoadVars();
	var recebeAddtime_xml = new XML();
	var nomeTime_var;
	var estadoNum = 25;
	var frameNum = 1;
	var estados = new Array("Acre", "Alagoas", "Amazonas", "Amapa", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhão", "Minas Gerais", "Mato Grosso do Sul", "Mato Grosso", "Para", "Paraiba", "Pernambuco", "Piaui", "Parana", "Rio de Janeiro", "Rio Grande de Norte", "Rondonia", "Roraima", "Rio Grande do Sul", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins");
	var paisesNum = 0;
	var posicoesNum = 1;
	var media_var = 0;
	var passe_var = 0.00;
	var salario_var = 1;
	var aumenta = new Boolean(false);
	var paises = new Array("Brasil", "Argentina", "Bolívia");
	var posicoes = new Array("Goleiro", "Zagueiro", "Lateral Esq", "Lateral Dir", "Meio-Campo", "Atacante");
	var nomes_array = new Array("Carlos Roberto", "Carlos Manuel", "Lilo", "Cenoura", "Renato", "Francisco", "Lampião", "Homem Grito", "Senhor da Morte", "Jr. Juninho", "Deuz", "Cachorro", "Mad Dog", "Espirilo", "Xobai", "To Quartz", "Senoidal", "Artista", "Jaspion", "Ximarrão", "Don Espeto", "Lazaro Ramos", "Maraton", "Selulari", "Esponjo", "Bob", "Slipknot", "Tribal", "Tattoo", "João Ninguém", "José Alguém", "Craque", "Good Player", "God Player", "Mistical", "Emeessene", "Nailton", "Altion", "Klebão", "Edson", "Bill", "Pedro", "Henrique", "Gustavo", "João Paulo", "Marcelo", "Extremista", "Ramos De Oliveira", "Jorginho", "Beto", "Jesus", "Fefeu", "Sorriso", "Triste", "Espirro", "Cavalo", "Ramo de Flor", "Mauro", "Corno", "Acelerado", "Pateta", "Motherfucker", "Atoladinho", "Mamono", "Elias", "Thiago", "Alemão", "Diego", "Itararé", "Queixo", "Tanaka", "Luis", "Vinicius", "Kayo", "Vidal", "Vô Luciano", "Matelli Matulovic", "Juliano", "Ronaldo", "Pelé", "Robson", "Wagner", "Eldair", "Zéquinha", "Metaleiro", "Maconheiro", "Wilson de Oliveira", "Capitalista", "Dig", "Tomas", "Eduardo", "Virgulino", "Papai Noel", "Paulo", "Saulo", "Alcione", "Alcino", "Kadu", "Gilberto", "Jacaré", "Roque", "Liminha", "Seu Silvio", "Fernando", "Irapuã", "Bira", "Pira", "Maloko", "Mameluco", "Zoeing Splash", "Podridao", "Coelho", "Pau no Cu", "Lurdes", "Vagem", "Nota 10", "Lesado", "Brain Demage", "Pensador", "Abreu", "Lima", "Martelete", "Salomão", "Judeu", "Garrafo", "Lincon", "Mariano", "Mistéio", "Dagoberto", "Donizete", "Abrão", "Evo Morales", "George W. Bush", "Sueco", "José Ivo", "Julião", "Vitão", "Vitinho", "Max", "Rex", "Clinton", "Gaspar", "Sumido", "Paixão", "Pascoal", "Cebol", "Cascão", "Franjinha", "Tino", "Rolo", "Jotalhão", "Touro", "Chico", "Dinho");

	//criar_jogador vars
	var addjogador_lv = new LoadVars();
	var recebeAddjogador_xml = new XML();
	var jogadoresRestantes_var = 14;
	var mediaRestante_var = 50;

	//provao vars
	var som_sound = new Sound();
	var requestQuestao_lv = new LoadVars();
	var recebeQuestao_xml = new XML();
	var numeroDaQuestao = 1;
	var questoesAnteriores_array = new Array();
	var acertos=0;
	var numeroDeQuestoes = 5;
	var aprovado;

	//
	var recebeEprossegue_xml = new XML();
	var recebeEsetaCampoValor_xml = new XML();
}

//JSON objects
{
	import JSON;
	var json = new JSON();
	var solicitaJSONobject_lv = new LoadVars();
	var recebeJSONobject_xml = new XML();
	var recebeJSON_carregando = false;//boolean
	var jsonObject;
	var alljson; //string containg all json to parse
	//
	var vazio_json = '"data":[{"vazio":"true"}]';
	var cadastros_json = vazio_json;//
	var times_json = vazio_json;
	var estadio_json = vazio_json;
	var jogadores_json = vazio_json;
	//
	var jogadores_avenda_json = vazio_json;
	//
	var salas_json = vazio_json;
	//
	var times_adversario_json = vazio_json;
	var jogadores_adverario_json = vazio_json;
	var times_e_jogadores_adversario_json = vazio_json;
	//
	var returnJSONtoIT;
}

//onLoad
loga_xml.onLoad = function() {
	if(this.toString()=="") {
		tentativasDeLogar++;
		//
		if(tentativasDeLogar==1) {
			msg_txt.text = "Recusado uma vez";
		} else if(tentativasDeLogar==2) {
			msg_txt.text = "Última tentativa";
		} else if(tentativasDeLogar>3) {
			//setaCookie("MuitasTentavias", ConteudoQueColocarasNoCookie);
			msg_txt.text = "Acesso bloqueado";
		}
	} else {
		//precisa saber se é tecnico para mandar para a prova
		tecnico = this.firstChild.childNodes[1].firstChild.toString();
		userID = this.firstChild.childNodes[2].firstChild.toString();
		timeAtual  = this.firstChild.childNodes[3].firstChild.toString();
		//
		setaCookie("logado", userID);
		//
		if(tecnico==0) {
			gotoAndPlay("provao", 1);
		} else if (tecnico==1) {
			gotoAndPlay("carregando", 1);
		} else {
			msg_txt.text = "Erro no seu cadastro";
		}
	}
};
recebeEprossegue_xml.onLoad = function() {
	//
	//trace(this);
}
recebeEsetaCampoValor_xml.onLoad = function() {
	//trace("recebeEsetaCampoValor_xml, "+this);
	valor = this.firstChild.childNodes[0].firstChild.toString();
	campo = this.firstChild.childNodes[1].firstChild.toString();
	set(campo, valor);
	//trace("recebeEsetaCampoValor_xml(), campo:"+campo+", valor:"+valor);
	recebeJoga_carregando = false;
	recebeTime_carregando = false;
}
/*recebeJSONobject_xml.onData = function(res) {
	var res_j = '{"'+solicitaJSONobject_lv.tabela+'":'+res+'}';
	//var res_j = '{'+res+'}';
	trace(res_j);
	var freshjson = json.parse(res_j);
	//jsonObject.push(freshjson.eval(solicitaJSONobject_lv.tabela+'["0"]'));
	jsonObject.push(freshjson[0]);
	trace(freshjson.cadastros[0]);
	trace(eval("freshjson."+solicitaJSONobject_lv.tabela+'["0"]'))
	foreach()
	trace(freshjson.firstChild());
	//set(solicitaJSONobject_lv.tabela+"_json", freshjson);
	trace("jsonObject.cadastros[0].timeAtual:"+freshjson.cadastros[0].timeAtual);
	//trace(eval(solicitaJSONobject_lv.tabela+"_json"));
	//trace("solicitaJSONobject_lv.tabela:"+solicitaJSONobject_lv.tabela+", freshjson.ajson[0].timeAtual:"+freshjson.ajson[0].timeAtual+", cadastros_json.ajson[0].timeAtual:"+cadastros_json.ajson[0].timeAtual);
}*/
/*recebeJSONobject_xml.onData = function(res) {
	var res_j = '{"data":'+res+'}';
	trace(res_j)
	var freshjson = json.parse(res_j);
	set(solicitaJSONobject_lv.tabela+"_json", freshjson);
	trace(salas_json.data[0].nomeSala);
	//trace("cadastros_json.data[0].estadioNome:"+cadastros_json.data[0].estadioNome);
	//trace(eval(solicitaJSONobject_lv.tabela+"_json"));
	//trace("solicitaJSONobject_lv.tabela:"+solicitaJSONobject_lv.tabela+", freshjson.ajson[0].timeAtual:"+freshjson.ajson[0].timeAtual+", cadastros_json.ajson[0].timeAtual:"+cadastros_json.ajson[0].timeAtual);
}*/
function reParseAllJSON() {
	//trace("reParseAllJSON(), recebeJSON_carregando:"+recebeJSON_carregando);
	var alljson = '{' + cadastros_json + ',' + times_json + ',' + estadio_json + ',' + jogadores_json + ',' + jogadores_avenda_json + ',' + salas_json + '}';
	//trace(alljson);
	jsonObject = json.parse(alljson);
	recebeJSON_carregando = false;
	/*trace("reParseAllJSON()");
	trace('jsonObject.cadastros[0].nomeTime:'+jsonObject.cadastros[0].nomeTime);
	trace('jsonObject.timeAtual[0].nomeTime:'+jsonObject.timeAtual[0].nomeTime);
	trace('jsonObject.times[0].nomeTime:'+jsonObject.times[0].nomeTime);
	trace('jsonObject.cadastros[0].nome:'+jsonObject.cadastros[0].nome);
	trace('jsonObject.jogadores[0].nome:'+jsonObject.jogadores[1].nome);
	trace('jsonObject.jogadores_avenda[0].nome:'+jsonObject.jogadores_avenda[0].nome);*/
}
recebeJSONobject_xml.onData = function(res) {
	if(res!="mysql_query_erro") {
		
		//var res_j = '{"'+solicitaJSONobject_lv.campo+'":'+res+'}';
		//var nomej = solicitaJSONobject_lv.tabela+"_"+solicitaJSONobject_lv.campo+"_json";
		if(solicitaJSONobject_lv.campo=="avenda") {
			var nomej = solicitaJSONobject_lv.tabela+"_avenda_json";
			var res_j = '"'+solicitaJSONobject_lv.tabela+'_avenda":'+res;
		} else {
			var nomej = solicitaJSONobject_lv.tabela+"_json";
			var res_j = '"'+solicitaJSONobject_lv.tabela+'":'+res;
		}
		trace(nomej);
		set(nomej, res_j);
		//
		reParseAllJSON();
	}
	
	//alljson = '{"' + cadastros_json + "," + times_json + "," + estadio_json + "," + jogadores_json+'}';
	//alljson = '{"' + cadastros_json + times_json + estadio_json + jogadores_json+'}';
	//jsonObject.push(freshjson);
	//var freshjson = json.parse(times_json);
	//jsonObject.push(freshjson);
	//var freshjson = json.parse(estadio_json);
	//jsonObject.push(freshjson);
	//trace(res_j)
	//var freshjson = json.parse(res_j);
	//set(solicitaJSONobject_lv.tabela+"_json", freshjson);
	
	//trace(salas_json.data[0].nomeSala);
	//trace(salas_json.data[0].nomeSala);
	//trace("cadastros_json.data[0].estadioNome:"+cadastros_json.data[0].estadioNome);
	//trace(eval(solicitaJSONobject_lv.tabela+"_json"));
	//trace("solicitaJSONobject_lv.tabela:"+solicitaJSONobject_lv.tabela+", freshjson.ajson[0].timeAtual:"+freshjson.ajson[0].timeAtual+", cadastros_json.ajson[0].timeAtual:"+cadastros_json.ajson[0].timeAtual);
}

recebeTimeAdversario_xml.onData = function(res) {
	var res_j = '{"data":'+res+'}';
	//trace(res);
	times_adversario_json = json.parse(res_j);
	//trace(times_adversario_json.data[0].nomeTime);
	//trace(times_adversario_json.data[0].corPrimaria);
	//var timeA = json.parse(res);
	//trace(timeA[0]);
	/*var j = "{fef:34}";
	var tttt = json.parse(j);
	trace(tttt);
	trace(tttt.fef);
	trace(json.fef);
	trace(tttt["fef"]);
	/*trace(res);
	res = '{"nomeTime":"Coqueiros","numeroBandeiraUniforme":"2","estado":"SP","corPrimaria":"0xFF00FF","corSecundaria":"0xB066E7","dataCriouJogador":"","dinheiroIN":"7.00","ultimaRenda":"0","estadioNome":"sem estadio","torcedores":"100","emprestimos":"0","timeID":"65"}';
	var json = new JSON();
 	//trace(json.parse(res));   // undefined !!!
 	var tirr = json.parse();
 	trace(tirr.nomeTime+ ":" + tirr.corSecundaria);*/
    /*try {
        //var o:Object = json.parse(j);
        var s:String = json.stringify(j);
    } catch(ex) {
    	//trace("CATCH FOI");
    	trace(ex);
    	trace(ex.name + ":" + ex.message + ":" + ex.at + ":" + ex.text);
    	trace(ex.fef + ":" + ex.corSecundaria + ":" + ex.corPrimaria + ":" + ex.text);
    	/trace(o.nomeTime);
	    trace(s.nomeTime);*
    	//trace(ex.nomeTime);
    }
    //var s:String = json.stringify(j);
    //trace(s.fef + ":" + s.corSecundaria);
    /*
    trace(o);
    trace(s);
    trace(json.nomeTime);
    trace(json);
	//var o:Object = JSON.parse(this);
	/* var json = new JSON();
	try {
		var o:Object = JSON.parse(res);
		var s:String = JSON.stringify(res);
	} catch(ex) {
		trace(ex.nomeTime + ":" + ex.corSecundaria + ":" + ex.corPrimaria + ":" + ex.text);
	}*/
}

recebeCookie1_xml.onLoad = function () {
	//trace(this);
	//
	cookieSetado   = this.firstChild.childNodes[0].firstChild;
	cookieConteudo = this.firstChild.childNodes[1].firstChild;
	cookieNome     = this.firstChild.childNodes[2].firstChild;
	//
	if(cookieNome=="logado") {
		if(cookieConteudo=="APAGADO") {
			if(this._currentframe!=="QuadroDeLogar")
			gotoAndPlay("logar", 1);
		} else {
			//logged, nothing to do...
		}
	}
	//
	//trace("recebeCookie1_xml, cookieSetado:" + cookieSetado + ", cookieConteudo:" + cookieConteudo + ", cookieNome:" + cookieNome);
	//
	recebeCookie_carregando = false;
};
recebeConta1_xml.onLoad = function () {
	//trace(this);
	_global.vrc = this.firstChild.childNodes[0].firstChild;
	recebeConta_carregando = false;
};
recebeTime1_xml.onLoad = function () {
	//trace("recebeTime1_xml, "+this);
	//
	camp = this.firstChild.childNodes[1].firstChild.toString();
	resp = this.firstChild.childNodes[0].firstChild.toString();
	//
	//trace("recebeTime1_xml, camp:"+camp+", resp:"+resp);
	//
	set(camp, resp);
	//
	recebeTime_carregando = false;
};
recebeListaDeJogadores_xml.onLoad = function () {
	//trace("recebeListaDeJogadores_xml, " + this);
	//camp = this.firstChild.childNodes[1].firstChild.toString();
	//valor = this.firstChild.childNodes[0].firstChild.toString();
	//
	//trace("recebeListaDeJogadores_xml, camp:"+camp+", resp:"+resp);
	//
	//set(camp, valor);
	//todosOsJogadores_array = todosOsJogadores_array.slice(0,0);//if(isNaN(numeroJogadores) or numeroJogadores==0)
	numeroJogadores = new Number(this.firstChild.childNodes[0].firstChild.toString());
	//trace(numeroJogadores);//trace(this);
	for(u2=1; u2<numeroJogadores; u2++) {
		jogadorNome          = this.firstChild.childNodes[u2].childNodes[0].firstChild.toString();
		jogadorNacionalidade = this.firstChild.childNodes[u2].childNodes[1].firstChild.toString();
		jogadorPosicao       = this.firstChild.childNodes[u2].childNodes[2].firstChild.toString();
		jogadorMedia         = this.firstChild.childNodes[u2].childNodes[3].firstChild.toString();
		jogadorValorPasse    = this.firstChild.childNodes[u2].childNodes[4].firstChild.toString();
		jogadorSalario       = this.firstChild.childNodes[u2].childNodes[5].firstChild.toString();
		jogadorAvenda        = this.firstChild.childNodes[u2].childNodes[6].firstChild.toString();
		jogadorEnergia       = this.firstChild.childNodes[u2].childNodes[7].firstChild.toString();
		jogadorEscalado      = this.firstChild.childNodes[u2].childNodes[8].firstChild.toString();
		jogadortimeAtual      = this.firstChild.childNodes[u2].childNodes[9].firstChild.toString();
		
		//0nome, 1nacionalidade, 2posição, 3media, 4valor do passe, 5salario, 6avenda, 7energia, 8escalado, 9timeAtual
		jogadorArray = new Array(jogadorNome, jogadorNacionalidade, jogadorPosicao, jogadorMedia, jogadorValorPasse, jogadorSalario, jogadorAvenda, jogadorEnergia, jogadorEscalado, jogadortimeAtual);
		if(enviaJoga1_lv.timeSendoCarregad==timeAtual)
		todosOsJogadores_array.push(jogadorArray);
		else
		todosOsJogadoresAdversario_array.push(jogadorArray);
	}
	//trace("enviaJoga1_lv.timeSendoCarregado: "+enviaJoga1_lv.timeSendoCarregado);
	recebeJoga_carregando = false;
};
/*recebeJoga2_xml.onLoad = function () {
	resp = this.firstChild.childNodes[0].firstChild.toString();
	camp = this.firstChild.childNodes[1].firstChild.toString();
	//trace(this);
	//trace("recebeJoga2_xml, camp:"+camp+", resp:"+resp);
	set(camp, resp);
	//_global.eval(camp) = resp;
	//eval(camp) = resp;
	//trace("recebeJoga2_xml timeAtual:"+timeAtual);
	/*if(timeAtual=="podeCriar") {
		gotoAndPlay("criartime",1);
	}*
	recebeJoga_carregando = false;
};
recebeJoga3_xml.onLoad, recebeJoga32_xml.onLoad, recebeJoga33_xml.onLoad = function () {
	//trace(this);
	recebeJoga_carregando = false;
};*/
recebeJogaAvenda1_xml.onLoad = function () {
	//pra ir rapid om cisso
	recebeJogaAvenda_carregando = false;
	//
	todosOsJogadoresAvenda_array = todosOsJogadoresAvenda_array.slice(0, 0);
	//
	numeroJogaAvendadoresAvenda = new Number(this.firstChild.childNodes[0].firstChild.toString());
	//
	for(u2=1; u2<numeroJogaAvendadoresAvenda; u2++) {
		JogaAvendadorNome          = this.firstChild.childNodes[u2].childNodes[0].firstChild.toString();
		JogaAvendadorNacionalidade = this.firstChild.childNodes[u2].childNodes[1].firstChild.toString();
		JogaAvendadorPosicao       = this.firstChild.childNodes[u2].childNodes[2].firstChild.toString();
		JogaAvendadorMedia         = this.firstChild.childNodes[u2].childNodes[3].firstChild.toString();
		JogaAvendadorValorPasse    = this.firstChild.childNodes[u2].childNodes[4].firstChild.toString();
		JogaAvendadorSalario       = this.firstChild.childNodes[u2].childNodes[5].firstChild.toString();
		JogaAvendadorAvenda        = this.firstChild.childNodes[u2].childNodes[6].firstChild.toString();
		JogaAvendadorEnergia       = this.firstChild.childNodes[u2].childNodes[7].firstChild.toString();
		JogaAvendadorEscalado      = this.firstChild.childNodes[u2].childNodes[8].firstChild.toString();
		jogaAvendatimeAtual         = this.firstChild.childNodes[u2].childNodes[9].firstChild.toString();
		
		//numeroJogaAvendadorCarregado++;
		
		jogadoresAvenda = new Array(JogaAvendadorNome, JogaAvendadorNacionalidade, JogaAvendadorPosicao, JogaAvendadorMedia, JogaAvendadorValorPasse, JogaAvendadorSalario, JogaAvendadorAvenda, JogaAvendadorEnergia, JogaAvendadorEscalado, jogaAvendatimeAtual);
		//trace(jogadoresAvenda);
		if(jogaAvendatimeAtual!=timeAtual and jogaAvendatimeAtual!=undefined and jogaAvendatimeAtual!="undefined")
		todosOsJogadoresAvenda_array.push(jogadoresAvenda);
	}
	recebeJogaAvenda_carregando = false;
};
recebeGrupoSalas_xml.onLoad = function () {
	//serve só para o buscasalas
	//trace(this);
	//timeAdversario = this.firstChild.firstChild.toString();
	//campo = this.firstChild.childNodes[1].firstChild.toString();

	if(carregar_mc._currentframe<=19)
	carregar_mc.gotoAndStop(20);
	

	salas_numero = new Number(this.firstChild.childNodes[0].firstChild.toString());
	salas_array = salas_array.slice(0,0);
	for(u12=0; u12<salas_numero; u12++) {
		nodeTemp = this.firstChild.childNodes[u12+1].childNodes[0].toString();
		salas_array.push(nodeTemp);
	};
	aqui_mc_load_salas(salas_array);
	
	/*carrega_btn.onRelease = function () {
		
		//nome_var é a variavel onde fica escrito o nome do time	
		_global.timeAdversario = nome_var;
		if(nome_var==_root.timeNome) {
			//leia a msg abaixo
			_root.msg_txt.text = "Quer jogar contra você mesmo?!";
			//_root.stop();
		} else if (nome_var=="jogando") {
			_root.msg_txt.text = "O jogo já começou aqui!";
		}  else if (nome_var=="computador") {
			_root.podeIR("computador", true);
		} else {
			play();
		}
	}*/

	//trace(salas_array);
	recebeSala_carregando = false;
};
/*recebeSala2_xml.onLoad = recebeSala4_xml.onLoad = function () {
	//trace("RECEBE SALA 2 TIMING : " + this);
	recebeSala_carregando = false;
};
recebeSala3_xml.onLoad = function () {
	//trace(recebeSala3_xml.firstChild.firstChild.toString());
	//vrs3 = this.firstChild.firstChild.toString();
	
	//alert(campo);
	//alert(this);
	//precisou definer vrs3 antes de usar (saco);
	recebeSala_carregando = false;
};*/
recebeEstadio1_xml.onLoad = function () {
	vre = this.firstChild.childNodes[0].firstChild;
	recebeEstadio_carregando = false;
};
recebeEstadio2_xml.onLoad  = recebeEstadio3_xml.onLoad = function () {
	//
	recebeEstadio_carregando = false;
};
recebeAddtime_xml.onLoad = function () {
	//trace(this);
	msg_txt.text = this.firstChild.childNodes[0].firstChild;
	//msg_txt.text.text = link;
	//depois de receber a resposta do php
	//trace(msg_txt.text);
	if(msg_txt.text=="Registrado") {
		if(nometime_txt.text=="podeCriar" or nometime_txt.text=="sem time" or nometime_txt.text=="jogando" or nometime_txt.text=="Palmeiras" or nometime_txt.text=="Brasil" or nometime_txt.text=="Corinthians" or nometime_txt.text=="São Paulo" or nometime_txt.text=="Santos") {
			msg_txt.text = "Time reservado";
		} else {
			//_global.timeAtual = nomeTime_var;
			alterCampoJoga("timeAtual", nomeTime_var);
			gotoAndPlay("carregandonometime", 1);
		}
	} else {
		msg_txt.text = "Erro no servidor";
	}
};
recebeAddjogador_xml.onLoad = function () {
	//trace("recebeAddjogador_xml " + this);
	msg_txt.text = this.firstChild.childNodes[0].firstChild;
	if(msg_txt.text=="Registrado") {
		nomejogador_var = "";
		media_var = 0;
		passe_var = 0;
		salario_var = 0;
		if(jogadoresRestantes_var>1) {
			jogadoresRestantes_var--;
			//33
		}
		else {
			gotoAndPlay("logar", 1);
		}
	}
};
recebeQuestao_xml.onLoad = function() {
	//trace(this);
	this.toString();
	questao = numeroDaQuestao + " ) " + this.firstChild.firstChild.firstChild;
	resposta1 = this.firstChild.childNodes[1].firstChild;
	resposta2 = this.firstChild.childNodes[2].firstChild;
	resposta3 = this.firstChild.childNodes[3].firstChild;
	resposta4 = this.firstChild.childNodes[4].firstChild;
	respostacerta = this.firstChild.childNodes[5].firstChild;
	//Tirada da função requesitarQuestao por dar erro de tempo
	numeroDaQuestao++;
	//msg_txt.text = "Pergunta Carregada";
};

//functions
/*function ativarXML() {
	recebeCookie1_xml.load("xml/ativando.xml");
	recebeConta1_xml.load("xml/ativando.xml");
	recebeTime1_xml.load("xml/ativando.xml");
	recebeListaDeJogadores_xml.load("xml/ativando.xml");
	recebeJogaAvenda1_xml.load("xml/ativando.xml");
	recebeGrupoSalas_xml.load("xml/ativando.xml");	
	recebeEstadio1_xml.load("xml/ativando.xml");

}
//ativarXML();*/


//
function logar() {

	//
	msg_txt.text = "Espere";

	//
	if (cookieSetado and cookieConteudo.toString()==ConteudoQueColocarasNoCookie) {
		msg_txt.text = "Já conectado";
		logar_btn._visible = false;
	} else {
		loga_lv.usuario = _root.user_var;
		loga_lv.senha = _root.pass_var;
		
		//2017-06-02-FOR TESTS ONLY
		if(loga_lv.usuario=="") {
			loga_lv.usuario = "fabio";
			loga_lv.senha = "fabio";	
		}

		//
		loga_lv.sendAndLoad(link + "logarxml.php", loga_xml, "POST");
	}
};

//
function verificaSeEstaVerificandoCampo() {
	verificampoInt = setInterval(function () {
		//trace("verificaSeEstaVerificandoCampo(), "+recebeJogaAvenda_carregando + " : " +  recebeConta_carregando + " : " +  recebeJoga_carregando  + " : " +  recebeCookie_carregando + " : " + recebeTime_carregando + " recebeEsetaCampoValor_xml.loaded:"+recebeEsetaCampoValor_xml.loaded + " recebeJSON_carregando:"+recebeJSON_carregando);
		if(recebeJogaAvenda_carregando or recebeConta_carregando or recebeJoga_carregando or recebeCookie_carregando or recebeTime_carregando or recebeSala_carregando or recebeEstadio_carregando or recebeJSON_carregando) {
			stop();
		} else {
			clearInterval(verificampoInt);
			play();
		}
	}, 50)
}

//json
function recebeJSON(tabela, campo, valor) {
	//returnJSONtoIT = obj;
	//trace("recebeJSON(), tabela:"+tabela+", campo:"+campo+", valor:"+valor);
	recebeJSON_carregando = true;
	solicitaJSONobject_lv.tabela = tabela;
	solicitaJSONobject_lv.campo = campo;
	solicitaJSONobject_lv.valor = valor;
	solicitaJSONobject_lv.sendAndLoad(link + "recebeJSON.php", recebeJSONobject_xml, "POST");
}

//
function setaCookie(nomeCookie, conteudo, tempoDeVida) {
	//trace("setaCookie(), nomeCookie"+nomeCookie+", conteudo"+conteudo+", tempoDeVida"+tempoDeVida);
	recebeCookie_carregando = true;
	enviaCookie_lv.nomeCookie = nomeCookie;
	enviaCookie_lv.conteudo = conteudo;
	enviaCookie_lv.tempoDeVida = tempoDeVida;
	enviaCookie_lv.sendAndLoad(link + "gravacookie.php", recebeCookie1_xml, "POST");
};
function apagaCookie(nomeCookie) {
	//trace("apagaCookie : " + nomeCookie);
	setaCookie("APAGADO", userID);
};
function verificaCookie(nomeCookie, conteudo) {
	//trace("verificaCookie(), nomeCookie"+nomeCookie);
	recebeCookie_carregando = true;
	enviaCookie_lv.nomeCookie = nomeCookie;
	enviaCookie_lv.sendAndLoad(link + "verificacookie.php", recebeCookie1_xml, "POST");
};

//
function managerTime() {
	managerTimeNum = 0;
	managerTimeInt = setInterval(function () {
		managerTimeNum++;
		_root.stop();
		
		if(_root._currentframe!="manage")
		gotoAndPlay("managetime", 1);
		else 
		clearInterval(managerTimeInt);
		
		if (managerTimeNum>10)
		clearInterval(managerTimeInt);
	},10);
}
function alterCampo(campo, valor) {
	recebeConta_carregando = true;
	enviaConta1_lv.campo = campo;
	enviaConta1_lv.valor = valor;
	enviaConta1_lv.tabela = tabela;
	//trace(userID);
	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else {
		enviaConta1_lv.userID = userID;
		//Serve para funcionar sem que fique usando intervals e whiles e porras e tals
		//if(recebeConta1_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "alterconta.php", recebeConta1_xml, "POST");
		/*else if(recebeConta2_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "alterconta.php", recebeConta2_xml, "POST");
		else if(recebeConta3_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "alterconta.php", recebeConta3_xml, "POST");
		else if(recebeConta4_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "alterconta.php", recebeConta4_xml, "POST");
		else if(recebeConta5_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "alterconta.php", recebeConta5_xml, "POST");*/
		//
	}
};
function verifyCampo(campo, tabela) {
	recebeConta_carregando = true;
	enviaConta1_lv.campo = campo;
	enviaConta1_lv.tabela = tabela;
	
	//serve para o carregando!!!
	//verificandoCampo = 1;
	
	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else {
		enviaConta1_lv.userID = userID;
		//Serve para funcionar sem que fique usando intervals e whiles e porras e tals
		//if(recebeConta1_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "verifycampo.php", recebeConta1_xml, "POST");
		/*else if(recebeConta2_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "verifycampo.php", recebeConta2_xml, "POST");
		else if(recebeConta3_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "verifycampo.php", recebeConta3_xml, "POST");
		else if(recebeConta4_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "verifycampo.php", recebeConta4_xml, "POST");
		else if(recebeConta5_xml.loaded)
		enviaConta1_lv.sendAndLoad(link + "verifycampo.php", recebeConta5_xml, "POST");*/
		//
	}
};
function verifyCampoTime(campo) {
	//
	//trace("verifyCampoTime(), campo:" + campo + ", timeAtual:" + timeAtual);
	//
	recebeTime_carregando = true;
	enviaTime1_lv.campo = campo;
	enviaTime1_lv.timeAtual = timeAtual;
	//
	enviaTime1_lv.sendAndLoad(link + "verifycampotime.php", recebeEsetaCampoValor_xml, "POST");
};
function recebeTimeAdversario() {
	//trace("timeAdversario:"+timeAdversario);
	enviaTime1_lv.timeAdversario = timeAdversario;
	enviaTime1_lv.sendAndLoad(link + "recebeJSON_times_adversario.php", recebeTimeAdversario_xml, "POST");
}

function alterCampoTime(campo, valor, timeAtual) {
	recebeTime_carregando = true;
	enviaTime1_lv.campo = campo;
	enviaTime1_lv.valor = valor;
	enviaTime1_lv.timeAtual = timeAtual;
	enviaTime1_lv.userID = userID;

	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else {
		//if(recebeTime1_xml.loaded)
		enviaTime1_lv.sendAndLoad(link + "altertime.php", recebeTime1_xml, "POST");
		//else if(recebeTime2_xml.loaded)
		//enviaTime1_lv.sendAndLoad(link + "altertime.php", recebeTime2_xml, "POST");
		//else if(recebeTime3_xml.loaded)
		//enviaTime1_lv.sendAndLoad(link + "altertime.php", recebeTime3_xml, "POST");
	}
	//
}

//
function alterCampoJoga(campo, valor) {
	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else {
		recebeJoga_carregando = true;
		//trace("alterCampoJoga, campo:" + campo + ", valor:" + valor);
		enviaJoga1_lv.campo = campo;
		enviaJoga1_lv.valor = valor;
		enviaJoga1_lv.userID = userID;
		//Serve para funcionar sem que fique usando intervals e whiles e porras e tals
		enviaJoga1_lv.sendAndLoad(link + "altercampojoga.php", recebeEsetaCampoValor_xml, "POST");
	}
};
/*function alterCampoJoga2(campo, valor) {
	//NEED ADITIONS FUNCTIONS FOR BUSY RECEIVE OBJECT
	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else {
		recebeJoga_carregando = true;
		trace("alterCampoJoga, campo:" + campo + ", valor:" + valor);
		enviaJoga1_lv.campo = campo;
		enviaJoga1_lv.valor = valor;
		enviaJoga1_lv.userID = userID;
		//Serve para funcionar sem que fique usando intervals e whiles e porras e tals
		enviaJoga1_lv.sendAndLoad(link + "altercampojoga.php", recebeJoga32_xml, "POST");
	}
};
function alterCampoJoga3(campo, valor) {
	//NEED ADITIONS FUNCTIONS FOR BUSY RECEIVE OBJECT
	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else {
		recebeJoga_carregando = true;
		trace("alterCampoJoga, campo:" + campo + ", valor:" + valor);
		enviaJoga1_lv.campo = campo;
		enviaJoga1_lv.valor = valor;
		enviaJoga1_lv.userID = userID;
		//Serve para funcionar sem que fique usando intervals e whiles e porras e tals
		enviaJoga1_lv.sendAndLoad(link + "altercampojoga.php", recebeJoga33_xml, "POST");
	}
};*/
function verifyCampoJoga(campo) {
	//tabela cadastros
	//trace("verifyCampoJoga(), campo:"+campo);
	recebeJoga_carregando = true;
	enviaJoga1_lv.campo = campo;
	enviaJoga1_lv.userID = userID;
	enviaJoga1_lv.sendAndLoad(link + "verifycampojoga.php", recebeEsetaCampoValor_xml, "POST");
}
function carregaJogadores(timeJogadores) {
	recebeJoga_carregando = true;
	enviaJoga1_lv.timeSendoCarregado = timeJogadores;
	//	
	enviaJoga1_lv.sendAndLoad(link + "selecionajogadores.php", recebeListaDeJogadores_xml, "POST");
};

//
function carregaJogaAvenda () {
	recebeJogaAvenda_carregando = true;
	//if(recebeJogaAvenda1_xml.loaded)
	enviaJogaAvenda1_lv.sendAndLoad(link + "selecionajogadoresavenda.php", recebeJogaAvenda1_xml, "POST");
	//else if(recebeJogaAvenda2_xml.loaded)
	//enviaJogaAvenda1_lv.sendAndLoad(link + "selecionajogadoresavenda.php", recebeJogaAvenda2_xml, "POST");
};

//
function removeClipSalas() {
	for(i=0; i<100;i++) {
		eval("aqui_mc.carregadorSala" + i).removeMovieClip();
	}
}
function atualizarSalas() {
	carregar_mc.swapDepth(_root.getNextHighestDepth());
	carregar_mc.play();
	removeClipSalas();
	recebeJSON("salas");
	//buscasala();
};
function addSala(timeAtual, sorte, aposta) {
	//sorte a variaval que é usada pra calcular o re
	//sultado, é pga na hora de carrega
	//Aposta é quanto os times desejam apostar
	recebeSala_carregando = true;
	enviaSala1_lv.timeAtual = timeAtual;
	enviaSala1_lv.forcaHospedeiro = 12;
	enviaSala1_lv.senha = "123";
	enviaSala1_lv.sorte = sorte;
	enviaSala1_lv.aposta = aposta;

	//f(recebeSala2_xml.loaded)
	//enviaSala1_lv.sendAndLoad(link + "addsala.php", recebeSala1_xml, "POST");
	enviaSala1_lv.sendAndLoad(link + "addsala.php", recebeEprossegue_xml, "POST");
	atualizarSalas();
};
function buscasala() {
	recebeSala_carregando = true;
	//enviaSala1_lv.sendAndLoad(link + "selecionasalas.php", recebeSala1_xml, "POST");
	enviaSala1_lv.sendAndLoad(link + "selecionasalas.php", recebeGrupoSalas_xml, "POST");
};
function verificaCampoSala(campo, nomeSala) {
	trace("verificaCampoSala(), campo:"+campo+", nomeSala:"+nomeSala);
	recebeSala_carregando = true;
	enviaSala1_lv.campo = campo;
	enviaSala1_lv.nomeSala = nomeSala;
	enviaSala1_lv.userID = userID;
	//enviaSala1_lv.sendAndLoad(link + "verifysala.php", recebeSala3_xml, "POST");
	//enviaSala1_lv.sendAndLoad(link + "verifysala.php", recebeEsetaCampoValor_xml, "POST");
	enviaSala1_lv.sendAndLoad(link + "verifysala.php", recebeEsetaCampoValor_xml, "POST");
};
function alterCampoSala(campo, valor, nomeSala) {
	recebeSala_carregando = true;
	enviaSala1_lv.campo = campo;
	enviaSala1_lv.valor = valor;
	enviaSala1_lv.nomeSala = nomeSala;
	
	enviaSala1_lv.userID = userID;
	
	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else 
	//if(recebeSala2_xml.loaded)
	enviaSala1_lv.sendAndLoad(link + "altersala.php", recebeSala2_xml, "POST");
	//else if(recebeSala4_xml.loaded)
	//enviaSala1_lv.sendAndLoad(link + "altersala.php", recebeSala4_xml, "POST");
};
/*function alterCampoSalaEspecial(timeAdversario, sorte, nomeSala) {
	//trace("especiaL");
	recebeSala_carregando = true;
	//trace(timeAdversario);
	enviaSala1_lv.timeAdversario = timeAdversario;
	enviaSala1_lv.sorte = sorte;
	enviaSala1_lv.nomeSala = nomeSala;
	
	enviaSala1_lv.userID = userID;
	
	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else
	// if(recebeSala2_xml.loaded)
	enviaSala1_lv.sendAndLoad(link + "altersalaespecial.php", recebeSala2_xml, "POST");
	//else if(recebeSala4_xml.loaded)
	//enviaSala1_lv.sendAndLoad(link + "altersalaespecial.php", recebeSala4_xml, "POST");
};*/
function delSala(nomeSala) {
	enviaSala1_lv.nomeSala = nomeSala;
	
	//if(recebeSala2_xml.loaded)
	enviaSala1_lv.sendAndLoad(link + "delsala.php", recebeEprossegue_xml, "POST");
	//else if(recebeSala4_xml.loaded)
	//enviaSala1_lv.sendAndLoad(link + "delsala.php", recebeSala2_xml, "POST");
};
/*function delSalaAdversario(timeAdversario) {
	enviaSala1_lv.timeAdversario = timeAdversario;
	
	//if(recebeSala2_xml.loaded)
	enviaSala1_lv.sendAndLoad(link + "delsalaadversario.php", recebeSala1_xml, "POST");
	//else if(recebeSala4_xml.loaded)
	//enviaSala1_lv.sendAndLoad(link + "delsalaadversario.php", recebeSala2_xml, "POST");
	//else(recebeSala5_xml.loaded)
	//enviaSala1_lv.sendAndLoad(link + "delsalaadversario.php", recebeSala5_xml, "POST");
};*/
function esperarAlguemEntrarNaSala(hospedaria) {
	//vrs3=undefined;
	//_global.hospedeiro = true;
	esperarAlguemEntrarNaSalainterval = setInterval(function () {

		verificaCampoSala("timeAdversario", timeAtual);//timeAtual eh o nome da sala
		//if(vrs3!="vazia" and vrs3!=undefined and vrs3!="") {
			if(timeAdversario!="vazia" and timeAdversario!=undefined and timeAdversario!="") {
				//pega o a resposta do vrs3
				//timeAdversario = vrs3.toString();
				//precisa saber se é ou não hospedeiro seu otario que fui inteligente em sacar isso boa burro esperto legal, nao se crucificque pore ser jumento
				hospedeiro = true;
				//remover clips
				removeClipSalas();
				//limpa o interval, por favor
				clearInterval(esperarAlguemEntrarNaSalainterval);
				//vai dirte pra cena
				gotoAndPlay("carregandoingame", 1);
			} else {
				atualizarSalas();
			}
		//}
	}, 5000);//aumenta esse delay loco - 5s ta bom//2017-06-02 1s agora, para nao ter atraso
};
function podeIR() {	
	//Função Especial que configura certinho a sala, pois não da para usar 3x seguia a função la
	//if(adversario=="computador") {
		//se for o computador, muda sorte porque daí tem que ser voce mesmo para mudar - 3 de fev 2006
		//sorte = Math.random()*1+1.5;
		//alterCampoSala("sorte", hospedaria);
		//timeAdversario = "computador";
	//} else {
		//Se for jogar contra um ser humano normal
		sorte = Math.random()*1+1.5;
		
		//alterCampoSalaEspecial (timeAtual, sorte, timeAtual);
		//verificaCampoSala("timeAdversario", timeAtual);
	//}
	hospedeiro = false;
	removeClipSalas();
	gotoAndPlay("carregandoingame", 1);
};
//
function verificaCampoEstadio(campo) {
	//trace("verificaCampoEstadio(), campo:"+campo+", estadioNome:"+estadioNome);
	if(estadioNome!="sem estadio" and estadioNome!="" and estadioNome!=undefined) {
		recebeEstadio_carregando = true;
		enviaEstadio1_lv.campo = campo;
		enviaEstadio1_lv.estadioNome = estadioNome;
		
		enviaEstadio1_lv.sendAndLoad(link + "verifyestadio.php", recebeEstadio1_xml, "POST");
	}
};
function alterCampoEstadio(campo, valor, nomeEstadio) {
	recebeEstadio_carregando = true;
	enviaEstadio1_lv.campo = campo;
	enviaEstadio1_lv.valor = valor;
	enviaEstadio1_lv.nomeEstadio = nomeEstadio;
	enviaEstadio1_lv.userID = userID;
	
	if(userID==undefined)
	gotoAndPlay("logar", 1);
	else 
	enviaEstadio1_lv.sendAndLoad(link + "alterestadio.php", recebeEstadio2_xml, "POST");
};
function addEstadio(timeAtual) {
	//sorte a variaval que é usada pra calcular o re
	//sultado, é pga na hora de carrega
	//Aposta é quanto os times desejam apostar
	recebeEstadio_carregando = true;
	enviaEstadio1_lv.timeAtual = timeAtual;
	
	//if(recebeEstadio3_xml.loaded)
	enviaEstadio1_lv.sendAndLoad(link + "addestadio.php", recebeEstadio3_xml, "POST");
};

//
function addtime () {
	trace("addtime() "+nomeTime_var);
	//O nome to time
	addtime_lv.nomaoTime = nomeTime_var;
	//O fundo da bandeira
	addtime_lv.bandeiraTipo = frameNum;
	//O Estado onde sede
	addtime_lv.estado = estados[estadoNum];
	//Cor primária e secundária
	addtime_lv.corPrimaria = _root.seletorpr_mc.seletor_mc.cor;
	addtime_lv.corSecundaria = _root.seletorsec_mc.seletor_mc.cor;
	
	if (nomeTime_var==undefined) {
		msg_txt.text = "Colocar Nome";
	} else if (nomeTime_var.length<3) {
		msg_txt.text = "Nome Pequeno";
	} else if (addtime_lv.corPrimaria==undefined) {
		msg_txt.text = "Falta Cor Primária";
	} else if (addtime_lv.corSecundaria==undefined) {
		msg_txt.text = "Falta Cor Secundária";
	} else {
		//trace(addtime_lv.timeAtual);
		//link = "php/";
		addtime_lv.dinheiroIN = Math.round(Math.random()*4+4);
		msg_txt.text = "";
		addtime_lv.sendAndLoad(link + "addtimexml.php", recebeAddtime_xml, "POST");
	}
};


//
function valorMedia() {
	if(media_var>=mediaRestante_var) {
		aumenta = false;
	} else if(media_var<=1) {
		aumenta = true;
	}
	if(mediaRestante_var<1) {
		//trace("O porra");
		aumenta = "erro";
	}
	
	var passeAumenta = 0.01;
	var salarioAumenta = 1.30;
	//var passeAumenta = 0.05;
	//var salarioAumenta = 1.30;
	
	if(aumenta==true) {
		mediaRestante_var--;
		media_var++;
		passe_var+=passeAumenta;
		salario_var+=salarioAumenta;
	} else if(aumenta==false) {
		mediaRestante_var++;
		media_var--;
		passe_var-=passeAumenta;
		salario_var-=salarioAumenta;
	} else if(aumenta=="erro") {
		msg_txt.text = "Calma ae, erro";
	}
};
function registrarNovoJogador () {
	//O nome to jogador nomejogador_txt
	addjogador_lv.nomeJogador = nomejogador_var;
	//Nacionlidade do jogador
	addjogador_lv.nacionalidade = paises[paisesNum];
	//Posição do jogador
	addjogador_lv.posicao = posicoes[posicoesNum];
	//Caracteristicas da media
	addjogador_lv.media = media_var;
	addjogador_lv.passe = passe_var;
	addjogador_lv.salario = salario_var;
	addjogador_lv.timeAtual = timeAtual;
	
	trace("registrar(), timeAtual:"+timeAtual+", nomejogador_var:"+nomejogador_var+" ,nomejogador_txt:"+nomejogador_txt+", media_var:"+media_var);
	
	if (nomejogador_var==undefined) {
		msg_txt.text = "Colocar nome";
	} else if (nomejogador_var.length<4) {
		msg_txt.text = "Nome Pequeno";
	} else {
		msg_txt.text = "";
		addjogador_lv.sendAndLoad(link + "addjogadorxml.php", recebeAddjogador_xml, "POST");
	}
};
function naoCriarJogadoresPegarDinheiro() {
	//dar grana pro cara
	//trace(nomeTime_var);
	alterCampoTime("dinheiroIN", 7, nomeTime_var);
	popAddJogador_mc._visible = false;
	gotoAndPlay("logar", 1);
}

//
function funcaoVerifica () {
	numeroDaQuestao = Math.round(Math.random()*5);
	//trace(numeroDaQuestao);
	for(i=0;i=questoesAnteriores_array.length;i++) {
		if(numeroDaQuestao==questoesAnteriores_array[i]) {
			//trace("chamaremos funcaoVe de novo");
			//funcaoVerifica();
		} else {
			//trace("carregaremos a pergunta");
			//questoesAnteriores_array.push(numeroDaQuestao);
		}
	}
};
function requesitarQuestao() {
	//
	verificaCookie("logado");
	//funcaoVerifica();
	//numeroDaQuestao = 1;
	questoesAnteriores_array.push(numeroDaQuestao);
	requestQuestao_lv.numeroDaQuestao = numeroDaQuestao;
	requestQuestao_lv.sendAndLoad(link + "provao.php", recebeQuestao_xml, "POST");
};
function respondeu(resp) {
	//trace(resp);
	//trace(respostacerta);
	if(resp.toString()==respostacerta.toString() or respostacerta>4) {
		acertos++;
		msg_txt.text = "Acertou";
		som_sound.loadSound("sons/exato.mp3", true);
	} else {
		msg_txt.text = "Errou";
		som_sound.loadSound("sons/erro.mp3", true);
	}
	if(numeroDaQuestao>numeroDeQuestoes) {
		_root.play();
	} else {
		requesitarQuestao();
	}
	
	som_sound.start();
};
function avaliaNota (numeroDeQuestoes, acertos) {
	//trace(acertos);
	nota = Math.round((10/numeroDeQuestoes)*(acertos));
	if(nota==0) {
		msg_txt.text = "Se superou, tem um site que chama google, dá uma pesquisada!";
	} else if(nota==1) {
		msg_txt.text = "Voce é o cara!";
	} else if(nota==2) {
		msg_txt.text = "Quase, passou raspando!";
	} else if(nota==3) {
		msg_txt.text = "Chute, mas chute direito! Não sabe a resposta e nem chutar!";
	} else if(nota==4) {
		msg_txt.text = "Seu pato!";
	} else if(nota==5) {
		msg_txt.text = "Vocé é meio esperto ou meio burro?";
	} else if(nota==6) {
		msg_txt.text = "Quase aprovado! Tenta de novo que dessa vez vai, voce já decoro as respostas certas mesmo!";
	} else if(nota==7) {
		msg_txt.text = "Quando crescer vai ser jogador de futebol?";
	} else if(nota==8) {
		msg_txt.text = "Gosta de futebol nem um pouco! Por que você não vai ver se o Pelé está lá ná esquina?";
	} else if(nota==9) {
		msg_txt.text = "Pergunta final - Colou de quem?";
	} else if(nota==10) {
		msg_txt.text = "Não usou o google! Voce sabia todas as respostas não é mesmo?";
	} 
	
	if (nota<=5) {
		//REPROVADO
		aprovado = false;
		aprovado_mc._visible = false;
		reprovado_mc._visible = true;
		aprovadoCarimbo_mc._visible = false;
		reprovadoCarimbo_mc._visible = true;
		
		//alterCampoJoga("tecnico", 0);
		//erroCompilaTime = setInterval(function(){},100);
		alterCampoJoga("notaProvao", nota);
	} else {
		//APROVADO
		//verificaCookie("logado");
		
		aprovado = true;
		aprovado_mc._visible = true;
		reprovado_mc._visible = false;
		aprovadoCarimbo_mc._visible = true;
		reprovadoCarimbo_mc._visible = false;
		
		alterCampoJoga("tecnico", 1);
		alterCampoJoga("notaProvao", nota);
		//alterCampoJoga2("notaProvao", nota);
		//alterCampoJoga3("timeAtual", "podeCriar");
		
		//serve para quem for aprovado não ficar de gracinha
		//refazendo a prova 17 de out 2005
		tentar_mc._visible = false;
	}
}


//
function loadSceneLogar() {
	//
	//verificaCookie("logado");
	//
	if(fundo_mc._currentframe!=5)
	fundo_mc.gotoAndPlay(5);

	//
	contato_btn.onRelease = function () {
		getURL("mailto:emailqueeuleio@gmail.com", "_blank", "POST");
	}
	
	registrar_mc.onRelease = function () {
		gotoAndPlay("registro", 1);
	}

	logar_btn.onRelease = function () {
		logar();
	}
	msg_txt.text = "Acesse sua conta";
	stop();
}
function loadSceneRegistro() {
	if(fundo_mc._currentframe!=7)
	fundo_mc.gotoAndPlay(7);

	var registra_lv = new LoadVars();
	var registra_xml = new XML();
	var userID;
	registrar_btn.onRelease = function() {
		registrar();
	}
	cancelar_btn.onRelease = function () {
		gotoAndPlay("logar", 1);
	}
	registra_xml.onLoad = function() {
		trace("registra_xml:"+this);
		resp_var = this.toString();
		//Arquivo XML que recebo do servidor, contem a resposta e 
		//o ID do usuário para por deleta a conta
		//TOTALS sem segurança, necessário passar senha
		resposta = this.firstChild.childNodes[0].firstChild;
		userID = this.firstChild.childNodes[1].firstChild;
		
		//trace(userID);
		
		msg_txt.text = resposta;
		if(msg_txt.text=="Registrado") {
			play();
		}
	};
	function checarEmail() {
		procurarroba = email_var.indexOf("@");
		if(procurarroba<0) {
			email_bol=false;
		} else
		email_bol = true;
		procuraponto = email_var.indexOf(".");
		if(procuraponto<0) {
			email_bol=false;
		} else
		email_bol = true;
	}
	/*function minChar(par:String, num:Number) {
		if(par<num)
		return(false):
		else
		return(true);
	}*/
	function registrar() {
		registra_lv.nome = _root.nome_var
		registra_lv.email = _root.email_var;
		registra_lv.sexo = _root.sexo_var;
		registra_lv.usuario =_root.user_var.toLowerCase();
		registra_lv.senha =_root.pass_var.toLowerCase();
		
		checarEmail();
		
		if (nome_var==undefined) {
			msg_txt.text = "Erro no nome";
		} else if (email_var==undefined or !email_bol) {
			//trace(email_bol);
			msg_txt.text = "Erro no Email";
		} else if (sexo_var==undefined) {
			msg_txt.text = "Erro no Sexo";
		} else if (user_var==undefined) {
			msg_txt.text = "Erro no Usuário";
		} else if (pass_var==undefined) {
			msg_txt.text = "Erro na Senha";
		} else if (user_var.length<5) {
			msg_txt.text = "Usuário pequeno";
		} else if (nome_var.length<9) {
			msg_txt.text = "Nome pequeno";
		} else {
			//trace("Registrado");
			msg_txt.text = "";
			registra_lv.sendAndLoad(link + "registroxml.php", registra_xml, "POST");
			//play();
		}
	};
	function desregistrar(userID) {
		//trace(userID);
		registra_lv.userID = userID;
		registra_lv.sendAndLoad(link + "desregistroxml.php", registra_xml, "POST");
	};
	stop();
	delcount_btn.onRelease = function () {
		gotoAndPlay("registro", 1);
		desregistrar(userID);
	};

	ok_btn.onRelease = function () {
		gotoAndPlay("carregando", 1);
	}
}
function loadSceneCriarTime() {
	fundo_mc.gotoAndPlay(2);

	if(jsonObject.times[0]) {
		nomeTime_var = jsonObject.times[0].nomeTime;
	} else {
		nomeTime_var = "";
	}
	
	loadFlagData(flag_mc, jsonObject.times[0]);
	setarCor(seletorpr_mc, "0x00FF00", seletorpr_mc._x, seletorpr_mc._y);
	setarCor(seletorsec_mc, "0xB066E7", seletorpr_mc._x, seletorpr_mc._y);
	//
	nometime_txt.onChanged = function () {
		flag_mc.timeNome_txt.text = nomeTime_var;
		flag_mc.timeNome2_txt.text = nomeTime_var;
		jogador_mc.coluna.nomeTime_var = nomeTime_var;
	}
	addtime_mc.onRelease = function () {
		addtime();
		//trace(_root.seletorpr_mc.seletor_mc.cor);
	};
	cancelar_mc.onRelease = function () {
		gotoAndPlay("managetime", 1);
	}

	stop();

	badeira_dir_btn.onRelease = function() {
		frameNum++;
		jogador_mc.coluna.gotoAndPlay(frameNum);
		flag_mc.fundos_mc.gotoAndPlay(frameNum);
	}
	badeira_esq_btn.onRelease = function() {
		frameNum--;
		jogador_mc.coluna.gotoAndPlay(frameNum);
		flag_mc.fundos_mc.gotoAndPlay(frameNum);
	}
	estado_dir_btn.onRelease = function() {
		if(estadoNum>(estados.length-2))
		estadoNum = -1;
		
		estadoNum++;
		estado_txt.text = estados[estadoNum];
	}
	estado_esq_btn.onRelease = function() {
		if(estadoNum<1)
		estadoNum = estados.length;
		
		estadoNum--;
		estado_txt.text = estados[estadoNum];
	}
}
function loadSceneAddjogador() {
	fundo_mc.gotoAndPlay(3);

	popAddJogador_mc.pergunta = "Você tem a opção de criar 15 jogadores para fazer seu time ou pegar sete (7) milhões para comprar jogadores e formar um time, porisso é recomendado que voce faça seus jogadores!";
	popAddJogador_mc.esq_mc.onRelease = function () {
		naoCriarJogadoresPegarDinheiro();
	};
	popAddJogador_mc.dir_mc.onRelease = function () {
		popAddJogador_mc._visible = false;
	};

	paises_txt.text = paises[paisesNum];
	posicoes_txt.text = posicoes[posicoesNum];

	add_jogador_mc.onRelease = function () {
		_root.registrarNovoJogador();
	}
	//
	nome_random_btn.onRelease = function () {
		nomejogador_var = nomes_array[Math.round(Math.random()*nomes_array.length)];
	}
	//
	seta_nacion_dir_btn.onRelease = function () {
		if(paisesNum>(paises.length-2))
		paisesNum = -1;
		
		paisesNum++;
		paises_txt.text = paises[paisesNum];
	}
	seta_nacion_esq_btn.onRelease = function () {
		if(paisesNum<1)
		paisesNum = paises.length;;
		
		paisesNum--;
		paises_txt.text = paises[paisesNum];
	}
	//
	seta_pos_dir_btn.onRelease = function () {
		if(posicoesNum>(posicoes.length-2))
		posicoesNum = -1;
		
		posicoesNum++;
		posicoes_txt.text = posicoes[posicoesNum];
	}
	seta_pos_esq_btn.onRelease = function () {
		if(posicoesNum<1)
		posicoesNum = posicoes.length;;
		
		posicoesNum--;
		posicoes_txt.text = posicoes[posicoesNum];
	}
	//
	mais_btn.onPress = function () {
		//mais_btn.onEnterFrame = function () {
			//if(numero>=3){
				aumenta = true;
				valorMedia();
				numero=0;
			//}
			//numero++;
		//};
	}
	mais_btn.onRelease = function () {
		delete mais_btn.onEnterFrame;
	}
	mais_btn.onReleaseOutside = function () {
		delete mais_btn.onEnterFrame;
	}

	menos_btn.onPress = function () {
		menos_btn.onEnterFrame = function () {
			//if(numero>=3){
				aumenta = false;
				valorMedia();
				numero=0;
			//}
			//numero++;
		};
	}
	menos_btn.onRelease = function () {
		delete menos_btn.onEnterFrame;
	}
	menos_btn.onReleaseOutside = function () {
		delete menos_btn.onEnterFrame;
	}
	registarJoga_btn.onRelease = function() {
		_root.registrar();
	}
	stop();
	//var dropShadow:DropShadowFilter = new DropShadowFilter(dropShadowDistance, dropShadowAngle, 0, 100, dropShadowBlur, dropShadowBlur);
}
function loadSceneManagetime() {
	if(fundo_mc._currentframe!=4)
	fundo_mc.gotoAndPlay(4);
	//
	//reParseAllJSON();
	//stop();
	//
	msg_txt.text = "Francisco Matelli Matulovic, o criador, te saúda!";
	//
	popAddEstadio_mc._visible = false;
	aqui_mc.setMask(mask_mc);
	//
	loadPartManage();
	nomeTecnico_txt.text = jsonObject.cadastros[0].nome;
	//
	loadFlagData(flag_mc, jsonObject.times[0]);
	flag_mc.onRelease = function() {
		gotoAndStop("criartime", 1);
	}
	//loadPartFinancas();

	time_mc.onRelease = function () {
		backgroundGlow(this);
		msg_txt.text = "Clique no jogador para escalar";
		loadPartManage();
		
	}
	mercado_mc.onRelease = function () {
		backgroundGlow(this);
		msg_txt.text = "Mercado de Compra de Jogadores";
		loadPartMercado();
		
	}
	financas_mc.onRelease = function () {
		backgroundGlow(this);
		msg_txt.text = "Recursos financeiros do time";
		loadPartFinancas();
	}
	torcida_mc.onRelease = function () {
		backgroundGlow(this);
		msg_txt.text = "Dados dos seus torcedores";
		loadPartTorcida();
	}
	
	estadio_mc.onRelease = function () {
		backgroundGlow(this);
		loadPartEstadio();
	}
	correio_mc.onRelease = function () {
		backgroundGlow(this);
		loadPartMensagens();
	}
	voltar_mc.onRelease = function () {
		backgroundGlow(this);
		//getURL("javascript:close()");
		gotoAndPlay("logar", 1);
	}

	jogar_mc.onRelease = function () {
		backgroundGlow(this);
		preparaEscalacao()
	}
	//
	plantelStage_mc.seta_time_cima.onPress = function() {
		//aqui_mc.seta_time_cima.onEnterFrame = function () {
		//this.onEnterFrame = function() {
			aqui_mc._y+=15;
			//trace(aqui_mc._y);
		//}
		//trace(aqui_mc._y);
	}
	plantelStage_mc.seta_time_cima.onRelease = function() {
		//delete aqui_mc.seta_time_cima.onEnterFrame;
	}
	plantelStage_mc.seta_time_cima.onReleaseOutside = function() {
		//delete aqui_mc.seta_time_cima.onEnterFrame;
	}
	plantelStage_mc.seta_time_baixo.onPress = function() {
		//aqui_mc.seta_time_baixo.onEnterFrame = function () {
			aqui_mc._y-=15;
			//trace(aqui_mc._y);
		//}
	}
	plantelStage_mc.seta_time_baixo.onRelease = function() {
		//delete aqui_mc.seta_time_baixo.onEnterFrame;
	}
	plantelStage_mc.seta_time_baixo.onReleaseOutside = function() {
		//delete aqui_mc.seta_time_baixo.onEnterFrame;
	}
	//
	msg_txt.text = " Escalados: " +  numeroJogadoresEscalados + ", custo partida, energia e força";

	//verificaCookie("logado");
	//aqui_mc.setMask("mask_mc");
	stop();
}
function loadPartManage() {
	trace(jsonObject.jogadores[0].nome);
	aqui_mc_load_players("jogadores");
	hideAllExcept("aqui_mc");
	//aqui_mc.atacar("carregadorJogador");
	aqui_mc._y = 158.7;
}
function loadPartMercado() {
	hideAllExcept("aqui_mc");
	//aqui_mc_load_players(jsonObject.jogadores_avenda);
	aqui_mc_load_players("jogadores_avenda");
	/*aqui_mc.atacar("carregadorJogadorComprar");
	aqui_mc.setMask("mask_mc");
	aqui_mc._y = 158.7;*/
}
function loadPartFinancas () {
	//
	hideAllExcept("financasStage_mc");
	//
	var dinheiro = jsonObject.times[0].dinheiroIN;
	//var salario = calculaSoma(jsonObject.jogadores, "salario");
	var salario = 1.20;
	var renda = jsonObject.times[0].ultimaRenda;
	//var emprestimos = jsonObject.times[0].emprestimos;
	var estimativa = Math.floor(dinheiro/(renda-salario));
	if(estimativa<0)
	estimativa=0;
	//
	financasStage_mc.dinheiro_txt.text = "R$ " + dinheiro + " mil";
	financasStage_mc.salario_txt.text = "R$ " + salario + " mil";
	financasStage_mc.renda_txt.text = "R$ " + renda + " mil";
	financasStage_mc.emprestimos_txt.text = "R$ " + jsonObject.times[0].emprestimos + " mil";
	financasStage_mc.estimativa_txt.text = estimativa + " jogos";
}
function loadPartTorcida() {
	hideAllExcept("torcidaStage_mc");
	torcidaStage_mc.torcedores_txt.txt = jsonObject.times[0].torcedores;
	//contrataçãossss 5/nov/2005 feriado da cidade 234 anos acho, 10:09 fui
	//na aula mas não teve, o anglo é uma bosta
	//esse comentário um tanto quanto inadequado foi movido de estádio para torcida pelo falto de espaço em 17 de jan de 2006 as 1:36
	/*contratarVendedor = function(PARnum) {
		if(PARnum>0) {
			//se o parametro for positivo
			if(estadioCapacidade/1000>estadioVendedores) {
				//Um vendedor para cada 1 mil lugares
				msg_txt.text = "";
				//Aumenta o numero de vendedores
				estadioVendedores = new Number(estadioVendedores + PARnum);
				//Adiciona o preço do serviço a saida de dinheiro
				//dinheiroOUT+=001;
				//Atualiza a msg do quadro
				//dinheiroOUT_txt.text = "R$ " + //dinheiroOUT;
				//Muda no bd
				alterCampoEstadio("vendedores", estadioVendedores, estadioNome);
			} else {
				msg_txt.text = "Aumente o estádio, não cabe tantos vendedores";
			}
		} else {
			//se o parametro for negativo
			if(estadioVendedores>0) {
				msg_txt.text = "";
				//Aumenta o numero de vendedores
				estadioVendedores = new Number(estadioVendedores + PARnum);
				//Adiciona o preço do serviço a saida de dinheiro
				//dinheiroOUT-=001;
				//Atualiza a msg do quadro
				//dinheiroOUT_txt.text = "R$ " + //dinheiroOUT;
				//Muda no bd
				alterCampoEstadio("vendedores", estadioVendedores, estadioNome);
			} else {
				msg_txt.text = "Calma ae! não queremos um numero negativo de vendedores!";
			}
		}
	};

	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------

	contratarBarracaComida = function(PARnumBarra) {
		//trace(estadioBarracasComida);
		//trace(PARnumBarra);
		//trace(estadioBarracasComida + PARnumBarra);
		if(PARnumBarra>0) {
			//se o parametro for positivo
			if(estadioCapacidade/7500>estadioBarracasComida) {
				//Uma barraca para cada 10.000 pessoas
				msg_txt.text = "";
				//Aumenta o numero de barracas
				estadioBarracasComida = new Number(estadioBarracasComida);
				estadioBarracasComida = new Number(estadioBarracasComida + PARnumBarra);
				//Adiciona o preço do serviço a saida de dinheiro
				//dinheiroOUT+=005;
				//Atualiza a msg do quadro
				//dinheiroOUT_txt.text = "R$ " + //dinheiroOUT;
				//Muda no bd
				alterCampoEstadio("barracasComida", estadioBarracasComida, estadioNome);
			} else {
				msg_txt.text = "Aumente o estádio, não tem gente suficiente pra comer essa gororoba";
			}
		} else {
			//se o parametro for negativo
			if(estadioBarracasComida>0) {
				msg_txt.text = "";
				//Aumenta o numero de vendedores
				estadioBarracasComida = new Number(estadioBarracasComida + PARnumBarra);
				//Adiciona o preço do serviço a saida de dinheiro
				//dinheiroOUT-=005;
				//Atualiza a msg do quadro
				//dinheiroOUT_txt.text = "R$ " + //dinheiroOUT;
				//Muda no bd
				alterCampoEstadio("barracasComida", estadioBarracasComida, estadioNome);
			} else {
				msg_txt.text = "Sua barraca de comida não está armada para voce tira-lá!";
			}
		}
	};

	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------

	contratarBarracaUniforme = function(PARnumBarraUni) {
		if(PARnumBarraUni>0) {
			//se o parametro for positivo
			if(estadioCapacidade/15000>estadioBarracasUniforme) {
				//Uma barraca para cada 15.000 pessoas
				msg_txt.text = "";
				//Aumenta o numero de barracas
				estadioBarracasUniforme = new Number(estadioBarracasUniforme + PARnumBarraUni);
				//Adiciona o preço do serviço a saida de dinheiro
				//dinheiroOUT+=015;
				//Atualiza a msg do quadro
				//dinheiroOUT_txt.text = "R$ " + //dinheiroOUT;
				//Muda no bd
				alterCampoEstadio("barracasUniforme", estadioBarracasUniforme, estadioNome);
			} else {
				msg_txt.text = "Seu estádio é pequeno para tantas barracas";
			}
		} else {
			//se o parametro for negativo
			if(estadioBarracasUniforme>0) {
				msg_txt.text = "";
				//Aumenta o numero de vendedores
				estadioBarracasUniforme = new Number(estadioBarracasUniforme + PARnumBarraUni);
				//Adiciona o preço do serviço a saida de dinheiro
				//dinheiroOUT-=015;
				//Atualiza a msg do quadro
				//dinheiroOUT_txt.text = "R$ " + //dinheiroOUT;
				//Muda no bd
				alterCampoEstadio("barracasUniforme", estadioBarracasUniforme, estadioNome);
			} else {
				msg_txt.text = "Ta dormindo? você não tem mais barracas!";
			}
		}
	};*/
}
function loadPartEstadio() {
	hideAllExcept("estadioStage_mc");

	estadioNome = jsonObject.times[0].estadioNome;

	if(estadioNome=="sem estadio") {
		construir_kit._visible = true;
		popAddEstadio_mc.pergunta = "O que voce acha de criar um estádio para seu time e sair do campinho de baixo da rua que seu time joga? Construir um estádio custa 1 milhão mais ou menos, são tantos impostos e taxas que o custo fica altissímo, mas " + timeAtual + " poderá hospedar partidas!";
		estadioCapacidade = 0;
		//Função do botão da esquerda
		popAddEstadio_mc.esq_mc.onRelease = function () {
			//Aceitou fazer o estadio
			estadioNome=timeAtual;
			//Invisibiliza o pop
			popAddEstadio_mc._visible = false;
			//2º pop, que tem as funções de construição
			construir_kit._visible = true;
			//Ranca grana do bicho
			alterCampoTime("dinheiroIN", -1.00);
			//Muda o nome do estadio e chumpt
			alterCampoTime("estadioNome", timeAtual);
			//Mostra que a grana foi arrancada
			dinheiroIN -= 1;
			//Add o estadio né porra
			addEstadio(timeAtual);
			//Muda a caixa do campo hehehe, abiguo
			estadioCapacidade = 1000;
			capacidade_txt.text = estadioCapacidade + " lugares";
		};
		//Função do botão da direita do pop-up
		popAddEstadio_mc.dir_mc.onRelease = function () {
			//Sai do manage Estadio
			gotoAndPlay(1);
		};
	} else {
		//se o jogador tiver estadio
		popAddEstadio_mc._visible = false;
		//botão que se clicar constroi um estádio
		construir_kit._visible = false;
	}
	//
	estadioNome_txt.text = estadioNome;
	capacidade_txt.text = estadioCapacidade + " lugares";
	//
	alteraPreco = function (PARvalor) {
		estadioEntrada += PARvalor;
		alterCampoEstadio("entrada", estadioEntrada, estadioNome)//nomeEstadio.toString());
		geral        = "R$ " + Math.round(estadioEntrada * 5/100);
		arquibancada = "R$ " + Math.round(estadioEntrada * 17/100);
		cadeiras     = "R$ " + Math.round(estadioEntrada * 22/100);
		camarote     = "R$ " + Math.round(estadioEntrada * 56/100);
	}
	//Precisa chamar o altera preço para mostrar pro jogador
	//alteraPreco(0);

	aumentarEstadio = function () {
		if(dinheiroIN>0.2) {
			estadioCapacidade+=1000;
			dinheiroIN-=0.1;
			//altera no root
			capacidade_txt.text = estadioCapacidade + " lugares";
			//altera no bd
			//tem que dividir por mil porque é 4,2 no bd
			alterCampoEstadio("capacidade", estadioCapacidade, estadioNome);
			alterCampoTime("dinheiroIN", -0.1, timeAtual);
		} else {
			msg_txt.text = "Dinheiro insuficiente para essa obra!";
		}
	}
}
function loadPartMensagens() {
	//AS respostas para a diretoria eu que leio, e depende do teor eu fodo a pessoa
	hideAllExcept("msgStage_mc");
	stop();
}
function loadSceneSala() {
	//
	fundo_mc.gotoAndPlay(2);

	//Calcula a sorte, fora da função pois se for jogar contra computador ja viu
	var sorte;// = Math.round(Math.random()*8)+1;
	//
	atualizarSalas();
	//
	//delSala(timeAtual);
	aqui_mc.setMask(mask_mc);
	//
	seta_sala_cima.onPress = function() {
		//aqui_mc.seta_time_cima.onEnterFrame = function () {
		//this.onEnterFrame = function() {
			aqui_mc._y+=15;
			//trace(aqui_mc._y);
		//}
		//trace(aqui_mc._y);
	}
	seta_sala_cima.onRelease = function() {
		//delete aqui_mc.seta_time_cima.onEnterFrame;
	}
	seta_sala_cima.onReleaseOutside = function() {
		//delete aqui_mc.seta_time_cima.onEnterFrame;
	}
	seta_sala_baixo.onPress = function() {
		//aqui_mc.seta_time_baixo.onEnterFrame = function () {
			aqui_mc._y-=15;
			//trace(aqui_mc._y);
		//}
	}
	seta_sala_baixo.onRelease = function() {
		//delete aqui_mc.seta_time_baixo.onEnterFrame;
	}
	seta_sala_baixo.onReleaseOutside = function() {
		//delete aqui_mc.seta_time_baixo.onEnterFrame;
	}
	//
	criar_btn.onRelease = function () {
		removeClipSalas();
		//this.titulo = "Deletar Sala";
		if(criar_btn.titulo=="Deletar Sala") {
			criar_btn.titulo="Criar Sala";
			msg_txt.text = "Sala deletada!";
			clearInterval(esperarAlguemEntrarNaSalainterval);
			delSala(timeAtual);
		} else {
			criar_btn.titulo="Deletar Sala";
			msg_txt.text = "Você criou uma sala, aguarde um oponente entrar!";
			//var sorte = Math.round(Math.random()*8);
			//nome sorte aposta
			addSala(timeAtual, 0, 0);
			atualizarSalas();
			esperarAlguemEntrarNaSala();
		}
		//carregar_mc.play();
	}
	atualizar_btn.onRelease = function () {
		atualizarSalas();
		//removeClipSalas();
		//carregar_mc.play();
	}
	voltar_btn.onRelease = function () {
		delSala(timeAtual);
		removeClipSalas();
		clearInterval(esperarAlguemEntrarNaSalainterval);
		gotoAndPlay("managetime", 1);
		//gotoAndPlay("managetime","depoisDeCarregar");
	}
	stop();
	//precisa pegar quantas salas tem feita
	//e qual o nome do time que criou!! só
	///\/\/\/\/ olha pa cima, veja bem....coitado 25 de out 2005 8 17

	verificaCookie("logado");
	//função para remover as salas que aparecem no root
	//e não saem quando muda-se a cens
	
	//função chamada pelo botão da sala, carregdorSala
}
function loadSceneIngame() {
	//trace(res_j)
	//Resultado sorteado e entregue aos dois
	//Tem que sorter a renda do jogo também, e
	//números de jogadores e cartões e faltas
	//também tem que carregar os jogadores de novo poispode mudar com compras
	var golsQueFaras;
	var golsQueTomaras;

	//var time1forca; = 105Math.round(Math.random()*600);
	//var time2forca; = 76Math.round(Math.random()*600);

	var PodeVariarBoolean = true;
	//var sorte = Math.random()*1+1.5;



	sortearResultado = function() {
		subs = time1forca-time2forca;
		if(subs<0)
		subs*=-1;
		golsQueFaras = (subs/Math.pow(sorte, sorte));
		golsQueTomaras = (subs/Math.pow(sorte, sorte)) - (sorte+2);
		//caso fique negativo o numero invertteee 24 de out de 2005
		
		if(golsQueFaras<0)
		golsQueFaras*=-1;
		if(golsQueTomaras<0)
		golsQueTomaras*=-1;
			
		//
		
		if(golsQueFaras>=6 and golsQueTomaras<golsQueFaras) {
			//trace("Fará mais de 6 gols e vai ganhar");
			golsQueFaras = 3*sorte;
			golsQueTomaras = sorte*sorte;
		} else if(golsQueTomaras>=6 and golsQueFaras<golsQueTomaras) {
			//trace("Tomará mais de 6 gols e vai perder");
			golsQueTomaras = 6-sorte;
			golsQueFaras = 3+sorte;
		} else if(golsQueTomaras==golsQueFaras and golsQueTomaras>3) {
			//trace("Vai empatar com mais de 3 gols");
			golsQueTomaras = sorte;
			golsQueFaras = sorte;
		}
		
		//
		
		if(golsQueFaras>golsQueTomaras*3) {
			//trace("fara mais que o triplo");
			golsQueFaras = golsQueTomaras*3;
		} else if (golsQueTomaras>golsQueFaras*3) {
			//trace("tomara mais que o triplo");
			golsQueTomaras = golsQueFaras*3;
		}

		//
		
		golsQueFaras = Math.round(golsQueFaras/2);
		golsQueTomaras = Math.round(golsQueTomaras/2);
		
		//extra money hauhauha ndv
		
		if(hospedeiro) {
			golsQueFarasBk = golsQueFaras;
			golsQueFaras = golsQueTomaras;
			golsQueTomaras = golsQueFarasBk;
			delete golsQueFarasBk;
		}
		//alter campo time legal legal 26 de out de 2005
		//ainda falta VTD e GP E GC
		//trace(" T1: " + time1forca + " T2: " + time2forca);
		//trace(" FAZ: " + golsQueFaras + " TOMA: " + golsQueTomaras);
	}
	sortearResultado();
	function resultador() {
		//Escreva Dentro de Intervalo Para mudar sempre
		intervalo = setInterval( function () {
			tempo+=2;
			barraTempo_mc._width = tempo;
			
			//widthNum é a variação que aumenta a barra
			if(tempo<250 or (golsFeitos==golsQueFaras and golsTomados==golsQueTomaras))
			widthNum = Math.round(Math.random()*30+10);
			else
			widthNum = Math.round(Math.random()*10+35);
			
			//Para ver quem vai avançar, repare no ELSE 3 de fev de 2006 1 e 54
			if(boolean) {
				aumentarBarra(widthNum);
			} else {
				diminuirBarra(widthNum);
			}
			
			//Serve para ficar equilibrado o jogo
			if(golsFeitos==golsQueFaras and golsTomados==golsQueTomaras) {
				time1forca = time2forca = 100;
			}
			//Quando a barra acerta o ponto maximo do GOL
			if(barra1_mc._width<gol1_txt._x-20 or barra1_mc._width>gol2_txt._x+20) {
				barra1_mc._width = 560/2;
			}
			//FINAL FIM DO JOGO AQUI, FAZER FUNÇÂO GATAO< QUE JA ERA LINDAO quarta-feira, 18 de jan de 2006
			if(barraTempo_mc._width==barraTempoTotal_mc._width) {
				clearInterval(intervalo);
				fimDeJogo();
			}
			bola_mc._x = barra1_mc._width + barra1_mc._x;
		}, 100);
	}
	function aumentaForca() {
		if(golsQueFaras>=golsQueTomaras) {
			//trace("Time um força aumentara: " + time1forca);
			time1forca+=time1forca+time1forca;
			//trace("Ficando: " + time1forca);
		} else if(golsQueTomaras>=golsQueFaras) {
			//trace("Time dois força aumentara");
			time2forca+=time2forca+time2forca;
		}
	}
	resultador();
	//aumentaForca();
	stop();
	function aumentarBarra(widthNum) {
		barra1_mc._width+=widthNum * (time1forca/100);
		
		if(golsFeitos<golsQueFaras) {
			if(barra1_mc._width>gol2_txt._x) {
				gol(true);
			}
		} else {
			if(barra1_mc._width>(gol2_txt._x-50)) {
				boolean = 0;
			} 
		}
	}
	function diminuirBarra(widthNum) {
		barra1_mc._width-=widthNum * (time2forca/100);
		if(golsTomados<golsQueTomaras) {
			if(barra1_mc._width<gol1_txt._x) {
				gol(false);
			}
		} else {
			if(barra1_mc._width<(gol1_txt._x+50)) {
				boolean = 1;
			} 
		}
	}
	variaBoolean = setInterval(function () {
		//Esse função serve para Poder variar a barra de ir para frente e para trás/sem ficar massacrante, tipo só o time2 ficar avanaçado
		//Essa função só interfere depois de o resultado 
		//if(golsFeitos==golsQueFaras and golsTomados==golsQueTomaras)
		
		if(tempo<250 or (golsFeitos==golsQueFaras and golsTomados==golsQueTomaras))
		boolean = Math.round(Math.random());
		//if(golsFeitos==golsQueFaras and golsTomados==golsQueTomaras)
		//boolean = Math.round(Math.random());
	}, 1250);

	stop();
	//Partida definida ao entrar no jogo
	//Só pude alterar time no intervalo
	//Partida definida ao depois do intervalo
	//Cada computador irá processar o jogo de um jeito
	//mas os resultados serãos os mesmos
	//Há fatores para alterar o resultador
	//Sorte
	//Confiança do time
	//Só uma barra precisa se movimentar
	//Seleção do fundo
	//fundo_mc.gotoAndPlay(1); nem precisa por
	var timeUmQueFazAgora = 1;
	var golsFeitos = 0;
	var widthNum;
	var golsTomados = 0;
	var tempo = 0;
	var boolean = 0;
	var tempoPartida = 450;
	var rendaDoUltimoJogo = 0;

	var jogador1Pronto = true;
	var jogador2Pronto = true;

	//comente
	/*var dinheiroOUT = 1.20;
	var estadioVendedores = 14;
	var estadioBarracasComida = 6;
	var estadioBarracasUniforme = 1;*/

	popMensagem_mc._visible = false;
	//Serve para os jogadores perderem a grana mesmo fechando a janela, espertinhos
	function inicioDeJogo() {
		alterCampoTime("dinheiroIN", dinheiroOUT, timeNome);
	}
	//Da grana para quem venceu
	function fimDeJogo () {
		//Apito
		_root.attachAudio("apito");
		//Limpa intervalos
		clearInterval(variaBoolean);
		//A primeira coisa é essa, deixa visivel
		popMensagem_mc._visible = true;
		popMensagem_mc.esq_mc.onRelease = function () {
			gotoAndPlay("sala", 1);
		};
		popMensagem_mc.dir_mc.onRelease = function () {
			gotoAndPlay("carregandojogadores", 1);
		};
		
		if(golsQueTomaras>golsQueFaras) {
			//Perdeu
			popMensagem_mc.pergunta = "Que pena, voce foi massacrado pelo " + timeAdversario + "! Está jogando muito mal" + newline + newline + "O que deseja fazer agora seu fracassado?";
			//Barracas vendem pouco
			//rendaDoUltimoJogo = graninhaDasVendas*0,8;
			if(numeroTorcedores>100) {
				numeroTorcedores-=50;
				alterCampoTime("torcedores", -50, timeNome);
			}
		} else if (golsQueFaras>golsQueTomaras) {
			//venceu
			popMensagem_mc.pergunta = "Vamos comemorar, eu compro as cervejas!" + newline + newline + "Escolha uma opção, seu desejo é uma ordem senhor!";
			//Barracas vendem 100%, bonus para o jogador que vence, 100 mil 600 mil
			bonusPorVencer = Math.random()*0.5+0.1;
			//rendaDoUltimoJogo = graninhaDasVendas+bonusPorVencer;
			if(numeroTorcedores<999999) {
				numeroTorcedores+=150;
				alterCampoTime("torcedores", 150, timeNome);
			}
		} else {
			popMensagem_mc.pergunta = "Mas é um fracote mesmo, empatou bem com o " + timeAdversario + "! Treina mais ae!" + newline + newline + "Depois desse vexame vai fazer o quê?";
			//Barracas mais ou menos
			//rendaDoUltimoJogo = graninhaDasVendas*0,9;
			if(numeroTorcedores<999999) {
				numeroTorcedores+=100;
				alterCampoTime("torcedores", 100, timeNome);
			}
		}
		dinheiroOUT = timeSalario/100 + estadioVendedores*0.01 + estadioBarracasComida*0.050 + estadioBarracasUniforme*0.100;
		//
		parte1 = (estadioVendedores*6);
		//trace(parte1);
		parte2 = (estadioBarracasComida*3);
		//trace(parte2);
		parte3 = (estadioBarracasUniforme*2);
		//trace(parte3);
		parte4 = (Math.pow(sorte, sorte) + sorte*3)/10;
		//trace(parte4);
		parte5 = numeroTorcedores/100 - estadioEntrada;
		//
		var graninhaDasVendas = Number(parte1 + parte2 + parte3)/parte4;
		//
		graninhaDasVendas -= dinheiroOUT - parte5;
		//esse if aí é muito loco, tem chance de ser 1 ou ser 0 daí se for 0 o cara perde a grana, que massa mas confuso 3 de fev de 2006
		if(Math.round(sorte-2.30)) {
			graninhaDasVendas = Math.floor(graninhaDasVendas);
		} else {
			graninhaDasVendas = Math.floor(graninhaDasVendas)*-1;
		}
		//
		alterCampoTime("ultimaRenda", graninhaDasVendas);
	}
	
	//carregador_mc.interno_mc.loadMovie("banners/estilohost.swf");
	//carregador_mc.setMask(mascara2_mc);
	loadFlagData(flag_mc, times_json);
	loadFlagData(flag_adversario_mc, times_adversario_json);
	//nome time
	/*flagTime_mc.timeNome2_txt.text = timeNome;
	//cor pri
	var coloridoTT_color = new Color(flagTime_mc.timeNome2_txt);
	coloridoTT_color.setRGB(corPrimaria);
	//cor sec
	var coloridoFT_color = new Color(flagTime_mc.fundo_mc);
	var coloridoB2_color = new Color(barra1_mc)
	coloridoFT_color.setRGB(corSecundaria);
	coloridoB2_color.setRGB(corSecundaria);
	//Carrega o fundo da flag
	if(flagTime_mc.fundos_mc._currentframe!=numeroBandeiraUniforme)
	flagTime_mc.fundos_mc.gotoAndPlay(numeroBandeiraUniforme);


	//Para o time adversário
	flagAdversario_mc.timeNome2_txt.text = timeAdversario;
	//cor pri
	var coloridoTxtAd_color = new Color(flagAdversario_mc.timeNome2_txt)
	coloridoTxtAd_color.setRGB(corPrimariaAdversario);
	//cor sec
	var coloridoAdF_color = new Color(flagAdversario_mc.fundo_mc);
	var coloridoB1_color = new Color(barra2_mc);
	coloridoAdF_color.setRGB(corSecundariaAdversario);
	coloridoB1_color.setRGB(corSecundariaAdversario);
	//Carrega o fundo da flag
	if(flagAdversario_mc.fundos_mc._currentframe!=numeroBandeiraUniformeAdversario)
	flagAdversario_mc.fundos_mc.gotoAndPlay(numeroBandeiraUniformeAdversario);*/



	//corPrimariaAdversario = corPrimariaAdversario.toString();
	//corSecundariaAdversario = corSecundariaAdversario.toString();
	//numeroBandeiraUniformeAdversario = new Number(numeroBandeiraUniformeAdversario.toString());

	voltar_btn.onRelease = function () {
		removeClipSalas();
		play();
		clearInterval(esperarAlguemEntrarinterval);
		managerTime();
		//atualizar();
	}
	function gol(fezGol) {
		//trace("gooool");
		//Se passar true é porque fez gol
		//trace(golsFeitos);
		//Aparecer o movieclip gol_mc
		pausar(2000);
		_root.attachMovie("gol_mc", "gol_mc", 100);
		//Voltar a barra na pos original
		barra1_mc._width = 560/2;
		if(fezGol) {
			golsFeitos++;
		} else {
			golsTomados++;
		}
		//Para não virar um massacre de um time até fazer todos os gols
		boolean = Math.round(Math.random());
		//Define a vez de quem é de fazer gol
		//if (tempo>(tempoPartida/2)) {
		//intervaloDepoisDeUmGol = setInterval(function () {
		/*if (tempo>tempoPartida/2) {
			//trace("metado do tempo já foi");
			if(golsFeitos<golsQueFaras and golsTomados<golsQueTomaras) {
				//trace("Ambos Podem Fazer");
				boolean = Math.round(Math.random());
				PodeVariarBoolean = false;
				//trace(boolean);
			} else if (golsFeitos<golsQueFaras and golsTomados>=golsQueTomaras) {
				//trace("Time Um Fará um Gol");
				if(tempo>(tempoPartida/10)*7) {
					time1forca = 300;
					time1forca = 10;
				} else if (tempo>(tempoPartida/10)*9) {
					trace("Penalti par ao time um");
				}
				PodeVariarBoolean = false;
				boolean = 1;
			} else if (golsFeitos>=golsQueFaras and golsTomados<golsQueTomaras) {
				//trace("Time Dois Fará um Gol");
				if (tempo>(tempoPartida/10)*7) {
					time1forca = 10;
					time1forca = 300;
				} else if (tempo>(tempoPartida/10)*9) {
					trace("Penalti par ao time dois");
				}
				PodeVariarBoolean = false;
				boolean = 0;
			} else {
				PodeVariarBoolean = true;
			}
			//clearInterval(intervaloDepoisDeUmGol);
		}*/
		//}, 1000);
	}
	function pausar(tempo) {
		delete barra1_mc.onEnterFrame;
		clearInterval(intervalo);
		voltarAoJogo = setInterval(function () {
			//trace("Será que pode voltar ao jogo");
			//if(jogador1Pronto and jogador2Pronto) {
				resultador();
				//trace("Voltando ao jogo");
				clearInterval(voltarAoJogo);
			//}
		}, tempo);
	};
}
//accessorie functions
function preparaEscalacao() {
	//Use isso para calcular os jogadores escalado! ok ok! 25 de out de 2005 11:42
	//matei a aula do jessex pq o felipe tava comigo
	numeroJogadoresEscalados=0;
	for(u11=0; u11<todosOsJogadores_array.length; u11++) {
		jogtemp2 = todosOsJogadores_array[u11];
		if(jogtemp2[8].toString()==1) {
			numeroJogadoresEscalados++;
		}
	}
	//Salva o campo dinheiroOUT que será pego no futuro
	//alterCampoTime("dinheiroOUT", dinheiroOUT, timeAtual);
	numeroJogadoresEscalados=11;
	if(numeroJogadoresEscalados==undefined) {
		msg_txt.text = "Problemas ao escalar o time para o jogo...";
	} else {
		if(numeroJogadoresEscalados==11) 
		gotoAndPlay("sala", 1);
		else
		msg_txt.text = "Escale 11 jogadores para entrar em campo, selecionados:"+numeroJogadoresEscalados;	
	}
}
function loadFlagData(flag_mc, from) {
	trace(from);
	trace(jsonObject.times[0].corPrimaria);
	//nome time
	flag_mc.timeNome_txt.text = from.nomeTime;
	flag_mc.timeNome2_txt.text = from.nomeTime;
	flag_mc.patrocinador_txt.text = from.patrocinadorNome;
	//flag_mc.nomePronto = from.nomeTime;
	//
	trace("loadFlagData(), corPrimaria:"+from.corPrimaria+", corSecundaria:"+from.corSecundaria+", numeroBandeiraUniforme:"+from.numeroBandeiraUniforme);
	//
	var colorido_color = new Color(flag_mc.timeNome2_txt)
	colorido_color.setRGB(from.corPrimaria);
	//
	var colorido2_color = new Color(flag_mc.fundo_mc);
	colorido2_color.setRGB(from.corSecundaria);
	//trace(flag_mc.fundos_mc._currentframe);
	//Carrega o fundo da flag
	//if(flag_mc.fundos_mc._currentframe!=numeroBandeiraUniforme)
	flag_mc.fundos_mc.gotoAndStop(from.numeroBandeiraUniforme);
};
function backgroundGlow(obj) {
	_root.efeitex_mc._x = obj._x;
	_root.efeitex_mc._y = obj._y;
};

function insideCarregaJogador() {
	//
	trace(this);
};
function insideCarregaJogador_original(objJoga) {
	trace(objJoga);
	
	//objJoga.setMask(_root.mask_mc);
	//Pega o nome da instacia
	/*var numeroDoJogador = this._name.toString();
	//Corta o finalzinho
	var numeroDoJogador = numeroDoJogador.slice(17, 19);
	//Usa o array com todos os jogadores e seleciona o que corresponde a si mesmo, si? huahau
	var arrayJogadorThis = _root.todosOsJogadores_array[numeroDoJogador];
	//Nomezindel johador
	var jogadorNome = arrayJogadorThis[0].toString();
	//Escalado e avenda e nome
	//var avenda = new Number(arrayJogadorThis[6].toString());
	//var escalado = new Number(arrayJogadorThis[8].toString());
	var salario = new Number(arrayJogadorThis[5].toString());

	/*function escala() {
		//trace(_root.numeroJogadoresEscalados);
		//0nome, 1nacionalidade, 2posição, 3media, 4valor do passe, 5salario, 6avenda, 7energia, 8escalado, 9timeAtual
		if(escalado==1) {
			//Ta escalado, tem que mudar
			escalado = 0;
			//quem entede
			_root.numeroJogadoresEscalados--;
			//_root.dinheiroOUT-=salario/100;
			reserva_mc._visible = true;
		} else {
			escalado = 1;
			_root.numeroJogadoresEscalados++;
			//_root.dinheiroOUT+=salario/100;
			//alterCampoTime(")(")();
			reserva_mc._visible = false;	
		}
		//Função que sempre serão executadas
		alterCampoJoga("escalado", escalado, jogadorNome);
		//trace(jogadorNome);
		//Mostras o numero de jogadores escalados
		_root.msg_txt.text = " Jogadores escalados: " +  _root.numeroJogadoresEscalados;
		//SE tiver muitos jogadores em campo
		if(_root.numeroJogadoresEscalados>11) {
			_root.msg_txt.text = "Mais de 11 jogadores no campo!";
		}
	}
	function venda() {
		if(avenda==1) {
			//Já está a venda, tem que mudar
			avenda = 0;
			vender_btn._visible = true;
			cancelar_btn._visible = false;
			alterCampoJoga("avenda", 0, jogadorNome);
		} else {
			avenda = 1;
			vender_btn._visible = false;
			cancelar_btn._visible = true;
			alterCampoJoga("avenda", 1, jogadorNome);	
		}
	}*/
};
function zerar(qualClipe) {
	total_jogadores_no_aqui_mc = jsonObject.jogadores.length + jsonObject.jogadores_avenda.length;
	//trace(total_jogadores_no_aqui_mc);
	for(i=0; i<total_jogadores_no_aqui_mc; i++) {
		removeMovieClip(eval(qualClipe + i));
	}
};
//var total_jogadores_no_aqui_mc;
function aqui_mc_load_players(quaLista) {
	//
	zerar("aqui_mc.carregadorJogador");
	jogaLista = eval("jsonObject."+quaLista);
	//trace(" AAAAAAAA "+jsonObject.jogadores[1].nome);
	//trace(" AAAAAAAA "+jogaLista[1].nome);
	//trace(" AAAAAAAA "+ eval(jogaLista)[1].nome);
	for(i=0; i<jogaLista.length; i++) {
		//trace(" AAAAAAAA "+ eval(jogaLista)[i].nome);
		strJoga = "carregadorJogador" + i;
		//trace(strJoga + " : " + "carregador_" + quaLista + " : " + jogaLista[i].nome);
		aqui_mc.attachMovie("carregador_"+quaLista, strJoga, aqui_mc.getNextHighestDepth());
		objJoga=eval("aqui_mc."+strJoga);
		objJoga._y = ((i*19));
		objJoga.onRelease = function() {
			//insideCarregaJogador_original(objJoga);
			//trace(this);
			this.reserva_mc._visible = false;
		}
		objJoga.reserva_mc._visible = false;
		//trace(strJoga + "_y="+objJoga._y);
		//objJoga.setMask("aqui_mc.mask_mc");
		setaPorBaixo(objJoga, jogaLista[i]);
		//aqui_mc.setProperty(objJoga, _y, u3*16);
	}
	/*if(quaLista=="jogadores") {
		jogaLista = jsonObject.jogadores;
		for(i=0; i<jogaLista.length; i++) {
			strJoga = "carregadorJogador" + i;
			aqui_mc.attachMovie("carregadorJogador", strJoga, aqui_mc.getNextHighestDepth());
			objJoga=eval("aqui_mc."+strJoga);
			objJoga._y = ((i*19));
			objJoga.onRelease = function() {
				//insideCarregaJogador_original(objJoga);
				//trace(this);
				this.reserva_mc._visible = false;
			}
			objJoga.reserva_mc._visible = false;
			//trace(strJoga + "_y="+objJoga._y);
			//objJoga.setMask("aqui_mc.mask_mc");
			setaPorBaixo(objJoga, jogaLista[i]);
			//aqui_mc.setProperty(objJoga, _y, u3*16);
		}
	} else if (quaLista=="jogadores_avenda") {
		//zerar();
		jogaLista = jsonObject.jogadores_avenda;
		for(i=0; i<jogaLista.length; i++) {
			strJoga = "carregadorJogador" + i;
			aqui_mc.attachMovie("carregadorJogadorComprar", strJoga, aqui_mc.getNextHighestDepth());
			objJoga=eval("aqui_mc."+strJoga);
			objJoga._y = ((i*19));
			//objJoga.onRelease = function() {
				//insideCarregaJogador_original(objJoga);
				//trace(this);
				//this.reserva_mc._visible = false;
			//}
			objJoga.reserva_mc._visible = false;
			//trace(strJoga + "_y="+objJoga._y);
			//objJoga.setMask("aqui_mc.mask_mc");
			//setaPorBaixo(objJoga, jogaLista[i]);
			//aqui_mc.setProperty(objJoga, _y, u3*16);
		}
	}*/
	
	//
	
	//total_jogadores_no_aqui_mc = jogaLista.length;
	//
	//trace("aqui_mc_load_players(), todosOsJogadores_array:"+todosOsJogadores_array);
	//
	//for(i=0; i<todosOsJogadores_array.length; i++) {
	//trace(jogaLista.length);
	//trace(jogaLista[1].nome);
	
	//trace("aqui_mc"+aqui_mc);
	/*if(movieParaAtacar=="carregadorJogadorComprar") {
		for(i=0; i<todosOsJogadores_array.length + todosOsJogadoresAvenda_array.length; i++) {
			aqui_mc.setProperty("carregadorJogadorComprar" + i, _x, 0);
			aqui_mc.setProperty("carregadorJogador" + i, _x, 10000);
			aqui_mc.eval("carregadorJogador" + i).setMask(_root.mask_mc);
		}
	} else {*/
		
		
			//setProperty("carregadorJogadorComprar" + i, _x, 10000);
			//objJoga = eval("carregadorJogador" + i);
			//trace(objJoga._x);
			//setProperty(objJoga, _x, 0);
			//setaPorBaixo(objJoga, todosOsJogadores_array[i]);
			//insideCarregaJogador(objJoga);
		//}
	//}
};
function aqui_mc_load_salas(filtroForca, filtroSenha, filtroComputador) {
	//trace("aqui_mc_load_salas()");
	zerar("aqui_mc.carregador_sala");
	//if
	//trace(jsonObject.salas[0].senha);
	//trace(jsonObject.salas[1].senha);
	//salas_array = jsonObject.salas;
	var alturaY = 0;
	var alturaSala = 145;
	var larguraSala = 120;
	for(i=0; i<jsonObject.salas.length;i++) {
		strSala = "carregadorSala" + i;
		aqui_mc.attachMovie("carregador_sala", strSala, aqui_mc.getNextHighestDepth())
		objSala = eval("aqui_mc." + strSala);
		var remainder = i % 4;
		trace("remainder:"+remainder);
		if(!remainder and i>0) {
			alturaY+=alturaSala;
		}
		objSala._y = alturaY;
		objSala._x = larguraSala*remainder;
		//trace(objSala);
		//trace("jsonObject.salas[i].forcaHospedeiro:"+jsonObject.salas[i].forcaHospedeiro);
		//
		objSala.senha_mc._visible = false;
		objSala.senha_mc.enviarSenha_mc.onRelease = function () {
			this._parent._visible = false;
			//trace("sn "+this._parent._parent.senha);
			if(this._parent.senha_colocada_txt.text==this._parent._parent.senha) {
				timeAdversario = this._parent._parent.timeHospedeiro;
				//trace(timeAdversario);
				podeIR(timeAdversario);	
			}
		}
		//
		objSala.timeHospedeiro = jsonObject.salas[i].nomeSala;
		objSala.senha = jsonObject.salas[i].senha;
		//
		objSala.nome_txt.text = jsonObject.salas[i].nomeSala;
		objSala.forca_txt.text = jsonObject.salas[i].forcaHospedeiro;
		objSala.aposta_txt.text = jsonObject.salas[i].aposta;
		objSala.senha_txt.text = jsonObject.salas[i].senha;
		
		if(jsonObject.salas[i].senha=="" or jsonObject.salas[i].senha=="undefined" or jsonObject.salas[i].senha==undefined)
		objSala.cadeado_mc._visible = false;

		objSala.carrega_btn.onRelease = objSala.carrega_btn.onReleaseOutside = function () {
			/*trace("timeHospedeiro:"+this.timeHospedeiro);
			trace("timeAtual:"+timeAtual);
			trace("senha:"+jsonObject.salas[i].senha);
			trace("sth"+senha);
			trace("stx"+this.senha_txt.text);*/
			//this.play();
			//
			if(this._parent.timeHospedeiro==timeAtual) {
				//leia a msg abaixo
				delSala(timeAtual);
				atualizarSalas();
				this._parent.msg_txt.text = "Sala deletada!";
			} else if (this.timeHospedeiro=="jogando") {
				atualizarSalas();
				this._parent.msg_txt.text = "O jogo já começou aqui!";
			}  else if (this.timeHospedeiro=="computador") {
				timeAdversario = "computador";
				podeIR();
			} else {
				if(this._parent.cadeado_mc._visible) {
					this._parent.senha_mc._visible = true;
					/*this.senha_mc.enviarSenha.onRelease = function () {
						trace(senha_colocada_txt.text+"=="+this._parent.senha_txt.text);
						timeAdversario = this.timeHospedeiro;
						//podeIR(timeAdversario);
					}*/
				} else {
					timeAdversario = this.timeHospedeiro;
					//podeIR(timeAdversario);
				}
				
				
				//verificaCampoSala("timeAdversario", timeAdversario);
			}
		}
	}
}
function setaPorBaixo(mc, ar) {
	//REcebeo array unidimensional do jogador, a função chama seta por baixo porque seta textos num movie atacado no palco no msm nivel
	/*eval(mc).nome_txt.text = ar[0];
	eval(mc).pos_txt.text = ar[2];
	eval(mc).media_txt.text = ar[3];
	eval(mc).passe_txt.text = ar[4];
	eval(mc).sal_txt.text = ar[5];
	avenda = ar[6].toString();
	escalado = ar[8].toString();
	eval(mc).avenda = avenda;
	eval(mc).escalado = escalado;
	//2017-06-01-upgrading

	/*trace(eval(mc).nome_txt.text);
	trace(eval(mc).nome_txt._x);
	trace(eval(mc).nome_txt._y);*/
	avenda = ar["avenda"].toString();
	escalado = ar["escalado"].toString();

	eval(mc).nome_txt.text = ar["nome"];
	eval(mc).pos_txt.text = ar["posicao"];
	eval(mc).media_txt.text = ar["media"];
	eval(mc).passe_txt.text = ar["valorPasse"];
	eval(mc).sal_txt.text = ar["salario"];
	eval(mc).avenda = avenda;
	eval(mc).escalado = escalado;

	if(avenda==1) {
		eval(mc).vender_btn._visible = false;
		eval(mc).cancelar_btn._visible = true;
	} else {
		eval(mc).vender_btn._visible = true;
		eval(mc).cancelar_btn._visible = false;
	}
	//REcalcula os escalados
	//_root.numeroJogadoresEscalados=0;
	if(escalado==1) {
		//_root.numeroJogadoresEscalados++;
		eval(mc).reserva_mc._visible = false;
		//eval(mc).nome_txt.textColor = 0x009933;
	} else {
		eval(mc).reserva_mc._visible = true;
		//eval(mc).nome_txt.textColor = 0x99CC00;
	}
};
function hideAllExcept(what) {
	//array_movies_hide = array("");
	//foreach
	//popAddEstadio_mc._visible = false;
	aqui_mc._visible = false;
	plantelStage_mc._visible = false;
	msgStage_mc._visible = false;
	estadioStage_mc._visible = false;
	financasStage_mc._visible = false;
	torcidaStage_mc._visible = false;
	msgStage_mc._visible = false;
	eval(what)._visible = true;
	if(what=="aqui_mc")
	plantelStage_mc._visible = true;
};
function esperarCarregar(target) {
	if(_root.recebeSala_carregando) {
		target.stop();
		intervalo5 = setInterval(function () {
			if(!_root.recebeSala_carregando) {
				clearInterval(intervalo5);
				target.play();
			}
		}, 1);
	}
};