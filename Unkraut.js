function holeZahlAusCss(htmlElement){
  var cssClass = htmlElement.attr("class")
  var cssClassNumber = cssClass.substring(1,2)
  var number = Number(cssClassNumber);
  return number;
}
