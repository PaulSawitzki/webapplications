var e=0;

function start(){
  werkzeug("#button").click(eingabeElementHinzufuegen)
  werkzeug("#buttonSchnittBerechnen").click(schnittBerechnen)
}
werkzeug.start(start)


function eingabeElementHinzufuegen(){
  var element = werkzeug('<input type="text" id="' + e + '"/>')
  element.val(0);
  e++
  var container = werkzeug("#container");
  element.appendTo(container);

}

function schnittBerechnen(){
  var summe = 0
  for (var i = 0; i < e; i++){
    summe = summe + Number(werkzeug("#" + i).val())
  }
  var schnitt = summe/e;
  console.log("Schnitt: " + schnitt)

}
