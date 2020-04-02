var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<html><body><h1>Satheesh VC</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});
var server=app.listen(3000,function()
{
	console.log('Node is running');
});