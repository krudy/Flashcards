const express = require('express');
const app = express();
const {port} = require('./config')
const apiRoter = require('./routes/api');

//db connection
require('./db/mongoose')

//routes
app.use('/api/',apiRoter);


//server
app.listen(port, function() {
    console.log('server listening on port ' + port);
})