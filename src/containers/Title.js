import React, { Component } from 'react'
import ConfirmDate from './dialogDate.jsx';

import { 
  Row,
  Col,
  Button,
  Glyphicon,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Button, 'custom');

export default class Title extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      dialog :null
    }

    this.CloseDialog = this.CloseDialog.bind(this);
    this.timerHours = this.timerHours.bind(this);
  }

  CloseDialog() {
    this.setState({ dialog: undefined })
  }

  timerHours() {
    this.setState({dialog: <ConfirmDate date={this.props.timer.date} hours={this.props.timer.hours} CloseDialog={this.CloseDialog.bind(this)} />});
  }


  render() {


    return(
    	<Row>
        <Col xs={3} sm={3} md={2}>
              <Button
                onClick={e => this.timerHours()}
                style={{margin: '0 0 10px'}}
                bsStyle="primary"
                bsSize="large" 
                block
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
                bsSize="large" 
                block
              >
                {this.props.config.nome}
              </Button>
        </Col>
    		<Col xs={3} sm={3} md={2}>{
    			    <Button
                onClick={ e => this.props.handleLogout() }
                style={{margin: '0 0 10px'}}
                bsStyle="info" 
                bsSize="large" 
                block
              >
              <Glyphicon glyph="user" />
                - {this.props.user.usuario}
              </Button>
            } 
        </Col>
        {this.state.dialog}
    	</Row>
    )
  }
}
