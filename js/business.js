$(function () {
    var showBanner = 0;

    var liWidth = $(".bannerM>li").width();

    var liCount = $(".bannerM>li").length;

    var objLast = $(".bannerM>li:last").clone();
    var objFirst = $(".bannerM>li:lt(2)").clone();
    $(".bannerM").prepend(objLast);
    $(".bannerM").append(objFirst);

    $(".bannerM>li").eq(showBanner + 1).addClass("active");

    var count = $(".bannerM>li").length;

    $(".bannerM").width(count * liWidth);
    $(".bannerM>li").width(liWidth);

    function moveBanner() {
        $(".bannerM").stop().animate({
            "left": -showBanner * liWidth
        }, 1000, function () {
        });
        $(".bannerM>li").eq(showBanner + 1).addClass("active").siblings().removeClass("active")
    }

    $(".rightBtn").on("click", function (e) {
        e.preventDefault();
        if (showBanner == liCount) {
            showBanner = 0;
            $(".bannerM").css("left", 0)
        }
        showBanner++;
        moveBanner();
    })
    $(".leftBtn").on("click", function (e) {
        e.preventDefault();
        if (showBanner == 0) {
            showBanner = liCount;
            $(".bannerM").css("left", -liCount * liWidth)
        }
        showBanner--;
        moveBanner();
    })
    var button = false;
    $(".hamBtn").on("click", function () {
        if (button == false) {
            // console.log("클릭")
            $("#nav").stop().animate({
                right: 0
            }, 500)
            button = true;
        }
        else {
            $("#nav").stop().animate({
                right: -100 + "%"
            }, 500)
            button = false;
        }

    })
})