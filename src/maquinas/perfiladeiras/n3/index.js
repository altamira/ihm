import React, { Component } from 'react';

import Shell from './../../../containers/Shell'
import Workspace from './../../../containers/Workspace'
import Command from './../../../containers/Command'

import PERFIL from './../../../api/usuario/perfil.json';

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
	    //this.handlePerfil 		 = this.handlePerfil.bind(this);
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

	/*handlePerfil(perfil){
		//console.log(JSON.stringify(this.props.user,null,2));
		console.log ("PERFIL = " + this.props.user.perfil)
		console.log ("PERFIL.OPERADOR =" + PERFIL.OPERADOR)

		let values = PERFIL[Object.keys(PERFIL).find( key => key === perfil)]

		return values 
	}*/

	render() { 
		const keys = Object.keys(PERFIL) //keys = (7) ["ADMINISTRADOR", "MANUTENCAO", "SUPE...
		
		const key = keys.find( key => key === this.props.user.perfil) //key = "SUPERVISOR", keys = (7) ["ADMINISTRADOR", "MAN...

		let perfil = PERFIL[key] //perfil = 2, key = "SUPERVISOR

		//let perfil = PERFIL[Object.keys(PERFIL).find( key => key === this.props.user.perfil)]

		return(
			
			<Shell
				title={this.props.config.nome}
				user={this.props.user}
				config={this.props.config}
				handleLogout={this.props.handleLogout} 
				handleDesligar={this.props.handleDesligar} 
			>
				<Workspace
					config={this.props.config}
					user={this.props.user}
					mqttCommand={this.props.mqttCommand}
				>
					{
						React.cloneElement(this.props.children, { user: this.props.user, config: this.props.config, mqttCommand: this.mqttCommand })   
					}
				</Workspace>

				<Command 
					onClick={[
						{ label: 'Principal', onclick: this.handleMenuPrincipal, image: Home , 		disabled: perfil > PERFIL.AJUDANTE },
						{ label: 'Tarefas', onclick: this.handleAutomatico, 	image: Tasks, 		disabled: perfil > PERFIL.OPERADOR },
						{ label: 'Modo Manual', onclick: this.handleManual, 	image: Wrench, 		disabled: perfil > PERFIL.OPERADOR },
						{ label: 'Relatorios', onclick: this.handleMenuPrincipal,image: Report, 	disabled: perfil > PERFIL.LIDER_PRODUCAO },
						{ label: 'Programação', onclick: this.handleAutomatico,	image: Config, 		disabled: perfil > PERFIL.SUPERVISOR },
						{ label: 'Manutenção', onclick: this.handleManual, 		image: Manutencao, 	disabled: ((perfil > PERFIL.MANUTENCAO) || (perfil > PERFIL.SUPERVISOR)) }
					]}
				/>
			</Shell>
		)

	}
}
//<img alt="Logo" src={require('./images/reset.png')} />