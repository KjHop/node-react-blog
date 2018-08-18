const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

//Get this from somewhere eles it's just a concept
const databaseLogin = 'test';
const databasePassword = 'testtest1';
//Connect to database
mongoose.connect('mongodb://'+databaseLogin+':'+databasePassword+'@ds113442.mlab.com:13442/node-blog')

//Declare schema
const postSchema = new mongoose.Schema({
    title: String,
    date: String,
    tags: String,
    text: String,
    src: String,
    postNumber: Number
})
//Create mongoose model
const Post = mongoose.model('Post', postSchema);
//Url parser
const urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = app =>{
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    //Started routing (get = get request in html and so on)
    app.get('/', (request, response)=>{
        Post.find({}, (err, data)=>{
            //Check for errors
            if (err) throw err;
            // response.send(JSON.stringify({posts: data}));
        });
    });
    app.post('/add-post', urlencodedParser, (request, response, next)=>{
        console.log(request.body);
        //Check if user is logged into database
        if(request.cookies.logged === undefined || request.cookies.logged === '1'){
            //Check if login and password are correct
            if(request.body.login === databaseLogin && request.body.password === databasePassword){
                //If correct send cookie about being logged in and json to client
                response.cookie('logged', 1, {maxAge:999999, httpOnly: false}).send('cookie sent');
            }else{
                //Send response to client
                response.send({
                    loggedIn:false
                });
            }
            console.log('git gud');
        }else{
            //Logged in => probably adding post or smth so add it to database
            let newPost = Post(request.body).save((err, data)=>{
                if (err) throw err;
                response.json(data);
            })
        }
    });

}