// 声明相关变量
var canvas, stage, model, container, fnStartAnimation, view1,view2,view3,view4,view5;
var viewList, loadingView, tweenLength, currentView, moveView;
var stageWidth =  document.documentElement.clientWidth;
var stageHeight = document.documentElement.clientHeight;
var stageScale = stageWidth/(750/2);
var isloadInit = false;
var isStartTouch = true;
canvas = document.getElementById("canvas");
// model来专门处理接收事件，记得要是EventDispatcher类
model = new createjs.EventDispatcher;

//处理屏幕自适应
//if(stageWidth/stageHeight > 0.665)
//{
//	stageScale = stageHeight/(1206/2);
//}
//else
//{
//	stageScale = stageWidth/(750/2);
//}
//canvas.style.width = 750/2*stageScale + 'px';
//canvas.style.height = 1206/2*stageScale + 'px';

function init() {
    stage = new createjs.Stage(canvas);
    container = new createjs.Container;
    stage.addChild(container);
    createjs.Touch.enable(stage);
    images = images||{};
    // LoadQueue是一个预加载类，可以把需要加载的资源提前加载，基本支持大多数的文件预加载。
	//我这里主要处理了它的2个事件，fileload，complete。
    var loader = new createjs.LoadQueue(false); //这里一共可以是3个参数 第一个是是否用XHR模式加载 第二个是基础路径 第三个是跨域
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", loadLoadingComplete);
    loader.loadManifest(lib.properties.manifest);
    
}
function handleFileLoad(evt) {  
	//这是单个文件加载完成的事件，把它保存到一个地方之后可以直接拿来创建对象
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; } 
}
function loadLoadingComplete(event){
    event.currentTarget.removeEventListener("fileload",handleFileLoad);
    event.currentTarget.removeEventListener("complete",loadLoadingComplete);
    loadingView = new View.LoadingView();
    stage.addChild(loadingView);
    var loader = new createjs.LoadQueue(true);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress",loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler);
    loader.loadManifest(lib.properties.manifest);
    isloadInit = true;

}
function loadProgressHandler(event)
{
	loadingView.back.txt.text = Math.floor(evt.progress * 99).toString() + "%";
}
function handleComplete(evt) {
	event.currentTarget.removeEventListener("fileload",handleFileLoad);
	event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete",loadLoadingComplete);
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    
    if (loadingView.parent) {
    loadingView.parent.removeChild(loadingView);
  	}
    
//  // 这里需要把我们上面声明好导出来的类方法进行替换
//  view1 = new cls.View1();
//  stage = new createjs.Stage(canvas);//获取舞台 Stage是我们的舞台类，可以理解为所有canvas内部对象的总容器或者说是根显示对象。
//  stage.addChild(view1); //将容器放在舞台上
    //监听事件
    //Ticker是一个计时类，不过他是每过一帧触发一次的，也就是说跟时间其实没关系（因为帧频是会波动的）。
	// createjs.Ticker.setFPS();和createjs.Ticker.addEventListener("tick", stageBreakHandler);是必须要加的，stageBreakHandler里面放的是刷新舞台的方法，因为createjs需要不停的刷新舞台来刷新动画，也就是一个重绘的过程。 平时也可以拿Ticker类做动画。
    fnStartAnimation = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stageBreakHandler);
    }       
    fnStartAnimation();
	    
	view1 = new View.view1;
	container.addChild(view1);
	view1.back.gotoAndPlay(1);
	currentView = view1;
	view2 = new View.view2;
	view3 = new View.view3;
	view4 = new View.view4;
	view5 = new View.view5;
	viewList = [view1, view2, view3, view4, view5];
	tweenLength = 5;
	isStartTouch = true;
}
var View = {};
View.index = 0;
View.isTween = false;
View.changeHandler = function changeHandler(arrow, index, force) {
  if ((index < 0 || index > tweenLength) && force != true) {
    return;
  }
  View.isTween = true;
  View.index = index;
  var bi;
  if (arrow == "down") {
    bi = Math.abs((1206 - Math.abs(currentView.y)) / 1206);
    createjs.Tween.get(moveView).to({y:0}, 500 * bi);
    createjs.Tween.get(currentView).to({y:-1206}, 500 * bi).call(View.delayComplete);
  } else {
    bi = Math.abs((1206 - Math.abs(currentView.y)) / 1206);
    createjs.Tween.get(moveView).to({y:0}, 500 * bi);
    createjs.Tween.get(currentView).to({y:1206}, 500 * bi).call(View.delayComplete);
  }
  View.bi = bi;
};
View.delayComplete = function delayComplete() {
  View.isTween = false;
  if (currentView.back.gotoAndStop) {
    currentView.back.gotoAndStop(0);
  }
  if (currentView.parent) {
    currentView.parent.removeChild(currentView);
  }
  currentView = viewList[View.index];
  if (currentView.back.gotoAndPlay) {
    currentView.back.gotoAndPlay(1);
  }
};
View.resumeHandler = function resumeHandler(arrow) {
  if (arrow == "down") {
    View.bi = Math.abs(currentView.y / 1206);
    createjs.Tween.get(currentView).to({y:0}, 500 * View.bi);
    createjs.Tween.get(moveView).to({y:-1206}, 500 * View.bi).call(View.resumeComplete);
  } else {
    View.bi = Math.abs(currentView.y / 1206);
    createjs.Tween.get(currentView).to({y:0}, 500 * View.bi);
    createjs.Tween.get(moveView).to({y:1206}, 500 * View.bi).call(View.resumeComplete);
  }
};
View.resumeComplete = function resumeComplete() {
  if (moveView) {
    if (moveView.parent) {
      moveView.parent.removeChild(moveView);
    }
  }
};
View.codeHandler = function codeHandler() {
  if (codepic) {
    if (View.index == 7) {
      codepic.style.display = "block";
    } else {
      codepic.style.display = "none";
    }
  }
};
function stageBreakHandler(event)
{
	if(stageWidth!=document.documentElement.clientWidth||stageHeight!= document.documentElement.clientHeight)
	{
		stageWidth =  document.documentElement.clientWidth;
		stageHeight = document.documentElement.clientHeight;
		if(stageWidth/stageHeight > 0.665)
		{
			stageScale = stageHeight/(1206/2);
		}
		else
		{
			stageScale = stageWidth/(750/2);
		}
 
		canvas.style.width = 750/2*stageScale + 'px';
		canvas.style.height = 1206/2*stageScale + 'px';
	}
	stage.update();
}
//loadingView
(function() {
  function loadingView() {
    this.Container_constructor();
    this.back = new lib.loadingView;
    this.addChild(this.back);
  }
  var p = createjs.extend(loadingView, createjs.Container);
  View.loadingView = createjs.promote(loadingView, "Container");
})();
//view1
(function() {
	"use strict";
	function View1(){
	this.Container_constructor();
	this.back = new lib.view1();
	this.addChild(this.back);
	}
	var p = createjs.extend(View1,createjs.Container);
	View.View1 = createjs.promote(View1, "Container");
})();
//view2
(function() {
	"use strict";
	function View2(){
	this.Container_constructor();
	this.back = new lib.view2();
	this.addChild(this.back);
}
	var p = createjs.extend(View2,createjs.Container);
	View.View2 = createjs.promote(View2, "Container");
})();
//view3
(function() {
	"use strict";
	function View3(){
	this.Container_constructor();
	this.back = new lib.view3();
	this.addChild(this.back);
}
	var p = createjs.extend(View3,createjs.Container);
	View.View3 = createjs.promote(View3, "Container");
})();
//view4
(function() {
	"use strict";
	function View4(){
	this.Container_constructor();
	this.back = new lib.view4();
	this.addChild(this.back);
}
	var p = createjs.extend(View4,createjs.Container);
	View.View4 = createjs.promote(View4, "Container");
})();
//view5
(function() {
	"use strict";
	function View5(){
	this.Container_constructor();
	this.back = new lib.view5();
	this.addChild(this.back);
}
	var p = createjs.extend(View5,createjs.Container);
	View.View5 = createjs.promote(View5, "Container");
})();