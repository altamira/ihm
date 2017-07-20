import React from 'react';
import PropTypes from 'prop-types';

import {
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';

import format from 'number-format.js';

const Money = (props) => (
    <FormGroup validationState="success">
        {props.label && <ControlLabel>{props.label}</ControlLabel>}
        <FormControl
            type="text"
            style={{ textAlign: 'right' }}
            name={props.name}
            value={format('R$ ###.###.##0,00', props.value)}
            readOnly={!props.onChange}
            onChange={props.onChange}
        />
        <FormControl.Feedback />
    </FormGroup>
);

Money.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};

Money.defaultProps = {
    value: 0
}

export default Money;
