import * as React from 'react';
import "../Styles/Post.css"

class Post extends React.Component{
    render(){
        return(
            <article>
                <h1>{this.props.title}</h1>
                <h6>{this.props.tags}</h6>
                <p>{this.props.text}</p>
            </article>
        )
    }
}

export default Post;