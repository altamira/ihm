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
import IHM_N3_PROGRAMACAO from './maquinas/perfiladeiras/n3/programacao.js';
import IHM_N3_MANUTENCAO from './maquinas/perfiladeiras/n3/manutencao.js';

import IHM_REFORCO from './maquinas/perfiladeiras/reforco';
import IHM_REFORCO_MAIN from './maquinas/perfiladeiras/reforco/main.js';
import IHM_REFORCO_TAREFAS from './maquinas/perfiladeiras/reforco/tarefas.js';
import IHM_REFORCO_MANUAL from './maquinas/perfiladeiras/reforco/manual.js';
import IHM_REFORCO_RELATORIOS from './maquinas/perfiladeiras/reforco/relatorios.js';
import IHM_REFORCO_PROGRAMACAO from './maquinas/perfiladeiras/reforco/programacao.js';
import IHM_REFORCO_MANUTENCAO from './maquinas/perfiladeiras/reforco/manutencao.js';

import IHM_SIGMA120 from './maquinas/perfiladeiras/sigma120';
import IHM_SIGMA120_MAIN from './maquinas/perfiladeiras/sigma120/main.js';
import IHM_SIGMA120_TAREFAS from './maquinas/perfiladeiras/sigma120/tarefas.js';
import IHM_SIGMA120_MANUAL from './maquinas/perfiladeiras/sigma120/manual.js';
import IHM_SIGMA120_RELATORIOS from './maquinas/perfiladeiras/sigma120/relatorios.js';
import IHM_SIGMA120_PROGRAMACAO from './maquinas/perfiladeiras/sigma120/programacao.js';
import IHM_SIGMA120_MANUTENCAO from './maquinas/perfiladeiras/sigma120/manutencao.js';

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
        <Route path="programacao" component={IHM_N3_PROGRAMACAO}/>
        <Route path="manutencao" component={IHM_N3_MANUTENCAO}/>
     	</Route>
      {/*perfiladeira reforço*/}
      <Route path="maquinas/perfiladeiras/reforco" component={IHM_REFORCO}>
        <Route path="main" component={IHM_REFORCO_MAIN}/>
        <Route path="tarefas" component={IHM_REFORCO_TAREFAS}/>
        <Route path="manual" component={IHM_REFORCO_MANUAL}/>
        <Route path="relatorios" component={IHM_REFORCO_RELATORIOS}/>
        <Route path="programacao" component={IHM_REFORCO_PROGRAMACAO}/>
        <Route path="manutencao" component={IHM_REFORCO_MANUTENCAO}/>
      </Route>
      {/*perfiladeira Sigma 120mm*/}
      <Route path="maquinas/perfiladeiras/sigma120" component={IHM_SIGMA120}>
        <Route path="main" component={IHM_SIGMA120_MAIN}/>
        <Route path="tarefas" component={IHM_SIGMA120_TAREFAS}/>
        <Route path="manual" component={IHM_SIGMA120_MANUAL}/>
        <Route path="relatorios" component={IHM_SIGMA120_RELATORIOS}/>
        <Route path="programacao" component={IHM_SIGMA120_PROGRAMACAO}/>
        <Route path="manutencao" component={IHM_SIGMA120_MANUTENCAO}/>
      </Route>
    	{/*fim*/}

      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))

/*sudo nmap --min-parallelism 100 -sT -sU 192.168.0.1*/
