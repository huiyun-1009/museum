$(function () {
    $("header .ham").on("click", function () {
        $("nav").slideToggle(1000);
    });
    $("nav .xmark").on("click", function () {
        $("nav").slideToggle(1000);
    });

    // con1 //
    // jbox1//
    $(".jbox1 .extxt").on("mouseenter", function () {
        $(".jbox1 .more").stop().animate({ opacity: "1" }, 1000);
        $(".jbox1 img").stop().animate(
            {
                "border-top-left-radius": "50px",
                transform: "scale(1.1)",
            },
            400
        );
        $(".jbox1 .more a").stop().animate({ opacity: "1" }, 250);
        $(".jbox1").stop().animate({ "border-top-left-radius": "60px" }, 300);
    });

    $(".jbox1 .extxt").on("mouseleave", function () {
        $(".jbox1 .more").stop().animate({ opacity: "0" }, 1000);
        $(".jbox1 img").stop().animate(
            {
                "border-top-left-radius": "0px",
                transform: "scale(1)",
            },
            400
        );
        $(".jbox1 .more a").stop().animate({ opacity: "0" }, 250);
        $(".jbox1").stop().animate({ "border-top-left-radius": "0px" }, 300);
    });

    // jbox2//
    $(".jbox2 .extxt").on("mouseenter", function () {
        $(".jbox2 .more").stop().animate({ opacity: "1" }, 1000);
        $(".jbox2 img").stop().animate(
            {
                "border-top-left-radius": "50px",
                transform: "scale(1.2 )",
            },
            400
        );
        $(".jbox2 .more a").stop().animate({ opacity: "1" }, 250);
        $(".jbox2").stop().animate({ "border-top-left-radius": "60px" }, 300);
    });

    $(".jbox2 .extxt").on("mouseleave", function () {
        $(".jbox2 .more").stop().animate({ opacity: "0" }, 1000);
        $(".jbox2 img").stop().animate(
            {
                "border-top-left-radius": "0px",
                transform: "scale(1)",
            },
            400
        );
        $(".jbox2 .more a").stop().animate({ opacity: "0" }, 250);
        $(".jbox2").stop().animate({ "border-top-left-radius": "0px" }, 300);
    });

    // jbox3//
    $(".jbox3 .extxt").on("mouseenter", function () {
        $(".jbox3 .more").stop().animate({ opacity: "1" }, 1000);
        $(".jbox3 img").stop().animate(
            {
                "border-top-left-radius": "50px",
                transform: "scale(1.2 )",
            },
            400
        );
        $(".jbox3 .more a").stop().animate({ opacity: "1" }, 250);
        $(".jbox3").stop().animate({ "border-top-left-radius": "60px" }, 300);
    });

    $(".jbox3 .extxt").on("mouseleave", function () {
        $(".jbox3 .more").stop().animate({ opacity: "0" }, 1000);
        $(".jbox3 img").stop().animate(
            {
                "border-top-left-radius": "0px",
                transform: "scale(1)",
            },
            400
        );
        $(".jbox3 .more a").stop().animate({ opacity: "0" }, 250);
        $(".jbox3").stop().animate({ "border-top-left-radius": "0px" }, 300);
    });

    // jbox4//
    $(".jbox4 .extxt").on("mouseenter", function () {
        $(".jbox4 .more").stop().animate({ opacity: "1" }, 1000);
        $(".jbox4 img").stop().animate(
            {
                "border-top-left-radius": "50px",
                transform: "scale(1.2 )",
            },
            400
        );
        $(".jbox4 .more a").stop().animate({ opacity: "1" }, 250);
        $(".jbox4").stop().animate({ "border-top-left-radius": "60px" }, 300);
    });

    $(".jbox4 .extxt").on("mouseleave", function () {
        $(".jbox4 .more").stop().animate({ opacity: "0" }, 1000);
        $(".jbox4 img").stop().animate(
            {
                "border-top-left-radius": "0px",
                transform: "scale(1)",
            },
            400
        );
        $(".jbox4 .more a").stop().animate({ opacity: "0" }, 250);
        $(".jbox4").stop().animate({ "border-top-left-radius": "0px" }, 300);
    });

    // 현재전시 //

    $(".now-1").on("click", function () {
        $(".now").stop().animate({ opacity: "1" });
        $(".plan").stop().animate({ opacity: "0" });
        $(".late").stop().animate({ opacity: "0" });
    });

    // 예정전시 //
    $(".plan-1").on("click", function () {
        $(".plan").stop().animate({ opacity: "1" });
        $(".now").stop().animate({ opacity: "0" });
        $(".late").stop().animate({ opacity: "0" });
    });
    // 지난전시 //
    $(".late-1").on("click", function () {
        $("late").show(0);
        $(".late").stop().animate({ opacity: "1" });
        $(".now").stop().animate({ opacity: "0" });
        $(".plan").stop().animate({ opacity: "0" });
    });

    // *온라인 전시관*//
    $(".disital").on("click", function () {
        $(this).css({
            background: "rgb(17, 54, 64)",
            color: "#fff",
        });
        $(".virtual").css({ background: "none", color: "#000" });
        $(".content").css("opacity", "0");
        $(".left_1200").animate({ left: "0px" });
        $(".real").animate({ left: "1200px" });
        $(".left_1200").css("opacity", "1");
        $(".real").css("opacity", "0");
        $(".fifty").stop().animate({ width: "50%", opacity: "1" }, 500);
        $(".fifty-1").css("opacity", "0");
    });

    $(".virtual").on("click", function () {
        $(this).css({
            background: "rgb(17, 54, 64)",
            color: "#fff",
        });
        $(".disital").css({ background: "none", color: "#000" });
        $(".real").animate({ left: "0px" });
        $(".left_1200").animate({ left: "1200px" });
        $(".real").css("opacity", "1");
        $(".content").css("opacity", "0");
        $(".fifty").css("opacity", "0");
        $(".fifty-1").stop().animate({ width: "50%", opacity: "1" }, 500);
    });

    //*con3*//

    $(".dorok2").on("click", function () {
        $(this).css({ border: "10px solid rgb(17, 54, 64)" });
        $(".dorok3").css({ border: "none" });
        $(".dorok4").css({ border: "none" });
        $(".firdorok_1").css("opacity", "1");
        $(".firdorok_1").show(0);
        $(".firdorok_0").css("opacity", "0");
        $(".firdorok_2").css("opacity", "0");
        $(".firdorok_3").css("opacity", "0");
    });
    $(".dorok3").on("click", function () {
        $(this).css({ border: "10px solid rgb(17, 54, 64)" });
        $(".dorok2").css({ border: "none" });
        $(".dorok4").css({ border: "none" });
        $(".firdorok_2").css("opacity", "1");
        $(".firdorok_2").show(0);
        $(".firdorok_0").css("opacity", "0");
        $(".firdorok_1").css("opacity", "0");
        $(".firdorok_3").css("opacity", "0");
    });
    $(".dorok4").on("click", function () {
        $(this).css({ border: "10px solid rgb(17, 54, 64)" });
        $(".dorok2").css({ border: "none" });
        $(".dorok3").css({ border: "none" });
        $(".firdorok_3").css("opacity", "1");
        $(".firdorok_3").show(0);
        $(".firdorok_0").css("opacity", "0");
        $(".firdorok_2").css("opacity", "0");
        $(".firdorok_1").css("opacity", "0");
    });
});
