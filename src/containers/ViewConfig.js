import React from 'react';

import {
    Modal,
    Row,
    Col,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';

const ViewConfig = (props) =>
    <div className="static-modal">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Parametros da {props.nome}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col md={4}>Encoder</Col>
                    <Col md={8}>
                        <FormGroup validationState={'warning'} >
                            <FormControl name="encoder" componentClass="select" placeholder="Parametros do Encoder" value="Encoder" readOnly >
                                <option value="FATOR"> FATOR = {props.parametros.encoder.fator}</option>
                                <option value="RESOL"> RESOLUÇÃO = {props.parametros.encoder.resolucao}</option>
                                <option value="PERIM"> PERIMETRO = {props.parametros.encoder.perimetro} mm</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>Veloc Manual</Col>
                    <Col md={8}>
                        <FormGroup validationState={'warning'} >
                            <FormControl name="velocidade_manual" componentClass="select" placeholder="Parametros aceleracao Manual" value="Manual" readOnly >
                                <option value="FATOR"> ACELERAÇÃO = {props.parametros.manual.aceleracao} s</option>
                                <option value="RESOL"> DESACELERAÇÃO = {props.parametros.manual.desaceleracao} s</option>
                                <option value="PERIM"> VELECIDADE = {props.parametros.manual.velocidade} %</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>Veloc Auto</Col>
                    <Col md={8}>
                        <FormGroup validationState={'warning'} >
                            <FormControl name="velocidade_auto" componentClass="select" placeholder="Parametros aceleracao Automatica" value="Auto" readOnly >
                                <option value="FATOR"> ACELERAÇÃO = {props.parametros.automatico.aceleracao} s</option>
                                <option value="RESOL"> DESACELERAÇÃO = {props.parametros.automatico.desaceleracao} s</option>
                                <option value="PERIM"> VELECIDADE = {props.parametros.automatico.velocidade}%</option>
                                <option value="PARAD"> PARADA ENTRA PÇS = {props.parametros.automatico.paradaEntrePecasProduzidas} pçs</option>
                                <option value="TEMPO"> TEMPO DAS PARADAS = {props.parametros.automatico.tempoParada} s</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>Transmissão</Col>
                    <Col md={8}>
                        <FormGroup validationState={'warning'} >
                            <FormControl name="transmissao" componentClass="select" placeholder="Transmissao" value="Transmissao" readOnly >
                                <option value="REDU"> REDUÇÃO = {props.parametros.transmissao.reducao}s</option>
                                <option value="DIAMETRO"> DESACELERAÇÃO = {props.parametros.transmissao.diametrorolo}s</option>
                                <option value="AVANCO"> AVANCO = {props.parametros.transmissao.avancoMilimetrosPorRotacao} mm</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>Corte</Col>
                    <Col md={8}>
                        <FormGroup validationState={'warning'} >
                            <FormControl name="corte" componentClass="select" placeholder="Corte" value="Corte" readOnly >
                                <option value="ESPESSURA"> ESPESSURA = {props.parametros.corte.espessura} mm</option>
                                <option value="TEMPO"> TEMPO = {props.parametros.corte.tempo}s</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>Ferramenta</Col>
                    <Col md={8}>
                        <FormGroup validationState={'warning'} >
                            <FormControl name="ferramenta" componentClass="select" placeholder="Ferramenta" readOnly >
                            {Object.keys(props.parametros.ferramenta).map( (key, index) => 
                                <option key={'ferramentas-' + index}> {key.toUpperCase()} = {props.parametros.ferramenta[key]} mm</option>
                            )}
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>Lubrificação</Col>
                    <Col md={8}>
                        <FormGroup validationState={'warning'} >
                            <FormControl name="lubrificação" componentClass="select" placeholder="Lubrificação" value="Lubrificação" readOnly >
                                <option value="PRESET"> PRESET = {props.parametros.lubrificacao.preset.MbNovoCiclos} ciclos</option>
                                <option value="CICLOS"> PRESET 2 = {props.parametros.lubrificacao.ciclos.PrsCiclos} ciclos</option>
                            </FormControl>
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