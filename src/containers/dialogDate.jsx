import React, { Component } from 'react';


import {
  Modal,
  Button
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
		          <Modal.Header>{/* style = {{background : 'blue'}}>*/}
		            <Modal.Title>Mensagem {erro ? '(código do erro: ' + erro + ')': ''} </Modal.Title>
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