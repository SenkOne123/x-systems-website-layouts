$(document).ready(() => {
  var activeNavigation = "how-it-works__navigation--active";
  var navPanel = $(".how-it-works__navigation-section");
  var tabs = 
  [$("#how-to-use-tab"),
  $("#signal-structure-tab"),
  $("#power-heatmaps-tab"),
  $("#profit-factor-tab"),
  $("#signal-algorithms-tab"),
  ];
  var selectedTab = null;
  //670
  // how to use position => 770 to 1686
  $(window).on("scroll", makeNavigationActive);
  function makeNavigationActive() {
    var scrollPos = $(window).scrollTop();
    /* console.log(scrollPos) */

    //FIX NAVIGATION POSITION
    if (scrollPos >= 670) {
      navPanel.addClass(activeNavigation);
    } else {
      if (navPanel.hasClass(activeNavigation)) {
        navPanel.removeClass(activeNavigation);
      }
    }
    if (scrollPos < 770) {
      selectedTab = null;
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].fadeIn();
      }
    }
    /* if ((scrollPos >= 770)&&(scrollPos < 1686)) {
      $("#how-to-use-tab").fadeOut();
    }
    if ((scrollPos >= 1686)&&(scrollPos < 2686)) {
      $("#how-to-use-tab").fadeIn();
      tabs[1].fadeOut();
    } */
  }
  
})