import React, { Component } from 'react';

export default class IHM extends Component {

	render() {

		return(
			<div>
				<h1>Tela de MANUTENCAO Coluna {this.props.config.nome}...</h1>
			</div>
		)

	}
}
