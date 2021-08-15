const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
// Persers
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, 'build')));

server.listen(5000, err=>{
      if(err){
            console.log('error occured: \n'+err);
      } else {
            console.log('Server started at 5000');
      }
})