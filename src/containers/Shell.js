import React, { Component } from 'react'

import Title from './../components/Title'

export default class Shell extends Component {

	render() {
		return(

			<div>
				<Title title={this.props.title} user={this.props.user} handleLogout={this.props.handleLogout} />

				{this.props.children}
				
			</div>

		)
	}

}
