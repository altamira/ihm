import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

const Percent = (props) => (
    <FormGroup validationState="success">
        {props.label && <ControlLabel>{props.label}</ControlLabel>}
        <FormControl type="text" style={{ textAlign: 'right' }} name={props.name} value={props.value} onChange={props.onChange} readOnly />
        <FormControl.Feedback />
    </FormGroup>
);

Percent.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func
};

Percent.defaultProps = {
    value: 0
}

export default Percent;