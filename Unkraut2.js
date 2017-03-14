var Punkt = 0;
function programm(){
  werkzeug("#Auswahlfeld").click(Punkte)
}
function Punkte(event){
  var clicked = werkzeug(event.target)
  var p = werkzeug("#p")
  var clicks = 0;
  if(clicked.hasClass("c1")){
    clicks ++
    console.log(clicks)
  }
  else if(clicked.hasClass("c2")){
    Punkt++
    p.html(Punkt)
    console.log(clicks)
  }
  else if(clicked.hasClass("c3")){
    Punkt++
    p.html(Punkt)
    console.log(clicks)
  }
  else if(clicked.hasClass("c4")){
    Punkt++
    p.html(Punkt)
    console.log(clicks)
  }
  else if(clicked.hasClass("c5")){
    Punkt++
    p.html(Punkt)
    console.log(clicks)
  }
}
werkzeug.start(programm)
