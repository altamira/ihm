import React, { Component } from 'react'

import Title from './../containers/Title'

export default class Shell extends Component {

  //hora() {
  
  //  alert('hora: '); 
 // }

	render() {

		return(

			<div>
				<Title  user={this.props.user} 
						config={this.props.config}
						timer={this.props.timer}
						//hora={this.state.hora}
				    	handleLogout={this.props.handleLogout}
			  			handleDesligar={this.props.handleDesligar} 
			    		mqttCommand={this.mqttCommand} 
			    />
				
				{this.props.children}
			
				
			</div>

		)
	}

}
//console.log(JSON.stringify(this.props.timer,null,2));
//console.log(JSON.stringify(this.props.user,null,2));