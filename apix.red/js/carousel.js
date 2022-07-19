$(document).ready(() => {
  $('.news__more__carousel-section').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    variableWidth: true,
  });
  $('#news__arrow-right').click(() => {
    $('.news__more__carousel-section').slick("slickNext");
  });
  $('#news__arrow-left').click(() => {
    $('.news__more__carousel-section').slick("slickPrev")
  })
});