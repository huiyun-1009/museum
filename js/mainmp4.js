$(function () {
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
