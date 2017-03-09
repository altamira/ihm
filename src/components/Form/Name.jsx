import React from 'react';

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
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string.isRequired
};

Name.defaultProps = {
    name: '',
    value: ''
}

export default Name;