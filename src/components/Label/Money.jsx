import React from 'react';

import format from 'number-format.js';

const Money = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top', textAlign: 'right', color: props.color && (props.value < 0 ? 'red' : 'blue')}}>{format('R$ ###.###.##0,00', props.value)}</span>
    );
};

Money.propTypes = {
    value: React.PropTypes.number.isRequired
};

Money.defaultProps = {
    value: 0.0
}

export default Money;