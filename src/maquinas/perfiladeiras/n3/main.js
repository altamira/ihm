import React, { Component } from 'react';

// Botton
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

//Image background
import Desbobinador     from './../../../images/maq-desbob.png';
import AplanadoraDirCorpo from './../../../images/maq-aplan-dir-corpo.png';
import PrensaCorpo      from './../../../images/maq-prs-corpo.png';

import {
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Grid
} from 'react-bootstrap';

var sectionStyle = {
  width: '100%',
  height: '400px',
  padding: '0px',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundColor:'transparent'
};

var Desbobi = {
  backgroundImage: `url(${Desbobinador})`,
  backgroundPosition: '50% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '70%',
  backgroundColor:'transparent',
  webkitTransform: 'scaleX(-1)', 
  filter: 'FlipH',
  border: '1px solid red'
};

var Aplan = {
  backgroundImage: `url(${AplanadoraDirCorpo})`,
  backgroundPosition: '50% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '64%',
  backgroundColor:'transparent',
  border: '1px solid blue'
};

var Press = {
  backgroundImage: `url(${PrensaCorpo})`,
  backgroundPosition: '50% 84%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '44%',
  backgroundColor:'transparent',
  border: '1px solid green'
};

var Test = {
  border: '1px solid yellow'
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
        <Grid fluid style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Row>
            <Col xs={4} md={4} style={Desbobi}>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <OverlayTrigger placement="top" overlay={tooltip_desbobinadorLigar}><img onTouchEnd={this.desbobinadorLigar} onClick={this.desbobinadorLigar} alt="Desb Ligar" src={DesbobOff} style={{float:'right',height: '94px', width: '94px'}} /></OverlayTrigger>
                <OverlayTrigger placement="top" overlay={tooltip_desbobinadorDesligar}><img onTouchEnd={this.desbobinadorDesligar} onClick={this.desbobinadorDesligar} alt="Desb Desligar" src={DesbobOn} style={{float:'right',height: '94px', width: '94px'}} /></OverlayTrigger>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
            </Col>
            <Col xs={4} md={4} style={Aplan}>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row style={Test}>
                <OverlayTrigger placement="top" overlay={tooltip_aplanAbrir}><img onTouchEnd={this.aplanAbrir} onClick={this.aplanAbrir} alt="AplanAbrir" src={AplanTampaAbrir} /></OverlayTrigger>
              </Row>
              <Row>
                  <OverlayTrigger placement="top" overlay={tooltip_perfilRecua}><img onTouchEnd={this.perfilRecua} onClick={this.perfilRecua} alt="Chapa Recua" src={AplanPerfilRecua} style={{float:'left'}}/></OverlayTrigger> 
                  <OverlayTrigger placement="top" overlay={tooltip_aplanFechar}><img onTouchEnd={this.aplanFechar} onClick={this.aplanFechar} alt="AplanFechar" src={AplanTampaFechar} style={{float:'center'}}/></OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={tooltip_perfilAvanca}><img onTouchEnd={this.perfilAvanca} onClick={this.perfilAvanca} alt="Chapa Avança" src={AplanPerfilAvanca} style={{float:'right'}}/></OverlayTrigger> 
               </Row>
              <Row style={Test}>
                <OverlayTrigger placement="top" overlay={tooltip_aplanSubir}><img onTouchEnd={this.aplanSubir} onClick={this.aplanSubir} alt="AplanSubir" src={AplanSubir} style={{float:'left'}}/></OverlayTrigger>
                <OverlayTrigger placement="top" overlay={tooltip_plataformaSobe}><img onTouchEnd={this.plataformaSobe} onClick={this.plataformaSobe} alt="Plataforma Sobe" src={AplanExtSubir}  style={{float:'right'}} /></OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger placement="top" overlay={tooltip_aplanDescer}><img onTouchEnd={this.aplanDescer} onClick={this.aplanDescer} alt="AplanDescer" src={AplanDescer} style={{float:'left'}}/></OverlayTrigger>
                <OverlayTrigger placement="top" overlay={tooltip_plataformaDesce}><img onTouchEnd={this.plataformaDesce} onClick={this.plataformaDesce} alt="Plataforma Desce" src={AplanExtDescer}  style={{float:'right'}} /></OverlayTrigger> 
              </Row>
              <Row style={Test}>
              <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
            </Col>
            <Col xs={4} md={4} style={Press}>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <OverlayTrigger placement="top" overlay={tooltip_prensaLigar}><img onTouchEnd={this.prensaLigar} onClick={this.prensaLigar} alt="Presa ligar" src={Prensa} /></OverlayTrigger>
                <OverlayTrigger placement="top" overlay={tooltip_prensaDesligar}><img onTouchEnd={this.prensaDesligar} onClick={this.prensaDesligar} alt="Presa Desligar" src={Prensa} /></OverlayTrigger>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
// image <img onClick={this.aplanDescer} alt="test" src={AplanDescer}/>
// botao <Button onClick={this.aplanDescer}><Image style={{height: '50px', width: '60px'}} src={AplanDescer} rounded     /> {"Aplanadora desce"}</Button>
// <Col xs={12} md={12}>
// <h1>{this.props.config.nome}</h1>
// </Col>