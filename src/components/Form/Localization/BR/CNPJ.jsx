import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import format from 'number-format.js';

const CNPJ = (props) => (
    <FormGroup validationState="success">
        {props.label && <ControlLabel>{props.label}</ControlLabel>}
        <FormControl type="text" style={{ textAlign: 'right' }} name={props.name} value={format('00.000.000/0000-00', props.value)} onChange={props.onChange} readOnly />
        <FormControl.Feedback />
    </FormGroup>
);

CNPJ.PropTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

CNPJ.defaultProps = {
    value: '00.000.000/0000-00'
}

export default CNPJ;