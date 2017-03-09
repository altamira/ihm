import React from 'react';

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

CNPJ.propTypes = {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
};

CNPJ.defaultProps = {
    value: '00.000.000/0000-00'
}

export default CNPJ;