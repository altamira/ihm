import React, { Component } from 'react'

import { 
  Row
} from 'react-bootstrap';

export default class Workspace extends Component {

	render() {

		return(

			<Row style={{height: '400px', border: 'solid 1px', background: 'lightgray', margin: '2px'}}>

				{this.props.children}

			</Row>
		)
	}
	
} 