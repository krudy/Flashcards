const express = require('express');
const app = express();
const {port} = require('./config')
const apiRoter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

//db connection
require('./db/mongoose')

//parsers
//Content-type: application/json
app.use(bodyParser.json());

//fix cors 
app.use(cors());

//routes
app.use('/api/',apiRoter);


//server
app.listen(port, function() {
    console.log('server listening on port ' + port);
})

