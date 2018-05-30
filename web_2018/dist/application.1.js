"use strict";
let ms1;
let ms2;
let level = 1;
var score = 0;
jQuery("#next").click(geschafft);
function all() {
    jQuery("#mitte").show();
    jQuery("#s").html("score=" + score);
    jQuery("#next").hide();
    jQuery("#again").hide();
    jQuery("#e").html(`Min:${300 * level}km/h`);
    let htmlForTable = "";
    let htmlForTable2 = "";
    let htmlForTable3 = "";
    let htmlForTable4 = "";
    let htmlForTable5 = "";
    let htmlForTable6 = "";
    let htmlForTable7 = "";
    for (let i = 1; i < 7; i++) {
        htmlForTable = htmlForTable + `<td id="a${i}"></td>`;
    }
    for (let p = 1; p < 7; p++) {
        htmlForTable2 = htmlForTable2 + `<td id="a${p + 6}"></td>`;
    }
    for (let t = 1; t < 7; t++) {
        htmlForTable3 = htmlForTable3 + `<td id="a${t + 12}"></td>`;
    }
    for (let r = 1; r < 7; r++) {
        htmlForTable4 = htmlForTable4 + `<td id="a${r + 18}"></td>`;
    }
    for (let s = 1; s < 7; s++) {
        htmlForTable5 = htmlForTable5 + `<td id="a${s + 24}"></td>`;
    }
    for (let u = 1; u < 7; u++) {
        htmlForTable6 = htmlForTable6 + `<td id="a${u + 30}"></td>`;
    }
    for (let v = 1; v < 7; v++) {
        htmlForTable7 = htmlForTable7 + `<td id="a${v + 36}"></td>`;
    }
    var min = 1;
    var max = 36;
    var x = Math.round(Math.random() * (max - min)) + min;
    jQuery("#a").html("<td class='we'/>" + htmlForTable);
    jQuery("#b").html("<td class='we'/>" + htmlForTable2);
    jQuery("#c").html("<td class='we'/>" + htmlForTable3);
    jQuery("#d").html("<td id='unten'>Ochse</td>" + htmlForTable4 + "<td id='oben'>Mauer</td>");
    jQuery("#h").html("<td class='we'/>" + htmlForTable5);
    jQuery("#f").html("<td class='we'/>" + htmlForTable6);
    jQuery("#g").html("<td class='we'/>" + htmlForTable7);
    console.log("Hi");
    jQuery("#unten").hover(start);
}
jQuery("#unten").hover(all);
function start() {
    let zeit = new Date();
    ms1 = zeit.getTime();
    jQuery("#oben").hover(q);
    function q() {
        console.log(`ms1:${ms1},ms2:${ms2}`);
        let zeit2 = new Date();
        ms2 = zeit2.getTime();
        let ergebnis = 1200 - (ms2 - ms1);
        if (ergebnis < 0) {
            ergebnis = 0;
        }
        let min = 300 * level;
        jQuery("#e").html(`${ergebnis} ḱm/h`);
        jQuery("#mitte").hide();
        if (ergebnis >= min) {
            jQuery("#next").show();
        }
        else {
            jQuery("#again").show();
            jQuery("#again").click(nochmal);
        }
    }
}
function nochmal() {
    level = 1;
    score = 0;
    jQuery(all);
}
function geschafft() {
    score++;
    if (level == 3) {
        level = level - 3;
    }
    if (level < 3) {
        level++;
    }
    console.log(level);
    jQuery(all);
}
if (level == 1) {
    jQuery(all);
}
