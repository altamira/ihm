import React, { Component } from 'react';

// Botton
import Background from './../../../images/bg01.png';
import AplanDescer from './../../../images/cmd-aplan-descer.png';
import AplanSubir from './../../../images/cmd-aplan-subir.png';
import AplanTampaAbrir from './../../../images/cmd-aplan-tampa-abrir.png';
import AplanTampaFechar from './../../../images/cmd-aplan-tampa-fechar.png';
import AplanPerfilAvanca from './../../../images/cmd-aplan-perfil-avanca.png';
import AplanPerfilRecua from './../../../images/cmd-aplan-perfil-recua.png';
import AplanExtSubir from './../../../images/cmd-aplan-ext-subir.png';
import AplanExtDescer from './../../../images/cmd-aplan-ext-descer.png';
import motorPrensaON from './../../../images/cmd-prensa-ligar.png';
import motorPrensaOFF from './../../../images/cmd-prensa-desligar.png';
import DesbobOff from './../../../images/ihm-ent-desbob-off.png';
import DesbobOn from './../../../images/ihm-ent-desbob-on.png';

//Image background
import Desbobinador from './../../../images/maq-desbob.png';
import AplanadoraTampa from './../../../images/maq-aplan-esq-tampa-fechada.png';
import AplanadoraCorpo from './../../../images/maqaplanesqcorpo.png';
import PrensaCobertura from './../../../images/maq-prs-cobertura.png';
import PrensaMartelo from './../../../images/maq-prs-martelo.png';
import PrensaCorpo from './../../../images/maq-prs-corpo.png';

import {
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Grid,
  Button,
  Glyphicon
} from 'react-bootstrap';

var sectionStyle = {
  width: '100%',
  height: '400px',
  padding: '0px',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
  backgroundSize: '100% 100%',
  backgroundColor: 'transparent'
};

var Desbobi = {
  backgroundImage: `url(${Desbobinador})`,
  backgroundPosition: '50% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'transparent',
  webkitTransform: 'scaleX(-1)',
  filter: 'FlipH',
  //border: '1px solid red'
};

var AplanCorpo = {
  backgroundImage: [`url(${AplanadoraTampa})`, `url(${AplanadoraCorpo})`],
  backgroundPosition: ['47% 44%', '50% 94%'],
  backgroundRepeat: ['no-repeat', 'no-repeat'],
  backgroundColor: ['transparent', 'transparent'],
  //border: '1px solid blue'
};

var PressCorpo = {
  backgroundImage: [`url(${PrensaCorpo})`, `url(${PrensaCobertura})`, `url(${PrensaMartelo})`],
  backgroundPosition: ['50% 100%', '50% 0%', '50% 32%'],
  backgroundRepeat: ['no-repeat', 'no-repeat', 'no-repeat'],
  backgroundColor: ['transparent', 'transparent', 'transparent'],
  //  border: '1px solid green'
};

const tooltip_aplanDescer = (<Tooltip id="tooltip_aplanDescer">  <strong>Aplanadora toda Desce!</strong></Tooltip>),
  tooltip_aplanSubir = (<Tooltip id="tooltip_aplanSubir">   <strong>Aplanadora toda Sobe! </strong></Tooltip>),
  tooltip_aplanAbrir = (<Tooltip id="tooltip_aplanAbrir">   <strong>A Tampa Abre. </strong></Tooltip>),
  tooltip_aplanFechar = (<Tooltip id="tooltip_aplanFechar">  <strong>A Tampa Fecha. </strong></Tooltip>),
  tooltip_perfilAvanca = (<Tooltip id="tooltip_perfilAvanca"> <strong>Avança chapa. </strong></Tooltip>),
  tooltip_perfilRecua = (<Tooltip id="tooltip_perfilRecua">  <strong>Recua chapa. </strong></Tooltip>),
  tooltip_plataformaSobe = (<Tooltip id="tooltip_plataformaSobe"><strong>Plataforma Externa Sobe. </strong></Tooltip>),
  tooltip_plataformaDesce = (<Tooltip id="tooltip_plataformaDesce"><strong>Plataforma Externa Desce. </strong></Tooltip>),
  tooltip_prensaLigada = (<Tooltip id="tooltip_prensaLigada">   <strong>Motor ON. </strong></Tooltip>),
  tooltip_prensaDesligada = (<Tooltip id="tooltip_prensaDesligada"><strong>Motor OFF. </strong></Tooltip>),
  tooltip_desbobinadorLigar = (<Tooltip id="tooltip_desbobinadorLigar">   <strong>Desb ON. </strong></Tooltip>),
  tooltip_desbobinadorDesligar = (<Tooltip id="tooltip_desbobinadorDesligar"><strong>Desb OFF. </strong></Tooltip>);

export default class IHM extends Component {

  constructor(props) {
    super(props);

    this.state = {
      motor: false,
      Desbobinador: false,
      Tampa: true,
      aplanAuto: false
    }

    //  public handleOnChange(event: any) : void {
    //    this.setState({ name: event.target.value });
    //  }

    this.aplanDescer = this.aplanDescer.bind(this);
    this.aplanSubir = this.aplanSubir.bind(this);
    this.aplanAbrir = this.aplanAbrir.bind(this);
    this.aplanFechar = this.aplanFechar.bind(this);
    this.perfilAvanca = this.perfilAvanca.bind(this);
    this.perfilRecua = this.perfilRecua.bind(this);
    this.plataformaSobe = this.plataformaSobe.bind(this);
    this.plataformaDesce = this.plataformaDesce.bind(this);
    this.prensaLigar = this.prensaLigar.bind(this);
    this.prensaDesligar = this.prensaDesligar.bind(this);
    this.desbobinadorLigar = this.desbobinadorLigar.bind(this);
    this.desbobinadorDesligar = this.desbobinadorDesligar.bind(this);
    this.aplanadoraAutomatica = this.aplanadoraAutomatica.bind(this);
    this.aplanadoraManual = this.aplanadoraManual.bind(this);
  }

  aplanDescer() {
    //console.log("AplanDescer");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanDescer");
  }

  aplanSubir() {
    //console.log("AplanSubir");
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanSubir");
  }

  aplanAbrir() {
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanAbrir");
  }

  aplanFechar() {
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanFechar");
  }

  perfilAvanca() {
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "perfilAvanca");
  }

  perfilRecua() {
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "perfilRecua");
  }

  plataformaSobe() {
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "plataformaSobe");
  }

  plataformaDesce() {
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "plataformaDesce");
  }

  prensaLigar() {
    this.setState({
      motor: false
    });
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "prensaDesligar");
  }

  prensaDesligar() {
    this.setState({
      motor: true
    });
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "prensaLigar");
  }

  desbobinadorLigar() {
    this.setState({
      Desbobinador: true
    });
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "desbobinadorLigar");
  }

  desbobinadorDesligar() {
    this.setState({
      Desbobinador: false
    });
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "desbobinadorDesligar");
  }

  aplanadoraAutomatica() {
    //console.log("aplanadoraAutomatica");
    this.setState({
      aplanAuto: true
    });
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanadoraAutomatica");
  }

  aplanadoraManual() {
    //console.log("aplanadoraManual");
    this.setState({
      aplanAuto: false
    });
    const caminho = ('fabrica/ihm/comandos/' + this.props.config.codigo.toString())
    this.props.mqttCommand(caminho, "aplanadoraManual");
  }


  render() {
    return (
      <section style={sectionStyle} >
        <Grid fluid style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Row>
            <Col xs={12} md={4} style={Desbobi}>
              <Row>
                <Col xsHidden mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                {this.state.Desbobinador === false ?
                  (<OverlayTrigger placement="top" overlay={tooltip_desbobinadorDesligar}><img onTouchEnd={this.desbobinadorLigar} onClick={this.desbobinadorLigar} alt="Desb Ligar" src={DesbobOff} style={{ float: 'right', height: '60px', width: '60px' }} /></OverlayTrigger>) :
                  (<OverlayTrigger placement="top" overlay={tooltip_desbobinadorLigar}><img onTouchEnd={this.desbobinadorDesligar} onClick={this.desbobinadorDesligar} alt="Desb Desligar" src={DesbobOn} style={{ float: 'right', height: '60px', width: '60px' }} /></OverlayTrigger>)
                }
              </Row>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsHidden mdOffset={12} lgOffset={12}>'  '</Col>
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
            <Col xs={12} md={4} style={AplanCorpo}>
              {this.state.aplanAuto === false ?
                (<Row>
                  <OverlayTrigger placement="top" overlay={tooltip_aplanAbrir}><img onTouchEnd={this.aplanAbrir} onClick={this.aplanAbrir} alt="AplanAbrir" src={AplanTampaAbrir} style={{ float: 'center', height: '54px', width: '66px' }} /></OverlayTrigger>
                 </Row>):
                (<Row>
                    <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
                    <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
                  </Row>)
              }
              {this.state.aplanAuto === false ?
                (<Row>
                    < OverlayTrigger placement="top" overlay={tooltip_aplanFechar}><img onTouchEnd={this.aplanFechar} onClick={this.aplanFechar} alt="AplanFechar" src={AplanTampaFechar} style={{ float: 'center', height: '54px', width: '66px' }} /></OverlayTrigger>
                  </Row>):
                (<Row style={{ height: '70px' }}>
                    <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
                    <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
                  </Row>)
              }
              {this.state.aplanAuto === false ?
                (<Row>
                    <OverlayTrigger placement="top" overlay={tooltip_perfilRecua}><img onTouchEnd={this.perfilRecua} onClick={this.perfilRecua} alt="Chapa Recua" src={AplanPerfilRecua} style={{ float: 'left', height: '54px', width: '66px' }} /></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={tooltip_perfilAvanca}><img onTouchEnd={this.perfilAvanca} onClick={this.perfilAvanca} alt="Chapa Avança" src={AplanPerfilAvanca} style={{ float: 'right', height: '54px', width: '66px' }} /></OverlayTrigger>
                  </Row>):
                (<Row>
                    <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
                  </Row>)
              }
              {this.state.aplanAuto === false ?
                (<Row>
                    <OverlayTrigger placement="top" overlay={tooltip_aplanSubir}><img onTouchEnd={this.aplanSubir} onClick={this.aplanSubir} alt="AplanSubir" src={AplanSubir} style={{ float: 'left' }} /></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={tooltip_plataformaSobe}><img onTouchEnd={this.plataformaSobe} onClick={this.plataformaSobe} alt="Plataforma Sobe" src={AplanExtSubir} style={{ float: 'right', height: '54px', width: '66px' }} /></OverlayTrigger>
                    </Row>):
                (<Row>
                    <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
                  </Row>)
              }
              {this.state.aplanAuto === false ?
                (<Row>
                    <OverlayTrigger placement="top" overlay={tooltip_aplanDescer}><img onTouchEnd={this.aplanDescer} onClick={this.aplanDescer} alt="AplanDescer" src={AplanDescer} style={{ float: 'left' }} /></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={tooltip_plataformaDesce}><img onTouchEnd={this.plataformaDesce} onClick={this.plataformaDesce} alt="Plataforma Desce" src={AplanExtDescer} style={{ float: 'right', height: '54px', width: '66px' }} /></OverlayTrigger>
                    </Row>):
                (<Row>
                    <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
                  </Row>)
              }
              <Row style={{ height: '33px' }}>
                <Col mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                {this.state.aplanAuto === false ?
                  (<Col>
                    <Button bsStyle="danger" bsSize="large" height="54px" block onClick={this.aplanadoraAutomatica} > COLOCAR EM AUTOMATICO <Glyphicon glyph="refresh" /> </Button>
                  </Col>) :
                  (<Col>
                    <Button bsStyle="success" bsSize="large" height="54px" block onClick={this.aplanadoraManual} > COLOCAR EM MANUAL <Glyphicon glyph="hand-up" /> </Button>
                  </Col>)
                }

              </Row>
              <Row style={{ height: '33px' }}>
                <Col xsHidden mdOffset={12} lgOffset={12}>' '</Col>
              </Row>
            </Col>
            <Col xs={12} md={4} style={PressCorpo}>
              <Row>
                <Col xsOffset={12} mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                {this.state.motor === false ?
                  (<OverlayTrigger placement="top" overlay={tooltip_prensaDesligada}><img onTouchEnd={this.prensaDesligar} onClick={this.prensaDesligar} alt="Presa Desligar" src={motorPrensaOFF} style={{ height: '57px', width: '64px' }} /></OverlayTrigger>) :
                  (<OverlayTrigger placement="top" overlay={tooltip_prensaLigada}><img onTouchEnd={this.prensaLigar} onClick={this.prensaLigar} alt="Presa ligar" src={motorPrensaON} style={{ height: '57px', width: '64px' }} /></OverlayTrigger>)
                }
              </Row>
              <Row>
                <Col xsHidden mdOffset={12} lgOffset={12}>'  '</Col>
              </Row>
              <Row>
                <Col xsHidden mdOffset={12} lgOffset={12}>'  '</Col>
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