function programm(){
  werkzeug("#Fremdsprache-Deutsch-tabelle").show();
  werkzeug("#Deutsch-Fremdsprache-tabelle").hide();
  werkzeug("#Deutsch-Fremdsprache-Zufall-tabelle").hide();
  werkzeug("#auswahlfeld").click(einblenden_einer_tabelle);
  werkzeug("#Fremdsprache-Deutsch-auswahl").attr("checked", true);
}

function einblenden_einer_tabelle(){
  var radio_auswahl1 = werkzeug("#Fremdsprache-Deutsch-auswahl");
  var radio_auswahl2 = werkzeug("#Deutsch-Fremdsprache-auswahl");
  var radio_auswahl3 = werkzeug("#Deutsch-Fremdsprache-Zufall-auswahl");
  var selected_radio = werkzeug("#auswahlfeld input:checked");
  if (selected_radio.is(radio_auswahl1)){
    fuelleFremdspracheDeutschTabelle(window.vokabeln);
    werkzeug("#Fremdsprache-Deutsch-tabelle").show();
    werkzeug("#Deutsch-Fremdsprache-tabelle").hide();
    werkzeug("#Deutsch-Fremdsprache-Zufall-tabelle").hide();
  }
  if (selected_radio.is(radio_auswahl2)){
    fuelleDeutschFremdspracheTabelle(window.vokabeln);
    werkzeug("#Fremdsprache-Deutsch-tabelle").hide();
    werkzeug("#Deutsch-Fremdsprache-tabelle").show();
    werkzeug("#Deutsch-Fremdsprache-Zufall-tabelle").hide();
  }
  if (selected_radio.is(radio_auswahl3)){
    fuelleZufallsTabelle(window.vokabeln);
    werkzeug("#Fremdsprache-Deutsch-tabelle").hide();
    werkzeug("#Deutsch-Fremdsprache-tabelle").hide();
    werkzeug("#Deutsch-Fremdsprache-Zufall-tabelle").show();
  }

}


werkzeug.start(programm);
