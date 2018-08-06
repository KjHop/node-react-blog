import * as React from 'react';
import '../Styles/Main.css';
import ShortPost from './Post';
import img from '../Assets/dummyImage.jpg';

class Main extends React.Component{
    render(){
        return(
            <main>
                <div className='thisWeekPosts'>
                    <ShortPost title='Kozak post' tags='post fajny taki' text='Lorem ipsum get text from database just for now this is dummy text to check how it looks' src={img}/>
                </div>
            </main>
        )
    }
}

export default Main;