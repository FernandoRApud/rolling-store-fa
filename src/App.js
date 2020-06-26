import React from 'react';
import './App.css';
import Main from './components/Main';
import Results from './components/Results';
import Product from './components/Product';
import Cart from './components/Cart';
import Success from './components/Success';
import CustomFooter from './components/CustomFooter';
import CustomHeader from './components/CustomHeader';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";  
import { connect } from "react-redux";
import { getVisibleProducts } from "./reducers/products";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      term: '',
      username: 'Fernando'
    }
  }

  updateTerm = (term) => {
    this.setState({term})
  }

  updateList = (newList, term) => {
    term !== '' ?
      this.setState({results: newList, term}) :
      this.setState({results: []})
  }

  render(){
    return (
      <Router>
        <CustomHeader
          username={this.state.username}
          term={this.state.term}
          updateTerm={this.updateTerm}
          updateList={this.updateList}
          products={this.props.products}
        />
          <Switch>
            <Route exact path="/">
              <div className="Main-container">
                <Main products={this.props.products} />          
              </div>
            </Route>
            <Route path="/results">
              <div className="App-container">
                <Results results={this.state.results}/>
              </div>
            </Route>
            <Route path="/product/:id"
              render={props =>
              <div className="App-container">
                <Product {...props} />
              </div>
              }>
            </Route>
            <Route path="/cart"
              render={props =>
              <div className="App-container">
                <Cart {...props} />
              </div>
              }>
            </Route>
            <Route path="/success">
              <div className="App-container">
                <Success/>
              </div>
            </Route>
          </Switch>
        <CustomFooter />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps
)(App)