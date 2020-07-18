$(document).ready(function(){
   const windHeight = window.innerHeight;
   console.log(windHeight);
   const windWidth = window.innerWidth;
   const start = $(".start");
   const second = $('.second');
   const third = $('.third');
   console.log(third.css("bottom"));


   if (document.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+, Ch31+
        document.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        document.addEventListener("mousewheel", onWheel);
      } else if ('touchmove' in document){
         document.addEventListener("touchmove", onWheel);
      }else {
        // Firefox < 17
        document.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { // IE8-
      document.attachEvent("onmousewheel", onWheel);
    }


    function onWheel(event){
      var secBottom = second.css('bottom');
      if(event.deltaY >= 0){
       second.css('bottom', '0');
       if (secBottom == "0px"){
         $(".second h2").css("opacity", "1");
         $(".second ul").css("opacity", "1");
      }
      //first pole
      if ($(".second h2").css("opacity") == 1){
         $(".second .fill1").css("width", "90%");
      }else{
         $(".second .fill1").css("width", "0%");
      }
      //second pole
      if ($(".second .fill1").width() > 100){
         $(".second .fill2").css("width", "90%");
      }else{
         $(".second .fill2").css("width", "0%");
      }
      //third pole
      if ($(".second .fill2").width() > 100){
         $(".second .fill3").css("width", "60%");
      }else{
         $(".second .fill3").css("width", "0%");
      }
      //four pole
      if ($(".second .fill3").width() > 100){
         $(".second .fill4").css("width", "65%");
      }else{
         $(".second .fill4").css("width", "0%");
      }
      //five pole
      if ($(".second .fill4").width() > 100){
         $(".second .fill5").css("width", "60%");
      }else{
         $(".second .fill5").css("width", "0%");
      }
      if ($(".second .fill5").width() > 100){
         third.css("bottom", "0px");
      }
      }else{
         if (third.css("bottom") == "0px"){
            third.css("bottom", "-100%");
         }
         if (third.css("bottom") == "-" + windHeight + "px"){
            second.css('bottom', '-100%');
            $(".second h2").css("opacity", "0");
            $(".second ul").css("opacity", "0");
            $(".second .fill1").css("width", "0%");
            $(".second .fill2").css("width", "0%");
            $(".second .fill3").css("width", "0%");
            $(".second .fill4").css("width", "0%");
            $(".second .fill5").css("width", "0%");
         }
      }
   
   }
   // while($(".second .fill1").width() < 500){
   //    $(".second .fill2").css("width", "90%");
   // }
   $(".mail-btn").on("click touchstart", function () {
      if ($(".third input").val() != "" && $(".third textarea").val() != ""){
         $(this).addClass("fly");
         that = this
         setTimeout(function() {
             $(that).removeClass("fly");
         }, 5400)
      }
  });
});
