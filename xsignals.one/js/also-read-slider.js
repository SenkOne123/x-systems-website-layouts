$(() => {

  if ($(window).width() <= 767) {
    $("#cards").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
  });

  } else if ($(window).width() <= 1280) {
    $("#cards").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false
    });
  } else {
    $("#cards").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false
  })
  }
  $('#arrowRight').on("click", () => {
    $('#cards').slick("slickNext");
  });
  $('#arrowLeft').on("click", () => {
    $('#cards').slick("slickPrev");
  });

});