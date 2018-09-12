import * as React from 'react';
import '../Styles/AllPosts.css';

//Get from database
// let allPosts = ['Gitarka', 'Siemka', 'Jan', 'Blogowanie', 'Funny', 'Moments', 'Godot']
// const listOfPosts = allPosts.map((title)=><li key={title}>{title}</li>);


class AllPosts extends React.Component{
    constructor(){
        super();
        this.state={
            allPosts:[]
        }
    }
    componentWillMount(){
        fetch('http://192.168.8.100:8080/')
        .then(response=>{
            return response.json();
        })
        .then(myJson=>{
            let allPosts = [];
            myJson.posts.forEach(post=>{
                allPosts.push(<li key={allPosts.length+1}><a href={post.src}>{allPosts.length+1}.{post.title}</a></li>);
            });
            this.setState({
                allPosts: allPosts
            });
        });;
    }
    render(){
        return(
            <div className='AllPosts'>
                <h1>Table of Contents:</h1>
                <ul>
                    {this.state.allPosts}
                </ul>
            </div>
        )
    }
}
export default AllPosts;