function programm(){
  werkzeug("#test-auswahl").click(test)
}
function test(){
  var feld = werkzeug("#anderecss")
  var css = "<link rel='stylesheet' href='vokabeln.css'></link>"
  feld.html(css)
}
werkzeug.start(programm)
