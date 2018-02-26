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

// --------- DETALJNIJE ----------

//-----------NAPICI------------
$(".joost-pineapple").click(function() {
    $(".joost-pineapple" + ".modal" ).fadeToggle();
});

$(".joost-blueberry").click(function() {
    $(".joost-blueberry" + ".modal" ).fadeToggle();
});

$(".herbal-tea").click(function() {
    $(".herbal-tea" + ".modal" ).fadeToggle();
});

$(".berry-nectar").click(function() {
    $(".berry-nectar" + ".modal" ).fadeToggle();
});

$(".aloe-vera-gel").click(function() {
    $(".aloe-vera-gel" + ".modal" ).fadeToggle();
});

$(".pomesteen-power").click(function() {
    $(".pomesteen-power" + ".modal" ).fadeToggle();
});

$(".bits-n-peaches").click(function() {
    $(".bits-n-peaches" + ".modal" ).fadeToggle();
});

$(".forever-freedom").click(function() {
    $(".forever-freedom" + ".modal" ).fadeToggle();
});

$(".aloe2go").click(function() {
    $(".aloe2go" + ".modal" ).fadeToggle();
});
//------------- PCELINJI PROIZVODI---------
$(".bee-pollen").click(function() {
    $(".bee-pollen" + ".modal" ).fadeToggle();
});

$(".bee-propolis").click(function() {
    $(".bee-propolis" + ".modal" ).fadeToggle();
});

$(".royal-jelly").click(function() {
    $(".royal-jelly" + ".modal" ).fadeToggle();
});

//-------- DODACI ISHRANI -----------
$(".forever-kids").click(function() {
    $(".forever-kids" + ".modal" ).fadeToggle();
});

$(".field-of-greens").click(function() {
    $(".field-of-greens" + ".modal" ).fadeToggle();
});

$(".forever-daily").click(function() {
    $(".forever-daily" + ".modal" ).fadeToggle();
});

$(".absorbent-c").click(function() {
    $(".absorbent-c" + ".modal" ).fadeToggle();
});

$(".nature-min").click(function() {
    $(".nature-min" + ".modal" ).fadeToggle();
});

$(".gin-chia").click(function() {
    $(".gin-chia" + ".modal" ).fadeToggle();
});

$(".garlic-thyme").click(function() {
    $(".garlic-thyme" + ".modal" ).fadeToggle();
});

$(".multi-maca").click(function() {
    $(".multi-maca" + ".modal" ).fadeToggle();
});

$(".arctic-sea").click(function() {
    $(".arctic-sea" + ".modal" ).fadeToggle();
});

$(".a-beta-care").click(function() {
    $(".a-beta-care" + ".modal" ).fadeToggle();
});

$(".esm-complex").click(function() {
    $(".esm-complex" + ".modal" ).fadeToggle();
});



// ---------- MEDIA QUERY - PROIZVODI -------------

$(".btn1").hide();

$('.btn1').on('click', function(){
    $('.menu').toggleClass("pop");
    $(this).toggleClass("hamburger");
  });

  // --------- dropbar ---------
  $('#logo2').on('click', function(){
  $('nav').slideToggle(500);
  $('header img:nth-child(2)').toggleClass('rotate');
});

if ($(window).width() < 960) {
   $("#text2").show();
   $("#text3").show();
   $(".btn1").show();

}


  // ---------- SMOOTH SCROLLING ---------------

});
