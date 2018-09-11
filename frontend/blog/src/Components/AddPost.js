import * as React from 'react';
import '../Styles/AddPost.css'
import { withCookies} from 'react-cookie';

const postProperties = ['title', 'data', 'tags', 'text', 'postNumber'];

let readCookie = (name) =>{
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

let formData = new FormData();

class AddPost extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: '',
            password: '',
            title: '',
            date: '',
            tags: '',
            text: '',
            src: '',
            file: null,
            postNumber: 0
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostInput = this.handlePostInput.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
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
        postProperties.forEach(property=>{
            if(property === e.target.name){
                this.state[property]=e.target.value;
            }
        });
        console.log(this.state)
    }
    handlePostSubmit(e){
        fetch('http://192.168.8.100:8080/add-post/upload',{
            method:'post',
            credentials:'include',
            withCookies: true,
            body: formData
        }).then(response=>{
            this.state.date = new Date().getUTCFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDay()+'-'+new Date().getHours()+'-'+new Date().getMinutes()+'-'+new Date().getSeconds();
            this.state.src = 'http://192.168.8.100:8080/images/'+this.state.date +'.jpg';
            this.handleSubmit()
        })
        .catch(err=>{
            console.log(err);
        })
    }
    handleFileInput(e){
        formData.append('name', 'ekurwa');
        formData.append('file', e.target.files[0]);
        console.log(formData);
    }
    handleSubmit(){
        console.log(this.state);
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
    }
    render(){
        if(readCookie('logged') === '1'){
            this.state={
                title: '',
                date: '',
                tags: '',
                text: '',
                file: null,
                postNumber: 0
            }
            return(
                <form action='post' onSubmit={()=>this.handlePostSubmit()}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' onChange={(e)=>this.handlePostInput(e)} required/>
                    <label htmlFor='date'>Date</label>
                    <input type='date' name='date' onChange={(e)=>this.handlePostInput(e)} required/>
                    <label htmlFor='tags'>Tags</label>
                    <input type='text' name='tags' onChange={(e)=>this.handlePostInput(e)} required/>
                    <label htmlFor='text'>Text</label>
                    <textarea name='text' onChange={(e)=>this.handlePostInput(e)} required/>
                    <label htmlFor='file'>Image</label>
                    <input type='file' name='file' onChange={(e)=>this.handleFileInput(e)} required/>
                    <input type='submit' value='Post article'/>
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