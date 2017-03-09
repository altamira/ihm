import React from 'react';

import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

const Numeric = (props) => (
    <FormGroup validationState="success">
        {props.label && <ControlLabel>{props.label}</ControlLabel>}
        <FormControl 
            type="text" 
            name={props.name} 
            value={props.value} 
            readOnly={!props.onChange} 
            onChange={props.onChange} 
        />
        <FormControl.Feedback />
    </FormGroup>
);

Numeric.propTypes = {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func
};

export default Numeric;