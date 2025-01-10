$(function(){
    // ---------(컨테이너1) 편의시설 안내---------
        //화장실 
        $(".convenient_icon li:first-child").on("click", function(){
            $(".convenient_img li:first-child").show(0);
            $(".convenient_img li:nth-child(2)").hide(0);
            $(".convenient_img li:nth-child(3)").hide(0);
            $(".convenient_img li:nth-child(4)").hide(0);
            $(".convenient_img li:last-child").hide(0);
        });
        //앨리베이터 
        $(".convenient_icon li:nth-child(2)").on("click", function(){
            $(".convenient_img li:first-child").hide(0);
            $(".convenient_img li:nth-child(2)").show(0);
            $(".convenient_img li:nth-child(3)").hide(0);
            $(".convenient_img li:nth-child(4)").hide(0);
            $(".convenient_img li:last-child").hide(0);
        });
        //휴게공간 
        $(".convenient_icon li:nth-child(3)").on("click", function(){
            $(".convenient_img li:first-child").hide(0);
            $(".convenient_img li:nth-child(2)").hide(0);
            $(".convenient_img li:nth-child(3)").show(0);
            $(".convenient_img li:nth-child(4)").hide(0);
            $(".convenient_img li:last-child").hide(0);
        });
        //기념품
        $(".convenient_icon li:nth-child(4)").on("click", function(){
            $(".convenient_img li:first-child").hide(0);
            $(".convenient_img li:nth-child(2)").hide(0);
            $(".convenient_img li:nth-child(3)").hide(0);
            $(".convenient_img li:nth-child(4)").show(0);
            $(".convenient_img li:last-child").hide(0);
        });
    // ---------(컨테이너3) 전시실 소개---------
        // 전시실1
        $("#roomAnnounce ul li:first-child").on("mouseover", function(){
            $("#roomAnnounce ul li:first-child").css({
                "transition":"0.5s",
                "background-color":"#555",
                "color":"#eee"
            });
        });
        $("#roomAnnounce ul li:first-child").on("mouseleave", function(){
            $("#roomAnnounce ul li:first-child").css({
                "transition":"0.5s",
                "background-color":"#888",
                "color":"none"
            });
        });
        $("#roomAnnounce ul li:first-child").on("click", function(){
            // 배경
            $("#roomAnnounce ul li:first-child").css({
                "border-radius":"50%",
                "z-index":"200",
                transform:"scale(120%)",
                transition:"1s",
                "background-image":"url(../img/permanent_room_1.jpg)",         
            });
            $("#roomAnnounce ul li:first-child a").css({
                "font-size":"90%",
                "font-family": "'NanumSquare'",
                "font-weight":"bold",
                color:"#333"         
            });
            $("#roomAnnounce ul li:nth-child(2),#roomAnnounce ul li:last-child").css({
                "z-index":"100",
                transform:"scale(100%)",
                "background-color":"#888",
                "background-image":"none",
            });
            $("#roomAnnounce ul li:nth-child(2) a, #roomAnnounce ul li:last-child a").css({
                "font-size":"75%",
                "font-family": "'NanumSquareLight'",
                "font-weight":"lighter",
                color:"#eee"
            })
            // 영상
            $(".roomintro_vid li:first-child").fadeIn(1700);
            $(".roomintro_vid li:nth-child(2)").hide(0);
            $(".roomintro_vid li:last-child").hide(0);
            // 설명
            $(".roomintro_txt li:first-child").show(1500);
            $(".roomintro_txt li:nth-child(2)").hide(0);
            $(".roomintro_txt li:last-child").hide(0);
        });
        // 전시실2
        $("#roomAnnounce ul li:nth-child(2)").on("mouseover", function(){
            $("#roomAnnounce ul li:nth-child(2)").css({
                "transition":"0.5s",
                "background-color":"#555",
                "color":"#eee"
            });
        });
        $("#roomAnnounce ul li:nth-child(2)").on("mouseleave", function(){
            $("#roomAnnounce ul li:nth-child(2)").css({
                "transition":"0.5s",
                "background-color":"#888",
                "color":"none"
            });
        });
        $("#roomAnnounce ul li:nth-child(2)").on("click", function(){
            // 배경
            $("#roomAnnounce ul li:nth-child(2)").css({
                "border-radius":"50%",
                "z-index":"200",
                transform:"scale(120%)",
                transition:"1s",
                "background-image":"url(../img/permanent_room_2.jpg)",         
            });
            $("#roomAnnounce ul li:nth-child(2) a").css({
                "font-size":"90%",
                "font-family": "'NanumSquare'",
                "font-weight":"bold",
                color:"#333"         
            });
            $("#roomAnnounce ul li:first-child, #roomAnnounce ul li:last-child").css({
                "z-index":"100",
                transform:"scale(100%)",
                "background-color":"#888",
                "background-image":"none",
            });
            $("#roomAnnounce ul li:first-child a, #roomAnnounce ul li:last-child a").css({
                "font-size":"75%",
                "font-family": "'NanumSquareLight'",
                "font-weight":"lighter",
                color:"#eee"
            })
            // 영상
            $(".roomintro_vid li:first-child").hide(0);
            $(".roomintro_vid li:nth-child(2)").fadeIn(1700);
            $(".roomintro_vid li:last-child").hide(0);
            // 설명
            $(".roomintro_txt li:first-child").hide(0);
            $(".roomintro_txt li:nth-child(2)").show(1500);
            $(".roomintro_txt li:last-child").hide(0);
        });
        // 전시실3
        $("#roomAnnounce ul li:last-child").on("mouseover", function(){
            $("#roomAnnounce ul li:last-child").css({
                "transition":"0.5s",
                "background-color":"#555",
                "color":"#eee"
            });
        });
        $("#roomAnnounce ul li:last-child").on("mouseleave", function(){
            $("#roomAnnounce ul li:last-child").css({
                "transition":"0.5s",
                "background-color":"#888",
                "color":"none"
            });
        });
        $("#roomAnnounce ul li:last-child").on("click", function(){
            $("#roomAnnounce ul li:last-child").css({
                "border-radius":"50%",
                "z-index":"200",
                transform:"scale(120%)",
                transition:"1s",
                "background-image":"url(../img/permanent_room_3.jpg)",        
            });
            $("#roomAnnounce ul li:last-child a").css({
                "font-size":"90%",
                "font-family": "'NanumSquare'",
                "font-weight":"bold",
                color:"#333"         
            });
            $("#roomAnnounce ul li:first-child, #roomAnnounce ul li:nth-child(2)").css({
                "z-index":"100",
                transform:"scale(100%)",
                "background-color":"#888",
                "background-image":"none",               
            });
            $("#roomAnnounce ul li:first-child a, #roomAnnounce ul li:nth-child(2) a").css({
                "font-size":"75%",
                "font-family": "'NanumSquareLight'",
                "font-weight":"lighter",
                color:"#eee"
            })
            // 영상
            $(".roomintro_vid li:first-child").hide(0);
            $(".roomintro_vid li:nth-child(2)").hide(0);
            $(".roomintro_vid li:last-child").fadeIn(1700);
            // 설명
            $(".roomintro_txt li:first-child").hide(0);
            $(".roomintro_txt li:nth-child(2)").hide(0);
            $(".roomintro_txt li:last-child").show(1500);
        });
    
        // ---------(컨테이너 4)소장유물---------
        // 소장유물1
        $(".relics_intro_img li:first-child").on("click", function(){
            // 이름
            $(".relics_intro_name li:first-child").css({
                opacity:"1", 
                transition:"1s"
            });
            $(".relics_intro_name li:nth-child(2)").css({opacity:"0"});
            $(".relics_intro_name li:last-child").css({opacity:"0"});
            // 설명
            $(".prehis_1").show(0);
            $(".prehis_2").hide(0);
            $(".prehis_3").hide(0);;
        });
        // 소장유물2
        $(".relics_intro_img li:nth-child(2)").on("click", function(){
            // 이름
            $(".relics_intro_name li:first-child").css({opacity:"0"});
            $(".relics_intro_name li:nth-child(2)").css({
                opacity:"1", 
                transition:"0.7s"
            });
            $(".relics_intro_name li:last-child").css({opacity:"0"});
            // 설명
            $(".prehis_1").hide(0);
            $(".prehis_2").show(0);
            $(".prehis_3").hide(0);
        });
        // 소장유물3
        $(".relics_intro_img li:last-child").on("click", function(){
            // 이름
            $(".relics_intro_name li:first-child").css({opacity:"0"});
            $(".relics_intro_name li:nth-child(2)").css({opacity:"0"});
            $(".relics_intro_name li:last-child").css({
                opacity:"1", 
                transition:"1s"
            });
            // 설명
            $(".prehis_1").hide(0);
            $(".prehis_2").hide(0);
            $(".prehis_3").show(0);
        });
        //더보기
        $(".more").on("mouseover", function(){
            $(".more a").css({
                "background-color":"#222", 
                "transform":"rotate(180deg)",
                transition:"1s"
            });
        });
        $(".more").on("mouseleave", function(){
            $(".more a").css({
                "background-color":"#555", 
                "transform":"rotate(-180deg)",
                transition:"1s"
            });
        });
    });