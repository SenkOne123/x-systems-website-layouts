$(document).ready(() => {
  const lowClass = "pricing-table__headers--lower";
  const basic = $(".pricing-table--basic");
  const basicHeader = $(".pricing-table__header--basic");
  const premium = $(".pricing-table--premium");
  const premiumHeader = $(".pricing-table__header--premium");
  const ultimate = $(".pricing-table--ultimate");
  const ultimateHeader = $(".pricing-table__header--ultimate");
  if ($(window).width() <= 767 ) {
    ultimate.fadeOut(300);
    premium.fadeOut(300);
    function removeLowClass() {
      basicHeader.removeClass(lowClass);
      premiumHeader.removeClass(lowClass);
      ultimateHeader.removeClass(lowClass);
    }
    function removeAllRows() {
      basic.fadeOut();
      premium.fadeOut();
      ultimate.fadeOut();
    }
    basicHeader.click(() => {
      removeLowClass();
      premiumHeader.addClass(lowClass);
      ultimateHeader.addClass(lowClass);
      removeAllRows();
      basic.fadeIn();
    });
    premiumHeader.click(() => {
      removeLowClass();
      basicHeader.addClass(lowClass);
      ultimateHeader.addClass(lowClass);
      removeAllRows();
      premium.fadeIn();
    })
    ultimateHeader.click(() => {
      removeLowClass();
      premiumHeader.addClass(lowClass);
      basicHeader.addClass(lowClass);
      removeAllRows();
      ultimate.fadeIn();
    })
  }
})