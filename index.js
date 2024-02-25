const express = require('express');
const app = express();
const {port} = require('./config')

app.get('/', function(req, res) {
    res.send('server is working correctly');
})

app.listen(port, function() {
    console.log('server listening on port ' + port);
})