import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import DatePicker from 'react-bootstrap-date-picker';

const DueDate = (props) => (
    <FormGroup validationState="success">
        {props.label && <ControlLabel>{props.label}</ControlLabel>}
        <DatePicker 
            name={props.name} 
            value={props.date} 
            disabled={true} 
            showClearButton={false} 
            readOnly={!props.onChange} 
            onChange={props.onChange} 
        />
        <FormControl.Feedback />
    </FormGroup>
);

DueDate.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

DueDate.defaultProps = {
    date: new Date().toLocaleDateString()
}

export default DueDate;