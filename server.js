var express = require('express');
var app     = express();
var path    = require('path');


// set public folder

app.use(express.static(__dirname + '/public'));

// single route to index file

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

// on port 8080

app.listen(9000);
console.log('serving on 9000');