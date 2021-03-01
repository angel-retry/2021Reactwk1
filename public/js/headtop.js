$(function(){

	var stageColorParam = {
		"interval": 3500, //切替の間隔
		"allow": 0
	};
	var waveInit = {
		"intro": true,
		"point": true,
		"footer": true
	};
	var slideElParam = {
		"intro":{
			"speed": 150, //スピード
			"spSpeed": 130, //スピード（max-width: 860px）
			"wave": 1400, //波の広さ
			"spWave": 600, //波の広さ（max-width: 860px）
			"upDownPer": 45 //上下移動量（パーセント）
		},
		"point":{
			"speed": 100,
			"spSpeed": 100,
			"wave": 800,
			"spWave": 800,
			"upDownPer": 40
		},
		"footer":{
			"speed": 100,
			"spSpeed": 100,
			"wave": 800,
			"spWave": 800,
			"upDownPer": 55
		}
	}

	var jsEvtFlag = true;

	function init(){
		var elArr = [
			{ "el":$("#main .intro .visual-list"), "name":"intro"},
			{ "el":$("#main .point .bg-list"), "name":"point"},
			{ "el":$("#footer .bg-list"), "name":"footer"}
		]
		$.each(elArr, function(index, arr) {
			if(arr["name"] == "intro"){ var cnt = 2; }
			else{ var cnt = 4; }
			for(i = 0; i < cnt; i++){
				arr["el"].find(".item.origin").each(function(index2, el2) {
					$(this).clone().removeClass("origin").appendTo(arr["el"])
				});
			}
			slideStage(0,arr);
		});
		$(window).on({
			"load":function(){
				$("#main .loader").animate({"opacity":0},500,function(){
					$(this).remove();
				});
				setTimeout(function(){
					opAnimation();
					winResize();
				},500)
			},
			"resize":winResize
		})
		winResize();
		$("#main .intro .icon-scroll").on({
			"click":function(evt){
				$("html,body").stop().animate({scrollTop:$("#main .concept").offset().top },500,"swing");
			}
		})
	}init();

	function slideStage(val,elArr){
		elArr["el"].css({"transform":"translateX(-"+val+"px)"})
		var maxPos = elArr["el"].find(".item:eq(0)").width()+parseInt(elArr["el"].find(".item:eq(0)").css("marginRight"));
		var mainSpFlag = matchMedia('(max-width: 860px)').matches;
		var footerSpFlag = matchMedia('(max-width: 640px)').matches;
		if(mainSpFlag){
			var speedFrame = slideElParam[elArr["name"]]["spSpeed"];
		}else{
			var speedFrame = slideElParam[elArr["name"]]["speed"];
		}
		setTimeout(function(){
			var scrVal = $(window).scrollTop();
			var winHeight = $(window).height();
			var elPosY = elArr["el"].offset().top;
			var elHeight = elArr["el"].outerHeight();
			if((scrVal+winHeight >= elPosY && elPosY+elHeight >= scrVal) || waveInit[elArr["name"]]){
				waveInit[elArr["name"]] = false;
				if(val >= maxPos){
					elArr["el"].find(".item:eq(0)").appendTo(elArr["el"]);
					slideStage(0,elArr);
				}else{
					val += 1*(speedFrame/60)
					slideStage(val,elArr);
				}
				var winWidth = $(window).width();
				if(elArr["name"] == "point"){
					var posX = $("#main .point .buds").offset().left+($("#main .point .buds").width()/2);
				}else{
					var posX = winWidth/2;
				}
				if(elArr["name"] == "intro" || (elArr["name"] == "footer" && footerSpFlag)){
					var allow = -1;
				}else{
					var allow = 1;
				}
				if(mainSpFlag){
					if(elArr["name"] == "intro"){
						var rate = winWidth/375;
						var wave = slideElParam[elArr["name"]]["spWave"]*rate;
					}else{
						var wave = slideElParam[elArr["name"]]["spWave"];
					}
				}else{
					var wave = slideElParam[elArr["name"]]["wave"];
				}
				elArr["el"].find(".item").each(function(index, elc) {
					var elcPosX = $(elc).offset().left;
					var elcWidth = $(elc).width();
					if(elcPosX >= -elcWidth && elcPosX-elcWidth < winWidth){
						itemSinMove(
							allow,
							$(elc),
							parseInt(elcPosX+(elcWidth/2)-posX),
							wave,
							slideElParam[elArr["name"]]["upDownPer"]
						);
					}
				});
			}else{
				slideStage(val,elArr);
			}
		},1000/60)
	}
	function itemSinMove(allow,elc,posX,wave,upDownPer){
		var val = ((Math.sin(((posX % wave)+(wave/4)*allow) * (Math.PI / (wave/2)))+1)/2);
		elc.css({"transform":"translateY("+val*upDownPer+"%)"})
	}
	function swicthColorStage(){
		var currentBgName = $("#main .intro .visual-bg .active-bg").attr("class").match(/bg[0-9]{2}/)[0];
		var bgIndex = parseInt(currentBgName.replace(/bg0/,""));
		var setIndex = bgIndex;
		while(setIndex == bgIndex){
			setIndex = Math.floor(Math.random()*5)+1;
		};
		var bgName = "bg"+("00"+String(setIndex)).slice(-2);
		$("#main .intro .visual-bg .active-bg").removeClass().addClass(currentBgName).addClass("buf");
		$("#main .intro .visual-bg .idle-bg").removeClass().addClass(bgName).addClass("active-bg")
		$("#main .intro .visual-bg .buf").addClass("idle-bg").removeClass("buf");
		stageColorParam["allow"] = (++stageColorParam["allow"] > 4) ? 1 : stageColorParam["allow"];
		var showName = "show"+("00"+String(stageColorParam["allow"])).slice(-2);
		$("#main .intro .visual-bg .active-bg").addClass(showName)
		setTimeout(function(){
			swicthColorStage();
		},stageColorParam["interval"])
	}
	function winResize(){
		var winWidth = $(window).width();
		var maxWidth = 0;
		var elArr = [$("#main .intro .visual-list"),$("#main .point .bg-list"),$("#footer .bg-list")]
		$.each(elArr, function(index, el) {
			maxWidth = 0;
			el.find(".item").each(function(index, el) {
				maxWidth += $(el).width()+parseInt($(el).css("marginRight"))+5;
			});
			el.css({"width":maxWidth,"marginLeft":-(maxWidth/2)});
		});
	}
	function opAnimation(){
		var sec = 0;
		$("#main .intro").addClass("show");
		sec = 750;
		setTimeout(function(){
			var len = $("#main .intro .visual-list .item").length;
			var centerIndex = Math.ceil(len/2)-1;
			$("#main .intro .visual-list .item:eq("+centerIndex+")").addClass("show")
			elArr = [$("#main .intro .visual-list .item:eq("+centerIndex+")").prevAll(),$("#main .intro .visual-list .item:eq("+centerIndex+")").nextAll()]
			$.each(elArr, function(index, el) {
				var cnt = 0;
				el.each(function(index, elc) {
					cnt += 1;
					setTimeout(function(){
						$(elc).addClass("show")
					},cnt*200)
				});
			});
			setTimeout(function(){
				swicthColorStage();
			},stageColorParam["interval"])
			$(".js-inview").on({"inview":function() {
				if(!$(this).hasClass("show")){
					$(this).addClass("show");
				}
			}});
		},sec)
	}

})

//inview
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight*0.8,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,500))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});