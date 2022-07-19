$(document).ready(() => { 
  let tabs = [
    $("#cci-tab"),
    $("#rsi-tab"),
    $("#support-resistance-tab")
  ];
  let content = [
    $("#algorithms_cci-text"),
    $("#algorithms_rci-text"),
    $("#algorithms_support-resistance-text")
  ];
  const pics = [
    $("#algorithms_cci-pic"),
    $("#algorithms_rci-pic"),
    $("#algorithms_support-resistance-pic")
  ];
  let makeButtonActiveClass = "algorithms__tabs-section__item--active";
  let selectedTab = tabs[0];
  function changeTab(tab) {
    selectedTab.removeClass(makeButtonActiveClass);
    selectedTab = tab;
    selectedTab.addClass(makeButtonActiveClass);
  }
  function hideAllTabsContent() {
    for (let i = 0; i < content.length; i++) {
      content[i].hide();
      pics[i].hide();
    }
  }
  tabs[0].click(() => {
    changeTab(tabs[0]);
    hideAllTabsContent();
    content[0].fadeIn();
    pics[0].fadeIn();
  });
  tabs[1].click(() => {
    changeTab(tabs[1]);
    hideAllTabsContent();
    content[1].fadeIn();
    pics[1].fadeIn();
  });
  tabs[2].click(() => {
    changeTab(tabs[2]);
    hideAllTabsContent();
    content[2].fadeIn();
    pics[2].fadeIn();
  });
});