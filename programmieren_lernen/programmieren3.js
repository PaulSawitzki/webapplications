function schaltflaeche_wurde_geklickt(){
  //jetzt soll das eingabefeld ausgelesen werden
  var eingelesener_wert = werkzeug("#eingabefeld").val();
  eingelesener_wert = Number(eingelesener_wert);
  var berechnete_flaeche = berechne_kreis_flaeche(eingelesener_wert);
  window.alert(berechnete_flaeche);

}

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

function berechne_kreis_flaeche(radius){
  var flaeche = radius * radius * 3.14;
  return flaeche;
}

function programm(){
  werkzeug("#schaltflaeche").click(schaltflaeche_wurde_geklickt);
  werkzeug("#bereich1").hide();
  werkzeug("#bereich2").hide();

  var bereich_fuer_tabelle1 = werkzeug("#bereich_fuer_tabelle1");

  werkzeug.each(liste, function(index, element){
    var tabellen_zeile = werkzeug("<tr><td>" + element.alter + "</td><td>"+element.name + "</td></tr>");
    tabellen_zeile.appendTo(bereich_fuer_tabelle);
  });


  var bereich_fuer_tabelle = werkzeug("#bereich_fuer_tabelle2");

  werkzeug.each(liste, function(index, element){
    var tabellen_zeile = werkzeug("<tr><td>" + element.name + "</td><td>"+element.alter + "</td></tr>");
    tabellen_zeile.appendTo(bereich_fuer_tabelle);
  });


  werkzeug("#auswahlfeld").click(einblenden_eines_bereichs);

}

werkzeug.start(programm);

var liste = [{name:"Rainer", alter: 52}, {name:"Paul", alter: 12}]
