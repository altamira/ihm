import React, { Component } from 'react';

import uuid from 'uuid';
import api from './../api';

//import Form from './../components/Form';
import Table from './../components/Table';
import Label from './../components/Label';

import { ViewConfig } from './';
//import Error from './../Error';

export default class SelectConfig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }

    this.handleList = this.handleList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleView = this.handleView.bind(this);

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    api.maquina.config.list(this.handleList/*, http://192.168.0.1:1880/api/ */)
  }

  handleList(list) {
    this.setState({ list: list })
  }

  handleSelect(item) {
    console.log(JSON.stringify(item, null, 2))
    api.maquina.config.save(item, this.handleClose)
  }

  handleView(item) {
    console.log(JSON.stringify(item, null, 2))
    this.setState({dialog: <ViewConfig {...item} onClose={this.handleCloseDialog} />})
  }

  handleCloseDialog() {
    this.setState({ dialog: undefined })
  }

  handleClose() {
    this.props.onSelect && this.props.onSelect();
  }

  render() {

    return (
      <div className="static-modal">

        <Table.Table

          command={[{
            label: 'Incluir',
            onClick: this.handleNew,
            icon: 'plus',
            width: 100
          }]}

          header={[
            { label: 'Maquina', align: 'center' },
            { label: 'IP IHM', align: 'center' },
            { label: 'IP POP7', align: 'center' },
            { label: 'IP ESP8266', align: 'center' },
            { label: 'Última Atualizacao', align: 'center' },
            { label: '' }
          ]}

        >

          {this.state.list && Array.isArray(this.state.list) && this.state.list.map((item, index) =>

            <Table.Column

              key={uuid.v4()}


              columns={
                [
                  { content: (<span>{item.codigo || '-'}</span>) },
                  { content: (<span>{item.rede.filter( rede => rede.nome === 'IHM').ip || '-'}</span>) },
                  { content: (<span>{item.IPPOP7 || '-'}</span>) },
                  { content: (<span>{item.IPESP8266 || '-'}</span>) },
                  { content: (<Label.Calendar date={item.Atualizacao} />) },
                  {
                    content: (
                      <Table.Command

                        command={[
                          { tooltip: 'Selecionar', icon: 'ok', onClick: this.handleSelect.bind(null, item, index) },
                          { tooltip: 'Visualizar', icon: 'edit', style: 'primary', onClick: this.handleView.bind(null, item, index) }
                        ]}

                      />
                    )
                  }
                ]
              }
            />

          )}

        </Table.Table>

        {this.state.dialog}

      </div>
    );
  }
}
