import { Modal, Button, Form, Input } from 'antd';
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
    console.log(e)
  }
  
  render() {
    return (
      <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.props.submit}
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

          <Form name="creditCard" style={{paddingTop: '1rem'}} onSubmit={(e) => this.handleSubmit()}>            
            <Form.Item rules={[{ required: true, message: 'Por favor, ingresa tu número de tarjeta!' }]}>
              <Input placeholder="Número de tarjeta" onChange={this.handleInputChange} name="number" onFocus={this.handleInputFocus} ></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder="Nombre" onChange={this.handleInputChange} name="name" onFocus={this.handleInputFocus}></Input>
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </Form.Provider>
        </div>
      </Modal>
    );
  }
}