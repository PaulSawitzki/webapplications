function programm(){
  werkzeug("#losButton").click(lotto);
}

function lotto(){


var min = 1;
var max = 49;
var p =0;
werkzeug("#q").hide();
var Zahl1 = werkzeug("#eingabefeld1").val();
var Zahl2 = werkzeug("#eingabefeld2").val();
var Zahl3 = werkzeug("#eingabefeld3").val();
var Zahl4 = werkzeug("#eingabefeld4").val();
var Zahl5 = werkzeug("#eingabefeld5").val();
var Zahl6 = werkzeug("#eingabefeld6").val();
console.log(Zahl1)
console.log(Zahl2)
var x = Math.round(Math.random() * (max - min)) + min;
console.log(x)
var x2 = Math.round(Math.random() * (max - min)) + min;
while (x2 == x){
  x2 = Math.round(Math.random() * (max - min)) + min;
}
console.log(x2)
var x3 = Math.round(Math.random() * (max - min)) + min;
while ((x3 == x) || (x3 == x2)){
  x3 = Math.round(Math.random() * (max - min)) + min;
}
console.log(x3)
var x4 = Math.round(Math.random() * (max - min)) + min;
while ((x4 == x) || (x4 == x2)||(x4 == x3)){
  x4 = Math.round(Math.random() * (max - min)) + min;
}
console.log(x4)
var x5 = Math.round(Math.random() * (max - min)) + min;
while ((x5 == x) || (x5 == x2)||(x5 == x3)||(x5 == x4)){
  x5 = Math.round(Math.random() * (max - min)) + min;
}
console.log(x5)
var x6 = Math.round(Math.random() * (max - min)) + min;
while ((x6 == x) || (x6 == x2)||(x6 == x3)||(x6 == x4)||(x6 == x5)){
  x6 = Math.round(Math.random() * (max - min)) + min;
}
console.log(x6)
var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
var a = werkzeug ("#a")
a.html(x)
var b = werkzeug ("#b")
b.html(x2)
var c = werkzeug ("#c")
c.html(x3)
var d = werkzeug ("#d")
d.html(x4)
var e = werkzeug ("#e")
e.html(x5)
var f = werkzeug ("#f")
f.html(x6)
//Entferrne erstmal alle x-Klassen
a.removeClass("x")
b.removeClass("x")
c.removeClass("x")
d.removeClass("x")
e.removeClass("x")
f.removeClass("x")
//fertig
if(Zahl1==Zahl2){
a.removeClass("x")
  werkzeug("#q").show();
}
if(Zahl1==Zahl3){
  werkzeug("#q").show();
}
if(Zahl1==Zahl4){
  werkzeug("#q").show();
}
if(Zahl1==Zahl5){
  werkzeug("#q").show();
}
if(Zahl1==Zahl6){
  werkzeug("#q").show();
}
if(Zahl2==Zahl3){
  werkzeug("#q").show();
}
if(Zahl2==Zahl4){
  werkzeug("#q").show();
}
if(Zahl2==Zahl5){
  werkzeug("#q").show();
}
if(Zahl2==Zahl6){
  werkzeug("#q").show();
}
if(Zahl3==Zahl4){
  werkzeug("#q").show();
}
if(Zahl3==Zahl5){
  werkzeug("#q").show();
}
if(Zahl3==Zahl6){
  werkzeug("#q").show();
}
if(Zahl4==Zahl5){
  werkzeug("#q").show();
}
if(Zahl4==Zahl6){
  werkzeug("#q").show();
}
if(Zahl5==Zahl6){
  werkzeug("#q").show();
}
if(x == Zahl1){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
a.addClass("x")
}
if(x2 == Zahl1){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
b.addClass("x")
}
if(x3 == Zahl1){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
c.addClass("x")
}
if(x4 == Zahl1){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
d.addClass("x")
}
if(x5 == Zahl1){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
e.addClass("x")
}
if(x6 == Zahl1){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
f.addClass("x")
}
if(x == Zahl2){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
a.addClass("x")
}
if(x2 == Zahl2){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
b.addClass("x")
}
if(x3 == Zahl2){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
c.addClass("x")
}
if(x4 == Zahl2){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
d.addClass("x")
}
if(x5 == Zahl2){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
e.addClass("x")
}
if(x6 == Zahl2){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
f.addClass("x")
}
if(x == Zahl3){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
a.addClass("x")
}
if(x2 == Zahl3){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
b.addClass("x")
}
if(x3 == Zahl3){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
c.addClass("x")
}
if(x4 == Zahl3){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
d.addClass("x")
}
if(x5 == Zahl3){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
e.addClass("x")
}
if(x6 == Zahl3){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
f.addClass("x")
}
if(x == Zahl4){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
a.addClass("x")
}
if(x2 == Zahl4){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
b.addClass("x")
}
if(x3 == Zahl4){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
c.addClass("x")
}
if(x4 == Zahl4){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
d.addClass("x")
}
if(x5 == Zahl4){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
e.addClass("x")
}
if(x6 == Zahl4){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
f.addClass("x")
}
if(x == Zahl5){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
a.addClass("x")
}
if(x2 == Zahl5){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
b.addClass("x")
}
if(x3 == Zahl5){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
c.addClass("x")
}
if(x4 == Zahl5){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
d.addClass("x")
}
if(x5 == Zahl5){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
e.addClass("x")
}
if(x6 == Zahl5){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
f.addClass("x")
}
if(x == Zahl6){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
a.addClass("x")
}
if(x2 == Zahl6){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
b.addClass("x")
}
if(x3 == Zahl6){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
c.addClass("x")
}
if(x4 == Zahl6){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
d.addClass("x")
}
if(x5 == Zahl6){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
e.addClass("x")
}
if(x6 == Zahl6){
  p ++;
  console.log(p)
  var Anzahl = werkzeug ("#Anzahl")
Anzahl.html(p)
f.addClass("x")
}
}
werkzeug.start(programm)
