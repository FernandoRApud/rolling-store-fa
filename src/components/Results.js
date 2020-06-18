import React, { Fragment } from 'react';
import ProductCard from './ProductCard';
import {Layout, Row, Col} from 'antd';
const {Content} = Layout;

export default class Results extends React.Component{
	getSpanWidth = (quantity) =>{
		return quantity === 1 ? 24 : quantity === 2 ? 12 : 8
	}

	render(){
		return(
			<Layout>
				<Content className="content">
				{
					this.props.results.length > 0 ? (
						<Fragment>
							<p className="text-black">Resultados de tu búsqueda</p>
							<Row>
								{this.props.results.map(prod => (
									<Col xs={{span: 24}} lg={{span: this.getSpanWidth(this.props.results.length) }}>
										<ProductCard key={prod.id} product={prod}/> 
									</Col>
								))}
							</Row>
						</Fragment>
					) : (
						<Fragment>
              <p> No se encontraron resultados </p>
            </Fragment>
					)
				}
					
				</Content>
			</Layout>
		);
	}
}