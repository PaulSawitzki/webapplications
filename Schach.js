  var y= 0;
  var i= 0;
  var x =0;
function Bretterzeugen (){
  var container = werkzeug("#container");
  var a = werkzeug("#1");
  var b = werkzeug("#2");
  var c = werkzeug("#3");
  var d = werkzeug("#4");
  var e = werkzeug("#5");
  var f = werkzeug("#6");
  var g = werkzeug("#7");
  var h = werkzeug("#8");
  x++;
  y++;
  i++;
  werkzeug("#auswahlfeld").click(auswahl)
  console.log(y);
   if(y<9){
  var element = werkzeug('<tr id="'+y+'"></tr>')
  element.appendTo(container);
  werkzeug.start(Bretterzeugen)
}
if(i<10){
  var td= werkzeug('<td id="'+"o"+i+'"></td>')
  if((i%2) == 0){
td.addClass("black")
  }
  td.addClass("td");
  td.appendTo(a);
  werkzeug.start(Bretterzeugen)
}
if(i<19&&i>10){
  var td= werkzeug('<td id="'+"o"+i+'"></td>')
  if((i%2) == 0){
td.addClass("black")
  }
  td.addClass("td");
  td.appendTo(b);
  werkzeug.start(Bretterzeugen)
}
if(i<28&&i>19){
  var td= werkzeug('<td id="'+"o"+i+'"></td>')
  if((i%2) == 0){
td.addClass("black")
  }
  td.addClass("td");
  td.appendTo(c);
  werkzeug.start(Bretterzeugen)
}
if(i<37&&i>28){
  var td= werkzeug('<td id="'+"o"+i+'"></td>')
  if((i%2) == 0){
td.addClass("black")
  }
  td.addClass("td");
  td.appendTo(d);
  werkzeug.start(Bretterzeugen)
}
if(i<46&&i>37){
  var td= werkzeug('<td id="'+"o"+i+'"></td>')
  if((i%2) == 0){
td.addClass("black")
  }
  td.addClass("td");
  td.appendTo(e);
  werkzeug.start(Bretterzeugen)
}
if(i<55&&i>46){
  var td= werkzeug('<td id="'+"o"+i+'"></td>')
  if((i%2) == 0){
td.addClass("black")
  }
  td.addClass("td");
  td.appendTo(f);
  werkzeug.start(Bretterzeugen)
}
if(i<64&&i>55){
  var td= werkzeug('<td id="'+"o"+i+'"></td>')
  if((i%2) == 0){
td.addClass("black")
  }
  td.addClass("td");
  td.appendTo(g);
  werkzeug.start(Bretterzeugen)

}
if(i<73&&i>64){
  var td= werkzeug('<td id="'+"o"+i+'"></td>')
  if((i%2) == 0){
td.addClass("black")
  }
  td.addClass("td");
  td.appendTo(h);
  werkzeug.start(Bretterzeugen)
}
}
function auswahl(event){
  var auswahlfeld=werkzeug("#auswahlfeld");
  var selected = werkzeug (event.target);
  var bu1 = werkzeug("#bu1")
  var bu2 = werkzeug("#bu2")
  var td=werkzeug("td")
  var f = werkzeug("td.active2")
  var a = werkzeug("td.active")
  a.html("K")
  f.html("L")
  if(selected.is(bu1)){
    werkzeug.start(activkönig)
  }
  if(selected.is(bu2)){
    werkzeug.start(activläufer)
  }
}
function activkönig(){
var container = werkzeug("#container");
werkzeug("td").click(König)
var b=werkzeug("td.nix")
b.html("")
}
function activläufer(){
var container = werkzeug("#container");
werkzeug("td").click(Läufer)
var b=werkzeug("td.nix")
b.html("")
}
function König(event){
  var td=werkzeug("td")
  td.addClass("nix")
  var clicked=werkzeug(event.target)
  if (clicked.hasClass("active")){
    td.removeClass("active");
  }
  if(clicked.is("#o2")){
  werkzeug("#o2").addClass("active").removeClass("nix")
}
if(clicked.is("#o3")){
werkzeug("#o3").addClass("active").removeClass("nix")
}
if(clicked.is("#o4")){
werkzeug("#o4").addClass("active").removeClass("nix");
}
if(clicked.is("#o5")){
werkzeug("#o5").addClass("active").removeClass("nix")
}
if(clicked.is("#o6")){
werkzeug("#o6").addClass("active").removeClass("nix")
}
if(clicked.is("#o7")){
werkzeug("#o7").addClass("active").removeClass("nix")
}
if(clicked.is("#o8")){
werkzeug("#o8").addClass("active").removeClass("nix")
}
if(clicked.is("#o9")){
werkzeug("#o9").addClass("active").removeClass("nix")
}
if(clicked.is("#o10")){
werkzeug("#o10").addClass("active").removeClass("nix")
}
if(clicked.is("#o11")){
werkzeug("#o11").addClass("active").removeClass("nix")
}
if(clicked.is("#o12")){
werkzeug("#o12").addClass("active").removeClass("nix")
}
if(clicked.is("#o13")){
werkzeug("#o13").addClass("active").removeClass("nix")
}
if(clicked.is("#o14")){
werkzeug("#o14").addClass("active").removeClass("nix")
}
if(clicked.is("#o15")){
werkzeug("#o15").addClass("active").removeClass("nix")
}
if(clicked.is("#o16")){
werkzeug("#o16").addClass("active").removeClass("nix")
}
if(clicked.is("#o17")){
werkzeug("#o17").addClass("active").removeClass("nix")
}
if(clicked.is("#o18")){
werkzeug("#o18").addClass("active").removeClass("nix")
}
if(clicked.is("#o19")){
werkzeug("#o19").addClass("active").removeClass("nix")
}
if(clicked.is("#o20")){
werkzeug("#o20").addClass("active").removeClass("nix")
}
if(clicked.is("#o21")){
werkzeug("#o21").addClass("active").removeClass("nix")
}
if(clicked.is("#o22")){
werkzeug("#o22").addClass("active").removeClass("nix")
}
if(clicked.is("#o23")){
werkzeug("#o23").addClass("active").removeClass("nix")
}
if(clicked.is("#o24")){
werkzeug("#o24").addClass("active").removeClass("nix")
}
if(clicked.is("#o25")){
werkzeug("#o25").addClass("active").removeClass("nix")
}
if(clicked.is("#o26")){
werkzeug("#o26").addClass("active").removeClass("nix")
}
if(clicked.is("#o27")){
werkzeug("#o27").addClass("active").removeClass("nix")
}
if(clicked.is("#o28")){
werkzeug("#o28").addClass("active").removeClass("nix")
}
if(clicked.is("#o29")){
werkzeug("#o29").addClass("active").removeClass("nix")
}
if(clicked.is("#o30")){
werkzeug("#o30").addClass("active").removeClass("nix")
}
if(clicked.is("#o31")){
werkzeug("#o31").addClass("active").removeClass("nix")
}
if(clicked.is("#o32")){
werkzeug("#o32").addClass("active").removeClass("nix")
}
if(clicked.is("#o33")){
werkzeug("#o33").addClass("active").removeClass("nix")
}
if(clicked.is("#o34")){
werkzeug("#o34").addClass("active").removeClass("nix")
}
if(clicked.is("#o35")){
werkzeug("#o35").addClass("active").removeClass("nix")
}
if(clicked.is("#o36")){
werkzeug("#o36").addClass("active").removeClass("nix")
}
if(clicked.is("#o37")){
werkzeug("#o37").addClass("active").removeClass("nix")
}
if(clicked.is("#o38")){
werkzeug("#o38").addClass("active").removeClass("nix")
}
if(clicked.is("#o39")){
werkzeug("#o39").addClass("active").removeClass("nix")
}
if(clicked.is("#o40")){
werkzeug("#o40").addClass("active").removeClass("nix")
}
if(clicked.is("#o41")){
werkzeug("#o41").addClass("active").removeClass("nix")
}
if(clicked.is("#o42")){
werkzeug("#o42").addClass("active").removeClass("nix")
}
if(clicked.is("#o43")){
werkzeug("#o43").addClass("active").removeClass("nix")
}
if(clicked.is("#o44")){
werkzeug("#o44").addClass("active").removeClass("nix")
}
if(clicked.is("#o45")){
werkzeug("#o45").addClass("active").removeClass("nix")
}
if(clicked.is("#o46")){
werkzeug("#o46").addClass("active").removeClass("nix")
}
if(clicked.is("#o47")){
werkzeug("#o47").addClass("active").removeClass("nix")
}
if(clicked.is("#o48")){
werkzeug("#o48").addClass("active").removeClass("nix")
}
if(clicked.is("#o49")){
werkzeug("#o49").addClass("active").removeClass("nix")
}
if(clicked.is("#o50")){
werkzeug("#o50").addClass("active").removeClass("nix")
}
if(clicked.is("#o51")){
werkzeug("#o51").addClass("active").removeClass("nix")
}
if(clicked.is("#o52")){
werkzeug("#o52").addClass("active").removeClass("nix")
}
if(clicked.is("#o53")){
werkzeug("#o53").addClass("active").removeClass("nix")
}
if(clicked.is("#o54")){
werkzeug("#o54").addClass("active").removeClass("nix")
}
if(clicked.is("#o55")){
werkzeug("#o55").addClass("active").removeClass("nix")
}
if(clicked.is("#o56")){
werkzeug("#o56").addClass("active").removeClass("nix")
}
if(clicked.is("#o57")){
werkzeug("#o57").addClass("active").removeClass("nix")
}
if(clicked.is("#o58")){
werkzeug("#o58").addClass("active").removeClass("nix")
}
if(clicked.is("#o59")){
werkzeug("#o59").addClass("active").removeClass("nix")
}
if(clicked.is("#o60")){
werkzeug("#o60").addClass("active").removeClass("nix")
}
if(clicked.is("#o61")){
werkzeug("#o61").addClass("active").removeClass("nix")
}
if(clicked.is("#o62")){
werkzeug("#o62").addClass("active").removeClass("nix")
}
if(clicked.is("#o63")){
werkzeug("#o63").addClass("active").removeClass("nix")
}
if(clicked.is("#o64")){
werkzeug("#o64").addClass("active").removeClass("nix")
}
if(clicked.is("#o65")){
werkzeug("#o65").addClass("active").removeClass("nix")
}
if(clicked.is("#o66")){
werkzeug("#o66").addClass("active").removeClass("nix")
}
if(clicked.is("#o67")){
werkzeug("#o67").addClass("active").removeClass("nix")
}
if(clicked.is("#o68")){
werkzeug("#o68").addClass("active").removeClass("nix")
}
if(clicked.is("#o69")){
werkzeug("#o69").addClass("active").removeClass("nix")
}
if(clicked.is("#o70")){
werkzeug("#o70").addClass("active").removeClass("nix")
}
if(clicked.is("#o71")){
werkzeug("#o71").addClass("active").removeClass("nix")
}
if(clicked.is("#o72")){
werkzeug("#o72").addClass("active").removeClass("nix")
}
if(clicked.is("#o73")){
werkzeug("#o73").addClass("active").removeClass("nix")
}
if(clicked.is("#o74")){
werkzeug("#o74").addClass("active").removeClass("nix")
}
if(clicked.is("#o75")){
werkzeug("#o75").addClass("active").removeClass("nix")
}
werkzeug.start(auswahl)
}
function Läufer(event){
  var td=werkzeug("td")
  td.addClass("nix")
  var clicked=werkzeug(event.target)
  if (clicked.hasClass("active2")){
    td.removeClass("active2");
  }
  if(clicked.is("#o2")){
  werkzeug("#o2").addClass("active2").removeClass("nix")
}
if(clicked.is("#o3")){
werkzeug("#o3").addClass("active2").removeClass("nix")
}
if(clicked.is("#o4")){
werkzeug("#o4").addClass("active2").removeClass("nix");
}
if(clicked.is("#o5")){
werkzeug("#o5").addClass("active2").removeClass("nix")
}
if(clicked.is("#o6")){
werkzeug("#o6").addClass("active2").removeClass("nix")
}
if(clicked.is("#o7")){
werkzeug("#o7").addClass("active2").removeClass("nix")
}
if(clicked.is("#o8")){
werkzeug("#o8").addClass("active2").removeClass("nix")
}
if(clicked.is("#o9")){
werkzeug("#o9").addClass("active2").removeClass("nix")
}
if(clicked.is("#o10")){
werkzeug("#o10").addClass("active2").removeClass("nix")
}
if(clicked.is("#o11")){
werkzeug("#o11").addClass("active2").removeClass("nix")
}
if(clicked.is("#o12")){
werkzeug("#o12").addClass("active2").removeClass("nix")
}
if(clicked.is("#o13")){
werkzeug("#o13").addClass("active2").removeClass("nix")
}
if(clicked.is("#o14")){
werkzeug("#o14").addClass("active2").removeClass("nix")
}
if(clicked.is("#o15")){
werkzeug("#o15").addClass("active2").removeClass("nix")
}
if(clicked.is("#o16")){
werkzeug("#o16").addClass("active2").removeClass("nix")
}
if(clicked.is("#o17")){
werkzeug("#o17").addClass("active2").removeClass("nix")
}
if(clicked.is("#o18")){
werkzeug("#o18").addClass("active2").removeClass("nix")
}
if(clicked.is("#o19")){
werkzeug("#o19").addClass("active2").removeClass("nix")
}
if(clicked.is("#o20")){
werkzeug("#o20").addClass("active2").removeClass("nix")
}
if(clicked.is("#o21")){
werkzeug("#o21").addClass("active2").removeClass("nix")
}
if(clicked.is("#o22")){
werkzeug("#o22").addClass("active2").removeClass("nix")
}
if(clicked.is("#o23")){
werkzeug("#o23").addClass("active2").removeClass("nix")
}
if(clicked.is("#o24")){
werkzeug("#o24").addClass("active2").removeClass("nix")
}
if(clicked.is("#o25")){
werkzeug("#o25").addClass("active2").removeClass("nix")
}
if(clicked.is("#o26")){
werkzeug("#o26").addClass("active2").removeClass("nix")
}
if(clicked.is("#o27")){
werkzeug("#o27").addClass("active2").removeClass("nix")
}
if(clicked.is("#o28")){
werkzeug("#o28").addClass("active2").removeClass("nix")
}
if(clicked.is("#o29")){
werkzeug("#o29").addClass("active2").removeClass("nix")
}
if(clicked.is("#o30")){
werkzeug("#o30").addClass("active2").removeClass("nix")
}
if(clicked.is("#o31")){
werkzeug("#o31").addClass("active2").removeClass("nix")
}
if(clicked.is("#o32")){
werkzeug("#o32").addClass("active2").removeClass("nix")
}
if(clicked.is("#o33")){
werkzeug("#o33").addClass("active2").removeClass("nix")
}
if(clicked.is("#o34")){
werkzeug("#o34").addClass("active2").removeClass("nix")
}
if(clicked.is("#o35")){
werkzeug("#o35").addClass("active2").removeClass("nix")
}
if(clicked.is("#o36")){
werkzeug("#o36").addClass("active2").removeClass("nix")
}
if(clicked.is("#o37")){
werkzeug("#o37").addClass("active2").removeClass("nix")
}
if(clicked.is("#o38")){
werkzeug("#o38").addClass("active2").removeClass("nix")
}
if(clicked.is("#o39")){
werkzeug("#o39").addClass("active2").removeClass("nix")
}
if(clicked.is("#o40")){
werkzeug("#o40").addClass("active2").removeClass("nix")
}
if(clicked.is("#o41")){
werkzeug("#o41").addClass("active2").removeClass("nix")
}
if(clicked.is("#o42")){
werkzeug("#o42").addClass("active2").removeClass("nix")
}
if(clicked.is("#o43")){
werkzeug("#o43").addClass("active2").removeClass("nix")
}
if(clicked.is("#o44")){
werkzeug("#o44").addClass("active2").removeClass("nix")
}
if(clicked.is("#o45")){
werkzeug("#o45").addClass("active2").removeClass("nix")
}
if(clicked.is("#o46")){
werkzeug("#o46").addClass("active2").removeClass("nix")
}
if(clicked.is("#o47")){
werkzeug("#o47").addClass("active2").removeClass("nix")
}
if(clicked.is("#o48")){
werkzeug("#o48").addClass("active2").removeClass("nix")
}
if(clicked.is("#o49")){
werkzeug("#o49").addClass("active2").removeClass("nix")
}
if(clicked.is("#o50")){
werkzeug("#o50").addClass("active2").removeClass("nix")
}
if(clicked.is("#o51")){
werkzeug("#o51").addClass("active2").removeClass("nix")
}
if(clicked.is("#o52")){
werkzeug("#o52").addClass("active2").removeClass("nix")
}
if(clicked.is("#o53")){
werkzeug("#o53").addClass("active2").removeClass("nix")
}
if(clicked.is("#o54")){
werkzeug("#o54").addClass("active2").removeClass("nix")
}
if(clicked.is("#o55")){
werkzeug("#o55").addClass("active2").removeClass("nix")
}
if(clicked.is("#o56")){
werkzeug("#o56").addClass("active2").removeClass("nix")
}
if(clicked.is("#o57")){
werkzeug("#o57").addClass("active2").removeClass("nix")
}
if(clicked.is("#o58")){
werkzeug("#o58").addClass("active2").removeClass("nix")
}
if(clicked.is("#o59")){
werkzeug("#o59").addClass("active2").removeClass("nix")
}
if(clicked.is("#o60")){
werkzeug("#o60").addClass("active2").removeClass("nix")
}
if(clicked.is("#o61")){
werkzeug("#o61").addClass("active2").removeClass("nix")
}
if(clicked.is("#o62")){
werkzeug("#o62").addClass("active2").removeClass("nix")
}
if(clicked.is("#o63")){
werkzeug("#o63").addClass("active2").removeClass("nix")
}
if(clicked.is("#o64")){
werkzeug("#o64").addClass("active2").removeClass("nix")
}
if(clicked.is("#o65")){
werkzeug("#o65").addClass("active2").removeClass("nix")
}
if(clicked.is("#o66")){
werkzeug("#o66").addClass("active2").removeClass("nix")
}
if(clicked.is("#o67")){
werkzeug("#o67").addClass("active2").removeClass("nix")
}
if(clicked.is("#o68")){
werkzeug("#o68").addClass("active2").removeClass("nix")
}
if(clicked.is("#o69")){
werkzeug("#o69").addClass("active2").removeClass("nix")
}
if(clicked.is("#o70")){
werkzeug("#o70").addClass("active2").removeClass("nix")
}
if(clicked.is("#o71")){
werkzeug("#o71").addClass("active2").removeClass("nix")
}
if(clicked.is("#o72")){
werkzeug("#o72").addClass("active2").removeClass("nix")
}
if(clicked.is("#o73")){
werkzeug("#o73").addClass("active2").removeClass("nix")
}
if(clicked.is("#o74")){
werkzeug("#o74").addClass("active2").removeClass("nix")
}
if(clicked.is("#o75")){
werkzeug("#o75").addClass("active2").removeClass("nix")
}
werkzeug.start(auswahl)

}


werkzeug.start(Bretterzeugen)