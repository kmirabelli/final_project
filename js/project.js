document.getElementById("mobile").onclick = function() {
    document.querySelector(".small").classList.toggle("open");
};

$("#carousel a").click(function(){
  $("#carousel a.current").removeClass("slide current");
  $(this).addClass("slide current");
  var whichSlide = $(this).index();
  $("div.current").removeClass("current");
  $("div").eq(whichSlide).addClass("current");
});