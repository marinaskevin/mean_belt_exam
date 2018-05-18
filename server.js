var express = require('express');
var app = express();

require('./server/config/mongoose.js')();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');
app.use(express.static( __dirname + '/pets/dist/pets' ));

require('./server/config/routes.js')(app)

app.all('*', (req,res,next) => {
    res.sendFile(path.resolve("./pets/dist/pets/index.html"))
});
  
app.listen(8000, function() {
    console.log("listening on port 8000");
})
