$(function(){
	var pre_index=0 ;   // 上一个轮播图
	var next_index= 0 ;  // 当前的轮播图
	var timer = setInterval(function(){
		if(next_index <6){
			next_index++ ;
			$("#img-info ul li").eq(pre_index).css("left" , "0").animate({"opacity":"1"},0).show() ;
			$("#img-info ul li").eq(next_index).css("left" ,"1348px" ).animate({"opacity":"1"},0).show().animate({"left":"0px"} , 800) ;
			$("#img-info ul li").eq(pre_index).animate({"opacity":"1"},0).animate({"left":"-1348px"} , 800);
			$("#img-info .slide-dot-box .slide-dot").eq(next_index).addClass("active-dot").siblings().removeClass("active-dot") ;
			pre_index++ ;
		}else{
	
			$("#img-info ul li").eq(next_index).css("left" , "0px").animate({"opacity":"1"},0).animate({"left":"-1348px"} , 800).show() ;
			$("#img-info ul li").eq(0).animate({"opacity":"1"},0).css("left" , "1348px").show() ;
			$("#img-info ul li").eq(0).animate({"opacity":"1"},0).animate({"left":"0"} , 800);
			$("#img-info .slide-dot-box .slide-dot").eq(0).addClass("active-dot").siblings().removeClass("active-dot") ;
			next_index=0;
			pre_index=0;
		}
		
	} , 4000) ;
	
	$(".right-btn").click(function(){
		clearInterval(timer) ;   
		if(next_index <6){
			next_index++ ;   // 当前显示的轮播效果图 索引
			$("#img-info ul li").eq(pre_index).css("left" , "0").animate({"opacity":"1"},0).show() ;
			$("#img-info ul li").eq(next_index).animate({"opacity":"1"},0).css("left" , "1348px").stop(true).animate({"left":"0px"} , 800).show() ;
			$("#img-info .slide-dot-box .slide-dot").eq(next_index).addClass("active-dot").siblings().removeClass("active-dot") ;
			$("#img-info ul li").eq(pre_index).stop(true).animate({"opacity":"1"},0).animate({"left":"-1348px"} , 800);	
			pre_index++ ;
		}else{
	
			$("#img-info ul li").eq(next_index).css("left" , "0px").animate({"opacity":"1"},0).stop(true).animate({"left":"-1348px"} , 800).show() ;
			$("#img-info ul li").eq(0).css("left" , "1348px").show().animate({"opacity":"1"},0) ;
			$("#img-info .slide-dot-box .slide-dot").eq(0).addClass("active-dot").siblings().removeClass("active-dot") ;
			$("#img-info ul li").eq(0).stop(true).animate({"opacity":"1"},0).animate({"left":"0"} , 800);
			next_index=0;
			pre_index=0;
		}
		timer= setInterval(function(){
		if(next_index <6){
			next_index++ ;
			$("#img-info ul li").eq(pre_index).css("left" , "0").animate({"opacity":"1"},0).show() ;
			$("#img-info ul li").eq(next_index).css("left" , "1348px").animate({"opacity":"1"},0).animate({"left":"0px"} , 800).show() ;
			$("#img-info .slide-dot-box .slide-dot").eq(next_index).addClass("active-dot").siblings().removeClass("active-dot") ;
			$("#img-info ul li").eq(pre_index).animate({"opacity":"1"},0).animate({"left":"-1348px"} , 800);
		
			pre_index++ ;
		}else{
	
			$("#img-info ul li").eq(next_index).css("left" , "0px").animate({"opacity":"1"},0).animate({"left":"-1348px"} , 800).show() ;
			$("#img-info ul li").eq(0).css("left" , "1348px").animate({"opacity":"1"},0).show() ;
			$("#img-info .slide-dot-box .slide-dot").eq(0).addClass("active-dot").siblings().removeClass("active-dot") ;
			$("#img-info ul li").eq(0).animate({"opacity":"1"},0).animate({"left":"0"} , 800);
			next_index=0;
			pre_index=0;
		}
		
	} , 4000) ;
		
	})
	
	$(".left-btn").click(function(){
		clearInterval(timer) ; 
		
		if(next_index >0){
			pre_index = next_index -1 ;
			$("#img-info ul li").eq(pre_index).animate({"opacity":"1"},0).css("left" , "-1348px").show() ;
			$("#img-info ul li").eq(next_index).animate({"opacity":"1"},0).css("left" , "0px").animate({"left":"1348px"} , 800).show() ;
			$("#img-info .slide-dot-box .slide-dot").eq(pre_index).addClass("active-dot").siblings().removeClass("active-dot") ;
			$("#img-info ul li").eq(pre_index).animate({"opacity":"1"},0).animate({"left":"0px"} , 800);
			next_index--;
			
			
		}else{
	
			$("#img-info ul li").eq(0).animate({"opacity":"1"},0).css("left" , "0px").stop(true).animate({"left":"1348px"} , 800).show() ;
			$("#img-info ul li").eq(6).animate({"opacity":"1"},0).css("left" , "-1348px").show() ;
			$("#img-info .slide-dot-box .slide-dot").eq(6).addClass("active-dot").siblings().removeClass("active-dot") ;
			$("#img-info ul li").eq(6).animate({"opacity":"1"},0).stop(true).animate({"left":"0"} , 800);
			pre_index = 6 ; 
			next_index = 6 ;
		}
		timer= setInterval(function(){
		if(next_index <6){
			next_index++ ;
			$("#img-info ul li").eq(pre_index).animate({"opacity":"1"},0).css("left" , "0").show() ;
			$("#img-info ul li").eq(next_index).animate({"opacity":"1"},0).css("left" , "1348px").animate({"left":"0px"} , 800).show() ;
			$("#img-info .slide-dot-box .slide-dot").eq(next_index).addClass("active-dot").siblings().removeClass("active-dot") ;
			$("#img-info ul li").eq(pre_index).animate({"opacity":"1"},0).animate({"left":"-1348px"} , 800);
		
			pre_index++ ;
		}else{
	
			$("#img-info ul li").eq(next_index).animate({"opacity":"1"},0).css("left" , "0px").animate({"left":"-1348px"} , 800).show() ;
			$("#img-info ul li").eq(0).animate({"opacity":"1"},0).css("left" , "1348px").show() ;
			$("#img-info .slide-dot-box .slide-dot").eq(0).addClass("active-dot").siblings().removeClass("active-dot") ;
			$("#img-info ul li").eq(0).animate({"opacity":"1"},0).animate({"left":"0"} , 800);
			next_index=0;
			pre_index=0;
		}
		
	} , 4000) ;
	
	}) ;
	
	/**
	 * 鼠标经过轮播圆点的时候自动切换动画效果
	 * ---淡入淡出与主轮播效果有所不一致，增加用户体验效果
	 */
	$("#img-info .slide-dot-box .slide-dot").hover(function(){
		$(this).addClass("active-dot").siblings().removeClass("active-dot");
		var _index = $(this).index() ;  // 获取鼠标经过的轮播圆点的索引值
		clearInterval(timer) ; 		//清除上次的定时器
		$("#img-info ul li").eq(_index).css("left" , "0px").stop(true).animate({"opacity":"1"} , 800).show();   //淡入当前轮播图
		$("#img-info ul li").eq(_index).siblings().css("left","0px").stop(true).animate({"opacity":"0"} , 800);  // 淡出
		pre_index = _index ;  // 下一次轮播的上一张轮播效果图
		next_index =_index; 
	} , function(){
		timer= setInterval(function(){   // 再次启动定时器
			if(next_index <6){
				next_index++ ;
				$("#img-info ul li").eq(pre_index).animate({"opacity":"1"},0).css("left" , "0").show() ;
				$("#img-info ul li").eq(next_index).animate({"opacity":"1"},0).css("left" , "1348px").animate({"left":"0px"} , 800).show() ;
				$("#img-info .slide-dot-box .slide-dot").eq(next_index).addClass("active-dot").siblings().removeClass("active-dot") ;
				$("#img-info ul li").eq(pre_index).animate({"opacity":"1"},0).animate({"left":"-1348px"} , 800);
			
				pre_index++ ;
			}else{
		
				$("#img-info ul li").eq(next_index).animate({"opacity":"1"},0).css("left" , "0px").animate({"left":"-1348px"} , 800).show() ;
				$("#img-info ul li").eq(0).animate({"opacity":"1"},0).css("left" , "1348px").show() ;
				$("#img-info .slide-dot-box .slide-dot").eq(0).addClass("active-dot").siblings().removeClass("active-dot") ;
				$("#img-info ul li").eq(0).animate({"opacity":"1"},0).animate({"left":"0"} , 800);
				next_index=0;
				pre_index=0;
			}
		
		} , 4000) ;
		
	}) ;
	
	
	//工作意愿
	var p=0 ;   // 防止经过同一个圆点闪烁
	$("#desire .desire-dot .slide-dot").hover(function(){
		var i = $(this).index() ;
		if(p==i){
			return;
		}
		p=i;
		$("#desire .desire-outterbox").eq(i).show(1000).css("display","block") ;
		$("#desire .desire-outterbox").eq(i).siblings().hide(1000).css("display","none") ;
		
		$("#desire .desire-dot .slide-dot").eq(i).addClass("slide-dot-active").siblings().removeClass("slide-dot-active") ;
		
	} , function(){
		
		$("#desire .desire-dot ").show(0);
	});
	
	
	//作品
	var x = 0 ;
	$("#works .works .work").hover(function(){
		var i = $(this).index() +1;
		 x = i ;
		$("#works .works .work:nth-child("+i+") .under-text").animate({"top":"0px"} , 300) ;
		
	} ,function(){
		$("#works .works .work:nth-child("+x+") .under-text").animate({"top":"-200px"} , 300) ;
	});
	
	//位置小点
	
//	$(".position-box").append("<div style='width:'>hello</div>")
//	for (var i=0 ; i<20 ; i++) {
//		for (var j=0 ; j<20 ; j++) {
//			var point = document.createElement("div") ;
//			$(point).css({"opacity":"0.3","border-radius":"50% 50%" , "background":"#fdfdfd","width":"10px","height":"10px","position":"absolute" , "right":i*15,"top":j*15});
//			$(".position-box").append(point);
//		}
//	}
	for (var i=0 ; i<50 ; i++) {
		for (var j=0 ; j<20 ; j++) {
			if(((j+2+i*2)%3)){
				continue;
			}
			var point = document.createElement("div") ;
			$(point).css({"opacity":"0.3","border-radius":"50% 50%" , "background":"#fdfdfd","width":"10px","height":"10px","position":"absolute" , "right":i*15,"top":j*15});
			$(".position-box").append(point);
		}
	}
	for (var i=20 ; i<90 ; i++) {
		for (var j=0 ; j<20 ; j++) {
			if(((j+i*2)%5)){
				continue;
			}
			var point = document.createElement("div") ;
			$(point).css({"opacity":"0.3","border-radius":"50% 50%" , "background":"#fdfdfd","width":"10px","height":"10px","position":"absolute" , "right":i*15,"top":j*15});
			$(".position-box").append(point);
		}
	}
	
	//经过技能数字增长
	var incre ;
	var valueof ;
	var intdexof ;
	var isUndefine ;
	$(".skill").hover(function(){
		
		var index = $(this).index() ;
		intdexof = index ;
		var value = 0 ; 
		var _text = $(".skill:nth-child("+(index+1)+") span");
		var textvalue = _text.text() ;
		if( (isUndefine = textvalue.substring(0,2) )=="0%"){
			return ;
		}
		var _number =new Number(textvalue.substring(0,2))   ;
		_number = _number ;
		valueof = _number ;
		_text.text("0%") ;
		incre = setInterval(function(){
			_text.text(value+"%") ;
			value++ ;
			if(value==_number+1){
				clearInterval(incre);
				return ;
			}
		} , 10);
	} , function(){
		
		clearInterval(incre);
		if(isUndefine=="0%"){
			return ;
		}
		$(".skill:nth-child("+(intdexof+1)+") span").text(valueof+"%");
	})
	
})
