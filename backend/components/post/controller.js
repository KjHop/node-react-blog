const express = require("express");
const mongoose = require("mongoose");
const postController = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const multer = require('multer');
const {connectToDatabase, checkCreditionals} = require('../../config/database');
const {postSchema} = require('./entity');

const Post = mongoose.model('Post', postSchema);
connectToDatabase(mongoose);
//Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    const newFileName = `${new Date().getUTCFullYear() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getDay() +
      "-" +
      new Date().getHours() +
      "-" +
      new Date().getMinutes() +
      "-" +
      new Date().getSeconds() +
      ".jpg"}`;
    cb(null, newFileName);
  }
});
const upload = multer({storage});

module.exports = app =>{
  app.get("/", (request, response) => {
    Post.find({}, (err, data) => {
      //Check for errors
      if (err) throw err;
      response.send(JSON.stringify({ posts: data }));
    });
  });
  
  app.post(
    "/add-post",
    urlencodedParser,
    (request, response, next) => {
      console.log(request.body);
      //Check if user is logged into database
      if (request.cookies.logged === undefined) {
        //Check if login and password are correct
        if (
          checkCreditionals(request.body.login, request.body.password)
        ) {
          //If correct send cookie about being logged in and json to client
          response
            .cookie("logged", 1, { maxAge: 999999, HttpOnly: false })
            .send("cookie sent");
        } else {
          //Send response to client
          response.send({
            loggedIn: false
          });
        }
        console.log("git gud");
      } else {
        //Logged in => probably adding post or smth so add it to database
        let newPost = Post(request.body).save((err, data) => {
          if (err) throw err;
          response.json(data);
        });
      }
    }
  );
  app.post(
    "/add-post/upload",
    upload.single("file"),
    (request, response, next) => {
      console.log(request.file);
      // fs.writeFile(__dirname+'/images/'+request.body.file.name, request.body.file, "binary", err=>{
      //     if(err) throw err;
      // })
      response.send();
    }
  );
}
