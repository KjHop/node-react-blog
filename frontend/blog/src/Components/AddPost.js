import * as React from 'react';
import '../Styles/AddPost.css'

class AddPost extends React.Component{
    render(){
        return(
            <div className='AddPost'>
                <form action='post'>
                    <label for='login'>Login</label><br/>
                    <input type='text' name='login'/><br/>
                    <label for='password'>Password</label><br/>
                    <input type='password' name='password'/><br/>
                    <input type='submit' value='Log in'/>
                </form>
            </div>
        );
    }
}
export default AddPost;