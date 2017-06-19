import React, { Component } from 'react';

import Shell from './../../../containers/Shell'
import Workspace from './../../../containers/Workspace'
import Command from './../../../containers/Command'

import Home from './../../../images/home.svg';
import Tasks from './../../../images/tasks.svg';
import Wrench from './../../../images/wrench.svg';
import Report from './../../../images/report.svg';
import Config from './../../../images/config.svg';
import Manutencao from './../../../images/manutencao.svg';

export default class IHM extends Component {
	constructor(props) {
	    super(props);

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
		return(
			
			<Shell
				title={this.props.config.nome}
				user={this.props.user}
				config={this.props.config}
				handleLogout={this.props.handleLogout}
			>
				<Workspace
					config={this.props.config}
				>
					{
						this.props && this.props.children && (React.cloneElement(this.props.children, { user: this.props.user, config: this.props.config })   )
					}
				</Workspace>

				<Command 
					onClick={[
						{ label: 'Principal', onclick: this.handleMenuPrincipal, image: Home },
						{ label: 'Tarefas', onclick: this.handleAutomatico, 	image: Tasks},
						{ label: 'Modo Manual', onclick: this.handleManual, 	image: Wrench},
						{ label: 'Relatorios', onclick: this.handleMenuPrincipal,image: Report},
						{ label: 'Programação', onclick: this.handleAutomatico,	image: Config},
						{ label: 'Manutenção', onclick: this.handleManual, 		image: Manutencao }
					]}
				/>

			</Shell>
		)

	}
}
//<img alt="Logo" src={require('./images/reset.png')} />