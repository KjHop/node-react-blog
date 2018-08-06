import * as React from 'react';
import "../Styles/Post.css"

class ShortPost extends React.Component{
    render(){
        return(
            <article>
                <h1>{this.props.title}</h1>
                <img src={this.props.src} alt={this.props.src}/>
                <h6>{this.props.tags}</h6>
                <p>{this.props.text}</p>
            </article>
        )
    }
}

export default ShortPost;