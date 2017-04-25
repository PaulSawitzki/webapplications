  var Punkte = 0;
function programm(){
  werkzeug("#Auswahlfeld").click(frage)
}
function frage(event){
  var min=1;
  var max=2;
  var p = werkzeug("#p")
  var frage = werkzeug("#frage")
  var richtig = werkzeug("#richtig")
  var falsch1 = werkzeug("#falsch1")
  var falsch2 = werkzeug("#falsch2")
  var falsch3 = werkzeug("#falsch3")
  var fragen = werkzeug("td")
  var clicked = werkzeug(event.target)
  var x = Math.round(Math.random() * (max - min)) + min;
  if(x==1){
  richtig.html("Paul")
  falsch1.html("Jürgen")
  falsch2.html("Peter")
  falsch3.html("Gregor")
  frage.html("Wie heiße ich?")
  werkzeug.shuffle(fragen)
}
if(x==2){
richtig.html("Deutschland")
falsch1.html("Island")
falsch2.html("Italien")
falsch3.html("Frankreich")
frage.html("Woher komme ich?")
werkzeug.shuffle(fragen)
}
if (clicked.is(richtig)){
  Punkte ++;
   p.html(Punkte)

}
if (clicked.is(falsch1)){
   p.html(Punkte)

}
if (clicked.is(falsch2)){
   p.html(Punkte)

}
if (clicked.is(falsch3)){
   p.html(Punkte)

}
}
werkzeug.start(programm)
