
$(function load(){
	//打开页面默认在页面顶部
	window.parent.scrollTo(0, 0);

//手机端点击隐藏nav
$('.nav li').click(function(){
	var _width = $(window).width(); 
  if(_width < 768){
	$('.navbar-collapse').attr('aria-expanded','false').removeClass('in').css('height','1px');
	$('.navbar .navbar-toggle').removeClass("tog_bg")
  }
});

//手机端菜单点击样式
$('.navbar .navbar-toggle').click(function(){
	$(this).toggleClass("tog_bg");
});


//service文字飞入动画
$(document).scroll(function(){
		var ser_obj = $(document).scrollTop();
		var _width = $(window).width();
		if(_width>1200){
				if(ser_obj>900){
					$('.servicebox').addClass('servicebox_anim');
			  }
	  
	  }
	  if(_width>768){
				if(ser_obj>470){
					$('.servicebox').addClass('servicebox_anim');
			  }
	  }
	  if(_width < 768){
	  	  if(ser_obj>220){
					$('.servicebox').addClass('servicebox_anim');
			  }
	  }
});



//点击按钮和页面背景关闭弹窗
$('.details_close,.nav ul li,#case_details_bg').click(function(){
	$('html').removeClass('ac-gn-noscroll-long');
	document.getElementById('case_title').scrollIntoView(true);
	$('.case_details_box').hide();
	
})

var img_fade = function() {
	$("img.lazy").lazyload({
		placeholder : "images/loading.gif",
		effect: "show"
	});
}
//点击方框展示弹框
 var _index = 0;
$(".case_click li").click(function(){
  var _index = $(this).index();
  var li_length = $(".case_click li").length;
			if (_index!=li_length-1) {
			  img_fade();
				$('.case_detailsbox').scrollTop(0);
				$('.details_left').scrollTop(0);
				$('.case_details_box').show();
				$('html').addClass('ac-gn-noscroll-long');	
				$(".case_details").eq(_index).addClass("display").siblings().removeClass("display");
			}else{
				alert("该页面没有维护");
			}
});

//点击下一个案例

$(".details_switch_right").click(function(){
	var case_has = $(".case_details").eq($(".case_details").length-1).hasClass("display");
	if(!case_has){
		img_fade();
		$('.case_detailsbox').scrollTop(0);
		$('.details_left').scrollTop(0);
		$(".case_details.display").removeClass("display").next(".case_details").addClass("display");
		}else {
			alert("已经是最后一个案例");
		}
});
//点击上一个案例
$(".details_switch_left").click(function(){
	var case_has = $(".case_details").eq(0).hasClass("display");
	if(!case_has){
		img_fade();
		$('.case_detailsbox').scrollTop(0);
		$('.details_left').scrollTop(0);
		$(".case_details.display").removeClass("display").prev(".case_details").addClass("display");
		}else {
			alert("已经是第一个案例");
		}
});

})
var myscroll;
		function loaded(){
			setTimeout(function(){
				myscroll=new iScroll("wrapper",{hScrollbar:false, vScrollbar:true, momentum:true});
			}, 100 );
		}
		window.addEventListener("load",loaded,false);


