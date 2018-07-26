import * as React from 'react';
import { Switch, Route } from 'react-router';
import Main from './Main';

class Viewer extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/' component={Main}/>
                </Switch>
            </div>
        )
    }
}

export default Viewer;