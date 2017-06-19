import React, { Component } from 'react';

import Background from './../../../images/bg01.png';
import Config from './../../../images/config.svg';

import {
  Image,
  Button,
  Row,
  Col
} from 'react-bootstrap';

var sectionStyle = {
  width: "100%",
  height: "400px",
  padding: "50px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundColor:'transparent',
  backgroundImage: `url(${Background})`
};



export default class IHM extends Component {

  myfunction() {
        console.log("CLICKED");
  }

	render() {
		return(
          <section style={ sectionStyle } > 
            <Row>
              <Col xs={12} md={12}>
                <h1>{this.props.config.nome}</h1>
              </Col>
              <Col xs={12} md={12}>
                <Button><Image style={{height: '100px', width: '100px'}} src={Config} rounded />test </Button>
                <Button onClick={this.myfunction}>{"Aplanadora Desce"}</Button>
                <Button >{"Aplanadora Abre"}</Button>
                <Button >{"Aplanadora Fecha"}</Button>
                <Button >{"Chapa Frente"}</Button>
                <Button >{"Chapa Traz"}</Button>
                <Button >{"Plataforma Sobe"}</Button>
                <Button >{"Plataforma Desce"}</Button>
                <Button >{"Desbobinador"}</Button>
              </Col>  
            </Row>
          </section>
		)
	}
}
//<img alt="Logo" src={require('./images/reset.png')}/>