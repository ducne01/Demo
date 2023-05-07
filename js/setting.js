$(document).ready(function(){

  $(".main-header__nav--btn").click(function(){

    $(".main-header__nav").slideToggle();
    $(this).toggleClass("active");
  });
});

//slideshow

$('.autoplay').slick({
   dots: !1, arrows: !1,
    focusOnSelect: !0, pauseOnHover: !1, infinite: !0,
    speed: 500, fade: !0, autoplay: !0, cssEase: "linear"
});