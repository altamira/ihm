import React, { Component } from 'react';

import Background from './../../../images/bg01.png';

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

export default class IHM extends Component {

	render() {

		return(
			<section style={ sectionStyle } >
				<h1>Main do Coluna N3...</h1>
			</section>
		)

	}
}
//<img alt="Logo" src={require('./images/reset.png')} />