

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});

$(document).ready(function () {
    $('.header__link').click(function (event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    })
});

new WOW({mobile: false}).init();

$(window).on("load resize", function () {
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 1000,
                    easing: 'easeInOutQuart',
                    arrows: false,
                    dots: true,
                    infinite: false,
                    responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1.2,
                            }
                        },
                    ]
                });
            }
        }
    });
});

var slider = $('.coaches__slider');
$(document).ready(function () {
    slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.arrow__info').text(i + ' ' + 'of' + ' ' + slick.slideCount);
    });
    slider.slick({
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'easeInOutQuart',
        prevArrow: $('.arrow__prev'),
        nextArrow: $('.arrow__next'),

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1.7
                }

            },
            {
                breakpoint: 857,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1.5
                }

            },
            {
                breakpoint: 595,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1.2
                }

            }
        ]

    });
});

