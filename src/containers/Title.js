import React  from 'react'

import { 
  Row,
  Col,
  Button,
  Glyphicon
} from 'react-bootstrap';

const Title = props => (

	<Row>
		<Col md={6}><h1>{props.title}</h1></Col>
		<Col md={3}>{
			props.user && props.user.usuario && (<Button
            onClick={ e => props.handleLogout() }
            style={{width: 120}}
            bsStyle="success"
          >
            <Glyphicon glyph="user" />
            <div>{props.user && props.user.usuario}</div>
          	</Button>)} 
        </Col>
	</Row>

)

export default Title;