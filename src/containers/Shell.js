import React, { Component } from 'react'

import Title from './../containers/Title'

export default class Shell extends Component {

	render() {
		let x = this.props.config.perfil;
		console.log('Igual a = ' + x);
		return(

			<div>
				<Title title={this.props.title} user={this.props.user} handleLogout={this.props.handleLogout} handleDesligar={this.props.handleDesligar} />
				
				{this.props.children}
				
			</div>

		)
	}

}
