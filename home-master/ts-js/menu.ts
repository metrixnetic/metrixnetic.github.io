$("ul").ready(function () {
    $(".store").click(function () {
        $(".descS").css("color", "#6a6a6a");
        $(".h").css("color", "#6a6a6a");
        $(".storeIk").slideDown(300);
        $(".store").css("display", "none");
        $(".storeClose").css("display", "inline");
        $(".atomS").css("display", "inline");
        $(".thoughDhS").css("display", "inline");
        $(".techS").css("display", "inline");
        $(".desc2S").css("display", "inline");
        $(".descS").css("display", "inline");
        $(".brawS").css("display", "inline");
        $("h1").animate({
            top: "+=200px"
        }, 300);
        $(".atom").animate({
            top: "+=200"
        }, 300);
        $(".thoghDh").animate({
            top: "+=200"
        }, 300);
    });
    $(".storeClose").click(function () {
        $(".descS").css("color", "white");
        $(".h").css("color", "white");
        $(".storeIk").slideUp(300);
        $(".store").css("display", "inline");
        $(".storeClose").css("display", "none");
        $(".atomS").css("display", "none");
        $(".thoughDhS").css("display", "none");
        $(".techS").css("display", "none");
        $(".desc2S").css("display", "none");
        $(".descS").css("display", "none");
        $(".brawS").css("color", "none");
        $("h1").animate({
            top: "-=200px"
        }, 300);
        $(".atom").animate({
            top: "-=200"
        }, 300);
        $(".thoghDh").animate({
            top: "-=200"
        }, 300);
    });
});
