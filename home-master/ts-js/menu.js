 

var animation = anime({   
targets: '.logo_animation',   
rotate: '2turn',
duration: 4000,
opacity: 0
});

var animation1 = anime({  
targets: '.logo',   
rotate: '2turn',
duration: 4000,
opacity: 1,
translateX: {
    value: -490,
    delay: 2000
},
translateY:{
    value: -330,
    delay: 2000

},
scale: 0.1

});

  

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
            top: "+=150"
        }, 300);

        $(".thoghDh").animate({
            top: "+=200"
        }, 300);

        $(".support").css("display", "none");
        $(".supportFix").css("display", "inline");

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
        $(".supportFix").css("display", "none");
        $(".support").css("display", "inline");

        $("h1").animate({
            top: "-=200px"
        }, 300);

        $(".atom").animate({
            top: "-=150"
        }, 300);

        $(".thoghDh").animate({
            top: "-=200"
        }, 300);

    });


    $(".storeFix").click(function () {

        $(".store").css("display", "none");
        $(".storeClose").css("display", "inline");
        $(".storeFix").css("display", "none");
        $(".support").css("display", "none");
        $(".supportClose").css("display", "none");
        $(".supportFix").css("display", "inline");
        $(".descS").css("color", "white");
        $(".h").css("color", "white");
        $(".supportIK").slideUp(300);
        $(".supportClose").css("display", "none");
        $(".atomS").css("display", "none");
        $(".thoughDhS").css("display", "none");
        $(".techS").css("display", "none");
        $(".desc2S").css("display", "none");
        $(".descS").css("display", "none");
        $(".brawS").css("color", "none");
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
    });
});


$("ul").ready(function () {
    $(".support").click(function () {

        $(".descS").css("color", "#6a6a6a");
        $(".h").css("color", "#6a6a6a");
        $(".supportIK").slideDown(300);
        $(".support").css("display", "none");
        $(".supportClose").css("display", "inline");
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
            top: "+=150"
        }, 300);

        $(".store").css("display", "none");
        $(".storeFix").css("display", "inline");
    });


    $(".supportClose").click(function () {

        $(".descS").css("color", "white");
        $(".h").css("color", "white");
        $(".supportIK").slideUp(300);
        $(".support").css("display", "inline");
        $(".supportClose").css("display", "none");
        $(".atomS").css("display", "none");
        $(".thoughDhS").css("display", "none");
        $(".techS").css("display", "none");
        $(".desc2S").css("display", "none");
        $(".descS").css("display", "none");
        $(".brawS").css("color", "none");
        $(".storeFix").css("display", "none");
        $(".store").css("display", "inline");

        $("h1").animate({
            top: "-=200px"
        }, 300);

        $(".atom").animate({
            top: "-=150"
        }, 300);

        $(".thoghDh").animate({
            top: "-=200"
        }, 300);
    });


    $(".supportFix").click(function () {

        $(".support").css("display", "none");
        $(".supportClose").css("display", "inline");
        $(".supportFix").css("display", "none");
        $(".store").css("display", "none");
        $(".storeClose").css("display", "none");
        $(".storeFix").css("display", "inline");
        $(".descS").css("color", "white");
        $(".h").css("color", "white");
        $(".storeIk").slideUp(300);
        $(".storeClose").css("display", "none");
        $(".atomS").css("display", "none");
        $(".thoughDhS").css("display", "none");
        $(".techS").css("display", "none");
        $(".desc2S").css("display", "none");
        $(".descS").css("display", "none");
        $(".brawS").css("color", "none");
        $(".descS").css("color", "#6a6a6a");
        $(".h").css("color", "#6a6a6a");
        $(".supportIK").slideDown(300);
        $(".support").css("display", "none");
        $(".supportClose").css("display", "inline");
        $(".atomS").css("display", "inline");
        $(".thoughDhS").css("display", "inline");
        $(".techS").css("display", "inline");
        $(".desc2S").css("display", "inline");
        $(".descS").css("display", "inline");
        $(".brawS").css("display", "inline");
    });
});

