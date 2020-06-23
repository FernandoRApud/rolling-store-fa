import React, { Fragment } from 'react';
import {Link} from "react-router-dom";
import { Card, Row, Col, Popover, Button, Carousel } from 'antd';
const { Meta } = Card;  

export default class ProductCard extends React.Component{
	getPhoto(prodId) {
		return `https://firebasestorage.googleapis.com/v0/b/rolling-store-af.appspot.com/o/products%2F${prodId}.jpg?alt=media`
	}

	render(){
		const { name, brand, price, id, description, date } = this.props.product;

		const content = (
			<div className="card-popover">
				<b className="card-title"><p>{name}</p></b>
				<p className="card-date">Lanzamiento: {date}</p>
				<Carousel autoplay>
					{/* <div>Hola</div> */}
					{/* <div>Adios</div> */}
					<img src={this.getPhoto(`${id}-1`)}/>
					<img src={this.getPhoto(`${id}-2`)}/>
					<img src={this.getPhoto(`${id}-3`)}/>
					<img src={this.getPhoto(`${id}-4`)}/>
				</Carousel>
				<p style={{paddingTop: '1.5rem'}}>{description}</p>
				{/* {this.getPhoto(`${id}-1`) ? <h1>Si</h1> : <h1>No</h1>} */}
			</div>
		);

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
					<Popover content={content} placement="rightTop" overlayStyle={{ width: "15%" }}>

					<div className="card-container">
						<img src={this.getPhoto(id)} style={{width: "100%"}}></img>
						<div className="card-text-container">
							<Row type="flex" className="card-text-row">
								<Col xs={{span: 14}} lg={{span: 14}}>
									<p className="card-name">{name}</p>
								</Col>
								<Col xs={{span: 2}} lg={{span: 2}}></Col>
								<Col xs={{span: 8}} lg={{span: 8}}>
									<div >
										<p className="price">$ {price}</p>
									</div>
								</Col>
							</Row>
						</div>
					</div>

					</Popover>
				</Link>
			</div>
		)
	}
}