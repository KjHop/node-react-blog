const express = require("express");
const postController = require("./components/post/controller");
const getLastPostNumber = require("./components/getLastPostNumber/controller");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});

const app = express();
//Enable CORS
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "http://192.168.8.100:3000");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use("/images", express.static("images"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Start controllers
postController(app);
getLastPostNumber(app);
//Start app
app.listen(8080, "192.168.8.100");
console.log("Server started...");
