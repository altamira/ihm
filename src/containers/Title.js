import React  from 'react'

import { 
  Row,
  Col,
  Button,
  Glyphicon
} from 'react-bootstrap';

const Title = props => (

	<Row>
    <Col xs={3} sm={3} md={2}>
          <Button
            style={{margin: '0 0 10px'}}
            bsStyle="primary"
            bsSize="large" block
          >
            {props.timer.hours}
          </Button>
    </Col>
		<Col xs={6} sm={6} md={8}>
          <style type="text/css">{`
           .btn-custom {
            background-color: purple;
             color: white;
          }`}</style>
          <Button
            bsStyle="custom"
            style={{margin: '0 0 10px'}}
            bsSize="large" block
          >
            {props.config.nome}
          </Button>
    </Col>
		<Col xs={3} sm={3} md={2}>{
			    <Button
            onClick={ e => props.handleLogout() }
            style={{margin: '0 0 10px'}}
            bsStyle="info" 
            bsSize="large" block
          >
          <Glyphicon glyph="user" />
            - {props.user.usuario}
          </Button>
        } 
    </Col>
	</Row>

)

export default Title;
