import React, { Component } from 'react';

import Background       from './../../../images/bg01.png';
import AplanDescer      from './../../../images/cmd-aplan-descer.png';
import AplanSubir       from './../../../images/cmd-aplan-subir.png';
import AplanTampaAbrir  from './../../../images/cmd-aplan-tampa-abrir.png';
import AplanTampaFechar from './../../../images/cmd-aplan-tampa-fechar.png';
import AplanPerfilAvanca from './../../../images/cmd-aplan-perfil-avanca.png';
import AplanPerfilRecua from './../../../images/cmd-aplan-perfil-recua.png';
import AplanExtSubir    from './../../../images/cmd-aplan-ext-subir.png';
import AplanExtDescer   from './../../../images/cmd-aplan-ext-descer.png';
import Prensa           from './../../../images/cmd-prensa-ligar.png';
import DesbobOff        from './../../../images/ihm-ent-desbob-off.png';
import DesbobOn         from './../../../images/ihm-ent-desbob-on.png';

import {
  Image,
  Button,
  Row,
  Col
} from 'react-bootstrap';

var sectionStyle = {
  width: "100%",
  height: "400px",
  padding: "50px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundColor:'transparent',
  backgroundImage: `url(${Background})`
};



export default class IHM extends Component  {

  constructor(props) {
    super(props);

    
    this.AplanDescer  =   this.AplanDescer.bind(this);

  }

  AplanDescer() {
    console.log("AplanDescer");
    this.props.carregaLista();
  }

	render() {
		return(
          <section style={ sectionStyle } > 
            <Row>
              <Col xs={12} md={12}>
                <h1>{this.props.config.nome}</h1>
              </Col>
              <Col xs={12} md={12}>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanDescer} rounded /> {"Aplanadora desce"}</Button>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanSubir} rounded /> {"Aplanadora Subir"}</Button>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanTampaAbrir} rounded /> {"Aplanadora Abre "}</Button>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanTampaFechar} rounded /> {"Aplanadora Fecha"}</Button>
              </Col>
              <Col xs={12} md={12}>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanPerfilAvanca} rounded /> {"Chapa Avança"}</Button>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanPerfilRecua} rounded /> {"Chapa Recua"}</Button>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanExtSubir} rounded /> {"Plataforma Sobe"}</Button>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanExtDescer} rounded /> {"Plataforma Desce"}</Button>
              </Col>
              <Col xs={12} md={12}>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={Prensa} rounded /> {"Presa liga"}</Button>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={DesbobOff} rounded /> {"Desbobinador Liga"}</Button>
                <Button onClick={this.AplanDescer}><Image style={{height: '50px', width: '60px'}} src={DesbobOn} rounded /> {"Desbobinador Desliga"}</Button>
              </Col>  
            </Row>
          </section>
		)
	}
}
//<img alt="Logo" src={require('./images/reset.png')}/>