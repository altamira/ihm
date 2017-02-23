import React, { Component } from 'react';

import './App.css';

import Title from './components/Title'
import Background from './images/bg01.png';
//import LoadingCircular from './components/LoadingCircular'
import LoadingEllipse from './components/LoadingEllipse'
//import { LoadingCircular } from './components';
//import mqtt from 'mqtt/lib/connect';

import api from './api';
import Login from './login';
//import Error from './Error';


import { 
  Col,
  Row,
  Grid
} from 'react-bootstrap';

var sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor:'transparent',
  backgroundImage: `url(${Background})`
};


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      config: null,
      
      usuario: null

    }

    this.handleLoadConfig = this.handleLoadConfig.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    api.maquina.config.get(this.handleLoadConfig.bind(this))
  }

  handleLoadConfig(config) {
    this.setState({config: config})
  }

  handleLogin(usuario) {
    this.setState({usuario: usuario}, this.props.router.push.bind(null, this.state.config.path))
  }

  render() {

    const main = ( 

      <Col md={12} >
        {this.props.children}
      </Col>

    )

    const login = (<Login onLogin={this.handleLogin} />);

    const load =(
      <section style={ sectionStyle } >
      <Grid>
        
     
        <Row>
          <Col  xs={12}   md={8} mdOffset={2} lg={8} lgOffset={2}> <Title title={'Esperando conexão com NODE-RED'} /> </Col>
          <Col  xsHidden  md={2}              lg={2}             >                                                    </Col>
        </Row>
        <Row>
          <Col  xs={2} xsOffset={5} md={2} mdOffset={5} lg={2} lgOffset={5}> <LoadingEllipse/>                        </Col>
          <Col  xs={5}    md={5}              lg={5}             ><img alt="Logo" src={require('./images/reset.png')} />         </Col>
        </Row>  
      </Grid>
 </section>

    );

    return(
      <div className="App">
          {this.state.config ? (this.state.usuario ? main : login) : load}
      </div>
    );

  }

}
