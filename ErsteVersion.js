
function einblenden_eines_bereichs(){
  var radio_auswahl1 = werkzeug("#auswahl1");
  var radio_auswahl2 = werkzeug("#auswahl2");
  var selected_radio = werkzeug("#auswahlfeld input:checked");
  if (selected_radio.is(radio_auswahl1)){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").hide();
  }
  if (selected_radio.is(radio_auswahl2)){
    werkzeug("#bereich1").hide();
    werkzeug("#bereich2").show();
  }

}
  werkzeug("#auswahlfeld").click(einblenden_eines_bereichs);
