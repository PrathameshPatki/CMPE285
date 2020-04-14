import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: {},
			hasData: false
		};
		this.handleData = this.handleData.bind(this);
	}

	handleData = (data) => {
		this.setState({hasData: true, data: data});
	}

	render(){
		if(this.state.hasData)
			return(<Results {...this.state.data} />)
		else
			return (
				<div className='mainDiv'>
					<Form showData={this.handleData} />
				</div>
			);
		}
}

export default App;
