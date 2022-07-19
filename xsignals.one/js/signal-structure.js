$(() => {
  let tabs = [
    $("#signal-panel-tab"),
    $("#fast-buttons-tab"),
    $("#trading-signal-panel-tab"),
    $("#cci-tab"),
    $("#rsi-tab"),
    $("#support-resistance-tab")
  ];
  let tabsContent = [
    $("#signal-panel-content"),
    $("#fast-buttons-button-list"),
    $("#trading-signal-panel-content")
  ]
  let makeButtonActiveClass = "signal-structure__bottom-panel__tabs--item---active";
  let signalPanelButtons = [$(".signal-structure__panel__buttons-section--item")];
  let signalPanelButtonsActiveClass = "signal-structure__panel__buttons-section--item";
  let selectedTab = tabs[0];
  function changeTab(tab) {
    selectedTab.removeClass(makeButtonActiveClass);
    selectedTab = tab;
    selectedTab.addClass(makeButtonActiveClass);
  }
  function toggleButtons(toggle) {
    if (toggle === "On") {
      for (let i = 0; i < signalPanelButtons.length; i++) {
        signalPanelButtons[i].addClass(signalPanelButtonsActiveClass);
      }
    } else if (toggle === "Off") {
      for (let i = 0; i < signalPanelButtons.length; i++) {
        signalPanelButtons[i].removeClass(signalPanelButtonsActiveClass);
      }
    }

  }
  function hideAllTabsContent() {
    for (let i = 0; i < tabsContent.length; i++) {
      tabsContent[i].hide();
    }
  }
  //HERE STARTS THE PART WITH BUTTONS
  let buttons = [
    $(".panel__symbol-item"),
    $(".panel__signal-power"),
    $(".panel__green-red"),
    $(".panel__sell-text--big"),
    $(".panel__sell-text--small"),
    $("#0800"),
    $("#5min"),
    $("#srt"),
    $(".panel__last-row"),
    $(".signal-sturcture__panel__fast-buttons-section--item:nth-child(1)"),
    $(".signal-sturcture__panel__fast-buttons-section--item:nth-child(2)"),
    $(".signal-sturcture__panel__fast-buttons-section--item:nth-child(3)"),
    $(".signal-sturcture__panel__fast-buttons-section--item:nth-child(4)"),
    $(".signal-sturcture__panel__fast-buttons-section--item:nth-child(5)"),
    $(".trading-signal-panel__top-section"),
    $(".trading-signal-panel__bottom-section--item:nth-child(1)"),
    $(".trading-signal-panel__bottom-section--item:nth-child(2)")
  ];
  let descriptionElement = $(".signal-structure__panel__description-field");
  let descriptions = [
    "Financial asset",
    "Signal power",
    "Stop Loss and Take Profit levels",
    "BUY or SELL",
    "Current price quote",
    "Time since the appearance of the signal",
    "Timeframe of the studied chart",
    "Signal generation algorithm",
    "Heatmaps",
    "Signal change only for adaptive strategy",
    "Chart for the selected asset",
    "Hide/unhide trading signal panel",
    "Open dashboards",
    "Button preset 2,3,4",
    "Fast buttons for placing an automatic order",
    "Take Profit to Stop Loss Ratio",
    "Profit Factor Values"
  ];
  let activeButtonClass = "signal-structure__active-tab";
  let selectedButton = buttons[0];
  function makeButtonActive(button) {
    selectedButton.removeClass(activeButtonClass);
    selectedButton = button;
    selectedButton.addClass(activeButtonClass);
  }
  function updateText(text) {
    descriptionElement.text(text);
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].on("click", () => {
      updateText(descriptions[i]);
      makeButtonActive(buttons[i]);
    });
  }
  tabs[0].on("click", () => {
    changeTab(tabs[0]);
    hideAllTabsContent();
    toggleButtons("On");
    tabsContent[0].fadeIn();
    for (let i = 0; i < 9; i++) {
      buttons[i].on("click", () => {
        updateText(descriptions[i]);
        makeButtonActive(buttons[i]);
      });
    }
  });
  tabs[1].on("click", () => {
    changeTab(tabs[1]);
    hideAllTabsContent();
    toggleButtons("Off");
    tabsContent[0].fadeIn();
    tabsContent[1].fadeIn();
    for (let i = 0; i < 9; i++) {
      buttons[i].off("click");
    }
  });
  tabs[2].on("click", () => {
    changeTab(tabs[2]);
    hideAllTabsContent();
    tabsContent[2].fadeIn();
    for (let i = 0; i < 9; i++) {
      buttons[i].on("click", () => {
        updateText(descriptions[i]);
        makeButtonActive(buttons[i]);
      });
    }
  });
});