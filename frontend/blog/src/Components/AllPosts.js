import * as React from 'react';
import '../Styles/AllPosts.css';

//Get from database
let allPosts = ['Gitarka', 'Siemka', 'Jan', 'Blogowanie', 'Funny', 'Moments', 'Godot']
const listOfPosts = allPosts.map((title)=><li key={title}>{title}</li>);


class AllPosts extends React.Component{
    render(){
        return(
            <div className='AllPosts'>
                <h1>Content list:</h1>
                <ul>
                    {listOfPosts}
                </ul>
            </div>
        )
    }
}
export default AllPosts;