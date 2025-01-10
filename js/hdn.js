// 헤더
$(function(){
    $("header i").on("click", function () {
        $("nav").slideToggle(1000);
    });
    $("nav i").on("click", function () {
        $("nav").slideToggle(1000);
    });
});