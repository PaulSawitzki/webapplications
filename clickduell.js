var ZahlSpieler1 = 0;
var ZahlSpieler2 = 0;
function programm(){
  werkzeug("#Auswahlfeld").click(click)
}
function click(event){
  var button1 = werkzeug("#spieler1")
  var button2 = werkzeug("#spieler2")
  var clicked = werkzeug(event.target)
  var p = werkzeug("#p")
  var q = werkzeug("#q")
  if (clicked.is(button1)){
    ZahlSpieler1 ++;
    p.html(ZahlSpieler1)
  }
  if (clicked.is(button2)){
    ZahlSpieler2 ++;
    q.html(ZahlSpieler2)
  }
}
werkzeug.start(programm)
