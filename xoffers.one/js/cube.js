var cube = document.querySelector(".cube");
var slider = document.querySelector(".slider");
var currentClass = "";

// buttons to click

$(document).ready(() => {
  const tab_text = [
    $("#high-loot-text"),
    $("#traffic-text"),
    $("#geo-text"),
    $("#promo-text"),
    $("#trust-text"),
    $("#247-text"),
  ];

  let selected_tab = $("#high-loot-text");
  function hideAllTabs() {
    for (let i = 0; i < tab_text.length; i++) {
      tab_text[i].hide();
    }
  }
  $("#geo").click(() => {
    console.log("AAAA");
    hideAllTabs();
    selected_tab = tab_text[2];
    selected_tab.fadeIn();
  });
  $("#high-loot").click(() => {
    hideAllTabs();
    selected_tab = tab_text[0];
    selected_tab.fadeIn();
  });
  $("#traffic").click(() => {
    hideAllTabs();
    selected_tab = tab_text[1];
    selected_tab.fadeIn();
  });

  $("#promo").click(() => {
    hideAllTabs();
    selected_tab = tab_text[3];
    selected_tab.fadeIn();
  });
  $("#trust").click(() => {
    hideAllTabs();
    selected_tab = tab_text[4];
    selected_tab.fadeIn();
  });
  $("#247").click(() => {
    hideAllTabs();
    selected_tab = tab_text[5];
    selected_tab.fadeIn();
  });
  let side = 1;
  function changeInfo(currentSide) {
    /* var currentSliderValue = slider.value; */
    hideAllTabs();
    switch (currentSide.toString()) {
      case "1":
        $("#geo-text").fadeIn();
        break;
      case "2":
        $("#high-loot-text").fadeIn();
        break;
      case "3":
        $("#traffic-text").fadeIn();
        break;
      case "4":
        $("#247-text").fadeIn();
        break;
      case "5":
        $("#promo-text").fadeIn();
        break;
      case "6":
        $("#trust-text").fadeIn();
        break;
    }
  }

  $(".internal-face").addClass("internal-face--active-hover");

  function changeSide() {
    if (side === 6) {
      side = 1;
    } else {
      side += 1;
    }
    var showClass = "show-" + side;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;

    changeInfo(side);
    slider.value = side;
  }
  function sliderChangeSide() {
    var showClass = "show-" + slider.value;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;

    changeInfo(side);
  }
  // set initial side

  var startLoopingCube = setInterval(() => {
    changeSide();
  }, 7000);

  slider.addEventListener("input", sliderChangeSide);
  slider.onchange = function () {
    clearInterval(startLoopingCube);
  };
});
