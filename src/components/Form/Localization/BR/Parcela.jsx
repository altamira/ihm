import React from 'react';
import PropTypes from 'prop-types';

const Parcela = props => 
    <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.parcela}/{props.parcelas}</span>

Parcela.PropTypes = {
    parcela: PropTypes.number.isRequired,
    parcelas: PropTypes.number.isRequired    
};

export default Parcela;



