
$(function(){
    $(".year li:first-child").on("click",function(){
        $(".box1").show(0);
        $(".box2").hide(0);
        $(".box3").hide(0);
        $(".box4").hide(0);
        $(".box5").hide(0);
        $(".box6").hide(0);


        /*_1945_*/
        $(".year li:first-child a").css({"color":"#113640" , "border-bottom":"5px solid #113640"});
        $(".year li:nth-child(2) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(3) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(4) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(5) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:last-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
    });
        
    
    $(".year li:nth-child(2)").on("click",function(){
        $(".box2").show(0);
        $(".box1").hide(0);
        $(".box3").hide(0);
        $(".box4").hide(0);
        $(".box5").hide(0);
        $(".box6").hide(0);

        /*_1955_*/
        $(".year li:nth-child(2) a").css({"color":"#113640" , "border-bottom":"5px solid #113640"});
        $(".year li:first-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(3) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(4) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(5) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:last-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
    });
    
    $(".year li:nth-child(3)").on("click",function(){
        $(".box3").show(0);
        $(".box1").hide(0);
        $(".box2").hide(0);
        $(".box4").hide(0);
        $(".box5").hide(0);
        $(".box6").hide(0);
        
        /*_1972_*/
        $(".year li:nth-child(3) a").css({"color":"#113640" , "border-bottom":"5px solid #113640"});
        $(".year li:first-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(2) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(4) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(5) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:last-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
    });

    $(".year li:nth-child(4)").on("click",function(){
        $(".box4").show(0);
        $(".box1").hide(0);
        $(".box2").hide(0);
        $(".box3").hide(0);
        $(".box5").hide(0);
        $(".box6").hide(0);
        
        /*_1986_*/
        $(".year li:nth-child(4) a").css({"color":"#113640" , "border-bottom":"5px solid #113640"});
        $(".year li:first-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(2) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(3) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(5) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:last-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
    });

    $(".year li:nth-child(5)").on("click",function(){
        $(".box5").show(0);
        $(".box1").hide(0);
        $(".box2").hide(0);
        $(".box3").hide(0);
        $(".box4").hide(0);
        $(".box6").hide(0);

        /*_1996_*/
        $(".year li:nth-child(5) a").css({"color":"#113640" , "border-bottom":"5px solid #113640"});
        $(".year li:first-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(2) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(3) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(4) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:last-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
    });

    $(".year li:last-child").on("click",function(){
        $(".box6").show(0);
        $(".box1").hide(0);
        $(".box2").hide(0);
        $(".box3").hide(0);
        $(".box4").hide(0);
        $(".box5").hide(0);

        /*_2005_*/
        $(".year li:last-child a").css({"color":"#113640" , "border-bottom":"5px solid #113640"});
        $(".year li:first-child a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(2) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(3) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(4) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
        $(".year li:nth-child(5) a").css({"color":"#777" , "border-bottom":"5px solid #ddd"});
    });

});
