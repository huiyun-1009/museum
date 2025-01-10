$(function(){
//==============헤더==============    
    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('#index_visual'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top; //색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ 
    //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
    });
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() > pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });
//==============컨테이너(1)==============

    // 1전시실
    $(".index_con1_name li:first-child").on("click", function(){
        // 전시실 이름
        $(".index_con1_name li:first-child").css({
            "background-color":"#174f5f",
            "color":"#fff"
        });
        $(".index_con1_name li:nth-child(2)").css({
            "background-color":"transparent",
            "color":"#222"
        });
        $(".index_con1_name li:last-child").css({
            "background-color":"transparent",
            "color":"#222"
        });
        // 설명
        $(".index_con1_txt li:first-child").show(0);
        $(".index_con1_txt li:nth-child(2)").hide(0); 
        $(".index_con1_txt li:last-child").hide(0);
        // 이미지
        $(".index_con1_img img:first-child").fadeIn(500);
        $(".index_con1_img img:nth-child(2)").hide(0); 
        $(".index_con1_img img:last-child").hide(0);
    });

    // 2전시실
    $(".index_con1_name li:nth-child(2)").on("click", function(){
        // 전시실 이름
        $(".index_con1_name li:first-child").css({
            "background-color":"transparent",
            "color":"#222"
        });
        $(".index_con1_name li:nth-child(2)").css({
            "background-color":"#174f5f",
            "color":"#fff"
        });
        $(".index_con1_name li:last-child").css({
            "background-color":"transparent",
            "color":"#222"
        });
        // 설명
        $(".index_con1_txt li:first-child").hide(0);
        $(".index_con1_txt li:nth-child(2)").show(0); 
        $(".index_con1_txt li:last-child").hide(0);
        // 이미지
        $(".index_con1_img img:first-child").hide(0);
        $(".index_con1_img img:nth-child(2)").fadeIn(500); 
        $(".index_con1_img img:last-child").hide(0);        
    });

    // 3전시실
    $(".index_con1_name li:last-child").on("click", function(){
        // 전시실 이름
        $(".index_con1_name li:first-child").css({
            "background-color":"transparent",
            "color":"#222"
        });
        $(".index_con1_name li:nth-child(2)").css({
            "background-color":"transparent",
            "color":"#222"
        });
        $(".index_con1_name li:last-child").css({
            "background-color":"#174f5f",
            "color":"#fff"
        });
        // 설명
        $(".index_con1_txt li:first-child").hide(0);
        $(".index_con1_txt li:nth-child(2)").hide(0); 
        $(".index_con1_txt li:last-child").show(0);
        // 이미지
        $(".index_con1_img img:first-child").hide(0);
        $(".index_con1_img img:nth-child(2)").hide(0); 
        $(".index_con1_img img:last-child").fadeIn(500);
    });
    
//==============컨테이너(2)==============
// js1
    // 1번 교육 클릭
    $(".pro_list li:first-child").on("click",function(){
        $(".pro_list li:first-child").css({"background-color":"#113640" , "color":"#fff"
            ,"right": "-3rem" , "padding":"0px 10px"
            ,"height":"131px" , "border-radius": "20px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:first-child a").css
        ({"color":"#fff"})
        $(".pro_list li:nth-child(2)").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:nth-child(2) a").css
        ({"color":"#000"});
        $(".pro_list li:nth-child(3)").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:nth-child(3) a").css
        ({"color":"#000"});
        $(".pro_list li:last-child").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:last-child a").css
        ({"color":"#000"});
    });
    
    // 2번 문화 클릭
    $(".pro_list li:nth-child(2)").on("click",function(){
        $(".pro_list li:nth-child(2)").css({"background-color":"#113640" , "color":"#fff"
            ,"right": "-3rem" , "padding":"0px 10px"
            ,"height":"131px" , "border-radius": "20px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:nth-child(2) a").css
        ({"color":"#fff"});
        $(".pro_list li:first-child").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:first-child a").css
        ({"color":"#000"});
        $(".pro_list li:nth-child(3)").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:nth-child(3) a").css
        ({"color":"#000"});
        $(".pro_list li:last-child").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:last-child a").css
        ({"color":"#000"});
    });
    
    // 3번 행사 클릭
    $(".pro_list li:nth-child(3)").on("click",function(){
        $(".pro_list li:nth-child(3)").css({"background-color":"#113640" , "color":"#fff"
            ,"right": "-3rem" , "padding":"0px 10px"
            ,"height":"131px" , "border-radius": "20px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:nth-child(3) a").css
        ({"color":"#fff"});
        $(".pro_list li:first-child").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:first-child a").css
        ({"color":"#000"});
        $(".pro_list li:nth-child(2)").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:nth-child(2) a").css
        ({"color":"#000"});
        $(".pro_list li:last-child").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:last-child a").css
        ({"color":"#000"});
    });
    
    // 4번 행사 클릭 //
    $(".pro_list li:last-child").on("click",function(){
        $(".pro_list li:last-child").css({"background-color":"#113640" , "color":"#fff"
            ,"right": "-3rem" , "padding":"0px 10px"
            ,"height":"131px" , "border-radius": "20px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:last-child a").css
        ({"color":"#fff"});
        $(".pro_list li:first-child").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:first-child a").css
        ({"color":"#000"});
        $(".pro_list li:nth-child(2)").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:nth-child(2) a").css
        ({"color":"#000"});
        $(".pro_list li:nth-child(3)").css({"background-color":"#fff" , "color":"#000"
            ,"right": "0px" , "padding":"0px"
            ,"height":"131px" , "border-radius": "0px"
            ,"transition: all" :"0.3s" , "box-sizing": "border-box"
        });
        $(".pro_list li:nth-child(3) a").css
        ({"color":"#000"});
    });
// js2
    $(".pro_list li:first-child").on("click",function (){
        $(".pro_img li:first-child").stop().animate({ opacity:"1" });
        $(".pro_img li:nth-child(2)").stop().delay(100).animate({ opacity:"0"});
        $(".pro_img li:nth-child(3)").stop().delay(100).animate({ opacity:"0"});
        $(".pro_img li:last-child").stop().delay(100).animate({ opacity:"0"});
    });
    $(".pro_list li:nth-child(2)").on("click",function (){
        $(".pro_img li:first-child").stop().animate({ opacity:"0" });
        $(".pro_img li:nth-child(2)").stop().delay(100).animate({ opacity:"1"});
        $(".pro_img li:nth-child(3)").stop().delay(100).animate({ opacity:"0"});
        $(".pro_img li:last-child").stop().delay(100).animate({ opacity:"0"});
    });
    $(".pro_list li:nth-child(3)").on("click",function (){
        $(".pro_img li:first-child").stop().animate({ opacity:"0" });
        $(".pro_img li:nth-child(2)").stop().delay(100).animate({ opacity:"0"});
        $(".pro_img li:nth-child(3)").stop().delay(100).animate({ opacity:"1"});
        $(".pro_img li:last-child").stop().delay(100).animate({ opacity:"0"});
    });
    $(".pro_list li:last-child").on("click",function (){
        $(".pro_img li:first-child").stop().animate({ opacity:"0" });
        $(".pro_img li:nth-child(2)").stop().delay(100).animate({ opacity:"0"});
        $(".pro_img li:nth-child(3)").stop().delay(100).animate({ opacity:"0"});
        $(".pro_img li:last-child").stop().delay(100).animate({ opacity:"1"});
    });
        // -------- (컨테이너3) 특별전시 ------
    $(".main_vid1 img").on("mouseenter", function () {
        $(".main_vid1 video").css({ display: "block" });
        $(".main_vid1 video")
            .stop()
            .animate(
                { height: "700px", opacity: "1", "border-radius": "15px" },
                500
            );
        $(".main_vid1 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(700px)" }, 0);
        $(this).css({ opacity: "0" });
    });

    $(".main_vid1 img").on("mouseleave", function () {
        $(".main_vid1 video").css({ display: "none" });
        $(".main_vid1 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(600px)" }, 0);
        $(this).css({ opacity: "1" });
    });

    /*main_vid2*/

    $(".main_vid2 img").on("mouseenter", function () {
        $(".main_vid2 video").css({ display: "block" });
        $(".main_vid2 video")
            .stop()
            .animate({ height: "700px", opacity: "1" }, 500);
        $(".main_vid2 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(700px)" }, 0);
        $(this).css({ opacity: "0" });
    });

    $(".main_vid2 img").on("mouseleave", function () {
        $(".main_vid2 video").css({ display: "none" });
        $(".main_vid2 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(600px)" }, 0);
        $(this).css({ opacity: "1" });
    });

    /*main_vid3*/

    $(".main_vid3 img").on("mouseenter", function () {
        $(".main_vid3 video").css({ display: "block" });
        $(".main_vid3 video")
            .stop()
            .animate({ height: "700px", opacity: "1" }, 500);
        $(".main_vid3 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(700px)" }, 0);
        $(this).css({ opacity: "0" });
    });

    $(".main_vid3 img").on("mouseleave", function () {
        $(".main_vid3 video").css({ display: "none" });
        $(".main_vid3 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(600px)" }, 0);
        $(this).css({ opacity: "1" });
    });
// -------- (컨테이너3) 특별전시 ------
    $(".main_vid1 img").on("mouseenter", function () {
        $(".main_vid1 video").css({ display: "block" });
        $(".main_vid1 video")
            .stop()
            .animate(
                { height: "700px", opacity: "1", "border-radius": "15px" },
                500
            );
        $(".main_vid1 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(700px)" }, 0);
        $(this).css({ opacity: "0" });
    });
    $(".main_vid1 img").on("mouseleave", function () {
        $(".main_vid1 video").css({ display: "none" });
        $(".main_vid1 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(600px)" }, 0);
        $(this).css({ opacity: "1" });
    });

    /*main_vid2*/
    $(".main_vid2 img").on("mouseenter", function () {
        $(".main_vid2 video").css({ display: "block" });
        $(".main_vid2 video")
            .stop()
            .animate({ height: "700px", opacity: "1" }, 500);
        $(".main_vid2 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(700px)" }, 0);
        $(this).css({ opacity: "0" });
    });
    $(".main_vid2 img").on("mouseleave", function () {
        $(".main_vid2 video").css({ display: "none" });
        $(".main_vid2 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(600px)" }, 0);
        $(this).css({ opacity: "1" });
    });

    /*main_vid3*/
    $(".main_vid3 img").on("mouseenter", function () {
        $(".main_vid3 video").css({ display: "block" });
        $(".main_vid3 video")
            .stop()
            .animate({ height: "700px", opacity: "1" }, 500);
        $(".main_vid3 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(700px)" }, 0);
        $(this).css({ opacity: "0" });
    });
    $(".main_vid3 img").on("mouseleave", function () {
        $(".main_vid3 video").css({ display: "none" });
        $(".main_vid3 .main_vid_txt")
            .stop()
            .animate({ transform: "translateY(600px)" }, 0);
        $(this).css({ opacity: "1" });
    });
});