const http = require('http');  
const express = require ('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next)=>{ 
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader(  
     "Access-Control-Allow-Headers",  
     "Origin, X-Requested-With, Content-Type, Accept"); 
  res.setHeader("Access-Control-Allow-Methods",  
   "GET, POST, PATCH, DELETE, OPTIONS"); 
  next();  
});
app.use('/', express.static('dist/demo-project'));
var mongoose = require('mongoose');
// MongoDB
mongoose.connect('mongodb://localhost:27017/dummy');

// Routes
app.use('/api', require('./routes/api'));


const normalizePort = val => {  
  var port = parseInt(val, 10);  
  
  if (isNaN(port)) {  
    // named pipe  
    return val;  
  }  
  
  if (port >= 0) {  
    // port number  
    return port;  
  }  
  
  return false;  
};  
const onError = error => {  
  if (error.syscall !== "listen") {  
    throw error;  
  }  
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;  
  switch (error.code) {  
    case "EACCES":  
      console.error(bind + " requires elevated privileges");  
      process.exit(1);  
      break;  
    case "EADDRINUSE":  
      console.error( bind + " is already in use" );  
      process.exit(1 );  
      break;  
    default:  
      throw error;  
  }  
};  
const onListening = () => {  
  const addr = server.address();  
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;  
  console.log( " Listening on " + bind);  
};  

const port = normalizePort(process.env.PORT || "4200");  
app.set("port", port); 
const server = http.createServer(app);  
server.on("error", onError);  
server.on("listening", onListening);  
server.listen(port); 