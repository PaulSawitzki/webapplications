
function einblenden_einer_tabelle(){
  var radio_auswahl1 = werkzeug("#auswahl1");
  var radio_auswahl2 = werkzeug("#auswahl2");
  var radio_auswahl3 = werkzeug("#auswahl3");
  var selected_radio = werkzeug("#auswahlfeld input:checked");
  if (selected_radio.is(radio_auswahl1)){
    werkzeug("#Richtig").show();
    werkzeug("#Falsch1").hide();
    werkzeug("#Falsch2").hide();
  }
  if (selected_radio.is(radio_auswahl2)){
    werkzeug("#Richtig").hide();
    werkzeug("#Falsch1").show();
    werkzeug("#Falsch2").hide();
    if (selected_radio.is(radio_auswahl3)){
      werkzeug("#Richtig").hide();
      werkzeug("#Falsch1").hide();
      werkzeug("#Falsch2").show();
  }}}
