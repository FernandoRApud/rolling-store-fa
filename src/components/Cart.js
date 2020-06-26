import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from "../actions";
import { 
  getTotal,
  getCartProducts,
  getInfoCustomer,
  getInfoShippingAddress,
  getInfoCreditCard
} from "../reducers";
import { Layout, Row, Col } from 'antd';
import ProductsInCart from '../components/ProductsInCart';
import CartDetails from '../components/CartDetails';
import { Link } from 'react-router-dom'
const { Content } = Layout;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      shippingAddress: '',
      games: []
    }
  }

  render() {
    const { customer, shippingAddress, creditCard, products } = this.props
    console.log(this.state.games)
    // console.log(getInfoCustomer(state));
    return(
      <Layout>
        <Content className="content fontSize">
          <p> Carrito de: {customer} </p>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 24 }}>
              <ProductsInCart products={products} games={(value) => this.setState({games: value})}/>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 24 }}>
              <CartDetails
                shippingAddress={shippingAddress}
                creditCard={creditCard}
                games={this.state.games}
              />
              <Link to= {{ pathname: '/' }}>
                <div className="keepShopping-link">
                  <p className="keepShopping-link">Seguir comprando</p>
                </div>
              </Link>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func
}

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
  customer: getInfoCustomer(state),
  shippingAddress: getInfoShippingAddress(state),
  creditCard: getInfoCreditCard(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(Cart)