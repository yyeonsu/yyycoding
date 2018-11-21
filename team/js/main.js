
$(window).scroll(function(){    // 스크롤이 일정 구간 지나면 gnb fixed
	var scroll_top = $(window).scrollTop();
	console.log(scroll_top);
	if(scroll_top >= 120){
		$("#gnb").css({position:"fixed",top:0,left:"50%",marginLeft:-450});
		$("#gnb").stop().animate({borderTopRightRadius:0,borderTopLeftRadius:0},300);
	}else{
		$("#gnb").css({position:"relative",top:120,left:"none",marginLeft:"none"});
		$("#gnb").stop().animate({borderTopRightRadius:30,borderTopLeftRadius:30},300);
	}

	if(scroll_top >= 500) $("#faq_btn").css("transform","scale(1,1)");  // FAQ 버튼 등장
	if(scroll_top < 500) $("#faq_btn").css("transform","scale(0,0)");	// FAQ 버튼 사라짐
})

$(function(){
	/*--------------------------------------
	----------------gnb start--------------- 181115
	--------------------------------------*/
	$("#gnb>ul>li").click(function(){
		var click_index = $(this).index();

		$("#gnb>ul>li").removeClass("active");
		$(this).addClass("active"); // 메뉴 클릭시 폰트색 #333으로 변경

		if(click_index == 0){
			$("#navigator").css("border-color","#7f950e");
			$("#navigator").stop().animate({left:0},500,"easeOutQuint");
		}
		if(click_index == 1){
			$("#navigator").css("border-color","#2d96c2");
			$("#navigator").stop().animate({left:225},500,"easeOutQuint");
		}
		if(click_index == 2){
			$("#navigator").css("border-color","#124463");
			$("#navigator").stop().animate({left:475},500,"easeOutQuint");
		}
		if(click_index == 3){
			$("#navigator").css("border-color","#f2740c");
			$("#navigator").stop().animate({left:700},500,"easeOutQuint");
		}
	})
	/*--------------------------------------
	----------------FAQ start---------------
	--------------------------------------*/



	/*--------------------------------------------------
	----------------amazon stem start------------------- 아마존 헤더 덩쿨 음직임
	--------------------------------------------------*/
	$(".stem>img").eq(0).animate({top:-50},700,"easeOutBack");
	$(".stem>img").eq(1).delay(200).animate({top:-50},700,"easeOutBack");
	$(".stem>img").eq(2).delay(350).animate({top:-50},700,"easeOutBack");
	$(".stem>img").eq(3).delay(200).animate({top:-50},700,"easeOutBack");
	$(".stem>img").eq(4).delay(200).animate({top:-50},2000,"easeOutBack");
	$(".stem>img").eq(5).animate({top:-50},1800,"easeOutBack");
	
	stemSetint(); // 헤더 상단 줄기 움직임 호출

	/*--------------------------------------------------
	----------------amazon bush start------------------- 아마존 헤더 덤불 음직임 for구문 각각 딜레이 적용
	--------------------------------------------------*/
	for(var i=0; i<$(".bush>img").length; i++){
		$(".bush>img").eq(i).delay(300*i).animate({bottom:-10},700,"easeOutBack");
	};
	bushSetint(); // 헤더 중앙 덤블 움직임 호출

})

function stemSetint(){  // 헤더 상단 줄기 떨리는 움직임 setInterval
	setInterval(function(){
		$(".stem>img").eq(4).animate({top:-40},400,"easeInElastic");
		$(".stem>img").eq(4).animate({top:-50},400,"easeOutElastic");
		$(".stem>img").eq(2).delay(1500).animate({top:-40},300,"easeInElastic");
		$(".stem>img").eq(2).animate({top:-50},300,"easeOutElastic");
		$(".stem>img").eq(5).delay(2000).animate({top:-40},500,"easeInElastic");
		$(".stem>img").eq(5).animate({top:-50},500,"easeOutElastic");
	},7000)
}
function bushSetint(){ // 헤더 중앙 덤블 떨리는 움직임 setInterval
	setInterval(function(){
		for(var i=0; i<$(".bush>img").length; i++){
			$(".bush>img").eq(i).delay(1800*i).animate({bottom:-40},700,"easeInElastic");
			$(".bush>img").eq(i).animate({bottom:-30},700,"easeOutElastic");
		}
	},8000)
}