import React, { Component } from 'react';

import {
  Modal,
  Button
} from 'react-bootstrap';

export default class Confirm extends Component {
	
	render() {

		return(

			<div className="static-modal">
		        <Modal.Dialog>
		          <Modal.Header style={{
		          					background : '#265a88', 
		          					color: '#fff'
		          					}}>
		            <Modal.Title><strong>Mensagem </strong></Modal.Title>
		          </Modal.Header>

		          <Modal.Body>
		          	
		          	<h4 style={{textAlign: 'center'}}>DATA : {this.props.date}</h4>
		          	<h4 style={{textAlign: 'center'}}>HORA : {this.props.hours}</h4>

		          </Modal.Body>

		          <Modal.Footer>
		            <Button bsStyle={'primary'} onClick={this.props.CloseDialog} >Cancelar</Button>

		          </Modal.Footer>

		        </Modal.Dialog>
		    </div>

		);

	}
}		