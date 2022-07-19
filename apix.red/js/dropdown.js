function showDropdown(dropdown, button) {
  if ($(dropdown).css("display") === "none") {
    $(dropdown).fadeIn();
    $(button).addClass("apix__header__button--active");
  } else {
    $(dropdown).fadeOut();
    $(button).removeClass("apix__header__button--active");
  }
}