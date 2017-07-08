import React, { Component } from 'react'

import { 
  Row,
  Col,
  Button,
  Glyphicon,
  Image
} from 'react-bootstrap';

export default class Command extends Component {

	render() {

		return(

			<Row style={{height: '150px', padding: "5px"}}>

				{this.props.onClick.map( (button, index) => 
					<Col style={{height: '100%'}} key={index} xs={6} sm={4} md={2}>
						<Button 
							style={{width: '100%', height: '100%', magin: '0'}} 
							onClick={button.onclick.bind(this)} 
							disabled={button.disabled}
						>
							{button.icon && (<Glyphicon glyph={button.icon || ''} />) }
							{button.image && <Image style={{height: '100px', width: '100px'}} src={button.image} rounded />} 
                    		<div><span>{button.label}</span></div>							
						</Button>
					</Col>
				)}
			</Row>
		)
	}
	
} 
/*Array.isArray(this.props.onClick) && 12 % this.props.onClick.length ? 
					(<Col style={{height: '100%'}} key={this.props.onClick.length} md={12 % this.props.onClick.length}>
						<Button disabled={true} style={{width: '100%', height: '100%', magin: '0'}} ></Button>
					</Col>) : null*/
//Image load
//<img alt="Logo" src={require('./images/reset.png')} />