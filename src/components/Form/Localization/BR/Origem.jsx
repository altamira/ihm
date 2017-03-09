import React from 'react';

const Origem = (props) => {

    const origem = {
      VENDA: 'Venda de Produto',
      DIFAL: 'Diferencial de ICMS'
    }

    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{origem[props.origem]}</span>
        
    );
};

Origem.propTypes = {
    origem: React.PropTypes.string.isRequired
}

export default Origem;