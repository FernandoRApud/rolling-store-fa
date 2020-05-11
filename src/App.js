import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Main from './components/Main';
import Results from './components/Results';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

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
      ],
      results: [],
      term: ''
    }
  }

  updateTerm = (term) => {
    this.setState({term})
  }

  updateList = (newList, term) => {
    term !== '' ?
      this.setState({results: newList, term}) :
      this.setState({results: this.state.products})
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App-container">
              <Main userName={this.state.userName} products={this.state.products} updateTerm={this.updateTerm} term={this.state.term} updateList={this.updateList}/>          
            </div>
          </Route>
          <Route path="/results">
            <div className="App-container">
              <Results userName={this.state.userName} results={this.state.results} term={this.state.term}/>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}