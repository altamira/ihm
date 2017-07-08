import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { 
  Modal,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

//import md5 from 'md5';

import api from './../api';

import Error from './Error';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      usuario: '',
      senha: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.onValidateNotEmpty = this.onValidateNotEmpty.bind(this);
    
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(element) {
    this.setState({[element.target.name]: element.target.value})
  }

  handleCloseDialog() {
    this.setState({dialog: null});
  }

  handleLogin() {
    api.usuario.login(this.state.usuario, this.state.senha, this.handleAuthenticate.bind(this))
  }

  handleAuthenticate(user) {
    //<div className="display-linebreak"> 
    //console.log(JSON.stringify(user, null, 2)); //usuario logado
    if (user.usuario) {
      this.props.onLogin && this.props.onLogin(user);
    } else {
      let err = {mensagem:   <span> {'Usuário e senha não encontrado.'} <br/> {'Verifique se digitou a senha corretamente.'} </span>}
      this.setState({dialog: <Error {...err} onClose={this.handleCloseDialog.bind(this)} />})
    }
  }

  onValidateNotEmpty(propriedade, maxLength) {
    return this.state[propriedade] !== null && this.state[propriedade].trim().length > 2 && this.state[propriedade].length <= maxLength;
  }

  render() {

    return(
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Controle de Acesso</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col md={4}>Usuario</Col>
              <Col md={8}>
                <FormGroup validationState={this.onValidateNotEmpty('usuario', 12) ? 'success' : 'error'} >
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  <FormControl 
                    type="text" name="usuario" 
                    value={this.state.usuario} 
                    onChange={this.handleChange} 
                    onKeyPress={ e => e.key === 'Enter' && ReactDOM.findDOMNode(this.refs.senha).focus()} 
                    placeholder="Digite aqui seu nome de usuario"
                  />
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>Senha</Col>
              <Col md={8}>
                <FormGroup validationState={this.onValidateNotEmpty('senha', 12) ? 'success' : 'error'} >
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  <FormControl 
                    type="password" 
                    ref="senha" 
                    name="senha" 
                    value={this.state.senha} 
                    onChange={this.handleChange} onKeyPress={ e => e.key === 'Enter' && this.handleLogin()} 
                    placeholder="Digite aqui a senha"
                  />
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button ref="acessar" bsStyle="primary" onClick={this.handleLogin} disabled={this.onValidateNotEmpty('senha', 12) ? false : true }>Acessar</Button>
          </Modal.Footer>

          {this.state.dialog}
          
        </Modal.Dialog>
      </div>
    );
  }
}