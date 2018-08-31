import * as React from 'react';
import '../Styles/Main.css';
import ShortPost from './Post';
import img from '../Assets/dummyImage.jpg';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            allPosts: []
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
                allPosts.push(<ShortPost title={post.title} date={post.date} tags={post.tags} text={post.text} src={post.src} postUrl={post.postNumber} key={post.postNumber}></ShortPost>)
            });
            this.setState({
                allPosts: allPosts
            });
        });;
    }
    render(){
        return(
            <main>
                <div className='thisWeekPosts'>
                    {this.state.allPosts}
                </div>
            </main>
        )
    }
}

export default Main;