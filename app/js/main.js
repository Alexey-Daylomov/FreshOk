$(function () {
  $('.discounts-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-btn--prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-btn--next"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
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

  $('.product-top__input').styler();

  const button = document.querySelector('.header__btn--search');
  const open = document.querySelector('.menu');
  const close = document.querySelector('.menu-mobile__close');

  button.addEventListener('click', () => {
    $('.form').toggleClass('form--open');
  });

  open.addEventListener('click', () => {
    $('.menu-mobile').toggleClass('menu-mobile--active');
  });

  close.addEventListener('click', () => {
    $('.menu-mobile').removeClass('menu-mobile--active');
    $('.overlay').removeClass('overlay--active');
  });

  $('.menu').on('click', function () {
    $('.overlay').toggleClass('overlay--active');
  });

  $('.catalog-product__text').on('click', function () {
    $('.catalog-product__text').toggleClass('catalog-product__text--active');
    $('.catalog-product__list').toggleClass('catalog-product__list--active');
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