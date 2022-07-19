var acc = document.getElementsByClassName("table-accordion");
var i;
var j;


acc[0].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = document.getElementsByClassName('prime');
    var root1 = document.getElementsByTagName('tr')
    console.log(window.outerWidth <= 767)
    if (window.outerWidth <= 767) {
        for (i = 0; i < panel.length; i++) {
            if (panel[i].style.display === 'block') {
                panel[i].style.display = 'none'
            } else {
                panel[i].style.display = 'block'
            }
        }
    } else {
        for (i = 0; i < panel.length; i++) {
            if (panel[i].style.display === 'table-row') {
                panel[i].style.display = 'none'
            } else {
                panel[i].style.display = 'table-row'
            }
        }
    }
});
acc[1].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = document.getElementsByClassName('etoro');
    for (i = 0; i < panel.length; i++) {
        if (panel[i].style.display === 'table-row') {
            panel[i].style.display = 'none'
        } else {
            panel[i].style.display = 'table-row'
        }
    }
});
acc[2].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = document.getElementsByClassName('binance');
    for (i = 0; i < panel.length; i++) {
        if (panel[i].style.display === 'table-row') {
            panel[i].style.display = 'none'
        } else {
            panel[i].style.display = 'table-row'
        }
    }
    panel[i].style.width = '50%'
});
acc[3].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = document.getElementsByClassName('simplefx');
    for (i = 0; i < panel.length; i++) {
        if (panel[i].style.display === 'table-row') {
            panel[i].style.display = 'none'
        } else {
            panel[i].style.display = 'table-row'
        }
    }
    panel[i].style.width = '50%'
});
acc[4].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = document.getElementsByClassName('iq');
    for (i = 0; i < panel.length; i++) {
        if (panel[i].style.display === 'table-row') {
            panel[i].style.display = 'none'
        } else {
            panel[i].style.display = 'table-row'
        }
    }
    panel[i].style.width = '50%'
});

