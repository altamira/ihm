import React, { Component } from 'react';

import Shell from './../../../containers/Shell'
import Workspace from './../../../containers/Workspace'
import Command from './../../../containers/Command'

//import mqtt from 'mqtt/lib/connect';

//import reset_button from './../../../images/reset.png'
//import reset_button from './../../../images/reset.png'
//<img alt="Logo" src={require('./images/reset.png')} />

import Background from './../../../images/reset.png';

export default class IHM extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      clientId: this.props.config.codigo + (1 + Math.random() * 4294967295).toString(16),
	      form: null,
	      config: {
	        host: '192.168.0.169',
	        port: 61614,
	        protocol: 'ws'
	      }
	    }

	    this.handleMenuPrincipal = this.handleMenuPrincipal.bind(this);
	    this.handleAutomatico 	 = this.handleAutomatico.bind(this);
	    this.handleManual 		 = this.handleManual.bind(this);
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
		let x = this.state.clientId;
		console.log('clientId = ' + x);

		return(
			
			<Shell
				title={this.props.config.nome}
				user={this.props.user}
				config={this.props.config}
				handleLogout={this.props.handleLogout}
			>
				<Workspace>
					{this.props.children}
				</Workspace>

				<Command 
					onClick={[
						{ label: 'Menu Principal', onclick: this.handleMenuPrincipal, icon: 'ok' },
						{ label: 'Modo Automatico', onclick: this.handleAutomatico, icon: 'plus' },
						{ label: 'Modo Manual', onclick: this.handleManual, image: Background },
						{ label: 'Config', onclick: this.handleMenuPrincipal },
						{ label: 'Sair', onclick: this.handleAutomatico },
						{ label: '...', onclick: this.handleManual }
					]}
				/>

			</Shell>
		)

	}
}
//<img alt="Logo" src={require('./images/reset.png')} />