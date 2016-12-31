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
     case 0: note = "0% Naja...mal ehrlich kennst du die Black Boys eigentlich?"; break;
     case 1: note = "10% Du kennst die Black Boys nicht besonders gut, oder?"; break;
     case 2: note = "20% Es ist noch kein Meister vom Himmel gefallen!"; break;
     case 3: note = "30% Geht zwar noch deutlich besser, aber trotzdem ist das Ergebnis OK"; break;
     case 4: note = "40% Fast die Hälfte der Punkte!"; break;
     case 5: note = "50% Die Hälfte ist auf jeden Fall Okay"; break;
     case 6: note = "60% Mehr als die Hälfte...Ganz Gut"; break;
     case 7: note = "70% Du weißt echt viel über die Black Boys!"; break;
     case 8: note = "80% Tolles Ergebnis!"; break;
     case 9: note = "90% Du bist echt sehr gut!"; break;
     case 10: note ="100% WOW! Du bist ein echtes BlackBoys3500 Genie!Das macht dir so schnell keiner nach!"; break;
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
