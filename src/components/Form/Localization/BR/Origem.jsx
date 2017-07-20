import React from 'react';
import PropTypes from 'prop-types';

const Origem = (props) => {

    const origem = {
      VENDA: 'Venda de Produto',
      DIFAL: 'Diferencial de ICMS'
    }

    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{origem[props.origem]}</span>
        
    );
};

Origem.PropTypes = {
    origem: PropTypes.string.isRequired
}

export default Origem;