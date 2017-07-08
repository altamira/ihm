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
    
    this.aplanDescer      =   this.aplanDescer.bind(this);
    this.aplanSubir       =   this.aplanSubir.bind(this);
    this.aplanAbrir       =   this.aplanAbrir.bind(this);
    this.aplanFechar      =   this.aplanFechar.bind(this);
    this.perfilAvanca     =   this.perfilAvanca.bind(this);
    this.perfilRecua      =   this.perfilRecua.bind(this);
    this.plataformaSobe   =   this.plataformaSobe.bind(this);
    this.plataformaDesce  =   this.plataformaDesce.bind(this);
    this.prensaLigar      =   this.prensaLigar.bind(this);
    this.prensaDesligar   =   this.prensaDesligar.bind(this);
    this.desbobinadorLigar=   this.desbobinadorLigar.bind(this);
    this.desbobinadorDesligar=this.desbobinadorDesligar.bind(this);
  }

  aplanDescer() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanDescer");
  }

  aplanSubir() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanSubir");
  }
  
  aplanAbrir() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanAbrir");
  }
  
  aplanFechar() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanFechar");
  }

  perfilAvanca() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "perfilAvanca");
  }
  
  perfilRecua() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "perfilRecua");
  }


  plataformaSobe() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "plataformaSobe");
  } 

  plataformaDesce() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "plataformaDesce");
  }  

  prensaLigar() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "prensaLigar");
  }  

  prensaDesligar() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "prensaDesligar");
  }

  desbobinadorLigar() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "desbobinadorLigar");
  }  
  
  desbobinadorDesligar() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "desbobinadorDesligar");
  }


	render() {
		return(
          <section style={ sectionStyle } > 
            <Row>
              <Col xs={12} md={12}>
                <h1>{this.props.config.nome}</h1>
              </Col>
              <Col xs={12} md={12}>
                <Button onClick={this.aplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanDescer} rounded     /> {"Aplanadora desce"}</Button>
                <Button onClick={this.aplanSubir}> <Image style={{height: '50px', width: '60px'}} src={AplanSubir} rounded      /> {"Aplanadora Subir"}</Button>
                <Button onClick={this.aplanAbrir}> <Image style={{height: '50px', width: '60px'}} src={AplanTampaAbrir} rounded /> {"Aplanadora Abrir "}</Button>
                <Button onClick={this.aplanFechar}><Image style={{height: '50px', width: '60px'}} src={AplanTampaFechar} rounded /> {"Aplanadora Fecha"}</Button>
              </Col>
              <Col xs={12} md={12}>
                <Button onClick={this.perfilAvanca}>  <Image style={{height: '50px', width: '60px'}} src={AplanPerfilAvanca} rounded /> {"Chapa Avança"}</Button>
                <Button onClick={this.perfilRecua}>   <Image style={{height: '50px', width: '60px'}} src={AplanPerfilRecua} rounded /> {"Chapa Recua"}</Button>
                <Button onClick={this.plataformaSobe}><Image style={{height: '50px', width: '60px'}} src={AplanExtSubir} rounded    /> {"Plataforma Sobe"}</Button>
                <Button onClick={this.plataformaDesce}><Image style={{height: '50px', width: '60px'}} src={AplanExtDescer} rounded  /> {"Plataforma Desce"}</Button>
              </Col>
              <Col xs={12} md={12}>
                <Button onClick={this.prensaLigar}>   <Image style={{height: '50px', width: '60px'}} src={Prensa} rounded          /> {"Presa ligar"}</Button>
                <Button onClick={this.prensaDesligar}><Image style={{height: '50px', width: '60px'}} src={Prensa} rounded          /> {"Presa desligar"}</Button>
                <Button onClick={this.desbobinadorLigar}>   <Image style={{height: '50px', width: '60px'}} src={DesbobOff} rounded /> {"Desbobinador Ligar"}</Button>
                <Button onClick={this.desbobinadorDesligar}><Image style={{height: '50px', width: '60px'}} src={DesbobOn} rounded /> {"Desbobinador Desligar"}</Button>
              </Col>  
            </Row>
          </section>
		)
	}
}
//<img alt="Logo" src={require('./images/reset.png')}/>