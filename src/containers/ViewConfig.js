import React from 'react';

import {
    Modal,
    Row,
    Col,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';

import DatePicker from 'react-bootstrap-date-picker';

const BrazilianDayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const BrazilianMonthLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Octubro', 'Novembro', 'Dezembro'];


const ViewConfig = (props) =>
    <div className="static-modal">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Parametros da Maquina</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col md={4}>Origem do Recebível</Col>
                    <Col md={8}>
                        <FormGroup validationState={'success'} >
                            <FormControl name="origem" componentClass="select" placeholder="Origem do Recebível" value={props.nome} readOnly >
                                <option value="VENDA">Venda de Produto</option>
                                <option value="DIFAL">Diferencial de ICMS</option>
                                <option value="SUCATA">Venda de Sucata</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>Forma de Pagamento</Col>
                    <Col md={8}>
                        <FormGroup validationState={'success'} >
                            <FormControl name="forma_pagto" componentClass="select" placeholder="Forma de Pagamento" value={props.forma_pagto} readOnly >
                                <option value="COBRANCA">Cobrança Bancária</option>
                                <option value="DEPOSITO">Depósito Bancário</option>
                                <option value="BNDES">Cartão BNDES</option>
                                <option value="CHEQUE">Cheque</option>
                                <option value="DINHEIRO">Dinheiro</option>
                                <option value="A_FATURAR">Faturar na Entrega</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>Tipo de Vencto</Col>
                    <Col md={8}>
                        <FormGroup validationState={'success'} >
                            <FormControl name="tipo_vencto" componentClass="select" placeholder="Tipo de Vencimento" value={props.tipo_vencto} readOnly >
                                <option value="DDP">Dias do Pedido (DDP)</option>
                                <option value="DDL">Dias da Entrega (DDL)</option>
                                <option value="DDM">Dias da Montagem (DDM)</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>Data Base</Col>
                    <Col md={8}>
                        <FormGroup validationState={'success'} >
                            {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                            {/*<FormControl type="text" defaultValue="10/10/2016" />*/}
                            {/*<FormControl.Feedback />*/}
                            <DatePicker name="data_base" value={props.data_base} readOnly dayLabels={BrazilianDayLabels} monthLabels={BrazilianMonthLabels} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>Codigo</Col>
                    <Col md={8}>
                        <FormGroup validationState={'success'} >
                            {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                            <FormControl type="text" name="prazo" value={props.codigo} readOnly />
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>Nome</Col>
                    <Col md={8}>
                        <FormGroup validationState={'success'} >
                            {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                            <FormControl type="text" name="prazo" value={props.nome} readOnly />
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>Vencto</Col>
                    <Col md={8}>
                        <FormGroup validationState={'success'} >
                            {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                            {/*<FormControl type="text" defaultValue="10/10/2016" />*/}
                            {/*<FormControl.Feedback />*/}
                            <DatePicker name="vencto" value={props.vencto} readOnly dayLabels={BrazilianDayLabels} monthLabels={BrazilianMonthLabels} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>Valor da Parcela</Col>
                    <Col md={8}>
                        <FormGroup validationState={'success'} >
                            {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                            <FormControl type="text" name="valor" value={props.valor} readOnly />
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onClose} >Fechar</Button>
                {/*<Button
                    bsStyle="success"
                    onClick={props.onConfirm}
                    style={{ margin: '5px' }} >Alterar</Button>*/}
            </Modal.Footer>

        </Modal.Dialog>
    </div>


export default ViewConfig;