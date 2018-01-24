const express = require("express");
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router =require('./routes/authRoute');



//DB setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/auth');

//App setup
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
router(app);


const port = process.envPORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server started at port ${port}`);