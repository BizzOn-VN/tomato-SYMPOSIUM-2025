'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
    
});

$('.toggle-menu').click(function(){
    $('.nav-links').toggleClass('active');
});

$('.nav-links li').click(function(){
    $('.nav-links').removeClass('active');
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 80) {
        $('.menu-header').addClass('scroll-top');
    }
    else {
        $('.menu-header').removeClass('scroll-top');
    }
    
});

$('.ui.dropdown')
  .dropdown()
;

$(".md-section-1").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-1").offset().top - 90},
        'slow');
});
$(".md-section-2").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-3").offset().top - 90},
        'slow');
});
$(".md-section-3").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-2").offset().top - 90},
        'slow');
});
$(".md-section-4").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-4").offset().top - 90},
        'slow');
});
$(".md-section-5").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-6").offset().top - 90},
        'slow');
});

// $("#modal-sucess").fancybox().trigger('click');
// $("#modal-sucess-2").fancybox().trigger('click');

new WOW().init();

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})