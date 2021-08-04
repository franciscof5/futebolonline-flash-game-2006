(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"futmin_atlas_", frames: [[0,0,99,99],[0,101,10,10]]}
];


// symbols:



(lib.correios = function() {
	this.spriteSheet = ss["futmin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.texturafuteboldebate = function() {
	this.spriteSheet = ss["futmin_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
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


(lib.Torcida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mão
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGEhcQAngnA4AAQA4AAAnAnQAnAoAAA2QAAA4gnAnQgnAog4AAQg4AAgngoQgngnAAg4QAAg2AngogAlcgCQAAA3gnAnQgnAog4AAQg4AAgngoQgngnAAg3QAAg3AngoQAngnA4AAQA4AAAnAnQAnAoAAA3g");
	this.shape.setTransform(23.7,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEFE3").s().p("AHjCJQg4AAgngoQgngnAAg4QAAg2AngoQAngnA4AAQA4AAAnAnQAnAoAAA2QAAA4gnAnQgnAog4AAIAAAAgApBBcQgngnAAg3QAAg3AngoQAngnA4AAQA4AAAnAnQAnAoAAA3QAAA3gnAnQgnAog4AAQg4AAgngog");
	this.shape_1.setTransform(23.7,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Corpo
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AD5khICSBIACUhLIkugEAlRgZIAAABIA8E6IIeAAQAhibAgiaAjwkNIiaA5");
	this.shape_2.setTransform(24,58.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AGNBVIBfk4IhogyIiJEiIhlDWIC2A3IAEABgAiYDfIi3A3IAAgBIg5i7IhjlCIBngyICWE7IBZC9g");
	this.shape_3.setTransform(23.8,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF99").s().p("AkRC5Ig8k5IAAAAIC3g4IEuAEIC2A3IhBE2g");
	this.shape_4.setTransform(23.6,69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99CC66").s().p("AFKCGIi2g3IBljVICSBIIg9DFgAlRCBIg5i6ICag5IBZC8IgDABIi2A3g");
	this.shape_5.setTransform(24,43);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBEFE3").s().p("AnriHIBogyICVE7IiaA4gAD7BtICKkhIBnAyIhfE3g");
	this.shape_6.setTransform(23.8,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Cabeça
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AitAAQCthtCuBtADKA3QjKgxjJAx");
	this.shape_7.setTransform(24.3,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ADKhDQALAgAAAjQAABYg/A+Qg+A/hYAAQhXAAg/g/Qg+g+AAhYQAAgjALggQAJgdATgaQAKgOANgOQA/g+BXAAQBYAAA+A+QANAOALAOQASAaAKAdg");
	this.shape_8.setTransform(24.3,28.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FF99").s().p("AjJA3QAJgdATgaQCthtCtBtQATAZAKAeQjKgxjJAxg");
	this.shape_9.setTransform(24.3,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBEFE3").s().p("AiWCWQg9g+gBhYQAAgjALgfQDJgyDKAyQALAfAAAjQAABYg/A+Qg+A+hYABQhXgBg/g+gAiWiVQA/g/BXABQBYgBA+A/QANANAKAOQithtitBuQAKgPANgNg");
	this.shape_10.setTransform(24.3,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Torcida, new cjs.Rectangle(-39,-20.8,125.5,109.4), null);


(lib.Nota50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C57967").s().p("AgoAZQAogCgagMQgCgBAAgFQARgDgCgaIAFAAQAIAoApAJg");
	this.shape.setTransform(58.9,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF9585").s().p("AgMAZQgJgHAAgTIAAgoQA/gCgdAqQgXABATAeQAJAMgEAAQgFAAgVgRg");
	this.shape_1.setTransform(52.2,68.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3AB9B").s().p("AAMgcIABAAIgCAcIgFAAQACAagQADQgPgbAjgeg");
	this.shape_2.setTransform(56.9,70.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B544E").s().p("AgXgIIAKAAIATAAQAVgGgBAPIAAAKIgdAAIgKAAIgCAAQgOAAAGgTg");
	this.shape_3.setTransform(43.4,73.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0B4B0").s().p("AgOAtIAAhPIAdgKIAAAKIgKAeIAAAdIAAAKIAAAKg");
	this.shape_4.setTransform(43.5,68.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DB9284").s().p("AgUAhIAAgeQAcAMgHgZIAUAtQgKACgIAAQgLAAgMgEgAgKgaIAAgKIAFALIgFgBg");
	this.shape_5.setTransform(46.1,67.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A5447").s().p("AgKANIAKgdIADABIACABIAFAOQAFARgMAAQgFAAgIgEg");
	this.shape_6.setTransform(45.1,66.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B16954").s().p("AAAATIgdgdIAngKIAUAUIgFAAQABAVgRAAIgJgCg");
	this.shape_7.setTransform(71,67.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C87C5D").s().p("AgrAZQAggMgUgTQgCgDAAgFQAaAGgBgaIAFAAQAaAMACgMIABgKQAFAAAAACQAgBLgvAMg");
	this.shape_8.setTransform(74.4,70.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0A697").s().p("AARAqQgtgeAEg4IAdAxIAUAoIgIgDg");
	this.shape_9.setTransform(61.5,68.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BB6F5E").s().p("AAFAtIgTgoIAdgxIgFAvIAFAqIgKAAg");
	this.shape_10.setTransform(63.5,68.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EBA18E").s().p("AgCADIAFgvIAABZg");
	this.shape_11.setTransform(64.7,68.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBA791").s().p("AgKAnQAQgGgehMQAJgCAIAAIAPACIARAKIgnAKIAdAdQAAAFACACQAUAVggAMIgNAAQgbAAAZgHg");
	this.shape_12.setTransform(69.5,68.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C9A191").s().p("Ag7AFIAegJIBFAAQAKAAAIAEQACAAAAAFg");
	this.shape_13.setTransform(30,75.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9A4F3E").s().p("ABQBAQgpgIgJgqIACgaIgBAAQgjAdAOAbQAAAFACABQAbAMgoACIhYAAIAAgKQABgQgVAGIAAgKIAAgKQATAGAXgEIgVgtIgFgOIgBgBIgFgLIgeAKIgUAUIhGgoIAAgKQC8gGCoAYQgHAAgKACQAfBNgRAFQgeAJAugCIA8AUIhIAAIgIABQgOACgLAAQgOAAgLgDgABSApIAIADIAKAAIAAhZIgeAxIgegxQgEA4AuAegAgxgtIAAAoQAAATAKAIQAnAfgSgbQgUgeAYgBQAbgog4AAIgGAAgAC+gPIgUgUIgRgKIBDAUIgBAKQgBAGgHAAQgHAAgOgGg");
	this.shape_14.setTransform(55,68.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7C4F44").s().p("AgiAoIAAhPQAxAMARAuQACAKABALg");
	this.shape_15.setTransform(30.5,71);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6A5842").s().p("AgdgOIA7AAIAAAKQgVgGAHADQAQAHgIADQgYAMgMAAQgVAAAEgdg");
	this.shape_16.setTransform(30,63.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#947661").s().p("AB4BGQAAgFgCgBQgIgEgKAAQgBgLgCgKQgRgugygMIAABPIgeAKIhPAAIhugKIAAiBIAVAAIBfAAIBnAAQgHAxA8ggQAJgDgQgHQgHgDAVAGIBGAoIAUgUIAABPIgKAAQgGAWAQgBIAKgBIAAAKg");
	this.shape_17.setTransform(24,69);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AC7F76").s().p("AgLAGIAKgdQAAAFABAEQARAmgIAAQgFAAgPgSg");
	this.shape_18.setTransform(28.2,53.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B38177").s().p("AgMAfQAMhKAFAPQAUA7ggAAIgFAAg");
	this.shape_19.setTransform(32.3,54.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCA599").s().p("AgggiIAnAAQAvA1gngVQgDgCgFAAIgJAdQAAAFgDACQgCADgFAAg");
	this.shape_20.setTransform(27.3,51.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8B7E6D").s().p("AgOgbQASBKAGhAIAFAAIgBAJQgKAkgGAAQgIAAgEg3g");
	this.shape_21.setTransform(10.5,44.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C1B3A2").s().p("AgOgTIAdAKIgFAAQgDAdgFAAQgGAAgKgng");
	this.shape_22.setTransform(10.5,44);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#928777").s().p("AgQAlIAAgKIAAg7QAqgUgMBPIgBAKg");
	this.shape_23.setTransform(6.7,45.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#897A66").s().p("AgOgbIAdAAIgBAKQgJAtgGAAQgHAAgGg3g");
	this.shape_24.setTransform(6.5,51.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B0A391").s().p("AgTAAIAAgJQAKAAAIgEQABgBAAgFQAjAPgbAVQgDADgFAAg");
	this.shape_25.setTransform(16,9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C7B6A2").s().p("AgsgYIBZAUIAAAJQACAMgFgCQgogNgnAXg");
	this.shape_26.setTransform(9.5,8.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9C6B1").s().p("AgxANQAFAAADgCQAbgWgjgPIBUAAQABARAOADQAAAFgCACQgaAagcAAQgVAAgWgOg");
	this.shape_27.setTransform(21,9.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C59071").s().p("AgggOQAhARAUgcQAGgJACALQAKA1gRAAQgQAAgmgsg");
	this.shape_28.setTransform(34.3,10.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AD8561").s().p("AAegdQAAAFgCAFQgQAlgpAMg");
	this.shape_29.setTransform(68,52);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAB397").s().p("AglBUIALgeQADhTAuhHIAAgDQAvB9hgBSg");
	this.shape_30.setTransform(62.7,40.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAB696").s().p("AgLAhIAAhQQAuBEguAbg");
	this.shape_31.setTransform(68.2,32.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BC7E63").s().p("AglAGQAogeAlATIhPATQAAgFACgDg");
	this.shape_32.setTransform(65,25.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A96A49").s().p("AABgYQAFAAABACQAIAcgXATg");
	this.shape_33.setTransform(73.9,38.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC795B").s().p("AgTgYIAAgKIAnA7QAAAFgCABQgIAEgKAAg");
	this.shape_34.setTransform(74,31.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A36648").s().p("AgOgEIAAgUIAdAdIAAAKIgKAAIAAAKg");
	this.shape_35.setTransform(70.5,27.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C79477").s().p("AgFhXIAAADQguBIgDBSQAAhOAag3QAbg4AkAAIAUAeQAABXggA8QgfA+guAAQBghSgvh9gAAPgdIAAAPQAugaguhFIAABQg");
	this.shape_36.setTransform(65.5,39);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D5A286").s().p("AgbA9QgegHgDAJIgUgnQBNAngahtIgBgJIAUgKIBZAKQARB5hUABQgRAAgWgGg");
	this.shape_37.setTransform(40.1,43.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BF846F").s().p("AgRAWIARguIATAnIAAAKg");
	this.shape_38.setTransform(45.2,32.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BC7C61").s().p("AgjgZQAegkAqAAQgIACgMAGQg+AkgUBPQAAgzAegkgAA2g3IAKAFQAFADgPAKQACgMgCgGg");
	this.shape_39.setTransform(45.6,30.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7F4B2E").s().p("Ag7CMQgyhVAghPIgCgZIAohQIBPgUIAAAUQglAAgZA4QgbA3AABOIgLAeIALAUQAuAAAfg+QAgg8AAhXIAAgKIAKAAIAUA8IAAAKIgKAxIgKAUIAAAoQgFAAgBADQgEAHAAAKIg8A8g");
	this.shape_40.setTransform(65,40);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B07059").s().p("AgYAoIAxhPIgnBPIgKAAg");
	this.shape_41.setTransform(58.5,31);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B27662").s().p("AAqBYIgoAIIAEhOIgZAMQAAgFABgEQAchqhFgEIAAgKIBPAtIAKgjIAKAAIACAZQghBPAzBVg");
	this.shape_42.setTransform(53,44);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#87523B").s().p("AhZBmQAEgKAeAHQB+AggViUIhZgKQAUhQA+gkQAMgHAIgCQAOgEADALQACAGgCAMQgZAAgRAJQgSAIAAANIgRAvIAlADQBHAEgdBpQgCAFAAAFIgnBDQggAPgYAAQgvAAgbg0g");
	this.shape_43.setTransform(43,39.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BD8C71").s().p("AgKANQACgDAAgFQAFgFACgFIACgJQAlAZg1AEQADAAACgCg");
	this.shape_44.setTransform(50.9,9.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#AB826A").s().p("AgigDIAegUQgCAfASgXQADgDAAgFIAUAdQAAAFgDADQgBACgDAAIgBAAIglAIg");
	this.shape_45.setTransform(46.5,9.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B5A388").s().p("AANAUIgngnIA1AKIgEAdIgKAAg");
	this.shape_46.setTransform(139.7,73);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B5946A").s().p("AgFgGQgDgDAAgFIARAdIgOgVg");
	this.shape_47.setTransform(134.9,72.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5D4E30").s().p("AgVASIAAgdIAKgKQAFAAADACQAsApggAAQgKAAgUgEg");
	this.shape_48.setTransform(122.2,59.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#837456").s().p("AgWAFIAAgJQAFgFAGgDQAEgCAFAAQAaADgCAZIgFABg");
	this.shape_49.setTransform(127.3,51.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BFB091").s().p("AgigPIAUgKQAAAFACACQADADAFAAIAnAKIgeAfg");
	this.shape_50.setTransform(125.5,53.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A47859").s().p("AhHgFIAEAAIAeAAIBuAEQgiAHggAAQgnAAgngLg");
	this.shape_51.setTransform(154.8,58.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B6886A").s().p("AgFgGQgDgDAAgFIARAdIgOgVg");
	this.shape_52.setTransform(153.9,72.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AD8468").s().p("AhTAJQBXgmBRAkIipAEQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAg");
	this.shape_53.setTransform(154.5,66.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C8997B").s().p("AgEANIgUgOIAagMIAXAag");
	this.shape_54.setTransform(148.5,56.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BF9761").s().p("Ag4gTIBtATIAEAKQgmAKgZAAQgyAAAAgng");
	this.shape_55.setTransform(95.8,74);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A3784A").s().p("AgYAZIg8g7QAKAAAIgEQACgBAAgFICVBZg");
	this.shape_56.setTransform(92.5,69.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#985F35").s().p("AgRANQgMgRAAgZIAUAUIAnAdQAAAFgCABQgIAEgKAAQgQAAgLgRg");
	this.shape_57.setTransform(83,63);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C59565").s().p("AgUgHQBIgLgzAYQgBABAAAFg");
	this.shape_58.setTransform(82.1,60.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CAAC91").s().p("AgFhLIAegMIgJAtIASAGIACAOIgKAKIAAAeIgCAIQgSAzgpAMQAdhKABhag");
	this.shape_59.setTransform(117.4,59.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BC9579").s().p("AgmgDIAngUQAGAFAFAAQAbADAAAMQgBAbgTAAQgTAAgmgbg");
	this.shape_60.setTransform(105.9,30.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#926A4D").s().p("AgYALIgKAAQAQgdArAKIAKAAIgnATg");
	this.shape_61.setTransform(102.5,28.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A68469").s().p("AgbgBQBugEhuAIg");
	this.shape_62.setTransform(97.8,43.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AA7D61").s().p("AAUAaQgXg3gPBFIgDgBQghgtAkgXIAAgKQBRgCglBRg");
	this.shape_63.setTransform(91.9,31);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B3836C").s().p("AgVgKQAcACgQghQgCgEAAgFIAKAAQARAggUAKQgNAGAMADQAdAJgCAHQgKAigJAAQgLAAgNg9g");
	this.shape_64.setTransform(100.2,35.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9B7954").s().p("AgggDQB+gfh1AwQgEACgFAAg");
	this.shape_65.setTransform(92.3,11.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9E7A56").s().p("AgUACIAAgEIAogRIABAKQABAagWADIgEAAQgQAAAAgSg");
	this.shape_66.setTransform(87,15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B48653").s().p("AgLAFIgegJQCPAEhnAFIgKAAg");
	this.shape_67.setTransform(90.2,7.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BD9471").s().p("AgIBPQgHBZhagWIAAgoIAKgUQAXgTgIgdQAAgCgFAAIAAgKQAKAAAIgEQACgBAAgFIAUAKIgyjvQAAgFgCgCQgCgBgDADIgGADIgRgwICfAKIAeAKQgMASAJAKIADACIAAAUIgpARIgBAFQAAAWAWgEQgFBiARgCQAIgBAKAPQglAXAiAsIADACIgXAoIArBGIATg9QgHArAKAlQABAGAHgFIAAAKQAOBDhCAeIgCABQhPhEABh1g");
	this.shape_68.setTransform(82.6,32.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B29562").s().p("Ag/gEIB/AAQgJAAgHAEQgCAAAAAFg");
	this.shape_69.setTransform(113.4,8.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CE9369").s().p("AgbgMQBfAVhDAEIgBAAQgUAAgHgZg");
	this.shape_70.setTransform(150.8,48.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FBD8B9").s().p("AgVAKIAAgTQBRgbhFA3IgBAAQgCAAgJgJg");
	this.shape_71.setTransform(155.2,43);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DC956C").s().p("AgTgMQAKgFAKgEQAEgBAFAAQAAAFACACQADADAFAAIAAATIgKAAIAAAKQgFAAgDACQgEAEgEAAQgNAAAAgjg");
	this.shape_72.setTransform(151,43.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CDBEA2").s().p("AgNAeQgCgCAAgFIAfg3IgCAtQgFAAgEACQgFADgFAFIAAAKQgFAAgDgDg");
	this.shape_73.setTransform(125.6,48.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#AF8A71").s().p("Agqg2IAogKIATAUIAbBaIgRATQhIgdADhag");
	this.shape_74.setTransform(119.3,28.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C1B498").s().p("Agrg6IALADQAhALgIgZIAJAAQAQADgBAbIAEAAQAeAngKAyIgVAUQgFhSg6gug");
	this.shape_75.setTransform(127.9,22);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9C8B69").s().p("AAyAyQACgbgRgDIhjg7QAAgFACgBQAIgEAJAAIABAAQBCArAkAZQAHAGAAAPQAAAFgDACQgCADgFAAg");
	this.shape_76.setTransform(124.5,13);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BC9F71").s().p("AgXAAQgBAAAAgFQA4ALgIAAQgFAAgqgGg");
	this.shape_77.setTransform(125.5,7.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#966155").s().p("AglANQAnAWATg0QABgEABgFIAAgKIAJAAIAGAAQgIBJgdAAQgPAAgXgYg");
	this.shape_78.setTransform(152.8,16.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A98E71").s().p("Ah7E9QgYgRBTgKQAAgFgDgEQg7hehig5QAFgFABAAQARAMAegTQBfg7ieABIAAgKQAZgYAuATQAiAQAPAjQAZgKAbgiQAYgfAOgjIAUAIIgKgxIA7AhIAyhNIhGhaIgUgUQgFgFgFgCIgJgDQApgwhHg0QA6AWA9ARQAFABAFAAQAJAZghgLIgMgDQA8AuAEBTIAWgUQAKgzgegnQAFAAACgDQADgCAAgFIAyASIAhgdIAbAfQgFAAgEACQgGADgFAFIAAAKQgbgEAPAjQACAEAAAFQgVAGAAgQIABgPQgKA9gUA2QAAAFACABQAvAbgnBCIABAKQAVBwg+AcQgKAXgRgHIgUgJQAZAYgwAJQAfAOgHAJQg+BViDAMQgFAAgEgDgAgQBXQgBBbgeBJQAqgLARg0IADgIQBOATg9g4QgCgDgFAAIgDgPIgSgGIAJgtgAA3BQIgUAKIAoArIAeghIAFgBQACgagbgDIADgtg");
	this.shape_79.setTransform(118.5,43);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CA8669").s().p("AgkAfIAKgUQAAgGgCgDQgPgiAbADQASAzAPgcQABgCAFgBIAFAcIABhEQAVA0giAvg");
	this.shape_80.setTransform(141.7,24);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E4A388").s().p("AgTgFIAAgKQAFgFAGgDQAEgCAEAAIAUAnQgFAAgBACQgFAKgGAAQgKAAgMgfg");
	this.shape_81.setTransform(142,21.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8A6152").s().p("AgKAOQgJgMAAgQIAhgKIAGAdIAAAKIgKAAIAAAKQgLAAgJgLg");
	this.shape_82.setTransform(154,11.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EBD0AD").s().p("AhsAFIDUgJIAEAJg");
	this.shape_83.setTransform(162.7,83.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#916349").s().p("AgDAJIAAgTIAHAFIAAAQIgHgCg");
	this.shape_84.setTransform(174.4,77.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C0A081").s().p("AgDAeIgFgKIAJgxIAIADIAAA4g");
	this.shape_85.setTransform(173.9,81);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E7BF9D").s().p("AlxGOIhGg8IAAgKIAeAAIBYAAIBSAAQAVAFAdgEIAHgBIBJAAQAvgLgghNQAAgCgFAAIhDgUIgQgCQipgYi8AGIg8AAIhpAAQA6gOAlg4QAFAAACgCQADgDAAgFQAoAtgchCQgCgEAAgFQAFAAADACQAnAXgvg3IAogUIAUAoQApBQBZgrIAohDIAagLIgEBNIAngIIATAMIA8AKQAqgMAQgmQACgFAAgFQAAgKAEgHQABgDAFAAQBaAXAHhZQgBB0BPBEIACgBQBCgegOhDQCdgBhfA8QgdASgRgLQgBgBgFAFQBhA6A8BeQADADAAAFQhTAKAYASQAEACAFAAQCEgMA+hVQAHgJgfgOQAwgIgZgZIAUAJQARAIAKgYQA+gbgVhxIgBgKQAnhCgvgbQgCgBAAgFQAUg1AKg+IgBAPQAAAQAVgGIgKAUIA1AUQAigvgVg2IgBBGIgFgdIgUgoIgcgeIggAdIgygTQAAgPgHgFQgkgbhDgrIgBAAIiBAAIBuAKIBkA8IgKAAQgFAAgFgBQg+gRg6gWQBHA0gpAwIAJADQAGACAFAFIgoAKQgDBbBJAdIARgTIgbhbIBGBaIgzBNIg7ghIAKAwIgVgHQgOAjgXAfQgbAjgaAJQgPgjghgPQgvgUgYAYQgHAFgBgGQgKglAHgqIgTA8IgrhFIAXgoQAPhGAYA4IAGAOQAkhShRACIAAAKQgKgPgIABQgQACAEhiQAWgDgCgbIAAgKQAFAAAEgCQB2gxh/AfIgDgBQgJgLAMgSIAKAAQBogFiPgFIiggKIARAwIAGgDQADgCACAAQACACAAAFIAyDwIgUgKIgog8IgegeQglgTgpAgQgCACAAAFIgyBQIgKAjIhQgtIgUgoQAAgMARgJQASgJAZAAQAPgKgFgDIgKgFQgEgKgOAEQgqAAgeAkQgeAlAAAzIgUAKIhukiQgOgDgBgRIAAAAIADAAIDUAAIgeAUIAYAcIAmgIIAAAAQA3gEglgaIgDAJQgCAGgFAFIgUgeIgKg8QCngPCZAjQAQgGARgFQA7gTAvAeQDQgTDUAGIABADQA7BPBuABQAAARAJAMQAIALANAAQAAAFgCAFQgTA0gngWQA+BDANh1IgFAAIAAgKIAUAAIAAA8IAUAeIgNAWIgggQIAjB8IhaAUIAUAyQgFAAgFACQgKADgKAFQAAAwAWgQQADgDAFAAQAjA8A3gJIAKgBQAdA2gHA9IgCAPQA1A0gDBOIg5AZIgNgPIg4ALIgWASQgTAFgPgPQgKgLgGgPIhIgNIAEgeIg2gKIAoAoIApAnIgGAUIgbgZIgmAaIgEAUIgFgqIgfgQIgMAhIAMAPQjUASjUAAQjPAAjQgSgAhFCyQAAAZAMASQALARARAAIA7A8QABA+ByggIgFgKIiVhaIgogeQAAgFACgBQAjgRgYAAQgLAAgWADgAKWEpQAfAwghg5QAAAFACAEgAHYEpQAfAwghg5QAAAFACAEgAJPD6QAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAICqgEQgngRgpAAQgsAAgtATgALuCiIhugEIgXgbIgbAMIAUAPIgFAAQBHAVBKgRgAovCeQAnAFgVhAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgGAAgKA+gAJ/BKQBDgEhggWQAIAbAVgBgABQAIIAAAFQBNgGgeAAIgvABgACZg1QACgHgegJQgLgDAMgGQAVgLgRggIAUAAQBMA4ABg4QAAgMgbgCQgFgBgFgFIgKAAQgsgKgQAeQAAAFACAEQARAigdgDQAVBrAWhPgAnxlTQgDgLgGAJQgUAdghgTQBQBfgShngAFplaQBjARhkgWQAAAFABAAgAszDGIAAgFIAVAFg");
	this.shape_86.setTransform(87,42.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D3976D").s().p("Ag1AdIAAgKIAKAAQAKAKACgBQBFg3hRAbQgFAAgCgDQgDgCAAgFIgUgyIBZgUQBeAwg6BtQgBACgFAAIgKABIgOABQgtAAgeg0g");
	this.shape_87.setTransform(157.4,42.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E4C99B").s().p("AgDB5IAHj3IAAD9IgHgGg");
	this.shape_88.setTransform(174.4,35.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D1B091").s().p("AgDCJIAAkXIAHAGIAAEXIgHgGg");
	this.shape_89.setTransform(174.4,62.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#AD8179").s().p("AgJAjIgUgeQARgHgCggIAFAAQgCBIAZgoQABgCAFAAQAAAEADACQACADAFAAIgBAKQgDAUgYAAIgLAAg");
	this.shape_90.setTransform(161,17.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8E6254").s().p("AgGAlQgDgCAAgFIAJgsIAKgZIgKBPQgEAAgCgDg");
	this.shape_91.setTransform(164,14);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#886359").s().p("AgagOIAGgZIAugFQgMADgJALQgKAPgBAUIgEAAQABAggRAIg");
	this.shape_92.setTransform(160.7,13.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E6BCB0").s().p("AgYACQAAgUAMgPQAJgLALgDIAHAAQAFAAADACQACADAAAFIgJAZIgLAsQgFAAAAACQgKAOgFAAQgKAAABgug");
	this.shape_93.setTransform(162.5,13.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FBEFE3").s().p("AtpGkIAAtHIbTAAIAADpIgID2IAAEYIAAAUIgKAyIjUAKgAs3DIIAACCIBuAKIBQAAIB4AAIBGAAIBGA8QGiAkGlgkIgLgPIALghIAgAQIAEAqIAEgUIAmgaIAcAZIAFgUIgpgnIAKAAIBIANQAGAPALALQAPAPASgFIAWgSIA4gLIANAPIA5gZQAEhOg2g0IADgPQAGg9gdg2QAFAAABgCQA6hshegxIgjh8IAgAQIANgWQAkAGADgaIABgKIAKhQQAAgFgDgCQgCgDgFAAIgHABIgwAFIgFAYIgUAAIgGgfIgiALQhugBg7hPIgBgDQjUgGjQATQgvgeg6ATQgSAFgQAGQiZgjinAPIAKA8QAAAFgDADQgTAYACggIjUAAIgDAAIAAAAIhVAAQAAAFgCABQgIAEgKAAIhagUIAIAzQAogXAnAMQAFADgCgNIAUAUQA1AgAtgsQACgDAAgFIBuEiIABAKQAaBthNgoIgoAUIgoAAIAUBGQglA3g5APIhfAAIgVgFgAs3AAIAAA8IAAAKQALBsAShiIABgKIABgKQAKg/gaAAQgGAAgJADgAryAUIABgKIgegKQAGBnAXhTg");
	this.shape_94.setTransform(87.4,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.8,84);


(lib.EfeitodeSelecionado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(2,1,1).p("AGLlTIsVAAQgyAAAAAyIAAJDQAAAyAyAAIMVAAQAyAAAAgyIAApDQAAgygyAAg");
	this.shape.setTransform(44.5,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.502)").s().p("AmKFUQgyAAAAgyIAApDQAAgyAyAAIMVAAQAyAAAAAyIAAJDQAAAygyAAg");
	this.shape_1.setTransform(44.5,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.EfeitodeSelecionado, new cjs.Rectangle(-1,-1,91,70), null);


(lib.CorreiosLogotipo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["futmin_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-49,-48.9)).s().p("Am3BkIAAjHINvAAIAADHg");
	this.shape.setTransform(44,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CorreiosLogotipo, new cjs.Rectangle(0,0,88,20), null);


(lib.BolaPenalty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E9E9A").s().p("AAFBMIgnifIBFCLIAAAKQABASgLAAQgHAAgNgIg");
	this.shape.setTransform(-46.5,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5A5A4").s().p("Ag2AKIAMgnIBDAUIAeAng");
	this.shape_1.setTransform(-11.5,46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80807E").s().p("AhAgBIgUgdIAygWIgBAEQgfAmBlASIAyAtg");
	this.shape_2.setTransform(-27.5,35.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#313030").s().p("AgxAVQBFgPAegnIAAAPIgSAWQgSAbgVADIgFAAQgSAAgTgNg");
	this.shape_3.setTransform(-37,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C9C9C7").s().p("AhKgoQAgATgBgdIgBgKIAKAAQAXAQASgCIgVAQIBZBtIgyAWgABBhkIAAAKIgSAOg");
	this.shape_4.setTransform(-38.5,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AhIA1IABgFQBAgGhLgTIAkgYIBJg3QAPBHAng+QADgGgEAcQgDATAAATIgNAaIgggCIgFgEIACgbQgIAzg7AAQgPAAgTgEg");
	this.shape_5.setTransform(-9.7,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939393").s().p("AgVAbQgWgHAFgDQBOgohcgDIBpAAIhJA1g");
	this.shape_6.setTransform(-12.3,-7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#616160").s().p("AgigDQARgIgCggIAFAAIAxAoQABAPgHAHQgZAZgOAAQgVAAgDgvg");
	this.shape_7.setTransform(-26.5,-2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AgGA3QgmgHgCgrIAKgnIAhgUQBdADhPApQgFADAWAHIABAAIgjAZQBKAThAAGIgBAFIgJAAg");
	this.shape_8.setTransform(-17.3,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A1A1A").s().p("AgigEIAAgeIBFAUIgKAnQAAAFgCADQgDACgFAAg");
	this.shape_9.setTransform(-24.5,-6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454444").s().p("AAXAQQglgQghgUQB6ABgkAog");
	this.shape_10.setTransform(-37.2,-19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B2A28").s().p("Ag2AZIBZhFIAUAAIgXBZg");
	this.shape_11.setTransform(-33.5,-27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8B6B0").s().p("AgkAZIBEgxIAFAAQgCAlghAMg");
	this.shape_12.setTransform(-26.2,-40.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#393632").s().p("Ag2APIgUAAIAAg7IAoAAIBtgUIgMAzIgIAjIgKArg");
	this.shape_13.setTransform(-22.5,-33.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40403F").s().p("AgaAfIAJgjIAsgxIg1Brg");
	this.shape_14.setTransform(-14.3,-34.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BEBDBA").s().p("AgZAdIAdhFQAiADgRAfQgaAvgMAAQgGAAgCgMg");
	this.shape_15.setTransform(-46.4,-15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6A6A69").s().p("AAFgYQAbAnADg7IAAgKIAKAAQgHAgAOALQADACAAAFIhtA7g");
	this.shape_16.setTransform(30.5,32.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#838281").s().p("AgsAUIgegnIBZgKQARADgCAaIAFAAIAoAeg");
	this.shape_17.setTransform(-1.5,47);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C7B7A").s().p("AhFgJIAegKIBtAAIhjAng");
	this.shape_18.setTransform(9,48);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#838383").s().p("Ag9ATIgDgBQgTg0CDAYIgtARIBBAMg");
	this.shape_19.setTransform(1.2,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F1F1F").s().p("AClCsQACgbgRgDIgygeICCAAQAKAAAIAEQACABAAAFIgyAoIgeAKgAigAFIABgDIhahtIAWgRQAWgDASgbIASgNQAbgMAAAfQACA3AKAwIA9gMIAYgjIA3CGIh1gSIASAmQhmgTAfgmg");
	this.shape_20.setTransform(-15,29.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#636362").s().p("AASAYQgIgEgKAAIg/gMIAsgRIBPgUQAAAFACAFQAOAlg4AMQAAgFgCgBg");
	this.shape_21.setTransform(8,39);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C3C3C2").s().p("AifBQIAygoQA4gMgPglQgBgFAAgFIAKAAIA7gKIBkgyIg8BPIBug7QAFAAACACQADADAAAFQAAAFgDADQhNBWiBAjg");
	this.shape_22.setTransform(21,38);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2E2E2E").s().p("AhegKICVgKIAoAUQAAAEgBAAQgxARgoAAQg4AAgrgfg");
	this.shape_23.setTransform(3.5,26.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A0A09F").s().p("AhiAEQAWg2AFA9IAzgTIB3ATIiWAKg");
	this.shape_24.setTransform(-0.8,22.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3E3E3D").s().p("AhlAUQBUhGB6AmIifATIgyAUQAAgFADgCg");
	this.shape_25.setTransform(2.5,21.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7A7978").s().p("AA6AcIgogUIh3gTICfgUQAlAmAHgOQgEAngWAAQgIAAgKgEg");
	this.shape_26.setTransform(7.2,23.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#464645").s().p("AAeg7IgBAKQgDBQg3Adg");
	this.shape_27.setTransform(21,28);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#131313").s().p("AgOhAIAnAoIAoAKIAAAKQgDA7gbgoIhjAyg");
	this.shape_28.setTransform(27.5,28.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A1A1A0").s().p("AgtA4QAIgGANAAQA3gdADhQIABgKIAUAAIgyCBIg7AKQAAgJAJgFg");
	this.shape_29.setTransform(20.5,29);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C6C6B").s().p("AgrgJIBXgHIAAAdIhAAEg");
	this.shape_30.setTransform(18.6,4.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7D7D7C").s().p("AgrgOQB2gCgpARQgWAJg3AFg");
	this.shape_31.setTransform(27.4,4.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BDBDBB").s().p("AgeBAQgDgDgFAAQAAgFgCgCQgPgLAHggIA7hPQAigJABAdIAFAAIhPB3QAAgFgCgCg");
	this.shape_32.setTransform(39.9,25.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B2B2A").s().p("AgOBBIgogKQBQgSgLhlIAEAHQAQAXAUAUIg7BPIgKAAg");
	this.shape_33.setTransform(35.5,20.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9E9E9C").s().p("AAZhoQAAAygCAyQgDA7gsAyg");
	this.shape_34.setTransform(47.5,10.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A2A29").s().p("AgYAxIgogUQBmgMhFg8QgDgCAAgFIBjAUQgPAAAAACQgMBPgtAAQgIAAgJgCg");
	this.shape_35.setTransform(20.5,-4.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3E3D3D").s().p("AAVgdIhigUICbAQIgmBTg");
	this.shape_36.setTransform(24.9,-5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#383837").s().p("Ag1AyIAIgoQAXAmAhhbQAEgNAAARIgBBFIAoAUg");
	this.shape_37.setTransform(12.6,-5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#313131").s().p("Ag4AiIAOgZIBigvIABAmIgIAng");
	this.shape_38.setTransform(2.3,-3.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#47433E").s().p("AgdgyIgUgUQBXgHAMB0IgiAgg");
	this.shape_39.setTransform(34,-27.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#878786").s().p("AgdgTQgKgSgPgPIAyAKIA7BZQgGAGgIAAQgbAAgrhIg");
	this.shape_40.setTransform(19.5,-35.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3A3835").s().p("AAAAdIg7hZIBjAyIAUATQgFAAgBACQgdAygNAAQgLAAgBggg");
	this.shape_41.setTransform(25,-33.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E7E7E8").s().p("AlTFlICWA3IgygtIgSgmIB2ASIg4iHIgYAjIg9AMQgKgwgCg3QAAgfgbAMIAAgKIAAgPQgeAohGAPIgKAAIhGiMIAKiVQAHAkAohIQARgfgigDQAAgFACgEQAxh0Btg3IAAA8IhaBGIBXAUIAXhaIBkAyIAKgsIAAAYIA2htIguAyIAMgzIhuAUQAhgNACglIgFAAQHli7DqHTIAKCVIgyDSIgFAAQgBgdgiAJQgUgUgQgXIgEgHQALBlhRATIgogoIgUAAIg8B4QgNAAgIAGQgJAFAAAJIgKAAIhQAUQiCgYASA1IADABIAxAeIhZAKIhEgVIgMApgAhqDwIAvARQBIA3B0goQABAAAAgFQAnATAGg3QgIAPglgnQh7gmhTBHQgDACAAAFQgDghgHAAQgHAAgKAagADmAlIhYAHIAXAbIBBgEQA4gFAWgKQAlgPhcAAIgXAAgAkrgWQAFBTA7g9QAHgGgBgQQAFAAADgDQACgCAAgFQACAqAmAGIAKABQBbAQALg+IgCAbIAFACIAgACIBpAFIBrAAQA+APANhcQAAgCAPAAIATBPIAmhTIidgQQAAAFADACQBGA9hnAMIABhGQABgRgFANQghBbgYglIgBglIhiAvQAAgUADgUQAEgbgDAFQgnA/gPhHIhrAAIghAUIhGgUIAAAeIgFAAQACAggRAIgAlcivIAQAGQAkgqh7gBQAhAWAmAPgAFkjIIAiggQgMh1hYAHIhkgyIgygKQAPAPAKASQA4BdAdgaQACBJA0hbQABgCAFAAg");
	this.shape_42.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-48.3,100,98.4);


(lib.BolaNike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4B2C2").s().p("AgWBSIAQiiQA/BBhFBhIgKAAg");
	this.shape.setTransform(-10.7,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1719").s().p("AgpBJQg1hmAAiRIAUBQICVDlIAUAeIgKAAIAAAKQhKAAg0hmg");
	this.shape_1.setTransform(-34.5,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D7551").s().p("Ai4DJQAwk7E3hfQghAUAhAAIAKAAIgBACQi4ArheCkIhaC+IAAgJg");
	this.shape_2.setTransform(-30.5,-27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#342F38").s().p("AgJAAIAJhPQAAAFACACQADADAFAAIAACVg");
	this.shape_3.setTransform(-43,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#261E1E").s().p("Ah0CBQgCgCgBgFIAph4QAAg5BTgpQAzgZBAgKQhIAOg2AsQhSBBAABaIgVAyQgFAAgCgDg");
	this.shape_4.setTransform(-31,-21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#787A91").s().p("AhigOIAAiWIAUgyIBUEeIBdgJIhAAkIAQB0g");
	this.shape_5.setTransform(-32.1,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(136,129,152,0.992)").s().p("AkNBZIApACQERAiCljNIAegeIAeAeIgCADQisC8jUAAQhKAAhPgWg");
	this.shape_6.setTransform(12,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#977B26").s().p("AgegJIAegUQBLAygkAAQgqABgvAIg");
	this.shape_7.setTransform(24.1,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#785C26").s().p("AgcFnIgpgDQiNAAhkibQhjibAAjbIBai+IAKAoIgoB4IgKBQQAACQA1BnQA1BmBKAAIAVAMQDaB4DIiOIAKAAQAvgHArgBQAjgBhLgzQAAgKAEgIQABgCAFAAIBQAyQiOCyjeAAQgkAAgmgFg");
	this.shape_8.setTransform(-8,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E1921").s().p("AjGgPIgVgMIAAgKIAKAAIAfANQCzBGCphTIAyAAQhsBLhyAAQhgAAhkg1g");
	this.shape_9.setTransform(-4,36.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2A3C").s().p("AAKAeIgxAAIAngxIAUgKIAUAUIgUAnIgKAAg");
	this.shape_10.setTransform(17,30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18171F").s().p("AiwgCIgNgQIBNhDIgMAaIAVA7ICFAVIAKAAIB4AUQADARAbgCIAAAFIhqANQgqAMgmAAQhnAAhNhYg");
	this.shape_11.setTransform(-16,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5C5D6E").s().p("AgbAKIAAgFQgbACgDgQIBzATg");
	this.shape_12.setTransform(5.8,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1618").s().p("AhDC5QAAgFACgDQCAiQgpjFIgBgJQgGggAlABIAKAoIAAAKQAaCvhfCQQgFAAgBACQgEAIAAAKIgeAUg");
	this.shape_13.setTransform(25.8,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#969AAE").s().p("AhnFKIgfgNIgUgeIgQh0IBAgkIheAJIhUkeQAAhbBShAQA3gsBIgOQAhgHAmAAQBMA9gWBnIgDAQIBYAyQhjAYADBjIBMAQIh3gTQBFhhhAhCIgPCjIiGgUIgVg9IAMgaIhNBDIANARQBoB4CcgtID2DjIgoAyQhcAuheAAQhPAAhTghg");
	this.shape_14.setTransform(-11.5,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B1B3C6").s().p("AigBYIBqgNIBUAAIhygUIhMgRQgChjBigXIhYgyIADgQQAWhnhNg9IBQAAQD0AtBGDfQAAACAFAAQApDFiACQQgDADAAAFIgUAKg");
	this.shape_15.setTransform(8.5,-3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A6852F").s().p("AAyA8IhtifQAyAAAiA7QAjA5AABTg");
	this.shape_16.setTransform(26,-18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2422").s().p("ACLCMQhFjej0gtQAAgFABAAQBvgiB/BtIBuCfQgkgCAFAgIABAKQgFAAgBgCg");
	this.shape_17.setTransform(13.5,-22.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A27F1F").s().p("AD5FKQBhiQgaiwIgBgKQAAhSgjg6Qgjg7gyAAQh/hthuAiQgCAAAAAFIhQAAQglAAgiAHQg/AJgzAZQhVApAAA6IgKgoQBeilC5grIABgCQJPAChQJdQgIA9gYA9IgeAeg");
	this.shape_18.setTransform(0.1,-8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A2999A").s().p("AC8FzQAYg9AIg9QBQpcpPgDIgKABQgiAAAigVQBcgpBnAjQJ5DTk1I+g");
	this.shape_19.setTransform(17.2,-10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-50.2,98.2,99.6);


(lib.FUTMINtexto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#375C74").s().p("ABTDXIiskXIAAEXIhQAAIAAmtIBUAAICvEeIAAkeIBRAAIAAGtg");
	this.shape.setTransform(270.2,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#375C74").s().p("AgqDXIAAmtIBVAAIAAGtg");
	this.shape_1.setTransform(240.5,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#375C74").s().p("AB/DXIAAlRIhVFRIhTAAIhVlRIAAFRIhQAAIAAmtICBAAIBNEkIBNkkICCAAIAAGtg");
	this.shape_2.setTransform(207.1,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#375C74").s().p("AgqDXIAAlkIiAAAIAAhJIFVAAIAABJIh/AAIAAFkg");
	this.shape_3.setTransform(163.8,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#375C74").s().p("AhXDMQgggOgSgXQgTgWgGgZQgIgmAAhHIAAjlIBXAAIAADoQAAA3ADARQAFAbAVAQQAVAPAkAAQAkAAATgPQATgPAEgWQAEgWAAgzIAAjtIBWAAIAADhQAABNgHAhQgHAfgTAXQgTAVgfANQggANgzABQg8gBgggOg");
	this.shape_4.setTransform(123.5,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#375C74").s().p("AiSDXIAAmtIElAAIAABJIjOAAIAABmICyAAIAABHIiyAAIAAC3g");
	this.shape_5.setTransform(84.5,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FUTMINtexto, new cjs.Rectangle(63.4,0,230.8,71), null);


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


(lib.IconePlantel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Luz
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAJh3QAAgYAPgWQAVgfAoAAQBKAAADBNQAAAkgYAVQgVATgfAAQgfAAgWgTQgYgVAAgkgAGHiGQAAAngYATQgVASgfgDQgfgCgWgUQgYgVAAgfQAAgXAPgWQAWgfAnAAQBJAAAEBNgAEUArQAVgfAoAAQBJAAAEBLQAAAogYAUQgVASgfgDQgfgCgWgUQgYgVAAgfQAAgYAPgVgAC5BnQAAAlgYAWQgWATgfAAQgfAAgVgTQgYgWAAglQAAgYAPgVQAVgfApAAQBHAAAFBMgAlQi0QBHAAAFBMQAAAmgYAVQgVARgggCQgegCgWgUQgYgVAAgfQAAgYAPgWQAWgeAoAAgAiGi8QBJAAADBMQAAAkgYAWQgVATgfAAQgfAAgVgTQgYgWAAgkQAAgYAPgWQAVgeAoAAgAi/B+QAAgYAPgVQAVgfApAAQBHAAAEBMQAAApgYATQgVASgfgDQgegDgWgUQgYgWAAgegAk5A+QBHAAAFBMQAAAogYAUQgVARgggDQgegDgWgTQgYgWAAgeQAAgYAPgWQAWgeAoAAg");
	this.shape.setTransform(0.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["futmin_atlas_"],1), null, new cjs.Matrix2D(0.373,0,0,0.373,-189,-46.3)).s().p("Ak6DUQgegDgWgTQgYgWAAgeQAAgYAPgWQAWgeAoAAQBHAAAFBMQAAAogYAUQgSAOgaAAIgJAAgAhzDJQgegDgWgUQgYgWAAgeQAAgYAPgVQAVgfApAAQBHAAAEBMQAAApgYATQgSAPgZAAIgJAAgAA4CiQgYgWAAglQAAgYAPgVQAVgfApAAQBHAAAFBMQAAAlgYAWQgWATgfAAQgfAAgVgTgAFSCiQgfgCgWgUQgYgVAAgfQAAgYAPgVQAVgfAoAAQBJAAAEBLQAAAogYAUQgSAPgZAAIgJAAgAlRgeQgegCgWgUQgYgVAAgfQAAgYAPgWQAWgeAoAAQBHAAAFBMQAAAmgYAVQgTAPgbAAIgHAAgAi6g2QgYgWAAgkQAAgYAPgWQAVgeAoAAQBJAAADBMQAAAkgYAWQgVATgfAAQgfAAgVgTgAAhg+QgYgVAAgkQAAgYAPgWQAVgfAoAAQBKAAADBNQAAAkgYAVQgVATgfAAQgfAAgWgTgAE7g9QgfgCgWgUQgYgVAAgfQAAgXAPgWQAWgfAnAAQBJAAAEBNQAAAngYATQgSAPgbAAIgHAAg");
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


(lib.IconeEstadio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALOjiIAAABALOjgQgDA8jQArQjSArkpAAQkoAAjTgrQi4gmgYhNQgCASAAgHQAAgGACgFQABgCABgCQAUgvCagkQAQgDAQgEQAjgHAlgGQC8geD3AAQD4AAC8AeQAkAGAjAHQARAEAPADQCrAoAHA1ALNh9IAAAMQgWA1i7AmQjSAqkoAAQkpAAjSgqQi4gmgbhNAKSDiQhPBBiOAqQiOApkbAAQkZAAi1gpQi1gogjgp");
	this.shape.setTransform(72,37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ALNizQAAACAAACALNiuQAAAAAAAAIAAABIgBBjApZiJQg9gWAAgcQAAgvC6giQAKgCAKgCQBMgMBYgIQB5gKCQAAQCPAAB5AKQBYAIBMAMQAKACAKACQC6AiAAAvQAAAcg9AWQguARhPAOQgmAHgoAGApZiJQAugRBPgOQC6giEHAAQEGAAC6AiQBPAOAuARALMg+Ig6FTAmEhcQgugGgqgIQhPgOgugRAqaEvIgymFIABhjAmEhcQCdgUDWAAQDOAACaATQihAVjRAAQjLAAiegUg");
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
	this.shape_5.graphics.f("#CCCCCC").s().p("An5CZQi5glgahNIABhiQAYBMC4AlQDTAsEoAAQEpAADRgsQDRgqACg7QgCA7jRAqQjRAskpAAQkoAAjTgsQi4glgYhMIABgEQAVgvCagkIAggHQAjgHAlgGQC7geD4AAQD4AAC7AeQAlAGAiAHIAhAHQCrAoAHA1IAAAEIAAABIAAAAIAAABIgBBiIAAAMQgVA0i7AmQjSAskpAAQkoAAjSgsgAncATQAqAIAuAGQCeAUDLAAQDRAACggVQApgGAmgHQBPgOAugQQgugRhPgOQi6gikGAAQkHAAi6AiQhPAOguARQg9gXAAgbQAAgwC6giIAUgDQBMgNBZgHQB4gKCQAAQCPAAB4AKQBZAHBMANIAUADQC6AiAAAwQAAAbg9AXQA9gXAAgbQAAgwi6giIgUgDQhMgNhZgHQh4gKiPAAQiQAAh4AKQhZAHhMANIgUADQi6AiAAAwQAAAbA9AXQAuAQBPAOg");
	this.shape_5.setTransform(72.1,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IconeEstadio, new cjs.Rectangle(-0.7,-1,145.5,76.8), null);


(lib.CorreiosLogotipoVarios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CorreiosLogotipo();
	this.instance.parent = this;
	this.instance.setTransform(33.5,3.2,0.142,0.142,15,0,0,43.8,9.8);

	this.instance_1 = new lib.CorreiosLogotipo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.5,12.8,0.142,0.142,90,0,0,44,9.8);

	this.instance_2 = new lib.CorreiosLogotipo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.5,10,0.21,0.21,-60,0,0,43.8,10.2);

	this.instance_3 = new lib.CorreiosLogotipo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29,29.2,0.21,0.21,15,0,0,43.6,10.2);

	this.instance_4 = new lib.CorreiosLogotipo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34.9,16.3,0.531,0.531,30,0,0,43.9,10);

	this.instance_5 = new lib.CorreiosLogotipo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(29.6,15.1,0.531,0.531,-15,0,0,43.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CorreiosLogotipoVarios, new cjs.Rectangle(0,0,57.9,33.7), null);


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

	// Layer 2
	this.instance = new lib.EfeitodeSelecionado();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.745,0.744);
	this.instance.alpha = 0.359;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.Seta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.2,18,1,1,0,0,0,18.6,9.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.VoltarBtn, new cjs.Rectangle(-1,-1,68.3,52.6), null);


(lib.BOTTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cima
	this.instance = new lib.EfeitodeSelecionado();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.745,0.744);
	this.instance.alpha = 0.359;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Coiso
	this.instance_1 = new lib.IconePlantel();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.5,19.4,0.482,0.482,180);
	this.instance_1.shadow = new cjs.Shadow("#000000",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.BOTTime, new cjs.Rectangle(-1.9,-2.3,74,53.9), null);


(lib.BOTprocurajogador = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.EfeitodeSelecionado();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.745,0.744);
	this.instance.alpha = 0.359;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.BOTprocurajogador, new cjs.Rectangle(-1,-1,68.3,52.6), null);


(lib.BOTNoticias = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cima
	this.instance = new lib.EfeitodeSelecionado();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.745,0.744);
	this.instance.alpha = 0.359;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.CorreiosLogotipoVarios();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32,19.1,1,1,0,0,0,28.9,16.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.BOTNoticias, new cjs.Rectangle(-2.9,-3.8,73,55.4), null);


(lib.BOTjogar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sombra
	this.instance = new lib.EfeitodeSelecionado();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.745,0.744);
	this.instance.alpha = 0.359;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Maca (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AklD9QglAAAAglIAAAAIAAmvQAAglAlAAIAAAAIJLAAQAlAAAAAlIAAAAIAAGvQAAAlglAAIAAAAg");
	mask.setTransform(33.4,25.5);

	// Layer 3
	this.instance_1 = new lib.BolaNike();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.4,25.1,0.2,0.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.instance_2 = new lib.Canela();
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.6,4.6,0.755,0.755,-48.1,0,0,4.8,1.7);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.BOTjogar, new cjs.Rectangle(-1,-1,68.3,52.6), null);


(lib.BOTEstadio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cima
	this.instance = new lib.EfeitodeSelecionado();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.745,0.744);
	this.instance.alpha = 0.359;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Coiso
	this.instance_1 = new lib.IconeEstadio();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.6,16,0.305,0.305,0,0,0,72,37.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.BOTEstadio, new cjs.Rectangle(-0.9,-1.5,68.3,53.1), null);


(lib.IconeTorcida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Torcida();
	this.instance.parent = this;
	this.instance.setTransform(42.6,28.2,0.546,0.546,0,0,0,21.2,21.3);

	this.instance_1 = new lib.Torcida();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.6,22.7,0.546,0.546,0,0,0,21.2,21.3);

	this.instance_2 = new lib.Torcida();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.3,22.5,0.546,0.546,0,0,0,21.2,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IconeTorcida, new cjs.Rectangle(-0.3,-0.2,93.3,64.9), null);


(lib.IconeFinanças = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nota50("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(93.2,29.3,0.998,0.998,-27,0,0,87.4,41.9);

	this.instance_1 = new lib.Nota50("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(89.4,34.3,1,1,15,0,0,87.4,42);

	this.instance_2 = new lib.Nota50("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(89.4,41.5,1,1,0,0,0,87.4,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IconeFinanças, new cjs.Rectangle(-5.9,-47.6,196,153.8), null);


(lib.BOTtorcida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.EfeitodeSelecionado();
	this.instance.parent = this;
	this.instance.setTransform(0.4,0,0.745,0.745);
	this.instance.alpha = 0.359;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	this.instance_1 = new lib.IconeTorcida();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.1,18.9,0.433,0.433,0,0,0,33.7,29.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTtorcida, new cjs.Rectangle(-0.6,-1,68.3,52.7), null);


(lib.BOTdinheiros = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.EfeitodeSelecionado();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.745,0.744);
	this.instance.alpha = 0.359;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	this.instance_1 = new lib.IconeFinanças();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.9,16.8,0.198,0.198,0,0,0,8.1,13.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BOTdinheiros, new cjs.Rectangle(-1,-1.4,68.3,53.1), null);


// stage content:
(lib.futmin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//include "futebolonline.as"
		this.time_mc.onRelease = function () {
			this.x=20;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.correio_mc = new lib.BOTNoticias();
	this.correio_mc.parent = this;
	this.correio_mc.setTransform(732.1,440,1.521,1.521,0,0,0,-0.1,0.6);

	this.estadio_mc = new lib.BOTEstadio();
	this.estadio_mc.parent = this;
	this.estadio_mc.setTransform(732.1,350.4,1.521,1.521,0,0,0,-0.1,0.5);

	this.voltar_mc = new lib.VoltarBtn();
	this.voltar_mc.parent = this;
	this.voltar_mc.setTransform(850.8,439.8,1.521,1.521);

	this.jogar_mc = new lib.BOTjogar();
	this.jogar_mc.parent = this;
	this.jogar_mc.setTransform(850.8,349.6,1.521,1.521);

	this.time_mc = new lib.BOTTime();
	this.time_mc.parent = this;
	this.time_mc.setTransform(732.1,166,1.521,1.521,0,0,0,-0.1,0.5);

	this.mercado_mc = new lib.BOTprocurajogador();
	this.mercado_mc.parent = this;
	this.mercado_mc.setTransform(850.8,165.3,1.521,1.521);

	this.financas_mc = new lib.BOTdinheiros();
	this.financas_mc.parent = this;
	this.financas_mc.setTransform(850.8,255.4,1.521,1.521);

	this.torcida_mc = new lib.BOTtorcida();
	this.torcida_mc.parent = this;
	this.torcida_mc.setTransform(731.8,255.9,1.521,1.521);

	this.instance = new lib.FUTMINtexto();
	this.instance.parent = this;
	this.instance.setTransform(512.1,42,1,1,0,0,0,178.8,35.5);
	this.instance.alpha = 0.609;

	this.instance_1 = new lib.BolaPenalty("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(347.3,57.7,0.448,0.448,0,0,0,0,0.8);

	this.instance_2 = new lib.BolaNike("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(669.1,55.2,0.448,0.448,0,0,0,0,-0.5);

	this.texto = new cjs.Text("O jogo de futebol que está virando mania nacional!", "21px 'Arial'", "#134162");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 25;
	this.texto.lineWidth = 716;
	this.texto.parent = this;
	this.texto.setTransform(512.1,88.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.texto},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.torcida_mc},{t:this.financas_mc},{t:this.mercado_mc},{t:this.time_mc},{t:this.jogar_mc},{t:this.voltar_mc},{t:this.estadio_mc},{t:this.correio_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(664.2,306.5,801,511.4);
// library properties:
lib.properties = {
	width: 1024,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/futmin_atlas_.png?1496705990407", id:"futmin_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;