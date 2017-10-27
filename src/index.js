import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';  // bootstrap css

import App from './App';

import IHM_N3 from './maquinas/perfiladeiras/n3';
import IHM_N3_MAIN from './maquinas/perfiladeiras/n3/main.js';
import IHM_N3_TAREFAS from './maquinas/perfiladeiras/n3/tarefas.js';
import IHM_N3_MANUAL from './maquinas/perfiladeiras/n3/manual.js';
import IHM_N3_RELATORIOS from './maquinas/perfiladeiras/n3/relatorios.js';
import IHM_N3_AUTOMATICO from './maquinas/perfiladeiras/n3/automatico.js';

const NoMatch = props => (
	<div><h1>Pagina não encontrada !</h1></div>
)

render(( 
  <Router history={hashHistory}>
    <Route path="/" component={App} >

    	{/* incluir novas maquinas aqui*/}
    	<Route path="maquinas/perfiladeiras/n3" component={IHM_N3}>
    		<Route path="main" component={IHM_N3_MAIN}/>
        <Route path="tarefas" component={IHM_N3_TAREFAS}/>
        <Route path="manual" component={IHM_N3_MANUAL}/>
        <Route path="relatorios" component={IHM_N3_RELATORIOS}/>
        <Route path="automatico" component={IHM_N3_AUTOMATICO}/>
     	</Route>
      {/*perfiladeira reforço*/}
      <Route path="maquinas/perfiladeiras/reforco" component={IHM_N3}>
        <Route path="main" component={IHM_N3_MAIN}/>
        <Route path="tarefas" component={IHM_N3_TAREFAS}/>
        <Route path="manual" component={IHM_N3_MANUAL}/>
        <Route path="relatorios" component={IHM_N3_RELATORIOS}/>
        <Route path="automatico" component={IHM_N3_AUTOMATICO}/>
      </Route>
      {/*perfiladeira Sigma 120mm*/}
      <Route path="maquinas/perfiladeiras/sigma120" component={IHM_N3}>
        <Route path="main" component={IHM_N3_MAIN}/>
        <Route path="tarefas" component={IHM_N3_TAREFAS}/>
        <Route path="manual" component={IHM_N3_MANUAL}/>
        <Route path="relatorios" component={IHM_N3_RELATORIOS}/>
        <Route path="automatico" component={IHM_N3_AUTOMATICO}/>
      </Route>
    	{/*fim*/}

      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))

/*sudo nmap --min-parallelism 100 -sT -sU 192.168.0.1*/
