$(document).ready(function(){

/* ---------- NASLOVNA --------- */

  $("#text2").hide();
  $("#text3").hide();
  $("#text4").hide();  $(".porucite").hide();
  $("nav ul li:last-child").click(function(){
    $('.porucite').slideToggle();
  })



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

function opis(e){
  $(e).click(function(){
    $(e + '.modal').fadeToggle();
    $('.black').fadeToggle();
  });
};

$('.black').click(function(){
  $(this).fadeToggle();
  $('.modal').fadeOut();
});

//-----------NAPICI------------

opis(".joost-pineapple");
opis(".joost-blueberry");
opis(".herbal-tea");
opis(".berry-nectar");
opis(".aloe-vera-gel");
opis(".pomesteen-power");
opis(".bits-n-peaches");
opis(".forever-freedom");
opis(".aloe2go");

//------------- PCELINJI PROIZVODI---------

opis(".bee-pollen");
opis(".bee-propolis");
opis(".royal-jelly");

//-------- DODACI ISHRANI -----------

opis(".forever-kids");
opis(".field-of-greens");
opis(".forever-daily");
opis(".absorbent-c");
opis(".nature-min");
opis(".gin-chia");
opis(".garlic-thyme");
opis(".multi-maca");
opis(".arctic-sea");
opis(".a-beta-care");
opis(".esm-complex");


 // --------- LICNA HIGIJENA --------------


 opis(".hand-sanitizer");
 opis(".lips-jojoba");
 opis(".forever-sun-lips");
 opis(".face-and-body-soap");
 opis(".aloe-shield");
 opis(".toothgel");
 opis(".hand-soap");
 opis(".aloe-shave");
 opis(".gentlemans-pride");
 opis(".conditioning-rinse");
 opis(".travel-kit");
 opis(".jojoba-shampoo");
 opis(".bath-gelee");
 opis(".mpd2ultra");

// ---------- REGULACIJA -------------

opis(".pro-x-chocolate");
opis(".pro-x-cinnamon");
opis(".pro-x-chocolate1");
opis(".pro-x-cinnamon1");
opis(".fast-break");
opis(".aminotein-chocolate");
opis(".aminotein-vanilla");
opis(".forever-therm");
opis(".forever-lean");
opis(".garcinia-plus");

// ------- FIT -------------

opis(".clean-9-ultra-chocolate");
opis(".clean-9-ultra-vanilla");
opis(".f15-beg-vanilla");
opis(".f15-beg-choco");
opis(".f15-int-vanilla");
opis(".f15-int-choco");
opis(".f15-adv-vanilla");
opis(".f15-adv-choco");

// ------- NEGA KOZE -------------

opis(".aloe-activator");
opis(".rehydrating-toner");
opis(".forever-epiblanc");
opis(".aloe-vera-gelly");
opis(".aloe-lotion");
opis(".aloe-moisturizing-lotion");
opis(".aloe-heat-lotion");
opis(".aloe-sunscreen");
opis(".mask-powder");
opis(".forever-aloe-scrub");
opis(".firming-day-lotion");
opis(".aloe-first");
opis(".aloe-propolis-creme");
opis(".aloe-msm-gel");
opis(".recovering-night-creme");
opis(".forever-aluring-eyes");
opis(".r3-factor");
opis(".aloe-fleur-de-jouvence");

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
   $("#text4").show();
   $(".btn1").show();
   $(".menu li").click(function(){
     $('.menu').toggleClass("pop");
     $('.btn1').toggleClass("hamburger");
   });
};
  // ---------- SMOOTH SCROLLING ---------------

});
