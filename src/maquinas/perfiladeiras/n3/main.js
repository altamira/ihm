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
  Row,
  Col,
  Tooltip,
  OverlayTrigger
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

const tooltip_aplanDescer =  (<Tooltip id="tooltip_aplanDescer">  <strong>Aplanadora toda Desce!</strong></Tooltip>),
      tooltip_aplanSubir =   (<Tooltip id="tooltip_aplanSubir">   <strong>Aplanadora toda Sobe! </strong></Tooltip>),
      tooltip_aplanAbrir =   (<Tooltip id="tooltip_aplanAbrir">   <strong>A Tampa Abre. </strong></Tooltip>),
      tooltip_aplanFechar =  (<Tooltip id="tooltip_aplanFechar">  <strong>A Tampa Fecha. </strong></Tooltip>),
      tooltip_perfilAvanca = (<Tooltip id="tooltip_perfilAvanca"> <strong>Avança chapa. </strong></Tooltip>),
      tooltip_perfilRecua =  (<Tooltip id="tooltip_perfilRecua">  <strong>Recua chapa. </strong></Tooltip>),
      tooltip_plataformaSobe=(<Tooltip id="tooltip_plataformaSobe"><strong>Plataforma Externa Sobe. </strong></Tooltip>),
      tooltip_plataformaDesce=(<Tooltip id="tooltip_plataformaDesce"><strong>Plataforma Externa Desce. </strong></Tooltip>),
      tooltip_prensaLigar =   (<Tooltip id="tooltip_prensaLigar">   <strong>Motor ON. </strong></Tooltip>),
      tooltip_prensaDesligar =(<Tooltip id="tooltip_prensaDesligar"><strong>Motor OFF. </strong></Tooltip>),
      tooltip_desbobinadorLigar =   (<Tooltip id="tooltip_desbobinadorLigar">   <strong>Desb ON. </strong></Tooltip>),
      tooltip_desbobinadorDesligar =(<Tooltip id="tooltip_desbobinadorDesligar"><strong>Desb OFF. </strong></Tooltip>);

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
    return (
      <section style={sectionStyle} >
        <Row>
          <Col xs={12} md={12}>
            <OverlayTrigger placement="top" overlay={tooltip_aplanDescer}><img onTouchEnd={this.aplanDescer} onClick={this.aplanDescer} alt="AplanDescer" src={AplanDescer} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_aplanSubir}><img onTouchEnd={this.aplanSubir} onClick={this.aplanSubir} alt="AplanSubir" src={AplanSubir} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_aplanAbrir}><img onTouchEnd={this.aplanAbrir} onClick={this.aplanAbrir} alt="AplanAbrir" src={AplanTampaAbrir} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_aplanFechar}><img onTouchEnd={this.aplanFechar} onClick={this.aplanFechar} alt="AplanFechar" src={AplanTampaFechar} /></OverlayTrigger>
          </Col>
          <Col xs={12} md={12}>
            <OverlayTrigger placement="top" overlay={tooltip_perfilAvanca}><img onTouchEnd={this.perfilAvanca} onClick={this.perfilAvanca} alt="Chapa Avança" src={AplanPerfilAvanca} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_perfilRecua}><img onTouchEnd={this.perfilRecua} onClick={this.perfilRecua} alt="Chapa Recua" src={AplanPerfilRecua} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_plataformaSobe}><img onTouchEnd={this.plataformaSobe} onClick={this.plataformaSobe} alt="Plataforma Sobe" src={AplanExtSubir} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_plataformaDesce}><img onTouchEnd={this.plataformaDesce} onClick={this.plataformaDesce} alt="Plataforma Desce" src={AplanExtDescer} /></OverlayTrigger>
          </Col>
          <Col xs={12} md={12}>
            <OverlayTrigger placement="top" overlay={tooltip_prensaLigar}><img onTouchEnd={this.prensaLigar} onClick={this.prensaLigar} alt="Presa ligar" src={Prensa} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_prensaDesligar}><img onTouchEnd={this.prensaDesligar} onClick={this.prensaDesligar} alt="Presa Desligar" src={Prensa} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_desbobinadorLigar}><img onTouchEnd={this.desbobinadorLigar} onClick={this.desbobinadorLigar} alt="Desb Ligar" src={DesbobOff} /></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip_desbobinadorDesligar}><img onTouchEnd={this.desbobinadorDesligar} onClick={this.desbobinadorDesligar} alt="Desb Desligar" src={DesbobOn} /></OverlayTrigger>
          </Col>
        </Row>
      </section>
    )
  }
}
// image <img onClick={this.aplanDescer} alt="test" src={AplanDescer}/>
// botao <Button onClick={this.aplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanDescer} rounded     /> {"Aplanadora desce"}</Button>
// <Col xs={12} md={12}>
// <h1>{this.props.config.nome}</h1>
// </Col>