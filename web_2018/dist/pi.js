"use strict";
let ergebnis = 1;
function piRainer() {
    let xData = [];
    let yData = [];
    let minusOderPlus = true;
    for (let i = 3; i < 2000; i = i + 2) {
        if (minusOderPlus) {
            ergebnis = ergebnis - 1 / i;
        }
        else {
            ergebnis = ergebnis + 1 / i;
        }
        minusOderPlus = !minusOderPlus;
        let zwischenergebnis = 4 * ergebnis;
        xData.push(i);
        yData.push(zwischenergebnis);
    }
    let ctx = jQuery("#graph");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xData,
            datasets: [{ data: yData, pointRadius: 1 }],
            options: {}
        }
    });
}
function piPaul() {
    let x = 3;
    let ergebnis = 1;
    for (; x < 10000; x = x + 4) {
        let y = x + 2;
        ergebnis = ergebnis - 1 / x + 1 / y;
    }
    console.log(ergebnis * 4);
}
jQuery(piRainer);
