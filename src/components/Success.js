import React from 'react';
import {Redirect} from 'react-router-dom';
import {Layout, Input, Row} from 'antd';
const {Content} = Layout;

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