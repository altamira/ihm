const onValidate = (valor) => {
    const regex = /^\$?[0-9]{1,7}?$/;
    return regex.test(valor) && valor.length < 10;
}

export default onValidate;