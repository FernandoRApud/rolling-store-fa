import React from 'react';

export default class ProductCard extends React.Component{
    render(){
        return(
            <div className="product-card">
                <div> Producto: {this.props.products.name}</div>
                <div> Marca: {this.props.products.brand}</div>
                <div> Precio: {this.props.products.price}</div>
            </div>
        )
    }
}