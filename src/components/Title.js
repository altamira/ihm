import React from 'react'

import { 
  Row,
  Col
} from 'react-bootstrap';



const Title = props => (

	<Row>
		<Col md={6}><h1>{props.title}</h1></Col>
		<Col md={6}>{props.user && props.user.usuario} (<a href="#" onClick={ e => props.handleLogout() }>Logout</a>)</Col>
	</Row>

)

export default Title;
