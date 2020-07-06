import React, {Component} from 'react';
import logo from '../rollingstore.png';
import { Layout, Row, Col, Input, Button, Modal, Form } from 'antd';
import { Redirect, Link  } from 'react-router-dom';
import PropTypes from 'prop-types'
// import { getUser } from '../reducers';
import { registerUser } from "../actions";
import { connect } from 'react-redux';
import { 
	getUser,
	// getUsername,
	// getPassword
} from "../reducers";
const { Header } = Layout;
const { Search } = Input;

class CustomHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectToResults: false,
			redirectToMain: false,
			usernameL: '',
			passwordL: '',
			usernameR: 'edu',
			passwordR: '432',
			formTextSubmit: 'Registrarse',
			isLoged: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.updateList = this.props.updateList.bind(this);
	}
	
	setRedirectToMain = () => {
		this.setState({
			redirectToMain: true,
			redirectToResults: false,
		})
	}

	renderRedirectToMain = () => {
		if (this.state.redirectToMain) {
			return <Redirect to='/' />
		}
	}

	setRedirectToResults = () => {
		this.setState({
			redirectToResults: true,
			redirectToMain: false,
		})
	}

	renderRedirectToResults = () => {
		if (this.state.redirectToResults) {
			return <Redirect to='/results' />
		}
	}

	handleChange(e) {
		let term = e.target.value;
		this.props.updateTerm(term)
	}

	handleLogReg(e){
		const { name, value } = e.target;
		// console.log(name, value);
		this.setState({[name]: value}, () => console.log(this.state));
		this.state.usernameL !== '' || this.state.passwordL !== '' ? this.setState({formTextSubmit: 'Loguearse'}) : this.setState({formTextSubmit: 'Registrarse'});
	}

	handleClearTerm() {
		this.props.updateTerm('')
	}

	handleSearch(term) {
		const localTerm = term;
		let currentProducts = [];
		let newProducts = [];

		if (localTerm !== '') {
			currentProducts = this.props.products;
			newProducts = currentProducts.filter(item => {
				const lc = item.name.toLowerCase();
				const filter = localTerm.toLowerCase();
				return lc.includes(filter);
			});
			this.props.updateList(newProducts, localTerm)
		} else {
			newProducts = this.props.products;
		}

		this.setRedirectToResults();
	}

	handleSubmit(text){
		if(text === 'Registrarse' && this.state.usernameR !== '' && this.state.passwordR !== ''){
			this.props.registerUser(this.state.usernameR, this.state.passwordR)
		}else if(text === 'Loguearse' && this.state.usernameL !== '' && this.state.passwordL !== ''){
			// console.log('login')
			this.setState({isLoged: true, visible: false})
		}else if(text === 'Loguearse'){
			alert('Por favor, completa el logueo')
		}else if(text === 'Registrarse'){
			alert('Por favor, completa el registro')
		}
		// console.log()
	}

	render() {
		// console.log(this.state.username)
		console.log(this.props.username)
		// const { username } = this.props; 
		// console.log(getUsername);
		return(
			<Header className='header'>
				<Modal
					title='Loguearse o registrarse'
					visible={this.state.visible}
					onOk={() => this.handleSubmit(this.state.formTextSubmit)}
          onCancel={() => this.setState({visible: false})}
					cancelText='Cerrar'
					okText={this.state.formTextSubmit}
				>
					<Row>
						<Col xs={10} xl={10}>
							<p>Loguearse</p>
							<Form>
								<Form.Item>
									<Input placeholder="Nombre de usuario" name="usernameL" onChange={(e) => this.handleLogReg(e)} disabled={this.state.usernameR !== '' || this.state.passwordR !== ''}></Input>
								</Form.Item>
								<Form.Item>
									<Input.Password placeholder="Contraseña" name="passwordL" onChange={(e) => this.handleLogReg(e)} disabled={this.state.usernameR !== '' || this.state.passwordR !== ''}></Input.Password>
								</Form.Item>
							</Form>	
						</Col>
						<Col xs={2} xl={2}>
							
						</Col>
						<Col xs={10} xl={10}>
							<p>Registrarse</p>
							<Form>
								<Form.Item>
									<Input placeholder="Nombre de usuario" name="usernameR" onChange={(e) => this.handleLogReg(e)} disabled={this.state.usernameL !== '' || this.state.passwordL !== ''}></Input>
								</Form.Item>
								<Form.Item>
									<Input.Password placeholder="Contraseña" name="passwordR" onChange={(e) => this.handleLogReg(e)} disabled={this.state.usernameL !== '' || this.state.passwordL !== ''}></Input.Password>
								</Form.Item>
							</Form>	
						</Col>
					</Row>
					
				</Modal>
				<Row>
					<Col xs={{ span: 5 }} lg={{ span: 3 }}>
						{/* {this.renderRedirectToMain()} */}
						<Link to="/">
							<img src={logo} className='header-logo' alt='logo'/>
						</Link>
					</Col>
					<Col xs={{ span: 19 }} lg={{ span: 16 }}>
						<div className='header-search'>
							{this.renderRedirectToResults()}
							<Search
								placeholder='¿Que queres comprar?'
								onSearch={() => this.handleSearch(this.props.term)}
								onChange={this.handleChange}
								value={this.props.term}
								enterButton
							/>
							{
								this.props.term !== '' ?
								<div className={'clear-icon'} onClick={() => this.handleClearTerm()}>x</div>
								:
								<div />
							}
						</div>
					</Col>
					<Col xs={{ span: 0 }} lg={{ span: 5 }} style={{display: 'flex', justifyContent: 'center'}}>
							{this.state.isLoged ? <div className='header-greetings text-h'>Bienvenido {this.props.username}</div> : <Button className="header-log" onClick={() => this.setState({visible: true})}>Loguearse</Button>}
					</Col>
				</Row>
			</Header>
		);
	}
}

// CustomHeader.propTypes = {
// 	registerUser: PropTypes.func.isRequired
// }

const mapStateToProps = state => ({
  user: getUser(state)
})

export default connect(mapStateToProps,{registerUser})(CustomHeader)