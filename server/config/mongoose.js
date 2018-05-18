var fs = require('fs');
var path = require('path');

module.exports = function() {
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/pets');
    // create a variable that points to the models folder
	var models_path = path.join(__dirname, '../models');
	// read all of the files in the models_path and require (run) each of the javascript files
	fs.readdirSync(models_path).forEach(function(file) {
	  if(file.indexOf('.js') >= 0) {
	    // require the file (this runs the model file which registers the schema)
	    require(models_path + '/' + file)();
	   }
	})
}