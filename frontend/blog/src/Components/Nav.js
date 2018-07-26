import * as React from 'react';
import "../Styles/Nav.css";

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <a href='/'><li>Home</li></a>
                    <a href='/all-posts'><li>All posts</li></a>
                    <a href='/add-post'><li>Add post</li></a>
                    <a href='/contact'><li>Contact</li></a>
                </ul>
            </nav>
        )
    }
}

export default Nav;