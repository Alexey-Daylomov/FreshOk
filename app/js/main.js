$(function () {
  $('.discounts-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-gray-l"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg><use xlink:href="images/sprite.svg#arrow-gray-r"></use></svg></button>',
    responsive: [{
      breakpoint: 1550,
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
      }
    }]
  });

  $('.partners__list').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    autoplay: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('.product-top__star').rateYo({
    starWidth: "16px",
    numStars: 1,
    ratedFill: "#FFB800",
    normalFill: "#FFB800",
    readOnly: true,
  });

  const button = document.querySelector('.control__network--search');

  button.addEventListener('click', () => {
    $('.form').toggleClass('form-open');
  });

  $('.menu__btn, .menu__mobile').on('click', function () {
    $('.menu__mobile').toggleClass('menu__mobile--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  var containerEl1 = document.querySelector('[data-ref="product-top"]');
  var containerEl2 = document.querySelector('[data-ref="stock"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});