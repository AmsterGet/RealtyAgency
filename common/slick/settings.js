function initSlick() {
    $('.complexes-slider').slick({
        infinite: false,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
        draggable: false,
        swipe: false,
        touchMove: false,
        prevArrow: '.slider__btn-left',
        nextArrow: '.slider__btn-right',
        // swipeToSlide: true,
        // focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        // arrows: false,

        responsive: [
            {
                breakpoint: 2490,
                settings: {
                    centerPadding: '260px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    centerPadding: '200px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1780,
                settings: {
                    centerPadding: '140px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1549,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1450,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1270,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // arrows: false
                }
            }
        ]
    });

    function getSlides(selector) {
        return document.querySelectorAll(selector) || [];
    }

    $('.slider__btn-left').click(function () {
        var slides = getSlides('.slider-item-block');
        if (slides[1].classList.contains('slick-current')) {
            this.classList.add('hide');
            console.log(this);
        }
        document.querySelector('.slider__btn-right').classList.remove('hide');
    });


    $('.slider__btn-right').click(function () {
        var slides = getSlides('.slider-item-block');
        if (slides[slides.length - 2].classList.contains('slick-current')) {
            this.classList.add('hide');
            console.log(this);
        }
        document.querySelector('.slider__btn-left').classList.remove('hide');
    });


    $('.staff-slider').slick({
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '300px',
        arrows: false,
        responsive: [
            {
                breakpoint: 3150,
                settings: {
                    centerPadding: '400px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 2500,
                settings: {
                    centerPadding: '260px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    centerPadding: '280px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1780,
                settings: {
                    centerPadding: '155px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '140px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1270,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            // {
            //     breakpoint: 1100,
            //     settings: {
            //         centerPadding: '100px',
            //         slidesToShow: 3,
            //         slidesToScroll: 1,
            //         // arrows: false
            //     }
            // },
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: '88px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false
                }
            }
        ]
    });


    $('.forms-slider').slick({
        infinite: false,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        swipe: false,
        touchMove: false,
        prevArrow: '.forms-slider__btn-left',
        nextArrow: '.forms-slider__btn-right',
        // swipeToSlide: true,
        // focusOnSelect: true,
        // centerMode: true,
        // centerPadding: '280px',
        // arrows: false,
        responsive: [
            {
                breakpoint: 1620,
                settings: {
                    centerPadding: '200px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    centerPadding: '110px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false
                }
            }
        ]
    });
}

initSlick();

  function popup(id) {
      $('.popup_overlay').show();
      $('#'+id).addClass('activePopup');
      $('.activePopup').show();

      var m_top = -$('.activePopup').outerHeight() / 2 + 'px';

      $('.activePopup').css({
          'margin-top': m_top,
      });
  }

  function popup_out() {
      $('.popup_overlay').hide();
      $('.popup').hide();
      $('.popup').removeClass('activePopup');
  }

  $('.complexes-slider-button').click(function () {
      var slides=getSlides('.block-forms');
      var slider = $('.forms-slider');
      slider.slick('slickGoTo',slides.length-1);
      $('html, body').animate({scrollTop: slider.offset().top}, 700);
  });








