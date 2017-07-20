import React from 'react';
import PropTypes from 'prop-types';

const FormaPagto = (props) => {

    const forma_pagto = {
      COBRANCA: 'Cobrança Bancária',
      DEPOSITO: 'Depósito Bancário',
      BNDES: 'Cartão BNDES',
      CHEQUE: 'Cheque',
      DINHEIRO: 'Dinheiro',
      A_FATURAR: 'Faturar na Entrega'
    }

    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{forma_pagto[props.forma_pagto]}</span>
        
    );
};

FormaPagto.PropTypes = {
    forma_pagto: PropTypes.string.isRequired
}

export default FormaPagto;