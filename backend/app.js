const express = require('express');
const postController = require('./controllers/postController');

const app = express();
//Enable CORS
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
//Start controller
postController(app);
//Start app
app.listen(8080);
console.log("Server started...");