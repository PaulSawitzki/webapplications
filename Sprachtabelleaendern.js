function programm(){
  werkzeug("#Fremdsprache-Deutsch-tabelle").show();
  werkzeug("#Deutsch-Fremdsprache-tabelle").hide();
  werkzeug("#auswahlfeld").click(einblenden_einer_tabelle);
  werkzeug("#Fremdsprache-Deutsch-auswahl").attr("checked", true);
}

function einblenden_einer_tabelle(){
  var radio_auswahl1 = werkzeug("#Fremdsprache-Deutsch-auswahl");
  var radio_auswahl2 = werkzeug("#Deutsch-Fremdsprache-auswahl");
  var selected_radio = werkzeug("#auswahlfeld input:checked");
  if (selected_radio.is(radio_auswahl1)){
    werkzeug("#Fremdsprache-Deutsch-tabelle").show();
    werkzeug("#Deutsch-Fremdsprache-tabelle").hide();
  }
  if (selected_radio.is(radio_auswahl2)){
    werkzeug("#Fremdsprache-Deutsch-tabelle").hide();
    werkzeug("#Deutsch-Fremdsprache-tabelle").show();
  }

}


werkzeug.start(programm);
