(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.gol_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if(_root.fundo_mc._currentframe!=6)
		_root.fundo_mc.gotoAndPlay(6);*/
	}
	this.frame_27 = function() {
		/* _root.fundo_mc.gotoAndPlay(1);
		this.removeMovieClip();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// g
	this.text = new cjs.Text("g", "96px 'Courier New'", "#99CC33");
	this.text.lineHeight = 109;
	this.text.parent = this;
	this.text.setTransform(67.1,313.7,0.259,0.259);

	this.timeline.addTween(cjs.Tween.get(this.text).to({scaleX:1.29,scaleY:1.29,x:179.6,y:136.6},4).to({x:158.8,y:117.8},5).to({y:142.9},5).wait(6).to({y:-172.1},7).wait(1));

	// o
	this.text_1 = new cjs.Text("o", "96px 'Courier New'", "#99CC33");
	this.text_1.lineHeight = 109;
	this.text_1.parent = this;
	this.text_1.setTransform(104,313.7,0.259,0.259);

	this.timeline.addTween(cjs.Tween.get(this.text_1).to({scaleX:1.29,scaleY:1.29,x:231.1,y:171.6},4).to({x:260.4,y:136.6},5).to({y:92.7},5).wait(3).to({y:-159.3},6).to({_off:true},1).wait(4));

	// l
	this.text_2 = new cjs.Text("l", "96px 'Courier New'", "#99CC33");
	this.text_2.lineHeight = 109;
	this.text_2.parent = this;
	this.text_2.setTransform(140.8,313.7,0.259,0.259);

	this.timeline.addTween(cjs.Tween.get(this.text_2).to({scaleX:1.29,scaleY:1.29,x:303.3,y:206.6},4).to({x:357.6,y:136.6},5).to({y:117.8},5).to({y:-134.2},6).to({_off:true},1).wait(7));

	// Morfa
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,99,156,0.502)").s().p("AhyEhQhTA7h6AAQjLAAhaimQg0hfAAhVQAAhqBGhmQBgiMCzgBQAzAAAtALQAigJAvgCIBsAAQAHABAZgYIA4gzQBZhKA/AAQDAgBCVDuQA1BVAjBgQAeBSAAAkQAAClhtB+QiPCkkVAAQhnAAiTjPg");
	this.shape.setTransform(118.6,327);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,99,156,0.502)").s().p("ADGI7QiPAAhsh/QgTgUgTgdIgPgXQgNAAgOACQgvAZhTAOQgnAHgmACQguADgjgEQi8gShbiGQgSgagOgaQgYgwgHgzQgEgXAAggIAAgBQAAhpAehOQALghAQggQArhdBEg5QA+g3BSgXQAzgQAxgDQAogRAygJQAVgJBlgFQANgBAbgTQA0gjAYgGIARgIQBHgwBeAhQAsAJAsATQCPA5CbCvIAVAYQBRBaA1BcQAtBIANAnIADAKQALAqAAAqQAAAsgLAyQgVBag1BKQgSAZgUAWQiRCWkiACIgMAAg");
	this.shape_1.setTransform(152.4,301.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,99,156,0.502)").s().p("AD/KPQjGgBhlhrQgWgVgUgkIgPgaQgPgKgOgDQgsAXhqAUQguAIgpADQg3AGglgDQjigMhsiDQgXgbgRgeQgeg1gIg8QgEgXAAgpIAAgBQAAiCAXhPQAJgnAMgmQAlhxA9hOQA5hPBRguQAygfA2gTQAsgYA3gQQAngSBggKQATgDAegOQA3gbAogEIAWgGQA+ggCBBEQAuARAzAbQCWBNDGC3IAbAYQBuBgBGBXQA/BJAXApIAGALQAXAtAGAuQAGAvgIA+QgNBtg1BVQgSAegWAaQiaCwlWABIgOAAg");
	this.shape_2.setTransform(186.7,275.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,99,156,0.502)").s().p("AE3LoQj/gBhchZQgZgVgVgqIgRgeQgPgTgOgJQgqAViCAZQg0AJgrAGQhBAIgngBQkIgGh8iBQgcgcgVgiQgjg6gKhFQgDgXAAgyIAAAAQAAidAOhQQAHgtAKgsQAdiEA2hjQA2hnBOhGQAzguA6ghQAxghA7gWQA5gbBcgPQAZgFAfgKQA8gSA2gDIAbgDQA1gQClBmQAyAaA4AkQCdBgDyC/IAgAYQCLBnBYBRQBRBKAhAqIAJAMQAiAxAMAzQAMAygEBIQgHCBgzBgQgTAjgYAeQihDKmLAAIgQAAg");
	this.shape_3.setTransform(221.1,249.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,99,156,0.502)").s().p("AgeL8QgbgWgXgxQgag1gWgXQgoAUiYAdQiaAehBAAQl4AAh9jBQgpg/gLhPQgDgWAAg7QAAi2AHhTQASjTA/ihQC7neIxAAQA3AAEwDWIHBE8QFpDlBdBjQA2A6AVA+QASA1AABUQAADJhfCAQirDjm/AAQlGAAhXhIg");
	this.shape_4.setTransform(255.7,222.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,99,156,0.502)").s().p("AhALvIgOgIQgbgQgXgdQgigpgdgQQhBAViLAgIgjAKIg0AQQgyAKgwADQgcABgVgBQkMgIiLiiQgwgvggg9QgagygNg5QgGgXgDgYQgEggAAg3QAAhRACgxQAChaALg4IABgGQAhjCBqh3QAIgNALgMQAfguAvgkQBIg1A2gyQBShABvg4QAqgWA0gVQAmgPAjgHQBQgQBWAHQA5AHAxAKIAFAAQAfgyDYBjQAnAMAuASQBdAiCCBAQCBA/CNB6QCuCEBtCDQBbBZAnBBQAvBCATBFQARA+ABBWIAAArQgHC/hvBtQg4A5hSAlQhEAehKAOQgwAIg2gCQgzgEguABQg1gBg9ACIhLADIirAGIgPAAQi7AAhKglg");
	this.shape_5.setTransform(263.7,220.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,99,156,0.502)").s().p("ArOMEQkKgSiIjdQgrg4gchEQgYg3gMg+QgGgagDgZQgFgpAAgyQAAheACguQAEheARg9IABgGQAyjECfhaQAKgKASgHQAmggBAgUQBkgdAzglQBagwCAg+QAqgWA6gYQAsgRAigGQBYgMBZAXQA9ATArAUIAEAAQANhjDIAnQApgCAxAGQBnAKCSAwQCTAvCNCSQCgCPBmCzQBMBlAkBTQAnBKARBNQAPBGACBZIABAtQgFDRiHBlQhBA1hfAbQhOAXhMABQgxAAg6gPQg4gSgpgDQg4gLhCACQgjABgtAEQhXAGhgAMQjOARhcgYIgQgGQgggKgdgUQgqgdgkgKIjXA5QgVAHgQAHQgaAKgcANQguALg8ADIgSAAIgigBg");
	this.shape_6.setTransform(271.7,217.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,99,156,0.502)").s().p("AsoMzQkGgaiHkZQglhBgahMQgUg8gMhDIgIg2QgGgyAAguQAAhqACgpQAFhkAXhBIADgHQBCjGDUg8QAMgHAYgDQAtgRBSgEQB/gGAxgYQBiggCPhEQArgVBBgbQAxgUAigEQBfgIBbAnQBCAeAlAfIACAAQgEiVC5gVQArgQA1gGQBvgOCjAgQCkAfCOCqQCRCaBfDiQA+BxAfBmQAgBSAPBUQAOBPAEBbIABAxQgDDiigBeQhJAvhtASQhYAPhNgLQg0gIg7gbQg+ghgmgIQg6gThGABQgkABgwAGQhYAJhsAVQjXAhhqgKIgRgDQgngFgigMQgygQgqgDQh1AahuAiQgWAJgRAIIg3AeQgrAOhGABIgPAAQgWAAgUgCg");
	this.shape_7.setTransform(279.7,214.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,99,156,0.502)").s().p("AuBNzQkEgjiElVQgghJgWhUQgRhBgMhIIgIg5QgHg7AAgqQAAh3ACglQAHhoAdhGIADgIQBTjIEJgeQAOgEAeACQA0gEBkAMQCbATAugMQBqgQCghJQAsgVBHgfQA2gWAhgCQBmgEBeA2QBHAqAeAqIABAAQgVjHCphRQAtgdA4gSQB5gnC0AQQC1AQCODBQCECmBWERQAwB+AcB3QAYBaANBcQANBXAEBeIACA0QgCDzi2BXQhUAqh5AJQhjAHhPgXQg0gQg+gpQhEgvghgMQg9gchMABQgkAAg0AIQhWAMh7AeQjeAxh4AEIgTgBQgsABgogCQg6gEgyADQiNAchhAkQgXAKgRALIg4AlQgoAPhSABIgGAAQgcAAgagEg");
	this.shape_8.setTransform(287.7,209.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,99,156,0.502)").s().p("A1dH8QgviRgYivQgQhxAAg1QAAiEACggQAIhtAjhLQBijTFFAAQAsAAC3AsQC4ArAsAAQBxAACwhOIB5g3QA9gYAgAAQBtAABhBFQBLA2AYA0Qgmj4CZiNQCTiIEdAAQFpAACxLKQBZFlAQFrQAAF4mxAAQhuAAhQgjQg2gYhBg2QhIg+gegRQg/gjhRAAQhcAAjeA/Qj6BGiHAPQmUAvhpBMIg7AsQgkARhcAAQkyAAiRnCg");
	this.shape_9.setTransform(295.7,203.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,99,156,0.502)").s().p("AujOhQisgPh2inQhRhyg2i2QgWhIgQhPQgRhWgMhXIgGg3QgJhIABgoQAAhsAEgsIABgPQALhtAohJQAohLBIgtQB3hMDHAQIAfAFQAwAMBhAdIAqANQATAHAQAEQAmAHAfADIBGAJQAjAEASgBQBogDCfg7IAggMIB7gvQAUgHASgEQAigKAWABQBWACBIAkQAaAMAaAPQBMAxAdAtQgEhNAOhFQAPg6AUgtQAbg1AsgqQANgMAOgMQCfh6ERAWQBZAIBNA1QCUBoBjEMQATAwASA9QAbBXAUBiIAFARQAoDSAAC8QABBNgCBKQACA9gGA6IgBAJQgLBcgqBBQhDBqiaAiQhOAThmgHQgwgDgrgKQg1gMgsgWQg0gcg6g0IgEgCQhGgzgggKQg9gahOAHQg0AGhcAaQhDAVhZAhIh5ArQh4AqhXASIgtAIIjMAdQjjAkhSAjQgYANghAVQgXAGgpAAQgaAAghgCg");
	this.shape_10.setTransform(291.5,203.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,99,156,0.502)").s().p("Au/ODQiigdhvivQhMh2gzi3QgUhJgQhQQgPhagLhUIgGg4QgHhHAAgqQABhsAFgvIACgOQAOhuAuhHQArhHBLgpQB+hEDAAgIAeAHQAwAQBbAjQAUAJAVAIQATAJAPAEQAlAFAgAAQAqABAbACQAiACAUgCQBogFCjg1QAPgGASgFQAtgPBRgYQAUgGASgEQAigHAXABQBcAEBDAgQAbALAbAOQBNArAhAnQAHhIAThCIAqhkQAegyAuglIAdgWQCrhsEDAsQBWAPBIA7QCNB1BZELQAQAuASBCQAYBaARBhIADARQAfDXgcCqIgTCEQgDA1gQAvIgCAHQgUBMguA3QhJBaibAdQhPAPhmgOQgvgGgqgNQg0gQgqgXQg2ggg2g1IgDgBQhEgoghgDQg8gRhKANQgzANhXAfQhAAahUAnQg9Abg1AaQh0A0hWAWIgtAJQhsAThjANQjfAghXAOQgYAJggAPIgSABQgjAAhAgLg");
	this.shape_11.setTransform(289.3,202.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,99,156,0.502)").s().p("AvjNnQiYgthoi1QhHh8gvi4QgThKgOhRQgOhegKhRIgFg3QgIhIABgsQABhqAIgyIACgPQARhuAzhEQAvhFBPgkQCCg8C7AvIAdAKQAvAUBWApQATALAUAIQATAMANAEQAmADAggDQAqgDAbABQAhAAAWgDQBogICngvIAhgJQAugNBTgUQAUgEATgDQAigGAYACQBgAHBBAcQAbAKAbAMQBPAmAmAgQAPhCAahAQAfg6ARglQAhgwAygiIAegTQC2heD3BDQBRAXBEBAQCFCBBOELQAPArARBHQAWBeANBgIADAQQAUDdg4CWQgTA+gSA0QgIAtgYAjIgDAGQgeA9gyAtQhQBKidAWQhPANhkgVQgugJgrgQQgzgTgpgaQg1gkgyg1IgEgBQhBgdgiAEQg7gHhGATQgzAThRAkQg9AfhQAuQg4Agg0AfQhuA+hVAZIgtAMQhqAVhoALQjbAdhcgGQgZAEgeAJQglgDhLgTg");
	this.shape_12.setTransform(287.8,202.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,99,156,0.502)").s().p("AtqNmQgYABgeADQgkgKhGgaQiNg8hhi8QhDiBgri4QgShMgNhSQgNhhgIhOIgFg4QgHhJABgsQABhqAKg1IADgPQAUhuA4hCQAyhBBTggQCIg0C1A/IAcALQAuAZBRAvQATAMASAKQATAOAMAEQAlABAhgGQArgHAZgBQAggBAYgEQBpgLCqgpQAPgEAUgEQAugKBVgPQAVgDATgCQAigEAYACQBmAKA9AYQAcAJAcAKQBQAhAqAaQAZg9Afg9QAog7APghQAkguA1gdIAggQQDBhQDqBYQBNAfBABGQB+COBDEKQANAoAQBNQAUBhAJBfIACAQQAKDhhTCEQgeA2gaApQgNAmghAXIgEAEQgoAtg2AkQhWA6ieAQQhQAJhjgcQgtgLgqgUQgygWgogbQg2gpgug1IgDgBQhAgSgiALQg6AChDAaIh9BCQg6AlhKA0Qg2AkgxAlQhpBIhVAdIgsANQhpAYhsAKQhpAMhMAAQhSAAgygOg");
	this.shape_13.setTransform(286.6,202.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,99,156,0.502)").s().p("AuZNXQgYgFgdgCQgkgRhAggQiEhLhZjDQg+iGgoi5QgQhNgMhTQgMhlgHhMIgFg4QgGhIABguQAChpAMg4IADgQQAXhuA9hAQA2g9BWgbQCOgtCvBPIAbANQAuAeBMA0QARAOARALQATARALADQAlAAAhgJQAsgMAYgCQAggDAZgEQBpgOCugkQAPgDAVgDQAvgHBXgKQAVgDATAAQAigDAZACQBrANA5AVIA6AQQBRAbAvAUIBHhzQAwg7AOgcQAngrA4gZIAhgOQDMhDDeBvQBJAmA8BMQB2CbA5EKQALAlAPBSQASBkAFBdIABAPQAADohvBxQgoAugjAfQgRAdgqAMIgFADQgxAeg7AZQhdArifAJQhQAGhigjQgsgOgqgWQgxgagngdQg2gugqg1IgDAAQg9gHgkASQg4ALhAAhIh3BNQg3AqhFA7QgyAngvArQhkBShTAhQgXAIgWAHQhnAahwAJQhDAGg5AAQh5AAhGgfg");
	this.shape_14.setTransform(285.5,202.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,99,156,0.502)").s().p("AvINGQgYgIgcgIIhfg/Qh5hZhTjLQg5iLgki5QgPhPgLhTIgRizIgEg4QgFhJABgvQAChoAOg7IAEgPQAahvBDg+QA5g5BZgXQCUgmCpBfIAaAQQAtAiBHA6QARAQAQAMQASATAKADQAlgCAhgMQAsgPAYgEIA6gLIEbguQAOgDAXgBQAvgFBZgFIApgBQAigBAaADQBwAOA1ASQAeAGAdAHICGAjQAtgyAqg4QA4g8AMgYQArgpA6gUIAigMQDYg0DRCFQBFAtA4BSQBuCnAvEKQAJAjAOBWQAQBnABBdIAAAPQgKDsiLBfQgyAmgrAUQgVAWg0AAIgGABIh5AeQhjAaihAEQhQADhigqQgrgRgpgaQgxgdglgfQg3gxgmg3IgDABQg7AEglAZQg3AVg8AmQgvAnhAAyQg0AvhCBBQgvAsgsAwQheBchTAlQgWAKgXAHQhkAeh2AHQgrAEgoAAQiTAAhVg2g");
	this.shape_15.setTransform(284.5,203.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,99,156,0.502)").s().p("Av4M4IgzgbIhZhMQhwhohLjSQg0iQghi6QgNhPgKhVIgPi1IgDg3QgFhJABgxQADhnAQg+IAEgQQAdhvBIg7QA9g2BdgSQCZgfCjBvIAZASQAsAnBCA/QAQASAPANQASAVAJAEQAlgEAigPQAsgUAXgFIA7gNQBpgUC2gXQAOgDAYAAQAwgDBbAAIApABQAiABAbADQB1ARAyAPIA8AKQBUAQA4AHQA2gtAwg2QBAg7ALgUQAugmA9gRIAjgJQDkgnDECcQBBA1A0BXQBmC0AkEJQAIAhANBbQAOBpgEBdIAAAOQgUDyinBMQg8Aeg0AKQgZANg9gLIgHAAQhEgBhDAFQhqALiigDQhQAAhhgxQgqgUgpgcQgwghgkghQg3g2gig3IgDACQg4AOgnAhQg1Aeg5AtQgtAtg8A3QgwA0g+BIQgrAwgqA1QhZBmhRApQgWALgYAIQhiAgh6AGQgdACgbAAQikAAhhhLg");
	this.shape_16.setTransform(283.6,203.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,99,156,0.502)").s().p("AwpM4IgyglIhThaQhmh2hEjZQgviWgdi6QgMhQgJhWIgNi2IgDg4QgEhJACgyQAChnAShAIAFgQQAhhwBNg5QBAgyBggOQCggXCcB/IAYAUQAsArA9BFQAPAUAOAOQASAYAIADQAkgFAigTQAtgXAWgHQAdgIAfgIQBqgWC5gSQAOgCAZABQAwAABdAFIArADQAiACAbAEQB6ATAuALIA+AHQBVALA9ABQBAgnA1g0QBIg8AKgPQAxgkBAgMIAkgHQDvgZC3CyQA+A8AvBdQBfDBAaEJQAFAeAMBfQAMBtgHBcIgBAOQgeD3jDA5QhGAXg8gCQgeAGhHgXIgHgBQhOgRhHgEIkTgPQhRgDhhg4QgpgWgoggQgvgkgjgjQg3g6geg4IgDADQg2AZgoAnQg0Aog0AzIhjBwQguA5g5BOQgoA0gnA7QhUBwhQAtQgWAMgYAJQhgAjh/AEIgkABQivAAhrhig");
	this.shape_17.setTransform(282.7,202.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,99,156,0.502)").s().p("AxaNDQgZgWgYgZQgkgsgqg6QhbiGg+jfQgqicgZi6QgLhSgHhXIgLi3IgCg4QgEhJACg0QAChlAVhEIAFgQQAkhwBSg2QBDgwBlgJQCkgPCXCOIAXAXQArAvA4BLIAbAlQASAaAGADQAlgHAigWQAtgbAWgIQAbgKAhgJQBrgZC9gMQAOgBAZACQAxACBfAJIAsAGQAiADAcAFICqAdIA+AEQBXAGBCgGQBIghA7gxQBRg9AIgKQA0giBEgJIAlgEQD6gKCrDIQA5BEArBiQBYDNAOEJQAEAbALBkQAKBxgLBbIgBANQgpD9jeAlQhQAQhFgNQgjgChPgiIgJgDQhXgghLgOQh3gWilgPQhRgGhfg/QgogZgpgkQgugngiglQg2g+gag4IgEADQgzAkgoAuQgzAxgxA6IhdB7QgrA+g1BVQgkA5glBAQhOB6hQAwQgVANgYAKQheAmiEACIgVAAQi2AAh0h5g");
	this.shape_18.setTransform(281.9,200.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,99,156,0.502)").s().p("AyMNPQgZgagXgfQgkgzgkhBQhSiVg2jmQgliggWi7QgJhUgHhYIgIi4IgCg4QgDhKACg0QADhlAWhHIAGgQQAnhwBXg0QBHgsBogFQCrgHCQCdIAWAZQArA0AyBRQAOAYALAQQASAcAGADQAkgJAjgYQAtggAVgJQAbgNAigJQBrgcDBgGQAOAAAaACQAyAFBhAOIAsAIIA/AKQCEAZAnADIBAACQBYAABGgMQBTgdBAguQBZg9AHgGQA3ggBGgEIAngBQEGADCdDeQA2BMAnBoQBQDaAEEHIAMCDQAIB0gPBaIgDANQgyEBj6ATQhbAIhNgXQgngKhZguIgJgFQhhgwhPgYQh9glimgVQhSgKhfhFQgngdgogmQgtgrgggmQg4hDgWg4IgDADQgwAvgqA2QgxA6guBAQgsBBgrBFQgoBEgwBbQggA9gjBGQhJCEhOA0QgWAOgYAKQhcApiIABIgJAAQi7AAh9iRg");
	this.shape_19.setTransform(281.2,198.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,99,156,0.502)").s().p("A2mEGQgvjwgRkfIgHjyQgDhJACg2QAEhkAYhKQBIjbD7AAQC9AACTDIQApA5AuBWQAmBIAHAFQAkgLAjgcQAugkAUgKQBmg3EIAAQAsAADAAnQDAAoAsAAQD1AACShcQBhg9AFgCQA7gdBJAAQGPAACPHHQBJDngHEGQAAAWAKBwQAFB3gTBZQg5ETkcAAQhlAAhVgiQgvgThpg+Qhrg/hTgiQiEg1ingcQh0gSiKiQQh4h+gchYQiaC9huDZQg8B5hRC+QhECOhNA4QhhBFi0AAQmSAAiYr+g");
	this.shape_20.setTransform(280.4,196.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,99,156,0.502)").s().p("AxSUlQjkhshOoMIgKhEQgXingIjDQgBh2gDhTIAAgXQgChAgRhjQgFhAgEgOQgKhVABgxQADhrAWhPQAVhLAngzQAhgrAxgfQAogYBBgXQAngNApgJQBzgcBcARQBFAIA/AVQAuALAvAaQAjAgANgOQAcgVAdgfIAFgFIA7g+QBihaDmhIQA3gjCfgNIAygMQB9gOAxgbQBNgZBEgdQBng1A4gUIBSgUIANgDQA3gVAkAIIAJgFQA7gjBHgWIA9gSQBfgVBfAbQD9BDBaEqIAFARQAkCCABCGQAKCJgKCCQgFAqgCBgQgIBQgVBAQgLAjgPAeQgVAugeAlQgvBBhRArQhZAthZAOIg0AIQhLALg+ACIg3ABQg6AHhbgMQhggJhJAWIgIACQhhALhjA2IgKAFQglAOgoAIQgkALgqgPIgRgDQgLgDgNgDQgagUgtgCQg8gYgcgSQgjApgaAoQgkA3gWBJQgXA4gTBIIgvB9IgnBgQgtBwg6B/QgYAwgZAqQgxBQg1AwQhNBHhwAgQgnANgqAIQguAKgtAAQhfAAhZgsg");
	this.shape_21.setTransform(285,157.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,99,156,0.502)").s().p("Aw0cBQkMg3g5pdIgHhFQgOiyADjTQAGiOABhFIABgYQgBgjghiPQgJg6gGgbQgThiABgrQABhxAVhUQAThTAng2QAgguAzglQAlgZBJgkIBQglQB3g5BXgjQBGgjBBgmIBlhFQAegJATggQAZgfAYgmIAEgGIA1hNQBch+DEiRQBDhGCAhBIAvgiQBng4A9g4ICIhgQByheAogKQAvgFArAEIAPACQAugCA2AcIAKgHIB/hVQAdgTAdgUQBdgzBsANQEzAhBVE4IAFASQAjCMgOCQQAFCZgSCCIgXCOQgUBUgjA/QgSAigXAdQghArgqAiQg7A0hjAoQhwAphPATIg2AOQhPAWg+ATIg3AUQhGAjhOAkQhVAug+BPIgGAGQhIBGgvCHIgEANQgSAkgRA2QgRA7gYAdQgDAFgMAIIgaAMQgTgGhAAfQhGASgnATQgnAtgYArQgfA3gIBaQgKA6gFBWQgKA8gZBRQgPAwgVA4QgtB/g+CBQgZAygcAuQgxBSg3A8QhQBYhmA0QgoAWgqAQQhgAnhhAAQg0AAgzgLg");
	this.shape_22.setTransform(290.5,109.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,99,156,0.502)").s().p("A1zYmQgLjXAQkNQATjoAAgOQAAgFgwi9Qgwi8AAgzQAAj0BKhzQAggxA2gpQAggZBRgyQCyhvBshyQC3jDCblVQB5kQGOnlQCZi8B/iGQB+iFAXAAQA8AAA3AYQAmARBGAvQBYhCBohzQBZhSB6AAQFpAABRFEQAoCiggCiQAAGYiQC7Qg9BPhfA0QhHAnh1AkQiHAnhEAXQh3AohTAyQjfCHhtEqQguCBAGDYIAHC0QAEBqgGBJQgBAXgpAjIhfBJQiVBxgtBhQgbA4AGBrQAEA7AIBmQAABgg3CtQhBDIhnCuQh+DUidB5Qi6CQjWAAQkyAAglqwg");
	this.shape_23.setTransform(296.4,62.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,99,156,0.502)").s().p("Aw0coQlAgMhQo6QgaiGgKijQgEhOgBhUQAHi8gCgxIAAgDQgBgVglimIgEgWQggiMgDhKIAAgBQAAieAkhnQAQgwAYgkQAggvA0gpQAjgaBLgsQClhgCAhZQAmgcAmgfQCOiICxi5QBPhcCLiAQBsh0DGiCIA5gtQBLguAvgwQBdhJBUg3QB1hfAnAHQA6AEA1AWQApARBCAoQBDgdBLgxIA1giQBbgxBvALQAsAFAnAKQBXAJBTAdQCPA2A9CFQAQAcAMAdQAHAgAQAZQARArAEAxIADAWQAuCngKCcQgMBygrBUIgKASQguBUhRA4QgYASggAQQgxAbhDAYIiqA1IgcAJQhpAihgAsQhjAzhaBOQhnBchLB/QhKBpgeCqQgLAkgJA7IAFAkIABAWIACA9QAAA/gHAyQgDAYgiAiQgLAMgpAjIghAbQiGBshGBLQgLAPgKATQgMAkgUAtQgLAogOBFQgXBAhKB1QgUAbgVAaQhRBmhYBfQiDBehTBQIhLA1IgIAHQgmAcgjAVQiPBWitAAIgOAAg");
	this.shape_24.setTransform(305.7,29.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,99,156,0.502)").s().p("AxaWOQlagIh8nVQgth7gYibQgMhKgGhQQgEihgFhIIAAgDQgEgjgYiRIgDgVQgVhwgFhjIAAAAQgCiaAmhkQAQgtAZgjQAfguAygmQAmgdBFglQCYhSCVg/IBTgoQCNhbDjhfQBjgxCWhEQBnhEDpg3QAfgLAcgNQBagSAmgfQBigsBcgdQBrg5A4AOQA3AIA0AVQAsARA8AhQBGgJBLgVQAbgGAbgIQBegQBjAXQApAKAlANQBKAGBdAOQCYAcBLBVQAYARARASQAJAVAfAIQAfAUAUAhIAKAOQBcBzAWCdQAJBrgdBVIgGAUQghBZhCA8QgVAUgcASQgsAdhBAaQhWAghNAXIgcAIQhcAchsAnQhgAohkA8QhzBGhcBcQhmBRhBB9QgXAbgVAsQAEASACAQIADAVQABAbAAAgQABA8gKAxQgFAbgcAfQgLARgiAfIgeAcQh1BmhgA2QgPAKgOANQgNAYgtAUQgZAUgjAlIiMBeQgZANgcAMQhpAxheAyQipAgg5A1QgmASgmAZIgJAHQgnAbggAUQiEBPivABIgOAAg");
	this.shape_25.setTransform(317.7,-6.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,99,156,0.502)").s().p("AyIQaQl1gEiplvQg+hxgoiUQgShGgNhMQgPiFgIhfIAAgCIgRitIgBgUQgLhVgIh9IAAAAQgCiUAnhhQARgqAYgjQAggtAwgjQApgfA/geQCLhECoglIBbgWQCLgtEXgEIEYgPQBigUELATQAhAAAcgCQBrAKAcgPQBngPBigDQBjgRBIAUQA0AMAzATQAvARA4AbQBIALBKAHIA4AHQBgAQBYAiQAmAQAhAQQA+ADBngBQChADBaAjQAeAGAYAHQAJALAugJQAvgDAjAQIARAIQCLA+A1CdQAeBlgOBWIgEAVQgSBfg0A/QgSAXgYATQgnAhg9AcQhLAghUAXIgbAIIjGA2QheAdhvAqQh+AwhtA8QiBA5hkBPQgkATgiAcQAHARADAOIACAVQACAYAAAhQAAA5gMAwQgHAdgVAeQgNAVgaAcQgMAOgOAOQhmBfh4AhIgkANQgPAMhFgGIhiAGQhGgBhvAHIhDgDQh/gDhkAFQjPgegfAbQgoAIgnAYIgIAGQgoAbgcASQh6BJiyACIgNAAg");
	this.shape_26.setTransform(330.5,-45.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,99,156,0.502)").s().p("Aj3MyQnzi8gHAAQgpAAgoAWIhKAwQhzBGi9AAQooAAjEn8Qg+iigTjHQgHhIAAh1QAAg4gKiYQgDiNAohfQB0kRIGAAQDDAAJHCuQBcAcEuBdQC1A4AZADQF2AxFtCtQC2BXBzBMQAyAABxgQQDlgfBvgOQALAAA9gaQA9gaAzgBQDMAABaCoQAzBeAABYQAACahMBQQhHBLivAwQheAalWBBQlzBHkXBHQAIASAEALQAFAVAAA3QAAB0hGBeQhjCDjGAAQgqAAn6i8g");
	this.shape_27.setTransform(344,-94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.1,277.4,133,99.3);


(lib.articulaçãomenor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAdgcQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6AB93").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.articulaçãomenor, new cjs.Rectangle(-5,-5,10.1,10.1), null);


(lib.articulação = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6AB93").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.articulação, new cjs.Rectangle(-5.7,-5.7,11.6,11.6), null);


(lib.chicoCabeca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabelito
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag4guIAOAWAhdhWIAOADAhohNIAFAOAgGgbIgDAUAAUgpIgLApAglCIIgVggIgGgVIgChBQARgNARAFIAVAXIAdAAQAZggACg1IArgcQAlAGAFg3IAAgBQAAAAgBAAQi5gQgmAlQglAkACA9QgBBXAXApAgkhRIBsgUAhDhoICmgTAhfB+IgBgoAhICEQgDgmgHgTAhSgUIAAAhAhygaIAFAz");
	this.shape.setTransform(-3.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#978024","#564814"],[0,1],-6.5,-7.5,0,-6.5,-7.5,21.4).s().p("AhICEQgDgmgHgTQAHATADAmIgXgGIgBgoIABAoIgMgKQgXgpABhXQgCg9AlgkQAmglC5AQIABABQgFA3glgGIgrAcQgCA1gZAgIgdAAIgVgXQgRgFgRANIACBBIAGAVIAVAggAhtAZIgFgzgAhSANIAAghgAAJAAIALgpgAgJgHIADgUgAgqgYIgOgWgAhjg/IgFgOgAgkhRIBsgUgAhPhTIgOgDgAhDhoICmgTg");
	this.shape_1.setTransform(-3.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#564814").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(9.8,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Oculos
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAEAKQgNgJAKgK");
	this.shape_3.setTransform(7.6,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AAOANQAWgNgWgMQgZACgNAL");
	this.shape_4.setTransform(5.1,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgCAFIgBgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABgBIAAAAIADgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_5.setTransform(6.5,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAHIABAAIABgBIAAAAIABABIgBACIgCgCgAABAGIAAgBIABAAIABAAIABABIgCABIgBgBgAAKABIAAgBIABAAIABAAIABABIgCABIgBgBgAgEABIAAgBIABAAIABAAIABABIgCABIgBgBgAAHgHIABAAIABgBIAAAAIABABIgBACIgCgCg");
	this.shape_6.setTransform(10.5,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#838321").s().p("AgWAnQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIABAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAIAAABIgBACIgBAAIgBABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBgAgJAjQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACAAQADgBABADIAAABIAAABIgCACIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBgAAAAgQgBgBAAgBQABAAAAgBQAAAAAAAAQAAgBABAAIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAAAIgBACIgBABIgBAAQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAgAAKAdIAAgDQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIABAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIAAABIgBABIABAAQADAAABADIAAAAIAAACIgCABIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBgAAUAaQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAABIgBACIgBAAIgBABQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBgAAMAVQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAAQADAAACACIAAACIgBAAIgBACIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAgAATAMQgBgBAAgBQABAAAAgBQAAAAAAAAQABgBABAAIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAABIgBACIgBABIgBAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgAgWgVQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQABAAAAgBQAAAAAAAAQABgBABAAIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAACIgBABIgBABIgBAAgAATgZQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIABAAQABAAAAAAQAAAAABAAQAAABAAAAQABABAAAAIAAABIgBABIgBABIgBAAgAAGgcIABgDIgBgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIABgBQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAIAAABIgBABIABACIAAAAIgBACIgBAAIgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAgagaQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAABIgBABIgBABIgBAAgAAAgbQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIABgBQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAABIAAABIgBABIgBABIAAAAgAgHgbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQABAAAAAAQAAgBAAAAQABAAABAAIABgBQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAABIgBABIgBABIgBAAgAgRggQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIAAABIgBACIgBABIgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAAZgiQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAABIgBACIgBABIgBAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBgAARggQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQABAAAAgBQAAAAAAAAQABAAABgBIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAABIgBACIgBABIgBAAgAACgjQgBAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBgBAAAAQABgBAAAAQAAAAAAgBQAAAAABAAIABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAABIgBABIgBABIgBAAg");
	this.shape_7.setTransform(5.1,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AguA7IAAgBIACAAIAAAAIABABIgBABIgCgBgAAJA3QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAAABIgBABIgBACIgBAAgAhLAlIAAAAIABgBIABAAIABABIgCACIgBgCgAgzAdIABgBIAAAAIABAAIABABIgCABIgBgBgAgeAAIABAAIAAgBIABAAIACABIAAAAIgBABIgDgBgAALgnIgBgBIAAgBIgBgBIABAAIAAgBIABAAIABgBIABAAIABACIAAAAIAAABIgCACIgBAAgABGgwQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAAAIgBACIgBAAIgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAAkg6IAAAAIABgBIABAAIABABIgCABIgBgBg");
	this.shape_8.setTransform(3.7,7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYABQANgLAZgCQAWAMgWANIgGAAQgXAAgJgMgAAJgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIABABIADABQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAIgEABIAAAAg");
	this.shape_9.setTransform(5.1,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Boca
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAbACIg1gD");
	this.shape_10.setTransform(5.5,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgagLQAOAeAkgKIADgQ");
	this.shape_11.setTransform(5.5,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgagLIA1AEIgDAQQgJADgIAAQgWAAgLgXg");
	this.shape_12.setTransform(5.5,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Cabeça
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#564814").ss(1,1,1).p("AAZgIQgZABgYAQ");
	this.shape_13.setTransform(5,-4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,1,1).p("AgNgUQgGAHAQAdQALAKAGgNIACgNAAQgIIAAgMAgDgIIAIAG");
	this.shape_14.setTransform(-7,6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1,3,true).p("AANgFQgDgJgWAX");
	this.shape_15.setTransform(6.7,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAFgVIgJAr");
	this.shape_16.setTransform(8.5,8.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("ABUBUQAAABAAARQgBAQhHAIQhGAIgmgmQglgmAAg1QAAg0AlgmQAmglA3gEQA2gDAXAKQAVAKgFAnQAAACgCAQQAAAFAEAIQAPAFAFAQQAIARAOAZQgQANgYAD");
	this.shape_17.setTransform(-0.4,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6AB93").s().p("AhgBgQglgmAAg1QAAg0AlgmQAmglA3gEQA2gDAWAKQAWAKgFAnIgCASQAAAFAEAIQAPAFAFAQQAIARAOAZQgQANgYADIgKAsIAAAAIAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIAAAAIgEABIAAAAIgBABIAAAAIgCABIgHAFIAAABIgBABIgBABIgCACIgDADIgBABIAAAAIgBABIABgBIAAAAIABgBIADgDIACgCIABgBIABgBIAAgBIAHgFIACgBIAAAAIABgBIAAAAIAEgBIAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABIAAAAIAAAAIgBASQAAAQhHAIIgWABQg2AAgggfgAg7A+QAEAAADgGIAAAAIAAAAIABgBIABgOIgBAOIgBABIAAAAIAAAAQgDAGgEAAIgBAAIAAAAIgBAAIAAAAQgEgBgEgDIAAAAIAAAAIAAAAQgMgXAAgJQAAgDABgCQgBACAAADQAAAJAMAXIAAAAIAAAAIAAAAQAEADAEABIAAAAIABAAIAAAAIABAAgAg9AnIgJgGgAgyAhIAAgMgAAdg3QAZgRAYgCQgYACgZARgABUBUIAAAAg");
	this.shape_18.setTransform(-0.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chicoCabeca, new cjs.Rectangle(-17.1,-14.5,31.2,30.3), null);


(lib.Seta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B0BDCA").ss(1,1,1).p("AgIAtIAAhUIDCAAIAABUgAi5AAICZheIAAC9g");
	this.shape.setTransform(18.5,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.502)","rgba(186,214,239,0.502)","#FFFFFF"],[0.094,0.141,0.914],0,-9.5,0,9.6).s().p("AhMAAICYheIAAC9g");
	this.shape_1.setTransform(7.6,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.502)","rgba(186,214,239,0.502)","#FFFFFF"],[0.094,0.141,0.914],0,-4.2,0,4.3).s().p("AhgArIAAhVIDBAAIAABVg");
	this.shape_2.setTransform(27.4,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Seta, new cjs.Rectangle(-1,-1,39.1,21.1), null);


(lib.BOTprocurajogador = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACyB9IiRhIIANgaICSBHgAgJA5QgfAfgsAAQgsAAgggfQgfgfAAgrQAAgtAfgfQAggfAsAAQAsAAAfAfQAfAfAAAtQAAArgfAfg");
	this.shape.setTransform(31.8,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.4)").s().p("AhLBLQgegfAAgsQAAgrAeggQAggeArAAQAsAAAfAeQAgAggBArQABAsggAfQgfAggsgBQgrABggggg");
	this.shape_1.setTransform(23.3,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AhOgWIANgaICQBGIgNAbg");
	this.shape_2.setTransform(43,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(1,1,1).p("AADguIAAgBIASAWIATgMAgMgYIgPgKIAegMIgFAuIAgAUIgPAcAgnAwIAkgxIABAB");
	this.shape_3.setTransform(20.7,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(1,1,1).p("AgOhBQAFAFAAAIQAAAIgFAGQgGAFgIAAQgIAAgFgFQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGgAAdAhQAIAAAFAGQAGAFAAAJQAAAHgGAGQgFAFgIAAQgIAAgGgFQgFgGAAgHQAAgJAFgFQAGgGAIAAg");
	this.shape_4.setTransform(23.9,24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_5.setTransform(26.8,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAVQgGgDgDgFQgDgGAAgHQAAgGADgGQADgFAGgDQAFgDAGAAQAKAAAHAHQAHAHAAAJQAAALgHAGQgHAHgKAAQgFAAgGgDgAgHgJQgDADAAAGQAAAHADADQADAEAEAAQAFAAADgEQADgDAAgHQAAgGgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_6.setTransform(48.6,42.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAaQgHgGABgMQAAgLAFgGQAFgGAJAAQAGAAAHAHIAAgXIAMAAIAAA+IgMAAIAAgGQgDADgDACQgEACgDAAQgIAAgFgGgAgGgCQgDACAAAHQAAAIACADQADAFAEAAQAFAAACgEQADgDABgIQgBgHgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_7.setTransform(43.1,41.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAUQgEgEAAgGQAAgEABgDQACgDAEAAIAKgDIAKgDIAAgBQAAgEgBgBQgCgBgEgBIgFABQgCACgBADIgLgCQACgGAFgDQAEgEAIAAQAIAAAEACQAEACABADQACADAAAIIAAANIAAAJIADAGIgNAAIgBgEIAAgBQgDADgEABQgCACgEAAQgHAAgEgEgAAAADIgGACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAABQAAAAAAAAQADACACABQADgBADgCIADgDIAAgHIAAgCIgHACg");
	this.shape_8.setTransform(38.1,42.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPASQgGgHAAgLQAAgLAGgFQAGgHAKAAQAIAAAFAEQAFADACAIIgMACQAAgDgDgDQgCgCgDAAQgEABgCADQgDADAAAHQAAAHADAEQACADAEAAQADAAADgCQACgCABgFIAMADQgCAHgFAFQgGAEgJAAQgJAAgGgGg");
	this.shape_9.setTransform(33.2,42.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAYIAAgtIALAAIAAAGQADgFACgBQACgBADAAQAEAAAEACIgEAKQgDgBgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgBACgBADQgBADAAALIAAAPg");
	this.shape_10.setTransform(29.3,42.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAQQgEgGAAgJQAAgLAGgGQAFgHAJAAQAKAAAGAHQAGAHgBAMIgdAAQAAAGADADQADADADAAQADAAACgCQACgBABgDIAMABQgDAHgFADQgFAEgHAAQgLAAgGgIgAgFgKQgDACAAAFIARAAQAAgFgCgDQgDgCgEgBQgDAAgCAEg");
	this.shape_11.setTransform(24.8,42.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAgIAAgxIgMAxIgLAAIgNgxIAAAxIgLAAIAAg/IASAAIALArIAMgrIATAAIAAA/g");
	this.shape_12.setTransform(18.7,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTprocurajogador, new cjs.Rectangle(11.7,3.2,41.3,45.1), null);


(lib.BOTNoticias = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Textos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAUQgGgEgBgGIAMgCQABAEACACQACABADAAQAGAAABgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAIgBgDIgDgCQgOgDgEgDQgGgCAAgHQABgGAEgEQAFgEAJAAQAJAAAFADQAEADACAGIgMACQgBgDgBgBIgGgBIgGABQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAIACADIAKADQAKACADADQAFADAAAFQgBAHgFAFQgFAEgLAAQgIAAgFgEg");
	this.shape.setTransform(53.9,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJAXIAAgXQAAgGgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgBQgCAAgCABIgEAFIgBAJIAAAVIgMAAIAAgtIALAAIAAAHQAGgHAIgBQAEABAEABQADACACACIACAFIABAIIAAAbg");
	this.shape_1.setTransform(48.8,42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAQQgEgGAAgKQAAgKAGgHQAFgGAJAAQAKAAAGAHQAGAGgBAOIgdAAQAAAFADADQADADADAAQADAAACgBQACgCABgEIAMADQgDAGgFAEQgFADgHAAQgLAAgGgIgAgFgLQgDADAAAFIARAAQAAgFgCgDQgDgDgEABQgDAAgCACg");
	this.shape_2.setTransform(43.6,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAdQgFgEAAgGIAAgCIAOACIACADQABACADAAQAFAAACgCIACgDIABgFIAAgHQgFAHgHAAQgKAAgFgIQgFgGABgIQgBgLAGgHQAGgGAIAAQAHAAAGAIIAAgHIAMAAIAAApQAAAIgCAEIgEAGQgCACgEACIgLABQgKAAgFgEgAgGgTQgDADAAAHQAAAIADACQACADAEAAQAFAAACgDQADgDAAgGQAAgHgDgEQgCgDgFAAQgEAAgCADg");
	this.shape_3.setTransform(38.4,43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAUQgFgDABgGQAAgFACgCQABgDADgBIALgDIAKgDIAAgBQAAgDgBgCQgCgCgEABIgFABQgCABgBADIgLgCQACgHAFgDQAEgDAIAAQAIAAAEACQAEACABADQACADAAAIIAAANIAAAJIACAGIgMAAIAAgDIgBgCQgDADgEACQgCABgEAAQgHAAgEgEgAAAADIgGACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQADABADAAQACAAADgBIADgFIAAgFIAAgDIgHACg");
	this.shape_4.setTransform(33.4,42.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAUQgFgEgDgGIANgCQAAAEADACQADABADAAQAEAAACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAIgBgDIgEgCQgOgDgDgDQgFgCgBgHQAAgGAFgEQAFgEAJAAQAJAAAEADQAFADACAGIgMACQgBgDgCgBIgFgBIgGABQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAIABADIAKADQAKACADADQAFADAAAFQgBAHgFAFQgFAEgKAAQgJAAgFgEg");
	this.shape_5.setTransform(28.4,42.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAXIAAgXQAAgGgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgBQgCAAgCABIgEAFIgBAJIAAAVIgMAAIAAgtIALAAIAAAHQAGgHAIgBQAEABAEABQADACACACIACAFIABAIIAAAbg");
	this.shape_6.setTransform(23.3,42.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAQQgEgGAAgKQAAgKAGgHQAFgGAJAAQAKAAAGAHQAGAGgBAOIgdAAQAAAFADADQADADADAAQADAAACgBQACgCABgEIAMADQgDAGgFAEQgFADgHAAQgLAAgGgIgAgFgLQgDADAAAFIARAAQAAgFgCgDQgDgDgEABQgDAAgCACg");
	this.shape_7.setTransform(18.1,42.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATAgIAAgxIgNAxIgMAAIgMgxIAAAxIgMAAIAAg/IAUAAIAKArIALgrIATAAIAAA/g");
	this.shape_8.setTransform(12,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTNoticias, new cjs.Rectangle(6.8,-3.8,55.1,51.7), null);


(lib.IconeTorcida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.IconeTorcida, null, null);


(lib.IconePlantel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Luz
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAJh3QAAgYAPgWQAVgfAoAAQBKAAADBNQAAAkgYAVQgVATgfAAQgfAAgWgTQgYgVAAgkgAGHiGQAAAngYATQgVASgfgDQgfgCgWgUQgYgVAAgfQAAgXAPgWQAWgfAnAAQBJAAAEBNgAEUArQAVgfAoAAQBJAAAEBLQAAAogYAUQgVASgfgDQgfgCgWgUQgYgVAAgfQAAgYAPgVgAC5BnQAAAlgYAWQgWATgfAAQgfAAgVgTQgYgWAAglQAAgYAPgVQAVgfApAAQBHAAAFBMgAlQi0QBHAAAFBMQAAAmgYAVQgVARgggCQgegCgWgUQgYgVAAgfQAAgYAPgWQAWgeAoAAgAiGi8QBJAAADBMQAAAkgYAWQgVATgfAAQgfAAgVgTQgYgWAAgkQAAgYAPgWQAVgeAoAAgAi/B+QAAgYAPgVQAVgfApAAQBHAAAEBMQAAApgYATQgVASgfgDQgegDgWgUQgYgWAAgegAk5A+QBHAAAFBMQAAAogYAUQgVARgggDQgegDgWgTQgYgWAAgeQAAgYAPgWQAWgeAoAAg");
	this.shape.setTransform(0.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ak6DUQgegDgWgTQgYgWAAgeQAAgYAPgWQAWgeAoAAQBHAAAFBMQAAAogYAUQgSAOgaAAIgJAAgAhzDJQgegDgWgUQgYgWAAgeQAAgYAPgVQAVgfApAAQBHAAAEBMQAAApgYATQgSAPgZAAIgJAAgAA4CiQgYgWAAglQAAgYAPgVQAVgfApAAQBHAAAFBMQAAAlgYAWQgWATgfAAQgfAAgVgTgAFSCiQgfgCgWgUQgYgVAAgfQAAgYAPgVQAVgfAoAAQBJAAAEBLQAAAogYAUQgSAPgZAAIgJAAgAlRgeQgegCgWgUQgYgVAAgfQAAgYAPgWQAWgeAoAAQBHAAAFBMQAAAmgYAVQgTAPgbAAIgHAAgAi6g2QgYgWAAgkQAAgYAPgWQAVgeAoAAQBJAAADBMQAAAkgYAWQgVATgfAAQgfAAgVgTgAAhg+QgYgVAAgkQAAgYAPgWQAVgfAoAAQBKAAADBNQAAAkgYAVQgVATgfAAQgfAAgWgTgAE7g9QgfgCgWgUQgYgVAAgfQAAgXAPgWQAWgfAnAAQBJAAAEBNQAAAngYATQgSAPgbAAIgHAAg");
	this.shape_1.setTransform(0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Tras
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AHrjsQACAAACAAQC9Dyi9D0IgFAAIvcAnApLD0QDDjzjFjxQGihDI/AcQAAAAAAAAQAPAUANAUQCSDfiuDfIgBAAItiAiIh5AEIgFABQABgBAAAA");
	this.shape_2.setTransform(4.5,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AIcjxIhXgqAIbD1IhXgrIAAAAAnBEcIhWgrIgDgCQgBABAAAA");
	this.shape_3.setTransform(-0.3,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#999999","#666666","#999999"],[0,0.533,1],-4.2,11.2,3.2,-16.4).s().p("AhcDKIAAAAQCtjfiQjfIA7ADIADAAQC9Dyi9D0IgEAAg");
	this.shape_4.setTransform(54.2,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#999999","#666666","#999999"],[0,0.533,1],0.1,3.5,0,-3.5).s().p("AnKgGINhgiIABAAIBXAqIvcAnQATgYAQgXg");
	this.shape_5.setTransform(4.1,26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#999999","#666666","#999999"],[0,0.533,1],0.1,2.5,0,-2.2).s().p("Ag8gSIB5gFQgQAXgTAYg");
	this.shape_6.setTransform(-47.9,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#999999","#666666","#999999"],[0,0.533,1],-35.5,7.3,-36.4,-45).s().p("AAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(44.9,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#999999","#666666","#999999"],[0,0.533,1],0.3,25.8,-0.6,-26.5).s().p("AoeEKIAAgBIADACIgDgCQDEjyjFjyQGihDI+AcIAAABQAQAUANAUQCRDeiuDfIAAAAItiAiIh6AFIgEAAIABgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IconePlantel, new cjs.Rectangle(-55.9,-28.2,120.9,60.7), null);


(lib.IconeFinanças = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.IconeFinanças, null, null);


(lib.IconeEstadio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALOjiIAAABALOjgQgDA8jQArQjSArkpAAQkoAAjTgrQi4gmgYhNQgCASAAgHQAAgGACgFQABgCABgCQAUgvCagkQAQgDAQgEQAjgHAlgGQC8geD3AAQD4AAC8AeQAkAGAjAHQARAEAPADQCrAoAHA1ALNh9IAAAMQgWA1i7AmQjSAqkoAAQkpAAjSgqQi4gmgbhNAKSDiQhPBBiOAqQiOApkbAAQkZAAi1gpQi1gogjgp");
	this.shape.setTransform(72,37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ALNizQAAACAAACALNiuQAAAAAAAAIAAABIgBBjApZiJQg9gWAAgcQAAgvC6giQAKgCAKgCQBMgMBYgIQB5gKCQAAQCPAAB5AKQBYAIBMAMQAKACAKACQC6AiAAAvQAAAcg9AWQguARhPAOQgmAHgoAGQihAVjRAAQjLAAiegUQCdgUDWAAQDOAACaATALMg+Ig6FTApZiJQAugRBPgOQC6giEHAAQEGAAC6AiQBPAOAuARAmEhcQgugGgqgIQhPgOgugRAqaEvIgymFIABhj");
	this.shape_1.setTransform(72.1,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AltAAQCdgTDVAAQDPAACaATQihAUjRAAQjLAAiegUg");
	this.shape_2.setTransform(69.7,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AnAApQhPgOgugRQAugQBPgOQC6giEGAAQEHAAC6AiQBPAOAuAQQguARhPAOQgmAHgpAGQiZgTjPAAQjVAAidAUQgugGgqgIg");
	this.shape_3.setTransform(69.3,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CCCCCC","#999999"],[0,1],-0.1,0.8,-0.1,13.3).s().p("AnCDXQi1gogjgpIgxmFQAaBNC4AmQDSArEpAAQEoAADSgrQC7gmAVg1Ig6FTQhPBBiOApQiOAqkbAAQkZAAi1gpg");
	this.shape_4.setTransform(72,49.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("An5CZQi5glgahNIABhiQAYBMC4AlQDTAsEoAAQEpAADRgsQDRgqACg7IgBBiIAAAMQgVA0i7AmQjSAskpAAQkoAAjSgsgAAABiQkoAAjTgsQi4glgYhMIABgEQAVgvCagkIAggHQAjgHAlgGQC7geD4AAQD4AAC7AeQAlAGAiAHIAhAHQCrAoAHA1IAAAEIAAABIAAAAIAAABQgCA7jRAqQjRAskpAAIAAAAgAqWg9QAAAbA9AXQAuAQBPAOQAqAIAuAGQCeAUDLAAQDRAACggVQApgGAmgHQBPgOAugQQgugRhPgOQi6gikGAAQkHAAi6AiQhPAOguARQg9gXAAgbQAAgwC6giIAUgDQBMgNBZgHQB4gKCQAAQCPAAB4AKQBZAHBMANIAUADQC6AiAAAwQAAAbg9AXQA9gXAAgbQAAgwi6giIgUgDQhMgNhZgHQh4gKiPAAQiQAAh4AKQhZAHhMANIgUADQi6AiAAAwIAAAAgALNgvg");
	this.shape_5.setTransform(72.1,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IconeEstadio, new cjs.Rectangle(-0.7,-1,145.5,76.8), null);


(lib.UNImeia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.articulaçãomenor();
	this.instance.parent = this;
	this.instance.setTransform(6,11.6,0.992,0.992,0,135.5,134.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-7,-7,14,14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.3,1,1).p("AA6B7IADkKIh4AGQgFCLATB7QAwAnA3gpg");
	this.shape.setTransform(5.5,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtB9QgTh7AFiLIB4gGIgDEKQgcAVgbAAQgYAAgYgTg");
	this.shape_1.setTransform(5.5,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UNImeia, new cjs.Rectangle(-1.6,-19.6,14.3,37.7), null);


(lib.Canela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ténis
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AANAQQiLgBAUgOIgGgQQBbAeB2gTQA4AUiMAAg");
	this.shape.setTransform(4.7,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("ABhgOQg/gagrgJQgKAOghAEQgqAFgYgWQgNARgBAOQgCAOAGAeQAXAPApAGQAoAFCMgGQArglg+gYg");
	this.shape_1.setTransform(5.1,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AANAQQiLgBAUgOIgGgQQBbAeB2gTQA2AUiBAAIgJAAg");
	this.shape_2.setTransform(4.7,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhAAwQgpgGgXgPQgGgeACgOQABgOANgRQAYAWAqgFQAhgEAKgOQArAJA/AaQA+AYgrAlQhNADguAAQgnAAgSgCgAhuARQgUANCLABQCMAAg4gUQh3AThageg");
	this.shape_3.setTransform(5.1,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Articulações
	this.corar = new lib.UNImeia();
	this.corar.parent = this;
	this.corar.setTransform(-1.2,17.3,1,1,0,0,0,5.9,8.8);

	this.instance = new lib.articulação();
	this.instance.parent = this;
	this.instance.setTransform(-0.9,-16,1,1,135);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 230, 171, 147, 0)];
	this.instance.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.corar}]}).wait(1));

	// Desenho
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AA6B6IAFj4IhzgBQgSBvAOCQ");
	this.shape_4.setTransform(-1.5,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6AB93").s().p("Ag0h/IBzABIgFD4IhyAGQgOiQAShvg");
	this.shape_5.setTransform(-1.5,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Canela, new cjs.Rectangle(-9.3,-24.2,28.8,52.6), null);


(lib.VoltarBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Seta();
	this.instance.parent = this;
	this.instance.setTransform(29.2,18,1,1,0,0,0,18.6,9.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAYIAAgtIALAAIAAAGQADgFACgBQACgBADAAQAEAAAEACIgEAKQgDgBgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgBACgBADQgBADAAALIAAAPg");
	this.shape.setTransform(40.1,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAgIAAgtIALAAIAAAtgAgFgTIAAgMIALAAIAAAMg");
	this.shape_1.setTransform(36.9,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAUQgFgEAAgGQABgEACgDQACgDACAAIAKgDIALgDIAAgBQAAgEgCgBQgBgBgEgBIgFABQgCACgBADIgLgCQACgGAEgDQAFgEAIAAQAIAAAEACQAEACACADQABADAAAIIAAANIAAAJIACAGIgLAAIgBgEIgBgBQgDADgEABQgCACgEAAQgHAAgEgEgAAAADIgGACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAABQAAAAAAAAQACACAEABQACgBADgCIADgDIAAgHIAAgCIgHACg");
	this.shape_2.setTransform(33.2,42.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRAbQgGgFgCgLIANgBQABAGADADQAEADAFAAQAGAAADgDQADgCAAgEQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgCgEgBIgJgDQgKgDgEgCQgGgFAAgIQAAgFADgEQACgEAFgCQAGgDAGAAQAMAAAGAGQAGAFAAAJIgNAAQAAgFgDgCQgDgCgFAAQgFAAgDACQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQACACAJACQAJACAEADQAFACACADQADAEAAAGQAAAGgDAEQgDAFgGADQgFACgIAAQgLAAgHgGg");
	this.shape_3.setTransform(27.7,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.VoltarBtn, new cjs.Rectangle(4.1,2,54,46.3), null);


(lib.BOTtorcida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSARQgFgDAAgFQAAgFAGgEQAGgGAKAAIAIABIAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgGgBIgKACIgEAAIgDgBIgBgEIAAgBIACgBIACgCIAHgCIAHAAQAHAAAEAEQAFADAAAHIAAARIACAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABIgEABIgLAAIAAgCIgHACIgHABQgHAAgEgEgAgLAFQgBABAAAAQgBAAAAABQAAAAAAABQgBAAAAABIABACQADABADAAIAHgBIAHgDIAAgFIgJgBQgFABgEACg");
	this.shape.setTransform(49.5,42.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAXQgGgGAAgIQAAgJAGgGQAHgGAJAAIAGABQADABADACIAAgLIgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAEgBIAKAAIAAAuIACAAQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgFABIgLAAIAAgCIgGADIgFABQgLAAgGgGgAgMAAQgEADAAAGQAAAFAEADQADADAHAAQAEAAAEgDQAEgDgBgFQAAgGgDgDQgEgDgEAAQgHAAgDADg");
	this.shape_1.setTransform(44.3,41.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAcIgEgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIALAAIAAgUIgHAAIgFgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAIAPAAIAAAdIAKAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAgHgSIAAgJIAKAAIAAAJg");
	this.shape_2.setTransform(38.8,41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOARQgHgGAAgKQAAgIAFgHQAHgGAJAAIAHABIAGACIADgBIADABIACAEIAAAGIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBIgBgEQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgDgCgGAAQgFAAgEAEQgEAEABAEQgBAFAEADQADADAIAAIAJgBIAEgCIADgCIAEACIABADQAAACgFADQgFAEgMAAQgJAAgGgEg");
	this.shape_3.setTransform(33.6,42.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAUIgFgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAGAAIAAgUIgEAAIgEgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIAEgBIAMAAIAAAGIAIgGIAGgBQAFAAADADQABABABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgDABIgEgCIgDgBQgCAAgDACQgFACgEAFIAAAMIAMAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABIACADIgCADIgEABg");
	this.shape_4.setTransform(28.2,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKASQgGgDgDgEQgDgFAAgFQAAgFADgFQADgFAGgDQAFgDAFAAQAGAAAGADQAFADADAFQADAGAAAEQAAAFgDAFQgDAEgFADQgGADgGAAQgFAAgFgDgAgJgHQgEAEAAAEQAAAEAEAEQAEADAFAAQAGAAAEgDQAEgEAAgEQAAgEgDgDQgEgFgHAAQgFAAgEAEg");
	this.shape_5.setTransform(22.8,42.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAaIgFgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIAFAAIAAghIgJAAIAAAIQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgRIAtAAIAAARQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgIIgKAAIAAAhIAGAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABIABADIgBADIgFABg");
	this.shape_6.setTransform(17.5,41.4);

	this.instance = new lib.IconeTorcida();
	this.instance.parent = this;
	this.instance.setTransform(28.1,18.9,0.433,0.433,0,0,0,33.7,29.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTtorcida, new cjs.Rectangle(13.4,35.1,40.3,13), null);


(lib.BOTTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Coiso
	this.instance = new lib.IconePlantel();
	this.instance.parent = this;
	this.instance.setTransform(35.5,19.4,0.482,0.482,180);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Textos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAQQgEgGAAgKQAAgKAGgHQAFgGAJAAQAKAAAGAHQAGAGgBAOIgdAAQAAAFADADQADADADAAQADAAACgBQACgCABgEIAMADQgDAGgFAEQgFADgHAAQgLAAgGgIgAgFgLQgDADAAAFIARAAQAAgFgCgDQgDgDgEABQgDAAgCACg");
	this.shape.setTransform(42.2,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAXIAAgYQAAgIgCgBQgBgDgEAAIgFABQgCACgBADIgBAIIAAAWIgLAAIAAgXIgBgJIgCgDIgDgBQgDAAgCABQgDACgBADIgBAIIAAAWIgMAAIAAgtIALAAIAAAHQAGgIAJAAQAEAAADACQADACACAEQADgEADgCQAEgCAEAAQAFAAADACQAEADABADQACADAAAHIAAAcg");
	this.shape_1.setTransform(35.9,42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAgIAAgtIALAAIAAAtgAgFgTIAAgMIALAAIAAAMg");
	this.shape_2.setTransform(30.7,41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAgIAAg0IgTAAIAAgLIAxAAIAAALIgTAAIAAA0g");
	this.shape_3.setTransform(26.8,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTTime, new cjs.Rectangle(-1.9,-2.3,74,50.2), null);


(lib.BOTjogar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Canela();
	this.instance.parent = this;
	this.instance.setTransform(22.6,4.6,0.755,0.755,-48.1,0,0,4.8,1.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAXIAAgtIALAAIAAAHQADgEACgCQACgBADgBQAEABAEACIgEAKQgDgCgDAAQAAAAgBABQgBAAAAAAQgBAAAAAAQAAABgBAAQgBABgBAEQgBAEAAALIAAANg");
	this.shape.setTransform(41.6,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAUQgFgDAAgHQAAgDADgDQACgEACAAIAKgDIALgDIAAgBQAAgDgCgCQgCgBgDAAIgFABQgCABgBADIgLgCQACgGAEgDQAFgEAIAAQAIAAAEACQAEACACADQABADAAAIIAAANIABAJIABAGIgLAAIgBgEIgBgBQgDADgDACQgDABgEAAQgHAAgEgEgAAAADIgGACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQABACADAAQADAAADgCIACgFIABgFIAAgDIgHACg");
	this.shape_1.setTransform(37.1,42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPAdQgFgEAAgGIAAgCIAOACIABADQACACADAAQAFAAADgCIACgDIAAgFIAAgHQgFAHgIAAQgIAAgGgIQgFgGAAgIQAAgLAGgHQAFgGAJAAQAIAAAFAIIAAgHIALAAIAAApQAAAIgBAEIgDAGQgDACgEACIgKABQgLAAgFgEgAgGgTQgDADAAAHQAAAIADACQADADADAAQAEAAAEgDQACgDAAgGQAAgHgCgEQgEgDgEAAQgDAAgDADg");
	this.shape_2.setTransform(31.8,43.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAVQgGgCgDgGQgDgFAAgIQAAgFADgGQADgGAGgDQAFgDAGAAQAKAAAHAHQAHAGAAAKQAAAKgHAHQgHAHgKAAQgFAAgGgDgAgHgKQgDAEAAAGQAAAHADADQADAEAEAAQAFAAADgEQADgDAAgHQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_3.setTransform(26.5,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAbQgFgFAAgKIAMgCIABAIQACADAEAAQAEAAACgCQACgCAAgIIAAgoIAMAAIAAAnQAAAIgBAEQgCAGgFADQgFADgHAAQgJAAgFgFg");
	this.shape_4.setTransform(21.1,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTjogar, new cjs.Rectangle(-0.8,-11.6,55,59.8), null);


(lib.BOTEstadio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Coiso
	this.instance = new lib.IconeEstadio();
	this.instance.parent = this;
	this.instance.setTransform(31.6,16,0.305,0.305,0,0,0,72,37.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Textos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAVQgGgCgDgGQgDgFAAgIQAAgGADgFQADgGAGgDQAFgDAGAAQAKAAAHAHQAHAGAAAKQAAAKgHAHQgHAHgKAAQgFAAgGgDgAgHgKQgDAEAAAGQAAAHADAEQADADAEAAQAFAAADgDQADgEAAgHQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape.setTransform(45.6,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAgIAAgtIALAAIAAAtgAgFgTIAAgMIALAAIAAAMg");
	this.shape_1.setTransform(41.7,41.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAaQgFgGAAgMQgBgLAGgGQAFgGAJAAQAHAAAFAHIAAgXIANAAIAAA+IgMAAIAAgGQgCADgEACQgFACgCAAQgIAAgGgGgAgGgCQgDACAAAHQAAAIACADQADAFAEAAQAFAAACgEQADgDAAgIQAAgHgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_2.setTransform(37.6,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAdQgFgEABgGQAAgEACgDQABgDAEgBIAKgDIAKgDIAAgBQAAgDgBgBQgCgCgEAAIgFABQgCACgBACIgLgBQACgHAFgDQAEgDAIAAQAIAAAEACQAEACABADQACADAAAHIAAAOIAAAJIADAGIgNAAIgBgEIAAgBQgDADgEABQgCACgEAAQgHAAgEgEgAAAAMIgGACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACACAEAAQACAAADgCIADgEIAAgGIAAgCIgHACgAgFgTIAFgNIAOAAIgNANg");
	this.shape_3.setTransform(32.6,41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAeQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBIgCgEIAAgIIAAgUIgGAAIAAgKIAGAAIAAgJIALgGIAAAPIAIAAIAAAKIgIAAIAAASIAAAGIABACIADAAIAEgBIABAJQgEACgFABIgFgCg");
	this.shape_4.setTransform(28.7,41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAUQgEgEgDgGIANgCQAAAEADACQADABADAAQAFAAACgBQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAIAAgDIgFgCQgNgDgFgDQgEgCAAgHQgBgGAFgEQAEgEAKAAQAJAAAEADQAFADACAGIgLACQgBgDgDgBIgFgBIgGABQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAIABADIAKADQAKACAEADQADADAAAFQABAHgGAFQgFAEgKAAQgJAAgGgEg");
	this.shape_5.setTransform(24.6,42.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAgIAAg/IAuAAIAAALIghAAIAAAOIAeAAIAAAKIgeAAIAAARIAiAAIAAALg");
	this.shape_6.setTransform(19.4,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTEstadio, new cjs.Rectangle(3.6,-1.5,60,49.4), null);


(lib.BOTdinheiros = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAUQgEgEgCgGIAMgCQABAEACACQADACACAAQAFAAADgCQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCIgEgBQgPgEgEgDQgEgCAAgHQAAgGAEgEQAEgEAKAAQAJAAAFADQAEADACAGIgLACQgBgDgCgBIgGgBIgGABQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAABIABACIALADQAKACADADQAEADAAAFQABAHgGAEQgFAFgLAAQgIAAgGgEg");
	this.shape.setTransform(49.1,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAUQgFgDAAgHQAAgDADgDQACgEACAAIAKgDIALgDIAAgBQAAgDgCgCQgCgBgDAAIgFABQgCABgBADIgLgCQACgGAEgDQAFgEAIAAQAIAAAEACQAEACACADQABADAAAIIAAANIABAJIABAGIgLAAIgBgEIgBgBQgDADgDACQgDABgEAAQgHAAgEgEgAAAADIgGACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQABACADAAQADAAADgCIACgFIABgFIAAgDIgHACg");
	this.shape_1.setTransform(44.3,42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAgIAAgFIAJABQACAAACgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgCIgDgBIgFABIABgFIADgBIACAAIAEAAIgDAAIgDAAQgIgBgFgFQgGgGAAgKQAAgMAGgGQAGgGAKgBQAIABAFADQAFAEACAHIgMADQAAgEgDgCQgCgCgDAAQgEAAgCADQgDAEAAAHQAAAIADADQACACAEAAQADAAADgCQACgCABgDIAMACQgCAHgFAFQgEADgHAAIAFADQADACAAADQAAAEgDADQgEACgHAAIgJAAgAgCAPIADAAIADAAIgEAAIgCAAgAgCAPIAAAAg");
	this.shape_2.setTransform(39.5,43.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJAXIAAgXQAAgGgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgBQgCAAgCABIgEAFIgBAKIAAAUIgMAAIAAgtIALAAIAAAIQAGgJAIAAQAEABAEABQADABACADIACAFIABAIIAAAbg");
	this.shape_3.setTransform(34.3,42.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAUQgFgDAAgHQABgDACgDQACgEACAAIAKgDIALgDIAAgBQAAgDgCgCQgBgBgEAAIgFABQgCABgBADIgLgCQACgGAEgDQAFgEAIAAQAIAAAEACQAEACACADQABADAAAIIAAANIAAAJIACAGIgLAAIgBgEIgBgBQgDADgEACQgCABgEAAQgHAAgEgEgAAAADIgGACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQABACAEAAQACAAADgCIADgFIAAgFIAAgDIgHACg");
	this.shape_4.setTransform(29.1,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAJAXIAAgXQAAgGgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgBQgCAAgCABIgEAFIgBAKIAAAUIgMAAIAAgtIALAAIAAAIQAGgJAIAAQAEABAEABQADABACADIACAFIABAIIAAAbg");
	this.shape_5.setTransform(23.9,42.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAgIAAgtIALAAIAAAtgAgFgTIAAgMIALAAIAAAMg");
	this.shape_6.setTransform(20,41.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAgIAAg/IArAAIAAALIgeAAIAAAPIAZAAIAAAKIgZAAIAAAbg");
	this.shape_7.setTransform(16.1,41.6);

	this.instance = new lib.IconeFinanças();
	this.instance.parent = this;
	this.instance.setTransform(16.9,16.8,0.198,0.198,0,0,0,8.1,13.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTdinheiros, new cjs.Rectangle(11.8,35.1,41.4,13), null);


// stage content:
(lib.futebolonline2017man_Canvas_unused = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{manage:0});

	// timeline functions:
	this.frame_0 = function() {
		/* loadSceneManagetime();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// menu_dir
	this.nomeTecnico_txt = new cjs.Text("Técnico: você", "12px 'Courier New'");
	this.nomeTecnico_txt.name = "nomeTecnico_txt";
	this.nomeTecnico_txt.textAlign = "center";
	this.nomeTecnico_txt.lineHeight = 16;
	this.nomeTecnico_txt.lineWidth = 220;
	this.nomeTecnico_txt.parent = this;
	this.nomeTecnico_txt.setTransform(516,170.2);
	this.nomeTecnico_txt.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.correio_mc = new lib.BOTNoticias();
	this.correio_mc.parent = this;
	this.correio_mc.setTransform(458.7,368.6,1,1,0,0,0,-0.1,0.5);

	this.estadio_mc = new lib.BOTEstadio();
	this.estadio_mc.parent = this;
	this.estadio_mc.setTransform(458.7,309.8,1,1,0,0,0,-0.1,0.5);

	this.voltar_mc = new lib.VoltarBtn();
	this.voltar_mc.parent = this;
	this.voltar_mc.setTransform(536.7,368.6);

	this.jogar_mc = new lib.BOTjogar();
	this.jogar_mc.parent = this;
	this.jogar_mc.setTransform(536.7,309.2);

	this.time_mc = new lib.BOTTime();
	this.time_mc.parent = this;
	this.time_mc.setTransform(458.7,188.5,1,1,0,0,0,-0.1,0.5);

	this.mercado_mc = new lib.BOTprocurajogador();
	this.mercado_mc.parent = this;
	this.mercado_mc.setTransform(536.7,188);

	this.financas_mc = new lib.BOTdinheiros();
	this.financas_mc.parent = this;
	this.financas_mc.setTransform(536.7,247.3);

	this.torcida_mc = new lib.BOTtorcida();
	this.torcida_mc.parent = this;
	this.torcida_mc.setTransform(458.5,247.6);

	this.msg_txt = new cjs.Text("mensagens para o jogador", "14px 'Arial'", "#FFFFFF");
	this.msg_txt.name = "msg_txt";
	this.msg_txt.textAlign = "center";
	this.msg_txt.lineHeight = 18;
	this.msg_txt.lineWidth = 541;
	this.msg_txt.parent = this;
	this.msg_txt.setTransform(314.5,426.1);
	this.msg_txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.msg_txt},{t:this.torcida_mc},{t:this.financas_mc},{t:this.mercado_mc},{t:this.time_mc},{t:this.jogar_mc},{t:this.voltar_mc},{t:this.estadio_mc},{t:this.correio_mc},{t:this.nomeTecnico_txt}]}).wait(1));

	// Textos
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(184,241,194,0.6)","#FFFFFF"],[0.094,0.141,0.914],37.7,-7.8,37.7,7.2).s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape.setTransform(48.5,148.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350.1,387.8,607,317.4);
// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 50,
	color: "#3B647E",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;