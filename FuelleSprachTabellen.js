
function programm2(){
  werkzeug.getJSON(werkzeug.getParameterByName("lektion") + ".json", function(vokabeln){
  //  console.log(vokabeln);
  window.vokabeln = vokabeln;
  fuelleTabellen(vokabeln);
});
}

function fuelleTabellen(vokabeln){
    fuelleFremdspracheDeutschTabelle(vokabeln);
    fuelleDeutschFremdspracheTabelle(vokabeln);
    fuelleZufallsTabelle(vokabeln);
}
function fuelleFremdspracheDeutschTabelle(vokabeln){
  vokabeln = werkzeug.shuffle(vokabeln);
  var tabelle = werkzeug("#Fremdsprache-Deutsch-body");
  tabelle.html("");
  werkzeug.each(vokabeln, function(index, element){
    var tabellen_zeile = werkzeug('<tr><td class="SichtbareVokabelZelle">' + element.fremdsprache + '</td><td class="VerborgeneZelle">'+element.deutsch + "</td></tr>");
    tabellen_zeile.appendTo(tabelle);
  });
}
function fuelleDeutschFremdspracheTabelle(vokabeln){
  vokabeln = werkzeug.shuffle(vokabeln);
  var tabelle = werkzeug("#Deutsch-Fremdsprache-body");
  tabelle.html("");
  werkzeug.each(vokabeln, function(index, element){
    var tabellen_zeile = werkzeug('<tr><td class="SichtbareVokabelZelle">' + element.deutsch + '</td><td class="VerborgeneZelle">'+element.fremdsprache + "</td></tr>");
    tabellen_zeile.appendTo(tabelle);
  });

}

function fuelleZufallsTabelle(vokabeln){
  vokabeln = werkzeug.shuffle(vokabeln);
  var tabelle = werkzeug("#Deutsch-Fremdsprache-Zufall-body");
  tabelle.html("");
  werkzeug.each(vokabeln, function(index, element){
    if (werkzeug.randomBoolean()){
      var tabellen_zeile = werkzeug('<tr><td class="SichtbareVokabelZelle">' + element.deutsch + '</td><td class="VerborgeneZelle">'+element.fremdsprache + "</td></tr>");
    }
    else{
      var tabellen_zeile = werkzeug('<tr><td class="VerborgeneZelle">' + element.deutsch + '</td><td class="SichtbareVokabelZelle">'+element.fremdsprache + "</td></tr>");
    }
    tabellen_zeile.appendTo(tabelle);
    });
}
werkzeug.start(programm2);
