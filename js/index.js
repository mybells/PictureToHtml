$(function() {
	//合作伙伴滑动效果
    var partner = $('partner-img');
    var list = $('img-list');
    var article1 = $('.article1');
    var article2 = $('.article2');
    article2.eq(0).css('display', 'block');
    for (var i = 0; i < article1.length; i++) {
        show(i);
    }
    function show(i) {
		article1.eq(i).click(function() {
	    article2.css('display', 'none');
	    article2.eq(i).css('display', 'block');
	    var len = i * 1159;
	    $('#img-list').animate({ left: -len + 'px' });
    	});
	}
});
$(function() {
	//index-pannel1触摸效果
	var pannel1=$('.pannel1-list');
	for(var i=0;i<pannel1.length;i++){
		shadow(i);
	}
	function shadow(i){
		pannel1.eq(i).hover(function(){pannel1.eq(i).toggleClass('newclass')},function(){pannel1.eq(i).toggleClass('newclass')});	
	}
});
$(function() {
	//index-pannel2触摸效果
	var pannel2=$('.pannel2-list');
	for(var i=0;i<pannel2.length;i++){
		siadow(i);
	}
	function siadow(i){
		pannel2.eq(i).hover(function(){pannel2.eq(i).toggleClass('newclass')},function(){pannel2.eq(i).toggleClass('newclass')});	
	}
});
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=415){
			$(".icon").css({"position":"fixed","bottom":"209px"});
		}else{
			$(".icon").css({"position":"absolute","bottom":"-200px"});
		}
	});
	//回到顶部动画效果
  	$("#top").click(function() {
  		$("html,body").animate({scrollTop:0}, 500);
  	});	
});