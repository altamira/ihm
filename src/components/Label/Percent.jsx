import React from 'react';
import PropTypes from 'prop-types';

import format from 'number-format.js';

const Percent = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}}>{format('##0,00', props.value)}%</span>
    );
};

Percent.propTypes = {
    value: PropTypes.number.isRequired
};

Percent.defaultProps = {
    value: 0.0
}

export default Percent;