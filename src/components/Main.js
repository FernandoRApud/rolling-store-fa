import React from 'react';
import ProductCard from './ProductCard';
import {Layout, Row, Col} from 'antd';
const { Content} = Layout;


export default class Main extends React.Component{

	render(){
		return(
			<Layout>
				<Content className="content">
					<div className="container">
					{
						this.props.products.length === 0 ? 
							<div className="">Cargando...</div>
						:
							<>
									<p className="text-black" style={{paddingTop: '1.5rem'}}>Ya disponible</p>	
								<Row>
								{/* xs={{span: 24}} lg={{span: 6}} */}
									{this.props.products.map(prod => (
										<Col >
											<ProductCard product={prod}/> 
										</Col>
									))}
								</Row>
							</>
					}
					</div>
				</Content>
			</Layout>
		);
	}
}