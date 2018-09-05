const express = require('express');
const postController = require('./controllers/postController');

const app = express();
//Enable CORS
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', 'http://192.168.8.100:3000');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use('/images', express.static('images'));
//Start controller
postController(app);
//Start app
app.listen(8080, '192.168.8.100');
console.log("Server started...");