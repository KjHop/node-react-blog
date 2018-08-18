import * as React from 'react';
import axios from 'axios';
import '../Styles/AddPost.css'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class AddPost extends React.Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props){
        super(props);
        this.state={
            login: '',
            password: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        if(e.target.name==='login'){
            this.setState({
                login: e.target.value,
                password: this.state.password
            })
        }else{
            this.setState({
                login: this.state.login,
                password: e.target.value
            })
        }
    }
    handleSubmit(){
        fetch('http://192.168.8.100:8080/add-post',{
            method:'post',
            credentials:'include',
            withCookies: true,
            headers:{
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response=>{
            console.log(response);
        })
    }
    render(){
        console.log(this.cookie);
        if(this.cookie === '1'){
            //return page for
        }else{
            return(
                <div className='AddPost'>
                    <form action='post'>
                        <label htmlFor='login'>Login</label><br/>
                        <input type='text' name='login' onChange={e=>this.handleInput(e)}/><br/>
                        <label htmlFor='password'>Password</label><br/>
                        <input type='password' name='password' onChange={e=>this.handleInput(e)}/><br/>
                        <input type='button' value='Log in' onClick={()=>this.handleSubmit()}/>
                    </form>
                </div>
            );
        }
    }
}
export default withCookies(AddPost);