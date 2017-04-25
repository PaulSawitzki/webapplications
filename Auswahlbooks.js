function programm(){
  werkzeug("#Link1").hide()
 var suche = werkzeug("#suche").val()
 werkzeug("#A1").click(dimensionen)
 if (suche == "Dimensionen"){
   werkzeug.start(dimensionen)
 }
}
 function dimensionen(){
  werkzeug("#Link1").show()
 }
werkzeug.start(programm)
