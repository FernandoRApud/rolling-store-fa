import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Main from './components/Main';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Fernando',
      products: [
        {
          id: 'prod01',
          name: 'Notebook',
          brand: 'Asus',
          price: 19000
        },
        {
          id: 'prod02',
          name: 'Zapatillas',
          brand: 'Nike',
          price: 3500
        },
        {
          id: 'prod03',
          name: 'Juego de ps4',
          brand: 'Dark Souls',
          price: 2000
        },
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-container">
          <Main userName={this.state.userName} products={this.state.products}></Main>
        </header>
      </div>
    );
  }
}