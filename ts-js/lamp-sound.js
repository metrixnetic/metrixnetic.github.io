var audio = $("#bear")[0];
$("#svg").click(function(){
	audio.play();
});

$("form").css("visibility","hidden");
$(this).css("opacity","0");
let clickCount = 0

$("#svg").on("click",function enable(){
  document.getElementById("all").style.filter = "brightness(10%)";
    document.getElementById("Svg-logo").style.filter = "brightness(10%)";
  document.getElementById("bg").style.display = "none";
   $("form").css("visibility","hidden");

  $("#svg").on("click",function enable(){
  document.getElementById("all").style.filter = "brightness(100%)";
   document.getElementById("Svg-logo").style.filter = "brightness(100%)";
  document.getElementById("bg").style.display = "block";

  $("#svg").on("click",function enable(){
  document.getElementById("all").style.filter = "brightness(10%)";
   document.getElementById("Svg-logo").style.filter = "brightness(10%)";
  document.getElementById("bg").style.display = "none";
   $("form").css("visibility","hidden");

  $("#svg").on("click",function enable(){
  document.getElementById("all").style.filter = "brightness(100%)";
        document.getElementById("Svg-logo").style.filter = "brightness(100%)";
  document.getElementById("bg").style.display = "block";
 
  $("form").css("visibility","hidden");
   if(clickCount===4){
   	 document.getElementById("all").style.filter = "brightness(10%)";
      document.getElementById("Svg-logo").style.filter = "brightness(10%)";
  document.getElementById("bg").style.display = "none";
  alert("Well, well, well, looks like you need to pay for the light.")
    $("form").css("visibility","visible");
    $(".close").css("visibility","visible");
    
    //если нужно каждый 4 клик ловить, то:
    clickCount = 0
  }else{
    clickCount+=1
  }

$(".close").on("click",function clickedbtn() {
  document.getElementById("all").style.filter = "brightness(100%)";
        document.getElementById("Svg-logo").style.filter = "brightness(100%)";
  document.getElementById("bg").style.display = "block";
  $(".close").css("visibility","hidden");
  $("form").css("visibility","hidden");

}); 
});   }); }); }); 