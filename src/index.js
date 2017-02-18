import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';  // bootstrap css

import App from './App';

import IHM_N3 from './maquinas/perfiladeiras/n3';
import IHM_N3_MAIN from './maquinas/perfiladeiras/n3/main.js';
import IHM_N3_AUTOMATICO from './maquinas/perfiladeiras/n3/automatico.js';
import IHM_N3_MANUAL from './maquinas/perfiladeiras/n3/manual.js';

const NoMatch = props => (
	<div><h1>Rota não encontrada !</h1></div>
)

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >

    	{/* incluir novas maquinas aqui*/}
    	<Route path="maquinas/perfiladeiras/n3" component={IHM_N3}>
    		<Route path="main" component={IHM_N3_MAIN}/>
        <Route path="automatico" component={IHM_N3_AUTOMATICO}/>
        <Route path="manual" component={IHM_N3_MANUAL}/>
    	</Route>
    	{/*fim*/}

      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))	