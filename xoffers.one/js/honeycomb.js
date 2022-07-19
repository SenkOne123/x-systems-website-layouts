function hideAllTabs() {
  $(".why-us__description-field").hide();
}

$("#geo").click(() => {
  hideAllTabs();
  $("#geo-text").fadeIn();
})
$("#traffic").click(() => {
  hideAllTabs();
  $("#traffic-text").fadeIn();
})
$("#trust").click(() => {
  hideAllTabs();
  $("#trust-text").fadeIn();
})
$("#profit").click(() => {
  hideAllTabs();
  $("#high-loot-text").fadeIn();
})
$("#support").click(() => {
  hideAllTabs();
  $("#247-text").fadeIn();
})
$("#cookies").click(() => {
  hideAllTabs();
  $("#cookies-text").fadeIn();
})
$("#promo").click(() => {
  hideAllTabs();
  $("#promo-text").fadeIn();
})
$("#payments").click(() => {
  hideAllTabs();
  $("#payments-text").fadeIn();
})