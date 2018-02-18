$(document).ready(function(){

  $("#text2").hide();
  $("#text3").hide();

  $("#pro1").mouseenter(function(){
    $("#text1").show();
    $("#text2").hide();
    $("#text3").hide();
  });

  $("#pro2").mouseenter(function(){
    $("#text2").show();
    $("#text1").hide();
    $("#text3").hide();
  });

  $("#pro3").mouseenter(function(){
    $("#text3").show();
    $("#text2").hide();
    $("#text1").hide();
  });
});
