import * as React from 'react';
import '../Styles/Main.css';
import ShortPost from './Post';
import img from '../Assets/dummyImage.jpg';

const dummyText = 'Lorem ipsum get text from database just for now this is dummy text to check how it looks Lorem ipsum get text from database just for now this is dummy text to check how it looks Lorem ipsum get text from database just for now this is dummy text to check how it looks Lorem ipsum get text from database just for now this is dummy text to check how it looks'
const dummyPostUrl = 'https://google.com/';

class Main extends React.Component{
    render(){
        return(
            <main>
                <div className='thisWeekPosts'>
                    <ShortPost title='Kozak post' date='07-08-2018' tags='post fajny taki' text={dummyText} src={img} postUrl={dummyPostUrl}/>
                    <ShortPost title='Kozak post' date='07-08-2018' tags='post fajny taki' text={dummyText} src={img} postUrl={dummyPostUrl}/>
                    <ShortPost title='Kozak post' date='07-08-2018' tags='post fajny taki' text={dummyText} src={img} postUrl={dummyPostUrl}/>
                </div>
            </main>
        )
    }
}

export default Main;