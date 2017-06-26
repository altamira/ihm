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

import mqtt from 'mqtt/lib/connect';
import { assign} from 'lodash';

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
      usuario: null,
      topics: {}
    }
    this.handleLoadConfig = this.handleLoadConfig.bind(this);
    this.handleLogin =      this.handleLogin.bind(this);
    this.handleConfirmLogout = this.handleConfirmLogout.bind(this);
    this.handleLogout =     this.handleLogout.bind(this);
    this.handleDesligar =   this.handleDesligar.bind(this);
    this.handleSelect =     this.handleSelect.bind(this);

    this.handleErros    =   this.handleErros.bind(this);
    this.handleDebug    =   this.handleDebug.bind(this);
    this.handleEstado   =   this.handleEstado.bind(this);
    this.handleTimer    =   this.handleTimer.bind(this);

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
    this.setState({ dialog: undefined, config: config }, this.state.config.codigo && this.mqttconnect.bind(this))
  }
  
  mqttconnect(){

  const clientId = this.state.config.codigo.toString();// + (1 + Math.random() * 4294967295).toString(16);  

  console.log('Config: ' + JSON.stringify(this.state.config,null,2));

    let opts = {
      host: window.location.hostname,
      port: 61614,
      protocol: 'ws',
      qos: 0,
      retain: false,
      clean: true,
      keepAlive: 30,
      clientId: clientId
    }

    this.client = mqtt.connect(opts);

    this.client.on('connect', function() {

      this.client.subscribe(
        ['fabrica/ihm/erros/'   + clientId, 
         'fabrica/ihm/debug/'   + clientId,
         'fabrica/ihm/estado/'  + clientId,
         'fabrica/ihm/comandos/'+ clientId,
         'fabrica/ihm/timer/'   + clientId], 
         function(err, granted) { 
          !err ? 
            this.setState(
              {
                topics: assign(
                          this.state.topics, 
                          {
                            [granted[0].topic]: this.handleErros,   
                            [granted[1].topic]: this.handleDebug,  
                            [granted[2].topic]: this.handleEstado,
                            [granted[3].topic]: this.handleComandos,
                            [granted[4].topic]: this.handleTmier,
                          }
                        )
              },
              this.carregaLista
            ) 
          : 
            alert('Erro ao se inscrever no topico: ' + err);
        }.bind(this)
      );  
    }.bind(this));
    
    this.client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      
      // this.state.topics[topic] && this.handleError(message.toString());
      this.state.topics[topic] && this.state.topics[topic](message.toString()); 

    }.bind(this))
    console.log('ClientID dessa maquina = ' + clientId );
  }
  
  componentWillUnmount() {
    this.state.topics && Object.keys(this.state.topics).forEach( (topic) =>
      this.client.unsubscribe(topic, function(err) 
        { 
          err && console.log('Erro ao retirar a inscrição ao topico: ' + topic)
        }
      )
    )
    this.client.end();
  }

  carregaLista() {
    // enviar dados para fila
    this.client.publish('fabrica/ihm/debug/' + this.state.config.codigo.toString(),JSON.stringify('Alessandro!'));
  }

  handleErros(msg) {
    alert('Erros: ' + msg); //Mostra o que recebeu da fila erros
  }

  handleDebug(msg) {
    alert('Debug: ' + msg);  //Mostra o que recebeu da fila Debug
  }

  handleEstado(msg) {
    alert('Estado: ' + msg); //Mostra o que recebeu da fila Estado
  }

  handleComandos(msg) {
    alert('Comandos: ' + msg); //Mostra o que recebeu da fila Comandos
  }

  handleTimer(msg) {
    alert('Timer: ' + msg); //Mostra o que recebeu da fila Timer
  }


  handleLogin(usuario) {
    this.setState({usuario: usuario}, this.props.router.push.bind(null, this.state.config.path))
  }

  handleConfirmLogout() {
    this.setState({dialog: <Confirm message={'O que você quer fazer ?'} onClose={this.handleCloseDialog.bind(this)} onConfirm={this.handleLogout.bind(this)} onDesligar={this.handleDesligar.bind(this)} />})
  }

  handleLogout() {

    console.log('Logout')
    this.setState({usuario: undefined, dialog: undefined});//, this.unsubscribe);

    this.state.topics && Object.keys(this.state.topics).forEach( (topic) =>
      this.client.unsubscribe(topic, function(err) 
        { 
          err && console.log('Erro ao retirar a inscrição ao topico: ' + topic)
        }
      )
    )
    this.client.end();
    this.props.router.push('/')
  }

  handleDesligar() {

    console.log('Desligou')
    this.setState({usuario: undefined, dialog: undefined});//, this.unsubscribe);

    this.state.topics && Object.keys(this.state.topics).forEach( (topic) =>
      this.client.unsubscribe(topic, function(err) 
        { 
          err && console.log('Erro ao retirar a inscrição ao topico: ' + topic)
        }
      )
    )
    this.client.end();

    window.userAuthenticated = undefined;
    
    this.props.router.push('/');
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

