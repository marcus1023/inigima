$(document).ready(function(){

  // jQuery functions
  $("#downArrow").click(function() {
      $('html, body').animate({
          scrollTop: $("#servicesSect").offset().top
      }, 800);
  });
  $("#readMoreRealEstate").click(function(){
        $("#aniTrackOneImg").toggleClass("noWidth");
  });
  $("#readMoreResturants").click(function(){
        $("#aniTrackTwoImg").toggleClass("noWidth");
        $("#aniTrackTwoText").toggleClass("noMargin");
  });
  $("#readMoreDispensaries").click(function(){
        $("#aniTrackThreeImg").toggleClass("noWidth");
  });





// end of jQuery
});
