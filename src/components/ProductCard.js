import React, { Fragment } from 'react';
import {Link} from "react-router-dom";
import { Card, Row, Col } from 'antd';
const { Meta } = Card;  

export default class ProductCard extends React.Component{
	getPhoto(prodId) {
			return `https://firebasestorage.googleapis.com/v0/b/rolling-store-af.appspot.com/o/products%2F${prodId}.jpg?alt=media`
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
					{/* <div className="product-card">   
						<div className="product-imageContainer">
							<img src={this.getPhoto(id)} className="product-image" alt="product" style={{width: "250px", height: "250px"}}/> 
						</div>
						<div> Producto: {name}</div>
						<div> Marca: {brand}</div>
						<div> Precio: {price}</div>
					</div> */}

					{/* <Card.Grid
						className="card-container"
						hoverable
						style={{width: "229px", height: "100%", fontSize: "12px"}}
						// cover={<img src={this.getPhoto(id)} style={{width: "100%", height: "250px", border: "thin solid black"}}></img>}
					>
						<img src={this.getPhoto(id)} style={{width: "100%", height: "107px"}}></img>
						<Meta title={brand} description={price}></Meta>
					</Card.Grid> */}
					
					<div className="card-container">
						<img src={this.getPhoto(id)} style={{width: "100%"}}></img>
						<div className="card-text-container">
							<Row type="flex" className="card-text-row">
								<Col xs={{span: 14}} lg={{span: 14}}>
									<p>{name}</p>
								</Col>
								<Col xs={{span: 2}} lg={{span: 2}}></Col>
								<Col xs={{span: 8}} lg={{span: 8}}>
									<div className="price">
										<p>ARS$ {price}</p>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</Link>
			</div>
		)
	}
}