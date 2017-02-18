import React, { Component } from 'react';

import Shell from './../../../containers/Shell'
import Workspace from './../../../containers/Workspace'
import Command from './../../../containers/Command'

//import reset_button from './../../../images/reset.png'

export default class IHM extends Component {
	constructor(props) {
	    super(props);

	    this.handleMenuPrincipal = this.handleMenuPrincipal.bind(this);
	    this.handleAutomatico = this.handleAutomatico.bind(this);
	    this.handleManual = this.handleManual.bind(this);
	  }

	handleMenuPrincipal() {
		this.props.router.push('/maquinas/perfiladeiras/n3/main')
	}

	handleAutomatico(params) {
		this.props.router.push('/maquinas/perfiladeiras/n3/automatico')
	}

	handleManual(params) {
		this.props.router.push('/maquinas/perfiladeiras/n3/manual')
	}

	render() {

		return(
			
			<Shell
				title={"Coluna N3"}
			>
				<Workspace>
					{this.props.children}
				</Workspace>

				<Command 
					onClick={[
						{ label: 'Menu Principal', onclick: this.handleMenuPrincipal, icon: 'ok' },
						{ label: 'Modo Automatico', onclick: this.handleAutomatico, icon: 'plus' },
						{ label: 'Modo Manual', onclick: this.handleManual, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Reset_button.svg/188px-Reset_button.svg.png' },
						{ label: 'Config', onclick: this.handleMenuPrincipal },
						{ label: 'Sair', onclick: this.handleAutomatico },
						{ label: '...', onclick: this.handleManual }
					]}
				/>

			</Shell>
		)

	}
}
