import React, { Component } from 'react';

import Background from './../../../images/bg01.png';

import {
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
	render() {
		return(
          <section style={ sectionStyle } > 
            <Row>
              <Col xs={12} md={12}>
                <h1>"test"</h1>
              </Col>
              <Col xs={12} md={12}>
                <Button >{this.props.config.nome}</Button>
              </Col>  
            </Row>
          </section>
		)
	}
}
//<img alt="Logo" src={require('./images/reset.png')}/>