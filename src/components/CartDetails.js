import React, {Component} from 'react';
import {Radio, Input, Button} from 'antd';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkoutCart } from '../actions'
import { getTotal } from '../reducers'
import { Link } from 'react-router-dom'
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

  render(){
    const { creditCard, shippingAddress } = this.state;
    const { total, checkoutCart } = this.props;


    return(
      <div className="cartDetails">
        <p style={{ textAlign: 'right' }}>Total estimado: ${ total }</p>

        <p>¿Donde queres recibir tu compra?</p>
        <Input value={shippingAddress} onChange={this.onWriteAddress}/>

        <p>¿Que tarjeta querés usar?</p>
        <Group value={creditCard} onChange={this.onSelectedCreditCard}>
          <Radio value='Visa' style={{ color: 'white', display: 'block'}}>
            Visa
          </Radio>
          <Radio value='MasterCard' style={{ color: 'white', display: 'block'}}>
           MasterCard
          </Radio>
        </Group>

        <Button onClick={() => checkoutCart(creditCard, shippingAddress)}>
          Confirmar compra
        </Button>
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