function programm(){
   werkzeug("#spielfeld").hide();
   werkzeug("#p").hide();
   werkzeug("#verloren").hide();
   werkzeug("#menue").click(auswahl)
}
function auswahl(event){
  var level1 = werkzeug("#s1")
  var level2 = werkzeug("#s2")
  var level3 = werkzeug("#s3")
  var level4 = werkzeug("#s4")
  var level5 = werkzeug("#s5")
  var level6 = werkzeug("#s6")
  var level7 = werkzeug("#s7")
  var level8 = werkzeug("#s8")
  var gedrückt = werkzeug(event.target)
//  var l1 = "<script src='clevel1.js' type='text/javascript'></script>"
  if (gedrückt.is(level1)){
//    var r = werkzeug("#r")
//    r.html(l1)
  werkzeug.getScript("Unkrauts1.js");
  }
  if (gedrückt.is(level2)){
  werkzeug.getScript("Unkrauts2.js");
  }
  if (gedrückt.is(level3)){
  werkzeug.getScript("Unkrauts3.js");
  }
  if (gedrückt.is(level4)){
  werkzeug.getScript("Unkrauts4.js");
  }
  if (gedrückt.is(level5)){
  werkzeug.getScript("Unkrauts5.js");
  }
  if (gedrückt.is(level6)){
  werkzeug.getScript("Unkrauts6.js");
  }
  if (gedrückt.is(level7)){
  werkzeug.getScript("Unkrauts7.js");
  }
  if (gedrückt.is(level8)){
  werkzeug.getScript("Unkrauts8.js");
  }
}
werkzeug.start(programm)
