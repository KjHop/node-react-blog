import * as React from 'react';
import '../Styles/Main.css';
import Post from './Post';

class Main extends React.Component{
    render(){
        return(
            <main>
                <div className='thisWeekPosts'>
                    <Post title='Kozak post' tags='post fajny taki' text='Lorem ipsum get text from database just for now this is dummy text to check how it looks'/>
                </div>
            </main>
        )
    }
}

export default Main;