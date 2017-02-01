function programm(){
  werkzeug("#lstücke").hide();
  werkzeug("#bereich1").hide();
  var enterKeyPressed = function(e) {
  var key = e.which;
  if(key == 13){
    onKeyPress()
 }
}
werkzeug('#Textfeld').keypress(enterKeyPressed);
}

function onKeyPress(){
//  werkzeug("#Wort").hide();
  var Wort = werkzeug("#Textfeld").val();
  if(werkzeug.checkIt(Wort)){
    werkzeug("#lstücke").show();
    werkzeug("#bereich1").hide();
  }
  else{
    werkzeug("#bereich1").show();
    werkzeug("#lstücke").hide();
  }
}
werkzeug.start(programm)
