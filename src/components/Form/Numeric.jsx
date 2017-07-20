import React from 'react';
import PropTypes from 'prop-types';

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
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func
};

export default Numeric;