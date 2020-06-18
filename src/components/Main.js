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
            <div className="">Cargando...</div>
          :
						<>
							<p className="text-black" style={{paddingTop: '1.5rem'}}>Basado en tu última visita</p>
							<Row>
								{this.props.products.map(prod => (
									<Col xs={{span: 24}} lg={{span: 6}}>
										<ProductCard product={prod}/> 
									</Col>
								))}
							</Row>
						</>
				}
				</Content>
			</Layout>
		);
	}
}