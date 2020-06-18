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
                <Content className="content">
                    <Row>
                       Success
                    </Row>
                </Content>
            </Layout>
        );
    }
}