import React from 'react';

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
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    date: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
};

DueDate.defaultProps = {
    date: new Date().toLocaleDateString()
}

export default DueDate;