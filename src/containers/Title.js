import React  from 'react'

import { 
  Row,
  Col,
  Button,
  Glyphicon
} from 'react-bootstrap';

const Title = props => (

	<Row>
    <Col md={2}><h1>{props.timer.hours}</h1></Col>
		<Col md={8}><h1>{props.config.nome}</h1></Col>
		<Col md={2}>{
			      props.user && props.user.usuario && (<Button
            onClick={ e => props.handleLogout() }
            style={{width: 120}}
            bsStyle="info"
          >
            <Glyphicon glyph="user" />
            <div>{props.user && props.user.usuario}</div>
          	</Button>)} 
        </Col>
	</Row>

)

export default Title;
