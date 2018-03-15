  $('.complexes-slider').slick({
   infinite: false,
   speed: 1200,
   slidesToShow: 3,
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
   centerPadding: '200px',
   // arrows: false,
   responsive: [
    {
      breakpoint: 1620,
      settings: {
        centerPadding: '150px',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    },
    {
      breakpoint: 1100,
      settings: {
        centerPadding: '110px',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    }
   ]
  });

  $('.slider__btn-left').click(function () {
      var slides=[];
      slides = document.querySelectorAll('.slider-item-block');
      if (slides[1].classList.contains('slick-current')) {
          this.classList.add('hide');
          console.log(this);
      }
      document.querySelector('.slider__btn-right').classList.remove('hide');
  });


  $('.slider__btn-right').click(function () {
      var slides=[];
      slides = document.querySelectorAll('.slider-item-block');
      if (slides[slides.length-2].classList.contains('slick-current')) {
          this.classList.add('hide');
          console.log(this);
      }
      document.querySelector('.slider__btn-left').classList.remove('hide');
  });


  $('.staff-slider').slick({
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '280px',
      arrows: false,
      responsive: [
          {
              breakpoint: 1620,
              settings: {
                  centerPadding: '200px',
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: false
              }
          },
          {
              breakpoint: 1100,
              settings: {
                  centerPadding: '110px',
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: false
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
                  arrows: false
              }
          },
          {
              breakpoint: 1100,
              settings: {
                  centerPadding: '110px',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
              }
          }
      ]
  });



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







