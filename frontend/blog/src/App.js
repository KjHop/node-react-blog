import React, { Component } from 'react';
import { Router} from "react-router-dom";
import {history} from "./Functions/history";
import Nav from './Components/Nav';
import Viewer from './Components/Viewer';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <Router history = {history}>
      <div className="App">
        <Nav />
        <Viewer ref={node =>{
          if(node!== null){
            this.containerTarget = node;
          }
        }}/>
      </div>
    </Router>
    );
  }
}

export default App;
