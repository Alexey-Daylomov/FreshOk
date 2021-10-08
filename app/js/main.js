$(function () {
  $('.discounts-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-gray-l"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg><use xlink:href="images/sprite.svg#arrow-gray-r"></use></svg></button>',
  });

  $('.partners__list').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    autoplay: true,
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