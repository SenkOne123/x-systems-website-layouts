$(() => {
  $(window).on("scroll", () => {
    //1908 to
    var scrollPosition = $(window).scrollTop();
    var soaringClasses = ["soaring-devices--mac", "soaring-devices--iphone", "soaring-devices--tablet"];
    if (scrollPosition >= 1708) {
      if (!$("#any-device_tablet").hasClass(soaringClasses[2])) {
        $("#any-device_tablet").addClass(soaringClasses[2]);
      }
      if (!$("#any-device_mac_pic").hasClass(soaringClasses[0])) {
        $("#any-device_mac_pic").addClass(soaringClasses[0]);
      }
      if (!$("#any-device_iphone").hasClass(soaringClasses[1])) {
        $("#any-device_iphone").addClass(soaringClasses[1]);
      }
    }
  })
});