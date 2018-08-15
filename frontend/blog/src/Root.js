import * as React from 'react';
import App from './App';
import { CookiesProvider } from 'react-cookie';

export default class Root extends React.Component{
    render(){
        return(
            <CookiesProvider>
                <App/>
            </CookiesProvider>
        )
    }
}