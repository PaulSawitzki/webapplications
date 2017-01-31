var fs = require('fs');
var base_name = process.argv[2]
var array = fs.readFileSync(base_name + ".properties").toString().split("\n");
var vokabeln = [];
for(i in array) {
    var line = array[i];
    if (line && line.trim().length > 0){
      var deutsch_fremdsprache = line.split(':')
      var vokabel = {deutsch: deutsch_fremdsprache[0], fremdsprache: deutsch_fremdsprache[1]};
      vokabeln.push(vokabel)
    }

fs.writeFile(base_name + '.json', JSON.stringify(vokabeln));
}
