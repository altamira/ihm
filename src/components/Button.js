import React from 'react';

import { 
  Button as BootstrapButton
} from 'react-bootstrap';

const Button = props => (
	<BootstrapButton 
		style={{magin: '0'}}
		label={props.label}
	>
	</BootstrapButton>
)