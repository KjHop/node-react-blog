const express = require("express");
const postController = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

postController.get("/", (request, response) => {
  Post.find({}, (err, data) => {
    //Check for errors
    if (err) throw err;
    response.send(JSON.stringify({ posts: data }));
  });
});

postController.post(
  "/add-post",
  urlencodedParser,
  (request, response, next) => {
    console.log(request.body);
    //Check if user is logged into database
    if (request.cookies.logged === undefined) {
      //Check if login and password are correct
      if (
        request.body.login === databaseLogin &&
        request.body.password === databasePassword
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
postController.post(
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

module.exports = postController;
