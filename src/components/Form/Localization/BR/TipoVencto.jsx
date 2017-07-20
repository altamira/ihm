import React from 'react';
import PropTypes from 'prop-types';

const TipoVencto = (props) => {

    const tipo_vencto = {
      DDP: 'Dia(s) do Pedido',
      DDL: 'Dia(s) da Entrega',
      DDM: 'Dia(s) da Montagem'
    }

    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.prazo <= 1 && props.tipo_vencto === "DDP" ? 'SINAL' : props.prazo + ' ' + tipo_vencto[props.tipo_vencto]}</span>
        
    );
};

TipoVencto.PropTypes = {
    parcela: PropTypes.number.isRequired,
    prazo: PropTypes.number.isRequired,
    tipo_vencto: PropTypes.string.isRequired
}

export default TipoVencto;