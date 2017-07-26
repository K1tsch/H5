(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.国庆节到啦 = function() {
	this.initialize(img.国庆节到啦);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,463,75);

(lib.第三张1 = function() {
	this.initialize(img.第三张1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,885);


(lib.第三张2 = function() {
	this.initialize(img.第三张2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,75);

(lib.第二张1 = function() {
	this.initialize(img.第二张1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1289);


(lib.第二张2 = function() {
	this.initialize(img.第二张2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,478,75);

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

(lib.loadingView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 
	this.txt2 = new cjs.Text("努力加载中……", "48px 'Arial'", "#000000");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 50;
	this.txt2.lineWidth = 406;
	this.txt2.parent = this;
	this.txt2.setTransform(375,586);

	this.txt = new cjs.Text("0%", "48px 'Arial'", "#000000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 56;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(375,516.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.txt2}]}).wait(1));

	

}).prototype = getMCSymbolPrototype(lib.loadingView, new cjs.Rectangle(0,0,750,1206), null);

(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,44.8);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.4,25);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.4,38.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:25},14).wait(61).to({_off:false,y:44.8},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,y:38.8},15).to({_off:false,y:25},15).to({_off:true,y:38.8},15).to({_off:false,y:25},16).to({_off:true,y:44.8},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},15).to({_off:true,y:25},15).to({_off:false,y:38.8},15).to({_off:true,y:25},16).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.8,89.6);














(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.第三张2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,460,75);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.第三张1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,885);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.第二张2();
	this.instance.parent = this;
	this.instance.setTransform(-153,-24,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-24,305.9,48);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.第二张1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375,644.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.国庆节到啦();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,296.3,48);


(lib.view3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	
	// timeline functions:
	this.frame_0 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}
	this.frame_19 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));
	
	// Layer 3
	this.instance = new lib.Symbol5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,493,0.01,0.01,0,0,0,170.1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:230,regY:37.5,scaleX:0.08,scaleY:0.08,x:4.5,y:495.6},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:9.6,y:498.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:14.5,y:501.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:19.5,y:503.8},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:24.5,y:506.5},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:29.5,y:509.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:34.5,y:511.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:39.5,y:514.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:44.5,y:517.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:49.5,y:520},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:54.5,y:522.7},0).wait(1).to({scaleX:1,scaleY:1,x:59.5,y:525.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:56.9,y:524},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:54.2,y:522.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:51.7,y:521.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:54.2,y:522.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:56.9,y:524},0).wait(1).to({scaleX:1,scaleY:1,x:59.5,y:525.4},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.01,0.01,0,0,0,360.2,405.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:375,regY:442.5,scaleX:0.08,scaleY:0.08,x:1.2,y:3.1},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:2.5,y:6.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:3.7,y:9.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:4.9,y:12.5},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:6.2,y:15.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:7.4,y:18.7},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:8.6,y:21.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:9.9,y:24.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:11.1,y:28},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:12.3,y:31.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:13.6,y:34.2},0).wait(1).to({scaleX:1,scaleY:1,x:14.8,y:37.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:14.2,y:35.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:13.5,y:34.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:12.9,y:32.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:13.5,y:34.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:14.2,y:35.7},0).wait(1).to({scaleX:1,scaleY:1,x:14.8,y:37.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-4,7.5,497.7);


(lib.view2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}
	this.frame_19 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 3
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,182,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.08,scaleY:0.08},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.01,0.01,0,0,0,180.1,305.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:187.5,regY:322.2,scaleX:0.08,scaleY:0.08,x:0.6,y:1.5},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:1.2,y:2.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:1.9,y:4.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:2.5,y:5.7},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:3.1,y:7.2},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:3.7,y:8.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:4.3,y:10},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:4.9,y:11.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:5.6,y:12.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:6.2,y:14.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:6.8,y:15.7},0).wait(1).to({scaleX:1,scaleY:1,x:7.4,y:17.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:7.1,y:16.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:6.8,y:15.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:6.4,y:14.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:6.8,y:15.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:7.1,y:16.4},0).wait(1).to({scaleX:1,scaleY:1,x:7.4,y:17.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-3,3.8,185.3);




(lib.view1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}
	

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(187.5,333.5,0.01,0.01,0,0,0,145.1,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:148.2,regY:24,scaleX:0.08,scaleY:0.08,x:187.8,y:333.8},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:188,y:334.1},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:188.3,y:334.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:188.5,y:334.8},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:188.8,y:335.1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:189.1,y:335.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:189.3,y:335.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:189.6,y:336.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:189.8,y:336.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:190.1,y:336.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:190.3,y:337.1},0).wait(1).to({scaleX:1,scaleY:1,x:190.6,y:337.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:190.5,y:337.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:190.3,y:337.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:190.2,y:336.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:190.3,y:337.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:190.5,y:337.3},0).wait(1).to({scaleX:1,scaleY:1,x:190.6,y:337.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.1,333.3,2.9,0.5);








//
//
//
//
//
//
//
//

// stage content:
(lib.H5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/国庆节到啦_.png", id:"国庆节到啦"},
		{src:"images/第三张1.png", id:"第三张1"},
		{src:"images/第三张2.png", id:"第三张2"},
		{src:"images/第二张1.png", id:"第二张1"},
		{src:"images/第二张2.png", id:"第二张2"}
	],
	preloads: []
};

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
