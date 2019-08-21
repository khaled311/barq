$(function() {

  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this).find(".drop").slideToggle();
    $(this).siblings().find(".drop").slideUp();
    $(this).find("i").toggleClass("open");
    $(this).siblings().find("i").removeClass("open");
    e.stopPropagation();
});


  // open Side Nav
  $(".menuTriger").on("click", function() {
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
    $(".main").toggleClass("trans");
  });


  // Close Side Nav
  $(".navover").on("click", function() {
    if($(".sideNav").hasClass("open")){
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      $("body").css("overflow", "auto");
      $(".main").toggleClass("trans");
    }
  });

  // Main Slider
  $('.main-slider .owl-carousel').owlCarousel({
    autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 1,
    dots: true,
    smartSpeed: 1000,
    navText: ["<span></span>","<span></span>"]
  });

  // clients Slider
  // Disc Slider
  $('.disc .owl-carousel').owlCarousel({
    autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 5,
    dots: true,
    smartSpeed: 1000,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      768:{
        items:3
      },
      992:{
        items:4
      },
      1200:{
        items:5
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  //footer accordion
  if($(window).width() < 992){
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $('.foot-links button').on('click', function() {
    $(this).toggleClass("trans");
    $(this).parent().parent().siblings().find('.collapse').collapse('hide');
    $(this).parent().parent().siblings().find('button').removeClass("trans");
  });

})