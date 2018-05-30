"use strict";
let z = 783;
let y = 350;
let h = 10;
let p = 10;
function all() {
    jQuery("#container").html(`<td style="position:absolute; top:${h}px; left:${p}px;"></td><td style="position:absolute; top:${y}px; left:${z}px; background-color:red;"></td>`);
    document.onkeydown = function (event) {
        let max = 4;
        let min = 1;
        let x = Math.round(Math.random() * (max - min)) + min;
        console.log(x);
        if (x == 1) {
            z = z + 20;
        }
        if (x == 2) {
            y = y + 20;
        }
        if (x == 3) {
            z = z - 20;
        }
        if (x == 4) {
            y = y - 20;
        }
        if (event.keyCode == 37) {
            p = p - 10;
        }
        if (event.keyCode == 38) {
            h = h - 10;
        }
        if (event.keyCode == 39) {
            p = p + 10;
        }
        if (event.keyCode == 40) {
            h = h + 10;
        }
        if (p > 1530) {
            p = 1530;
        }
        if (z > 1530) {
            z = 1530;
        }
        if (h > 690) {
            h = 690;
        }
        if (y > 690) {
            y = 690;
        }
        if (p < 11) {
            p = 11;
        }
        if (h < 11) {
            h = 11;
        }
        if (y < 11) {
            y = 11;
        }
        if (z < 11) {
            z = 11;
        }
        if (z - p > -60 && z - p < -22) {
            z = z - 13;
        }
        if (z - p > 60 && z - p < 22) {
            z = z + 13;
        }
        if (y - h > -60 && y - h < -22) {
            y = y - 13;
        }
        if (h - p > 60 && z - h < 22) {
            y = y + 13;
        }
        if (z - p > -20 && z - p < 20) {
            if (y - h > -20 && y - h < 20) {
                window.alert("WIN");
            }
        }
        jQuery("#container").html(`<td style="position:absolute; top:${h}px; left:${p}px;"></td><td style="position:absolute; top:${y}px; left:${z}px; background-color:red;"></td>`);
    };
}
jQuery(all);
