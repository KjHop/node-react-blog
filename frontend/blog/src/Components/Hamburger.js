import * as React from 'react';
import "../Styles/Hamburger.css"

class Hamburger extends React.Component{
    constructor(){
        super();
        this.changeHref = this.changeHref.bind(this);
        this.state = {
            href: "#nav",
            firstClick: true,
            hamburger: "fas fa-bars hamburger"
        }
    }
    changeHref(){
        if(this.state.firstClick===true){
            this.setState({
                href: "#nav",
                firstClick: false,
                hamburger: "fas fa-times hamburger"
            });
        }else{
            this.setState({
                href:"#",
                firstClick: true,
                hamburger:"fas fa-bars hamburger"
            })
        }
    }
    render(){
        return(
            <a className="hamburgerr" href={this.state.href} onClick={this.changeHref}>
                <i className={this.state.hamburger}></i>
            </a>
        );
    }
}
export default Hamburger;