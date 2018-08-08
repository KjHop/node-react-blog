import * as React from 'react';
import { Switch, Route } from 'react-router';
import Main from './Main';
import AddPost from './AddPost';
import AllPosts from './AllPosts';
import '../Styles/Viewer.css';

class Viewer extends React.Component{
    render(){
        return(
            <div className='Viewer'>
                <Switch>
                    <Route path='/add-post' component={AddPost}/>
                    <Route path='/all-posts' component={AllPosts}/>
                    <Route path='/' component={Main}/>
                </Switch>
            </div>
        )
    }
}

export default Viewer;