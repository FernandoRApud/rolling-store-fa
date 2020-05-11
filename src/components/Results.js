import React from 'react';
import logo from '../rollingstore.png';
import ProductCard from './ProductCard';
import {Redirect} from 'react-router-dom';
import {Layout, Input, Row, Col} from 'antd';
const { Header, Content, Footer} = Layout;
const { Search } = Input;

export default class Results extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }
    
    setRedirect = () => {
        this.setState({ redirect: true})
    }

    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
    }

    render(){
        return(
            <Layout>
                <Header className="header">
                    <Row>
                        {/* Antd usa 24 columnas mietras que Bootstrap 12 */}
                        <Col xs={{span: 5}} lg={{span: 3}}>
                            {this.renderRedirect()}
                            <img src={logo} className="header-logo" alt="logo" onClick={this.setRedirect}/>
                        </Col>
                        <Col xs={{span: 19}} lg={{span: 16}}>
                            <div className="header-search">
                                <Search placeholder={this.props.term} onSearch={value => console.log(value)} enterButton/>
                            </div>
                        </Col>
                        <Col xs={{span: 0}} lg={{span: 5}}>
                            <div className="header-greetings">Bienvenido {this.props.userName}</div>
                        </Col>
                    </Row>
                </Header>
                <Content className="content">
                    <p>Resultados de tu búsqueda</p>
                    <Row>
                        {this.props.results.map(prod => (
                            <Col xs={{span: 24}} lg={{span: 24}}>
                                <ProductCard key={prod.id} products={prod}/> 
                            </Col>
                        ))}
                    </Row>
                </Content>
                <Footer className="footer">
                    Footer
                </Footer>
            </Layout>
        );
    }
}