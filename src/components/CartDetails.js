import React, {Component} from 'react';
import {Radio, Input, Button, Row, Col} from 'antd';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkoutCart } from '../actions'
import { getTotal } from '../reducers'
import { Link } from 'react-router-dom'
import CreditCard from './CreditCard';
const {Group} = Radio;

class CartDetails extends Component{
  state = {
    creditCard: this.props.creditCard,
    shippingAddress: this.props.shippingAddress
  }
  
  onWriteAddress = (e) => {
    this.setState({ shippingAddress: e.target.value })
  }
  
  onSelectedCreditCard = (e) => {
    this.setState({ creditCard: e.target.value })
  }

  newCreditCard = (boolean) => {
    this.setState({modalVisible: boolean})
  }

  render(){
    const { creditCard, shippingAddress } = this.state;
    const { total, checkoutCart } = this.props;

    return(

      
      <div className="cartDetails">
      <CreditCard visible={this.state.modalVisible} notVisible={() => this.newCreditCard(false)} submit={() => this.newCreditCard(false)}/>
        <p style={{ textAlign: 'right' }}>Total estimado: ${ total }</p>
        <Row>
          <Col className="" style={{ padding: '0 1rem' }}>
            <p>¿Donde queres recibir tu compra?</p>
            {/* <Input value={shippingAddress} onChange={this.onWriteAddress}/> */}
            <div className="cart-btn">
              <Button className="">Añadir dirección</Button>
            </div>
          </Col>
          <Col style={{ padding: '0 1rem' }}>
            <p>¿Que tarjeta querés usar?</p>
            {/* <Group value={creditCard} onChange={this.onSelectedCreditCard}></Group> */}
              <div className="cart-btn">
                <Button onClick={() => this.newCreditCard(true)}>Añadir tarjeta</Button>
              </div>
              {/* <Radio value='add' style={{ color: 'white', display: 'block'}} onClick={() => this.newCreditCard(true)}>
                Añadir tarjeta
              </Radio>
              <Radio value='Visa' style={{ color: 'white', display: 'block'}}>
                Visa
              </Radio>
              <Radio value='MasterCard' style={{ color: 'white', display: 'block'}}>
              MasterCard
              </Radio> */}
            
          </Col>
        </Row>
        
        <div className="cart-btn">
          <Button onClick={() => checkoutCart(creditCard, shippingAddress)}>
            Confirmar compra
          </Button>
        </div>
      </div>
    )
  }
}

CartDetails.propTypes = {
  total: PropTypes.string.isRequired,
  checkoutCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkoutCart }
)(CartDetails)