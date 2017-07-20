import React, { Component } from 'react';

import {
  Modal,
  Button,
  Glyphicon
} from 'react-bootstrap';

export default class Confirm extends Component {
	
	render() {

       	console.log('Erro:' + JSON.stringify(this.props, null, 2))

		let erro = 0;
		let mensagem = 'Erro desconhecido, nenhuma mensagem recebida.';

		if (this.props.response && this.props.response.data) {
			erro = this.props.response.data.erro || erro;
			mensagem = this.props.response.data.mensagem || mensagem;
		} else if (this.props.message) {
			erro = this.props.error || erro;
			mensagem = this.props.message || mensagem;
		} else if (this.props.mensagem) {
			erro = this.props.erro || erro;
			mensagem = this.props.mensagem || mensagem;
		}

		return(

			<div className="static-modal">
		        <Modal.Dialog>
		          <Modal.Header>
		            <Modal.Title>Mensagem {erro ? '(código do erro: ' + erro + ')': ''} </Modal.Title>
		          </Modal.Header>

		          <Modal.Body>
		          	
		          	<h4 style={{textAlign: 'center'}}>{mensagem}</h4>

		          </Modal.Body>

		          <Modal.Footer>
		            <Button bsStyle={'primary'} onClick={this.props.onClose} >Cancelar</Button>
		          	<Button bsStyle={'success'} onClick={this.props.onConfirm} >Trocar usuario? <Glyphicon glyph="user" /></Button>
		          	<Button bsStyle={'danger'} onClick={this.props.onDesligar} >Desligar <Glyphicon glyph="off" /></Button>
		          </Modal.Footer>

		        </Modal.Dialog>
		    </div>

		);

	}
}		