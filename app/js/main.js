$(function () {
  $('.discounts-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-btn--prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-btn--next"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [{
      breakpoint: 1024,
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
  $('.form-check__item').styler();

  var $inputFrom = $(".price-form__from");
  var $inputTo = $(".price-form__to");
  var instance;
  var from = 0;
  var to = 0;
  var min = 0;
  var max = 1500;

  $('.price-form__range').ionRangeSlider({
    type: "double",
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });

  instance = $('.price-form__range').data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);

    $inputFrom.on("change", function () {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val
      });

      $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
      var val = $(this).prop("value");

      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val
      });

      $(this).prop("value", val);
    });
  }

  const categories = document.querySelector('.categories-filter__btn');
  categories.addEventListener('click', () => {
    $('.categories-filter__list').toggleClass('categories-filter__list--open');
    $('.categories-filter__btn').toggleClass('categories-filter__btn--open');
  });

  const offers = document.querySelector('.offers__btn');
  offers.addEventListener('click', () => {
    $('.offers__form').toggleClass('offers__form--open');
    $('.offers__btn').toggleClass('offers__btn--open');
  });

  const brand = document.querySelector('.brand__btn');
  brand.addEventListener('click', () => {
    $('.brand__form').toggleClass('brand__form--open');
    $('.brand__btn').toggleClass('brand__btn--open');
  });

  const price = document.querySelector('.price__btn');
  price.addEventListener('click', () => {
    $('.price-form').toggleClass('price-form--open');
    $('.price__btn').toggleClass('price__btn--open');
  });

  const button = document.querySelector('.header__btn--search');
  button.addEventListener('click', () => {
    $('.form').toggleClass('form--open');
  });

  const open = document.querySelector('.header__burger');
  open.addEventListener('click', () => {
    $('.menu-mobile').toggleClass('menu-mobile--active');
    $('.overlay').toggleClass('overlay--active');
  });

  const close = document.querySelector('.menu-mobile__close');
  close.addEventListener('click', () => {
    $('.menu-mobile').removeClass('menu-mobile--active');
    $('.overlay').removeClass('overlay--active');
  });

  $('.catalog-product__btn').on('click', function () {
    $('.catalog-product__btn').toggleClass('catalog-product__btn--active');
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