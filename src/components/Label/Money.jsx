import React from 'react';
import PropTypes from 'prop-types';

import format from 'number-format.js';

const Money = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top', textAlign: 'right', color: props.color && (props.value < 0 ? 'red' : 'blue')}}>{format('R$ ###.###.##0,00', props.value)}</span>
    );
};

Money.propTypes = {
    value: PropTypes.number.isRequired
};

Money.defaultProps = {
    value: 0.0
}

export default Money;