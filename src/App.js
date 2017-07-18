import React, { Component } from 'react';

import './App.css';

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

    let today = new Date(),
        date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    let hora = new Date().toLocaleTimeString().slice(0,5);

    this.state = {
      config: {codigo: null}, 
      usuario: null,
      timer: {"date":date,"hours":hora},
      topics: {}
    }
    this.handleLoadConfig = this.handleLoadConfig.bind(this);
    this.handleLogin    =   this.handleLogin.bind(this);
    this.handleConfirmLogout = this.handleConfirmLogout.bind(this);
    this.handleLogout   =   this.handleLogout.bind(this);
    this.handleDesligar =   this.handleDesligar.bind(this);
    this.handleSelect   =   this.handleSelect.bind(this);
    this.mqttConnect    =   this.mqttConnect.bind(this);
    this.mqttUnconnect  =   this.mqttUnconnect.bind(this);

    this.mqttCommand    =   this.mqttCommand.bind(this);

    this.handleErros    =   this.handleErros.bind(this);
    this.handleDebug    =   this.handleDebug.bind(this);
    this.handleEstado   =   this.handleEstado.bind(this);
    this.handleTimer    =   this.handleTimer.bind(this);
    this.handleUser     =   this.handleUser.bind(this);

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentWillMount() {
    config.setConfiguration();
    api.config.setErrorHandler(this.handleErrorConfig.bind(this));
    api.maquina.config.get(this.handleLoadConfig.bind(this));
  }
    
  componentWillUnmount() {
    this.mqttUnconnect()
  }

  //Erro padrão da maquina que chama handleCloseDialog
  handleError(err) {
    let props = {...err, message: err.message, stack: err.stack}
    this.setState({dialog: <Error {...props} onClose={this.handleCloseDialog.bind(this)} />})
  }

  //Erro carregando a configuração da maquina por falha no node-red e chama handleCloseDialogOnConfigError
  handleErrorConfig(err) {
    let props = {...err, message: err.message, stack: err.stack}
    this.setState({dialog: <ConfigError {...props} onClose={this.handleCloseDialogOnConfigError.bind(this)} />})
  }

  handleCloseDialog() {
    this.setState({ dialog: undefined })
  }

  handleCloseDialogOnConfigError() {
    this.setState(api.maquina.config.get(this.handleLoadConfig.bind(this)) )
  }

  handleLoadConfig(config) {
    api.config.setErrorHandler(this.handleError.bind(this));
    let mqttConnect = !!config.codigo ? this.mqttConnect.bind(this) : null
    this.setState({ dialog: undefined, config: config }, mqttConnect)
  }
  
  mqttConnect(){

  const clientId = this.state.config.codigo.toString(); 
  const caminho = ('fabrica/ihm/estado/' + clientId)
  //console.log('Config: ' + JSON.stringify(this.state.config,null,2));

  const settings = {
    host: window.location.hostname,
    port: 61614,
    protocol: 'ws',
    qos: 0

  }

  this.client = mqtt.connect(settings);

  this.client.on('connect', function() {

    this.client.subscribe(
      ['fabrica/ihm/erros/'   + clientId, 
       'fabrica/ihm/debug/'   + clientId,
       'fabrica/ihm/estado/'  + clientId,
       'fabrica/ihm/comandos/'+ clientId,
       'fabrica/ihm/timer/'             ,
       'fabrica/ihm/user/'    + clientId], 
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
                          [granted[4].topic]: this.handleTimer,
                          [granted[5].topic]: this.handleUser,
                        }
                      )
            },
            //this.mqttCommand
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
    this.mqttCommand(caminho,  clientId + ' = ON'); //Send message machine code + = ON
  }

  mqttUnconnect() {
    this.state.topicos && Object.keys(this.state.topicos).forEach( (topic) =>
      {
        console.log('Excluido do topico: ' + topic)
        this.client.mqttUnconnect(
          topic, 
          function(err) { 
            err && console.log('Erro ao retirar a inscrição ao topico: ' + topic)
          }
        )
      }
    )
    window.userAuthenticated = undefined;
    this.props.router.push('/');  
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
    this.setState({ timer: JSON.parse(msg) }); // Updade node-red timer to this.state.timer
  }

  handleUser(msg) {
    alert('User: ' +  msg); 
  }

  mqttCommand(caminho, mensagem) {
    // enviar dados para fila
    this.client.publish(caminho,mensagem);
  }

  handleConfirmLogout() {
    this.setState({dialog: <Confirm message={'O que você quer fazer ?'} onClose={this.handleCloseDialog.bind(this)} onConfirm={this.handleLogout.bind(this)} onDesligar={this.handleDesligar.bind(this)} />})
  }

  handleDesligar() {
    const caminho2 = ('fabrica/ihm/user/' + this.state.config.codigo.toString()); 
    this.mqttCommand(caminho2, this.state.usuario.usuario.toString() + ' = Logout'); //Send user name + Logout
    const caminho = ('fabrica/ihm/estado/' + this.state.config.codigo.toString()); 
    this.mqttCommand(caminho, this.state.config.codigo.toString() + ' = OFF');  //Send message machine code + = OFF
    this.mqttUnconnect();                                                       //Unconnect MQTT topics
    this.setState({usuario: null, dialog: undefined});    
  }

  handleLogout() {
    const caminho = ('fabrica/ihm/user/' + this.state.config.codigo.toString()); 
    this.mqttCommand(caminho, this.state.usuario.usuario.toString() + ' = Logout'); //Send user name + Logout
    this.mqttUnconnect() //Unconnect MQTT topics
    this.setState({usuario: null, dialog: undefined});
  }

  handleLogin(usuario) {
    const caminho = ('fabrica/ihm/user/' + this.state.config.codigo.toString()); 
    this.mqttCommand(caminho, usuario.usuario + ' = Login');                        //Send user name + Login
    this.setState({usuario: usuario}, 
    this.props.router.push.bind(null, this.state.config.path))
  }

  handleSelect() {
    api.maquina.config.get(this.handleLoadConfig.bind(this))
  }

  render() {
    // change this.state change page render.

    if(this.state.config._id !== undefined) { 
        if(this.state.usuario !== null) {     
          return(
            <div className="App">
                {  
                        <Col md={12} >        {/*Go to machine main.js "router" */}
                         {
                          this.props && this.props.children && (React.cloneElement(this.props.children, { user: this.state.usuario, config: this.state.config, timer: this.state.timer, handleLogout: this.handleConfirmLogout, mqttCommand: this.mqttCommand}))
                         }
                        </Col> 
                }
                {this.state.dialog}
            </div>
          );
        }
        else {
          return(
            <div className="App">
                {  
                  <Login onLogin={this.handleLogin} />         //Go to handleLogin !
                }
                {this.state.dialog}
            </div>
          );
        }
    }
    else {
      if (this.state.config.codigo == null){
        return(
          <div className="App">
              {
                <SelectConfig onSelect={this.handleSelect} />  //Wait for the HTTP response from the server with the machine settings!
              }
              {this.state.dialog}
          </div>
        );
      }
      else {
        return (
          <span>Aguarde, carregando... Verfique a rede</span>
        );
      }
    } 
  }
}

