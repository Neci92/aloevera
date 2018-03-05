$(document).ready(function(){

/* ---------- NASLOVNA --------- */

  $("#text2").hide();
  $("#text3").hide();
  $("#text4").hide();


  $("#pro1").mouseenter(function(){
    $("#text1").show();
    $("#text2").hide();
    $("#text3").hide();
    $("#text4").hide();
  });

  $("#pro2").mouseenter(function(){
    $("#text2").show();
    $("#text1").hide();
    $("#text3").hide();
    $("#text4").hide();
  });

  $("#pro3").mouseenter(function(){
    $("#text3").show();
    $("#text1").hide();
    $("#text2").hide();
    $("#text4").hide();
  });

  $("#pro4").mouseenter(function(){
    $("#text4").show();
    $("#text1").hide();
    $("#text2").hide();
    $("#text3").hide();
  });
/* ---------- PROIZVODI --------- */

$(".higijena").hide();
$(".nega").hide();
$(".dodaci").hide();
$(".regulacija").hide();
$(".fit").hide();
$(".pcela").hide();

$("#napici").click(function(){
    $(".napici").fadeIn();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").hide();
    $(".naslov").text("Napici");
  });

$("#higijena").click(function(){
    $(".napici").hide();
    $(".higijena").fadeIn();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").hide();
    $(".naslov").text("Lična higijena");
  });

$("#nega").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").fadeIn();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").hide();
    $(".naslov").text("Nega kože");
});

$("#dodaci").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").fadeIn();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").hide();
    $(".naslov").text("Dodaci ishrani");
  });

$("#regulacija").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").fadeIn();
    $(".fit").hide();
    $(".pcela").hide();
    $(".naslov").text("Regulacija telesne težine");
  });

$("#fit").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").fadeIn();
    $(".pcela").hide();
    $(".naslov").text("Forever F.I.T.");
  });

$("#pcela").click(function(){
    $(".napici").hide();
    $(".higijena").hide();
    $(".nega").hide();
    $(".dodaci").hide();
    $(".regulacija").hide();
    $(".fit").hide();
    $(".pcela").fadeIn();
    $(".naslov").text("Pčelinji proizvodi");
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

 // --------- LICNA HIGIJENA --------------

 $(".hand-sanitizer").click(function() {
     $(".hand-sanitizer" + ".modal" ).fadeToggle();
 });

 $(".lips-jojoba").click(function() {
     $(".lips-jojoba" + ".modal" ).fadeToggle();
 });

 $(".forever-sun-lips").click(function() {
     $(".forever-sun-lips" + ".modal" ).fadeToggle();
 });

 $(".face-and-body-soap").click(function() {
     $(".face-and-body-soap" + ".modal" ).fadeToggle();
 });

 $(".aloe-shield").click(function() {
     $(".aloe-shield" + ".modal" ).fadeToggle();
 });

 $(".toothgel").click(function() {
     $(".toothgel" + ".modal" ).fadeToggle();
 });

 $(".hand-soap").click(function() {
     $(".hand-soap" + ".modal" ).fadeToggle();
 });

 $(".aloe-shave").click(function() {
     $(".aloe-shave" + ".modal" ).fadeToggle();
 });

 $(".gentlemans-pride").click(function() {
     $(".gentlemans-pride" + ".modal" ).fadeToggle();
 });

 $(".conditioning-rinse").click(function() {
     $(".conditioning-rinse" + ".modal" ).fadeToggle();
 });

 $(".travel-kit").click(function() {
     $(".travel-kit" + ".modal" ).fadeToggle();
 });

 $(".jojoba-shampoo").click(function() {
     $(".jojoba-shampoo" + ".modal" ).fadeToggle();
 });

 $(".bath-gelee").click(function() {
     $(".bath-gelee" + ".modal" ).fadeToggle();
 });

 $(".mpd2ultra").click(function() {
     $(".mpd2ultra" + ".modal" ).fadeToggle();
 });

// ---------- REGULACIJA -------------

$(".pro-x-chocolate").click(function() {
    $(".pro-x-chocolate" + ".modal" ).fadeToggle();
});

$(".pro-x-cinnamon").click(function() {
    $(".pro-x-cinnamon" + ".modal" ).fadeToggle();
});

$(".pro-x-chocolate1").click(function() {
    $(".pro-x-chocolate1" + ".modal" ).fadeToggle();
});

$(".pro-x-cinnamon1").click(function() {
    $(".pro-x-cinnamon1" + ".modal" ).fadeToggle();
});

$(".fast-break").click(function() {
    $(".fast-break" + ".modal" ).fadeToggle();
});

$(".aminotein-chocolate").click(function() {
    $(".aminotein-chocolate" + ".modal" ).fadeToggle();
});

$(".aminotein-vanilla").click(function() {
    $(".aminotein-vanilla" + ".modal" ).fadeToggle();
});

$(".forever-therm").click(function() {
    $(".forever-therm" + ".modal" ).fadeToggle();
});

$(".forever-lean").click(function() {
    $(".forever-lean" + ".modal" ).fadeToggle();
});

$(".garcinia-plus").click(function() {
    $(".garcinia-plus" + ".modal" ).fadeToggle();
});

// ------- FIT -------------

$(".clean-9-ultra-chocolate").click(function() {
    $(".clean-9-ultra-chocolate" + ".modal" ).fadeToggle();
});

$(".clean-9-ultra-vanilla").click(function() {
    $(".clean-9-ultra-vanilla" + ".modal" ).fadeToggle();
});

$(".f15-beg-vanilla").click(function() {
    $(".f15-beg-vanilla" + ".modal" ).fadeToggle();
});

$(".f15-beg-choco").click(function() {
    $(".f15-beg-choco" + ".modal" ).fadeToggle();
});

$(".f15-int-vanilla").click(function() {
    $(".f15-int-vanilla" + ".modal" ).fadeToggle();
});

$(".f15-int-choco").click(function() {
    $(".f15-int-choco" + ".modal" ).fadeToggle();
});

$(".f15-adv-vanilla").click(function() {
    $(".f15-adv-vanilla" + ".modal" ).fadeToggle();
});

$(".f15-adv-choco").click(function() {
    $(".f15-adv-choco" + ".modal" ).fadeToggle();
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
   $(".menu li").click(function(){
     $('.menu').toggleClass("pop");
     $('.btn1').toggleClass("hamburger");
   });
};
  // ---------- SMOOTH SCROLLING ---------------

});
