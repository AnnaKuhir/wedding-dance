
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

// $(document).ready(function(){
//   $('.services__slider').slick({
//     arrows: false,
//     dots: true,
//     slidesToShow: 1.5,
//   });
// })

$(window).on("load resize orientationchange", function () {
  $(".services__slider").each(function () {
      var $slider = $(this);
      if ($(window).width() > 768) {
          if ($slider.hasClass("slick-initialized")) {
              $slider.slick("unslick");
          }
      } else {
          if (!$slider.hasClass("slick-initialized")) {
              $slider.slick({
                  initialSlide: 0,    
                  slidesToShow: 1.2,
                  slidesToScroll: 1,
                  speed: 500,
                  easing: 'ease',
                  arrows: false,
                  // centerMode: true,
                  // centerPadding: '30px',
                  dots: true,
                  infinite: false,
                  responsive: [
                      {
                          breakpoint: 450,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              // centerMode: true,
                              adaptiveHeight: true,
                              // centerPadding: '30px',
                              infinite: true
                          }
                      },
                  ]
              });
          }
      }
  });
});
