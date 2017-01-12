//Programm zur Bestimmung aller Zahlen mit 4 Ziffern, deren Quersumme einen Maximalwert hat

var gesamt = 0;
var quersumme_kleiner = 0;
var quersumme_groesser = 0;
var maximal_quersumme = 10;
for (var rad1 = 0; rad1 < 10; rad1++){
  for (var rad2 =0 ; rad2 < 10; rad2++){
    for (var rad3=0; rad3 < 10; rad3++){
      for (var rad4= 0; rad4 < 10; rad4++){
        var zahl = 1000 * rad1 + 100 * rad2 + 10* rad3 + rad4;
        gesamt++;

        var quersumme = rad1 + rad2 + rad3 + rad4;
        if (quersumme <= maximal_quersumme){
          quersumme_kleiner++;
//          console.log(rad1 + "" + rad2 + "" + rad3 + "" + rad4);
        }
        else{
          quersumme_groesser++;
        }
      }
    }
  }
}

console.log("Gesamtzahl: " + gesamt);
console.log("Quersumme kleiner gleich " + maximal_quersumme + ": " + quersumme_kleiner);
console.log("Quersumme größer als: " + maximal_quersumme + ": " + quersumme_groesser);
