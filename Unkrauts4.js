var Zahl = 0;
var min = 3000
var max = 10000
var verloren = false;
function programm(){
werkzeug("#p").show();
werkzeug("#spielfeld").show();
werkzeug("#menue").hide();
werkzeug("#verloren").hide();
var spielfeld = werkzeug("#spielfeld");
for (var i = 0; i < 4; i++){
  var tr = werkzeug("<tr></tr>");
  tr.appendTo(spielfeld);
  for (var j = 0; j < 4; j++){
    var td = werkzeug("<td class='c1'>D</td>");
    var random = Math.round(Math.random() * (max - min)) + min;
    setTimeout(zufall, random, td);
    td.click(resetCss);
    td.appendTo(tr);
  }
}
}

function resetCss(data){
if (!verloren){
werkzeug(data.target).attr("class", "c1");
var p = werkzeug("#p")
Zahl++
p.html(Zahl)
}
}
function zufall(element){
var cssClass = element.attr("class")
var cssClassNumber = cssClass.substring(1,2)
if(cssClassNumber < 4){
var number = Number(cssClassNumber);
element.removeClass(cssClass);
number++;
element.addClass("c" + number);
var random = Math.round(Math.random() * (max - min)) + min;
max=max-44
setTimeout(zufall, random, element);
}
else{
verloren = true;
werkzeug("#verloren").show();
}
}
werkzeug.start(programm)
