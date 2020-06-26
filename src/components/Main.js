import React from 'react';
import ProductCard from './ProductCard';
import {Layout, Row, Col} from 'antd';
const { Content} = Layout;


export default class Main extends React.Component{

	render(){
		return(
			<Layout>
				<Content className="content">
					{
						this.props.products.length === 0 ? 
							<div>Cargando...</div>
						:
							<>
								<p className="text-black" style={{paddingTop: '1.5rem'}}>Ya disponible</p>	
								<div className="products-container">
									<Row>
										{this.props.products.map(prod => (
											<Col xs={{span: 22}} lg={{span: 4}}>
												<ProductCard product={prod}/> 
											</Col>
										))}
									</Row>
								</div>
								{/* <p className="text-black" style={{paddingTop: '1.5rem'}}>Más títulos</p>
								<div className="products-container">
									<div className="">
										a
									</div>
								</div> */}
							</>
					}
				</Content>
			</Layout>
		);
	}
}