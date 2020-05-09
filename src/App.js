import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Main from './components/Main';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Fernando'
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-container">
          <Main userName={this.state.userName}></Main>
        </header>
      </div>
    );
  }
}