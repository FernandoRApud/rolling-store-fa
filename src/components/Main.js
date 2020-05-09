import React from 'react';
import logo from '../rollingstore.png';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
            </div>
        );
    }
}