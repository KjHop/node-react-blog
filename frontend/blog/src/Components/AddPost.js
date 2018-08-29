import * as React from 'react';
import axios from 'axios';
import '../Styles/AddPost.css'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const postProperties = ['title', 'data', 'tags', 'text', 'src', 'postNumber'];

let readCookie = (name) =>{
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

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
        this.handlePostInput = this.handlePostInput.bind(this);
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
    handlePostInput(e){

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
            this.forceUpdate();
        }).catch(err=>{
            console.log(err);
        })
        this.setState({
            title: '',
            date: '',
            tags: '',
            text: '',
            src: '',
            postNumber: 0
        });
    }
    render(){
        if(readCookie('logged') === '1'){
            return(
                <form action='post'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' onChange={(e)=>this.handlePostInput(e)}/>
                    <label htmlFor='date'>Date</label>
                    <input type='date' name='date' onChange={(e)=>this.handlePostInput(e)}/>
                    <label htmlFor='tags'>Tags</label>
                    <input type='text' name='tags' onChange={(e)=>this.handlePostInput(e)}/>
                    <label htmlFor='text'>Text</label>
                    <input type='text' name='text' onChange={(e)=>this.handlePostInput(e)}/>
                    <label htmlFor='src'>Image</label>
                    <input type='file' name='src' onChange={(e)=>this.handlePostInput(e)}/>
                    <label htmlFor='postNumber'>Number</label>
                    <input type='number' name='postNumber' onChange={(e)=>this.handlePostInput(e)}/>
                    <input type='button' value='Post article' onClick={()=>this.handleSubmit()}/>
                </form>
            )
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