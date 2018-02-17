$(document).ready(function(){

  $("#pro1").mouseenter(function(){
    $("#text1").addClass("active");
    $("#text2").removeClass("active").addClass("hidden");
    $("#text3").removeClass("active").addClass("hidden");
  });

  $("#pro2").mouseenter(function(){
    $("#text2").addClass("active");
    $("#text1").removeClass("active").addClass("hidden");
    $("#text3").removeClass("active").addClass("hidden");
  });

  $("#pro3").mouseenter(function(){
    $("#text3").addClass("active");
    $("#text2").removeClass("active").addClass("hidden");
    $("#text1").removeClass("active").addClass("hidden");
  });
});
