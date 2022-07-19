$(document).ready(function(){
  
  $('.writings__selector-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    variableWidth: true,
    centerMode: true,
  });
  $('.writings__selector--arrow-right').click(() => {
    $('.writings__selector-content').slick("slickNext");
  });
  $('.writings__selector--arrow-left').click(() => {
    $('.writings__selector-content').slick("slickPrev")
  });
});