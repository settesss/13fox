$(function () {

  // Слайдер для секции с преимуществами
  $('.opportunities__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false
  })

  $('#opportunities__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.opportunities__slider').slick('slickPrev')
  })

  $('#opportunities__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.opportunities__slider').slick('slickNext')
  })

  // Слайдер для секции с основными работами
  $('.phone-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false
  })

  $('#works__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.phone-slider').slick('slickPrev')
  })

  $('#works__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.phone-slider').slick('slickNext')
  })

  // Слайдер для секции с командой 
  $('.team-slider').slick({
    infinite: false,
    slidesToShow: 5,
    dots: true,
    appendDots: $('.team__dots'),
    centerMode: true,
    initialSlide: 3,
    arrows: false,
    swipe: true
  })

})