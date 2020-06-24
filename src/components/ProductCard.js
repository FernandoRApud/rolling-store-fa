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
					<img src={this.getPhoto(`${id}-1`)}/>
					<img src={this.getPhoto(`${id}-2`)}/>
					<img src={this.getPhoto(`${id}-3`)}/>
					<img src={this.getPhoto(`${id}-4`)}/>
				</Carousel>
				<p style={{paddingTop: '1.5rem'}}>{description}</p>
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
											<p className="price" style={{ textAlign: 'center' }}>$ {price}</p>
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