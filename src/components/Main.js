import React from 'react';
import logo from '../rollingstore.png';
import {Layout, Input, Row, Col} from 'antd';
const { Header, Content, Footer} = Layout;
const { Search } = Input;

export default class Main extends React.Component{
    render(){
        return(
            <Layout>
                <Header className="header">
                    <Row>
                        {/* Antd usa 24 columnas mietras que Bootstrap 12 */}
                        <Col xs={{span: 5}} lg={{span: 3}}>
                            <img src={logo} className="header-logo" alt="logo" />
                        </Col>
                        <Col xs={{span: 19}} lg={{span: 16}}>
                            <Search placeholder="Que queres comprar?" onSearch={value => console.log(value)}/>
                        </Col>
                        <Col xs={{span: 0}} lg={{span: 5}}>
                            <div className="header-greetings">Bienvenido {this.props.userName}</div>
                        </Col>
                    </Row>
                </Header>
                <Content className="content">
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                </Content>
                <Footer className="footer">
                    Footer
                </Footer>
            </Layout>
        );
    }
}