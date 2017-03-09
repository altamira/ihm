import React from 'react';

const Parcela = props => 
    <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.parcela}/{props.parcelas}</span>

Parcela.propTypes = {
    parcela: React.PropTypes.number.isRequired,
    parcelas: React.PropTypes.number.isRequired    
};

export default Parcela;



