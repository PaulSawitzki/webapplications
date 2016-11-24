function schaltflaeche_wurde_geklickt(){
  //jetzt soll das eingabefeld ausgelesen werden
  var eingelesener_wert = werkzeug("#eingabefeld").val();
  eingelesener_wert = Number(eingelesener_wert);
  var berechnete_flaeche = berechne_kreis_flaeche(eingelesener_wert);
  window.alert(berechnete_flaeche);

}

function berechne_kreis_flaeche(radius){
  var flaeche = radius * radius * 3.14;
  return flaeche;
}

function programm(){
  werkzeug("#schaltflaeche").click(schaltflaeche_wurde_geklickt);
}

werkzeug.start(programm);
