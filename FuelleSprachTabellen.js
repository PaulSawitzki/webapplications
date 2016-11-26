
function programm(){
  werkzeug.getJSON(werkzeug.getParameterByName("lektion") + ".json", function(vokabeln){
    console.log(vokabeln);
    var bereich_fuer_tabelle1 = werkzeug("#Fremdsprache-Deutsch-body");

    werkzeug.each(vokabeln, function(index, element){
      var tabellen_zeile = werkzeug('<tr><td class="SichtbareVokabelZelle">' + element.fremdsprache + '</td><td class="VerborgeneZelle">'+element.deutsch + "</td></tr>");
      tabellen_zeile.appendTo(bereich_fuer_tabelle1);
    });


    var bereich_fuer_tabelle2 = werkzeug("#Deutsch-Fremdsprache-body");

    werkzeug.each(vokabeln, function(index, element){
      var tabellen_zeile = werkzeug('<tr><td class="SichtbareVokabelZelle">' + element.deutsch + '</td><td class="VerborgeneZelle">'+element.fremdsprache + "</td></tr>");
      tabellen_zeile.appendTo(bereich_fuer_tabelle2);
    });
  });
}
werkzeug.start(programm);
