import React, { Component } from 'react'

import { 
  Row,
  Col,
  Button,
  Glyphicon,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Button, 'custom');

export default class Title extends Component {
  render() {
    return(
    	<Row>
        <Col xs={3} sm={3} md={2}>
              <Button
                style={{margin: '0 0 10px'}}
                bsStyle="primary"
                bsSize="large" block
              >
                {this.props.timer.hours}
              </Button>
        </Col>
    		<Col xs={6} sm={6} md={8}>
              <style type="text/css">{`
               .btn-custom {
                  background-color: purple;
                  color: white;
                }`}</style>
              <Button
                bsStyle="custom"
                style={{margin: '0 0 10px'}}
                bsSize="large" block
              >
                {this.props.config.nome}
              </Button>
        </Col>
    		<Col xs={3} sm={3} md={2}>{
    			    <Button
                onClick={ e => this.props.handleLogout() }
                style={{margin: '0 0 10px'}}
                bsStyle="info" 
                bsSize="large" block
              >
              <Glyphicon glyph="user" />
                - {this.props.user.usuario}
              </Button>
            } 
        </Col>
    	</Row>
    )
  }
}
