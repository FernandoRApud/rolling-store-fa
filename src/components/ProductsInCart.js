import React, { Component } from 'react'
import { Row, Col } from 'antd'

class ProductsInCart extends Component {
  getPhoto(prodId) {
    return `https://firebasestorage.googleapis.com/v0/b/rolling-store-av-259fe.appspot.com/o/products%2F${prodId}.png?alt=media`
  }

  render() {
    const { products } = this.props;
    
    return(
      <div>
        {
          products.map(({ name, brand, price, id, quantity }) => (
            <div style={{ margin: 20 }}>
              <div className="productInCart">
                <Row>
                  <Col xs={{span: 21}} lg={21}>
                    <div>{name}</div>
                  </Col>
                  <Col xs={{span: 3}} lg={3}>
                    <div class="cart-price">${price} </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ProductsInCart