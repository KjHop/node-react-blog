const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://test:testtest1@ds113442.mlab.com:13442/node-blog')

const postSchema = new mongoose.Schema({
    title: String,
    date: Date,
    tags: String,
    text: String,
    src: String,
    postUrl: String
})
const Post = mongoose.model('Post', postSchema);
const urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = app =>{
    app.get('/', (request, response)=>{
        Post.find({}, (err, data)=>{
            if (err) throw err;
            response.send(JSON.stringify({posts: data}));
        });
    });

}