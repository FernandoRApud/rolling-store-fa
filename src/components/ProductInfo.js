import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Carousel } from 'antd';
import {ShoppingCartOutlined, StarOutlined, StarFilled, StarTwoTone} from '@ant-design/icons';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

class ProductInfo extends Component {
  getPhoto(prodId) {
    return `https://firebasestorage.googleapis.com/v0/b/rolling-store-af.appspot.com/o/products%2F${prodId}.jpg?alt=media`
  }

  render() {
    const { name, brand, price, id, description, shippingTime, date } = this.props.product;
    const { product, onAddToCartClicked } = this.props
    return(
      <Fragment>
        <div className="productInfo">
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 18 }}>
              <div >
                <Carousel autoplay>
                  <img src={this.getPhoto(`${id}-1`)} style={{ height: '10%', width: "100%"}}/>
                  <img src={this.getPhoto(`${id}-2`)} style={{ height: '10%', width: "100%"}}/>
                </Carousel>
                {/* <img src={this.getPhoto(id)} className="product-image" style={{ height: '50vh' }} alt="product"/> */}
              </div>
            </Col>
            <br />
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <div className="productInfo-description">
                <div> 
                  <img src={this.getPhoto(id)} style={{width: "100%"}}></img>
                </div>
                <div style={{ textAlign: 'left', fontSize: '1rem', paddingTop: '0.5rem' }}>{description}</div>
                <div style={{ textAlign: 'left', fontSize: '1rem', paddingTop: '0.5rem' }}>Fecha de lanzamiento: {date}</div>
                <div style={{ textAlign: 'left', fontSize: '1rem', paddingTop: '0.5rem' }}>Desarrollador: {brand}</div>
                <Link to={{
                  pathname: '/cart',
                  state: {product}
                }}>
                  <Button style={{marginTop: '2rem', backgroundColor: 'green', color: 'white'}} onClick={onAddToCartClicked}><ShoppingCartOutlined style={{color: "white"}}/> Añadir al carrito</Button>  
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    shippingTime: PropTypes.string.isRequired,
  }),
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductInfo