var express = require('express');
var app = express();
var path = require('path');


// viewed at http://localhost:8080
app.use( express.static( __dirname + '/src' ));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/src'));
// });

try {
    app.listen(8000);
} catch (e) {
    app.listen(8800);
}
