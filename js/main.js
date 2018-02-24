$(document).ready(function(){

/* ---------- NASLOVNA --------- */

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

/* ---------- PROIZVODI --------- */

$(".higijena").hide();
$(".nega").hide();
$(".dodaci").hide();
$(".regulacija").hide();
$(".fit").hide();
$(".pcela").hide();

$("#napici").click(function(){
    $(".napici").show();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").hide();
  });

$("#higijena").click(function(){
    $(".napici").hide();
    $(".higijena").show();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").hide();
  });

$("#nega").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").show();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").hide();
});

$("#dodaci").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").show();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").hide();
  });

$("#regulacija").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").show();
    $(".fit").hide();
    $(".pcela").hide();
  });

$("#fit").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").show();
    $(".pcela").hide();
  });

$("#pcela").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").show();
  });

// ---------- MEDIA QUERY - PROIZVODI -------------

$(".btn2").hide();

$('.btn1').on('click', function(){
    $('.menu').css("width", "100%");
    $(".btn1").hide();
    $(".btn2").show();
  });

  $('.btn2').on('click', function(){
      $('.menu').css("width", "0");
      $(".btn2").hide();
      $(".btn1").show();
    });


  // ---------- SMOOTH SCROLLING ---------------

});
