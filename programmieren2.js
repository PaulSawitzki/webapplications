function Kreisflaeche(r){
  var pi = 3.14;
  var Ergebnis = r*r*pi;
  window.alert("Kreisfläche = " + Ergebnis);
}

function Kreisumfang(r){
  var ergebnis = (2*3.14*r);
  ergebnis = "Kreisumfang = " + ergebnis;
  window.alert(ergebnis);
}

var radius = Number(window.prompt("Radius eingeben"));
Kreisflaeche(radius);
Kreisumfang(radius);
