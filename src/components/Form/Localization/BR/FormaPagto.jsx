import React from 'react';

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

FormaPagto.propTypes = {
    forma_pagto: React.PropTypes.string.isRequired
}

export default FormaPagto;