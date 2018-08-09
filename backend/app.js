const express = require('express');
const postController = require('./controllers/postController');

const app = express();

postController(app);
app.listen(8080);
console.log("Server started...");