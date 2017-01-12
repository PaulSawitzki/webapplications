function programm(){
  werkzeug("#bereich1").show();
  werkzeug("#bereich2").hide();
  werkzeug("#bereich3").hide();
  werkzeug("#bereich4").hide();
  werkzeug("#bereich5").hide();
  werkzeug("#bereich6").hide();
  werkzeug("#bereich7").hide();
  werkzeug("#bereich8").hide();
  werkzeug("#bereich11").hide();
  werkzeug("#bereich12").hide();
  werkzeug("#bereich13").hide();
  werkzeug("#bereich14").hide();
  werkzeug("#bereich15").hide();
  werkzeug("#bereich16").hide();
  werkzeug("#bereich17").hide();
  werkzeug("#bereich18").hide();
  werkzeug("#bereich19").hide();
  werkzeug("#bereich20").hide();
  werkzeug("#bereich21").hide();
  werkzeug("#bereich22").hide();
  werkzeug("#bereich23").hide();
  werkzeug("#bereich24").hide();
  werkzeug("#bereich25").hide();
  werkzeug("#bereich26").hide();
  werkzeug("#bereich27").hide();
  werkzeug("#Truheschließen").hide();
  werkzeug("#Schwert1").hide();
  werkzeug("#Schwert2").hide();
  werkzeug("#Schwert3").hide();
  werkzeug("#Schwerter").hide();
  werkzeug("#bereich1").keypress(einblenden_eines_Objekts);
}
function einblenden_eines_Objekts(event){
  var button1 = (e.keycode == 38)
  var selected_button = werkzeug(event.target);
    werkzeug("#bereich1").hide();
    werkzeug("#bereich2").show();
  }
werkzeug.start(programm);
