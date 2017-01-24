function programm(){
      var selection = werkzeug("input:radio")
      var aufloesen = werkzeug("#Auflösung")
      selection.click(loesung);
      aufloesen.click(aufloesung)
      var Auswertung = werkzeug("#Auswertung")
      Auswertung.hide()

}
function aufloesung(){
   var punkte = werkzeug(".Punkte")
   punkte.addClass("Aufgeloest")
   var Auswertung = werkzeug("#Auswertung")
   Auswertung.show()
   var ergebnis = 0;
   punkte.each(function(index, element){
     var punktAlsText = werkzeug(element).text();
     var punkt = Number(punktAlsText)
     ergebnis = ergebnis + punkt;
   })
   var Ergebniszelle = werkzeug("#Ergebnis")

   var ergebnisZeile = "<p>Ergebnis:" + ergebnis + "</p>";
   Ergebniszelle.html(ergebnisZeile)

   var note = ""
   switch(ergebnis){
     case 0: note = "Eine glatte 6"; break;
     case 1: note = "5"; break;
     case 2: note = "4"; break;
     case 3: note = "3"; break;
     case 4: note = "2"; break;
     case 5: note = "1"; break;
   }
   var Notenzelle = werkzeug ("#Note")
   Notenzelle.html(note)
   var selection = werkzeug("input:radio")
   selection.attr("disabled", true)

}

function loesung(event){
  var selected_radio = werkzeug(event.target)
  var richtig = selected_radio.hasClass("richtig")
  var tableData =  werkzeug(werkzeug(selected_radio.parent()).parent());
  var punkteZelle = tableData.find(".Punkte");
  if(richtig){
    punkteZelle.html("1")
  }
  else{
    punkteZelle.html("0")
  }
}
werkzeug.start(programm)
