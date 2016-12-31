function programm(){
  werkzeug("#bereich1").show();
  werkzeug("#bereich2").hide();
  werkzeug("#bereich3").hide();
  werkzeug("#auswahlfeld").click(einblenden_eines_Objekts);
}
function einblenden_eines_Objekts(event){
  var button1 = werkzeug("#Auswahl1");
  var button2 = werkzeug("#Auswahl2");
  var button3 = werkzeug("#Auswahl3");
  var button4 = werkzeug("#Auswahl4");
  var selected_button = werkzeug(event.target);

if (selected_button.is(button1)){
  werkzeug("#bereich1").hide();
  werkzeug("#bereich2").show();
  werkzeug("#bereich3").hide();
}
if (selected_button.is(button2)){
  werkzeug("#bereich1").show();
  werkzeug("#bereich2").hide();
  werkzeug("#bereich3").hide();
}
if (selected_button.is(button3)){
  werkzeug("#bereich1").hide();
  werkzeug("#bereich2").hide();
  werkzeug("#bereich3").show();
}
if (selected_button.is(button4)){
  werkzeug("#bereich1").hide();
  werkzeug("#bereich2").show();
  werkzeug("#bereich3").hide();
}
}
werkzeug.start(programm);
