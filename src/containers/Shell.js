import React, { Component } from 'react'

import Title from './../components/Title'

export default class Shell extends Component {

	render() {
		return(

			<div>
				<Title title={this.props.title} />

				{this.props.children}
				
			</div>

		)
	}

}