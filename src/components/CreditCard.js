import { Modal, Form, Input } from 'antd';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class CreditCard extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    this.setState({
      card: {number: this.state.number, name: this.state.name, expiry: this.state.expiry, cvc: this.state.cvc},
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    }, () => this.props.notVisible())
    console.log(this.state.card)
  }
  
  render() {
    return (
      <Modal
          title="Tarjeta de crédito"
          visible={this.props.visible}
          onOk={this.handleSubmit}
          onCancel={this.props.notVisible}
        >
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <Form.Provider>

          <Form name="creditCard" style={{paddingTop: '1rem'}} >            
            <Form.Item rules={[{ required: true, message: 'Por favor, ingresa tu número de tarjeta!' }]}>
              <Input placeholder="Número de tarjeta" onChange={this.handleInputChange} name="number" onFocus={this.handleInputFocus} maxLength="16"></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder="Nombre" onChange={this.handleInputChange} name="name" onFocus={this.handleInputFocus}></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder="Fecha de vencimiento" onChange={this.handleInputChange} name="expiry" onFocus={this.handleInputFocus} maxLength="4"></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder="CVC" onChange={this.handleInputChange} name="cvc" onFocus={this.handleInputFocus} maxLength="3"></Input>
            </Form.Item>
          </Form>
          </Form.Provider>
        </div>
      </Modal>
    );
  }
}