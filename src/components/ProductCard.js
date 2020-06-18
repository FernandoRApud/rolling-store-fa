import React, { Fragment } from 'react';
import {Link} from "react-router-dom";  

export default class ProductCard extends React.Component{
	getPhoto(prodId) {
			return `https://firebasestorage.googleapis.com/v0/b/rolling-store-af.appspot.com/o/products%2F${prodId}.png?alt=media`
	}

	render(){
		const { name, brand, price, id } = this.props.product;

		return(
			<div style={{ cursor: 'pointer', margin: 20 }}>
				<Link to= {{
					pathname: '/product/' + id,
					state: {
						product: this.props.product
					}
					}}
				>
					<div className="product-card">   
						<div className="product-imageContainer">
							<img src={this.getPhoto(id)} className="product-image" alt="product" style={{width: "100%", height: "250px"}}/> 
						</div>
						<div> Producto: {name}</div>
						<div> Marca: {brand}</div>
						<div> Precio: {price}</div>
					</div>
				</Link>
			</div>
		)
	}
}