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

//var radius = Number(window.prompt("Radius eingeben"));
//Kreisflaeche(radius);
//Kreisumfang(radius);

var personen=[{vornamen:["Rainer","Ulrich"],
nachname:"Sawitzki",
alter:52},
{vornamen:["Carola","Stephanie"],
nachname:"Fabricius",
alter:48},
{vornamen:["Paul","Georg","Helmuth"],
nachname:"Sawitzki",
alter:12}];
//window.alert(personen[0].vornamen[1]);
console.log(personen.length);
personen[3]={
  vornamen:["Anna-Sophie","Sophie"],
  nachname:"Sawitzki",
  alter:"15"
};
console.log(personen.length);
personen[0].alter=53;
console.log(personen[0].alter)
//window.alert(personen[3].alter);
function schreibe_nachname(Apfelsinensaftkonzentrat)
{console.log(Apfelsinensaftkonzentrat.nachname)}
schreibe_nachname(personen[1]);
function schreibe_alter(a)
{console.log(a.alter)}
schreibe_alter(personen[2]);
