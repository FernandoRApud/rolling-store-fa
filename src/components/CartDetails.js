import React, {Component} from 'react';
import {Radio, Input, Button, Row, Col, Modal, Form} from 'antd';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkoutCart } from '../actions'
import { getTotal } from '../reducers'
// import { Link } from 'react-router-dom'
import CreditCard from './CreditCard';
import Notifications, { notify } from "react-notify-toast";
// import Form from 'antd/lib/form/Form';
const {Group} = Radio;

class CartDetails extends Component{
  state = {
    creditCard: this.props.creditCard,
    shippingAddress: this.props.shippingAddress,
    games: this.props.games
  }

  constructor(props){
    super(props);
    this.state = {
      visible2: false
    }
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

  modalShip = (value) => {
    this.setState({visible2: value});
  }

  render(){
    const { creditCard, shippingAddress } = this.state;
    const { total, checkoutCart, games } = this.props;

    return(

      
      <div className="cartDetails">
        <Notifications/>
        <CreditCard visible={this.state.modalVisible} notVisible={() => this.newCreditCard(false)} submit={() => this.newCreditCard(false)}/>
        <Modal
          title="Dirección de envio"
          visible={this.state.visible2}
          onOk={() => this.modalShip(false)}
          onCancel={() => this.modalShip(false)}
        >
          <Form>
            <Form.Item>
              <Input value={shippingAddress} onChange={this.onWriteAddress}/>
            </Form.Item>
          </Form>
        </Modal>
        <p style={{ textAlign: 'right' }}>Total estimado: ${ total }</p>
        <Row>
          <Col className="" style={{ padding: '0 1rem' }} xs={12} xl={12}>
            <p className="cart-btn">¿Donde queres recibir tu compra?</p>
            <Group value={shippingAddress} onChange={this.onWriteAddress} className="cart-btn">
              <Radio value='Av. Mitre 1200' style={{ color: 'white', marginBottom: '1rem'}}>
                Av. Mitre 1200
              </Radio>
            </Group>
            <div className="cart-btn">
              <Button onClick={() => this.modalShip(true)} className="">Añadir dirección</Button>
            </div>
          </Col>
          <Col style={{ padding: '0 1rem' }} xs={12} xl={12}>
            <p className="cart-btn">¿Que tarjeta querés usar?</p>
              <Group value={creditCard} onChange={this.onSelectedCreditCard} className="cart-btn">
                {/* <Radio value='add' style={{ color: 'white', display: 'block'}} onClick={() => this.newCreditCard(true)}>
                  Añadir tarjeta
                </Radio>
                {/* <Radio value='Visa' style={{ color: 'white', display: 'block'}}>
                  Visa
                </Radio> */}
                <Radio value='MasterCard' style={{ color: 'white', marginBottom: '1rem'}} onChange={this.onSelectedCreditCard}>
                  MasterCard
                </Radio>
              </Group>
              <div className="cart-btn">
                <Button onClick={() => this.newCreditCard(true)}>Añadir tarjeta</Button>
              </div>
            
          </Col>
        </Row>
        
        <div className="cart-btn" style={{marginTop: '2rem'}}>
          <Button onClick={() => {
            checkoutCart(shippingAddress, creditCard, games) 
            notify.show('Tu compra fue realizada con éxito!', 'success')
            }}>
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