import React, { Component } from 'react';

import './App.css';

/*import { 
  LoadingEllipse, 
  Title
} from './components';*/

import { 
  Login,
  SelectConfig
} from './containers';

import { 
  Col,
} from 'react-bootstrap';

//import mqtt from 'mqtt/lib/connect';

import api from './api';
import Error from './containers/Error.jsx';
import ConfigError from './containers/ConfigError.jsx';
import Confirm from './containers/Confirm.jsx';
import config from './config';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {codigo: null}, 
      usuario: null
    }
    this.handleLoadConfig = this.handleLoadConfig.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleConfirmLogout = this.handleConfirmLogout.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentWillMount() {
    config.setConfiguration();
    api.config.setErrorHandler(this.handleErrorConfig.bind(this));
    api.maquina.config.get(this.handleLoadConfig.bind(this));
  }
  
  //Erro carregando a configuração da maquina por falha no node-red e chama handleCloseDialogOnConfigError
  handleErrorConfig(err) {
    let props = {...err, message: err.message, stack: err.stack}
    this.setState({dialog: <ConfigError {...props} onClose={this.handleCloseDialogOnConfigError.bind(this)} />})
  }

  handleCloseDialogOnConfigError() {
    this.setState(api.maquina.config.get(this.handleLoadConfig.bind(this)) )
  }

  //Erro padrão da maquina que chama handleCloseDialog
  handleError(err) {
    let props = {...err, message: err.message, stack: err.stack}
    this.setState({dialog: <Error {...props} onClose={this.handleCloseDialog.bind(this)} />})
  }

  handleCloseDialog() {
    this.setState({ dialog: undefined })
  }

  handleLoadConfig(config) {
    api.config.setErrorHandler(this.handleError.bind(this));
    this.setState({ dialog: undefined, config: config })
  }

  handleLogin(usuario) {
    this.setState({usuario: usuario}, this.props.router.push.bind(null, this.state.config.path))
  }

  handleConfirmLogout() {
    //this.setState({usuario: undefined});//, this.unsubscribe);
    this.setState({dialog: <Confirm message={'O que você quer fazer ?'} onClose={this.handleCloseDialog.bind(this)} onConfirm={this.handleLogout.bind(this)} />})
  }

  handleLogout() {
    this.setState({usuario: undefined, dialog: undefined});//, this.unsubscribe);
  }

  handleSelect() {
    api.maquina.config.get(this.handleLoadConfig.bind(this))
  }

  render() {

    // state.config = null
    const waiting = (
        <span>Aguarde, carregando...</span>
    );

    // state.config = {} // nao encontrou a conf para esta maquina no mongoDB
    const load =(
        <SelectConfig onSelect={this.handleSelect} />
    );

    // state.config = { ... } // encontrou a conf da maquina no mongoDB
    const login = (
        <Login onLogin={this.handleLogin} />
    );

    // state.config = { ... } && this.state.usuario !== null
    const main = ( 
        <Col md={12} >
          {
            this.props && this.props.children && (React.cloneElement(this.props.children, { user: this.state.usuario, config: this.state.config, handleLogout: this.handleConfirmLogout })   )
          }
        </Col>
    )

    // maquina de estado mudando this.state muda o render da pagina
    return(
      <div className="App">
          {this.state.config ? (this.state.config._id ? (this.state.usuario ? main : login) : load) : waiting }
          {this.state.dialog}
      </div>
    );
  }
}

