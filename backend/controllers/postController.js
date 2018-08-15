const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

//Connect to database
mongoose.connect('mongodb://test:testtest1@ds113442.mlab.com:13442/node-blog')

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
            console.log(request.cookies);
            console.log(request.signedCookies);
        });
    });
    app.post('/add-post', urlencodedParser, (request, response, next)=>{
        let newPost = Post(request.body).save((err, data)=>{
            if (err) throw err;
            // response.json(data);
            console.log(request.cookies);
            if(request.cookies.logged === undefined){
                //Check logging if true create cookie
                response.cookie('logged', 1, {maxAge:999999});
                response.send('');
            }else{
                //Logged in => probably adding post or smth
            }
            next();
        })
    });

}