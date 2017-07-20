import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

const Name = (props) => (
    <FormGroup validationState="success">
        {props.label && <ControlLabel>{props.label}</ControlLabel>}
        <FormControl type="text" style={{ textAlign: 'left' }} name={props.name} value={props.value} onChange={props.onChange} readOnly />
        <FormControl.Feedback />
    </FormGroup>
);

Name.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string.isRequired
};

Name.defaultProps = {
    name: '',
    value: ''
}

export default Name;