import React, { Component } from 'react';
import { Image, Menu, Header, Segment } from 'semantic-ui-react';
import ErrorBoundary from './ErrorBoundary.js';
//import Info from './Info.js';
import GameOne from './Game1.js';


export default class App extends Component {

	constructor(props){
		super(props)
		this.state = {activeItem: 'menu1'};
	};

	handleMenuItemClick (e, { name }) {
		this.setState({activeItem: name });
	}

	render() {

		let component = null;

		switch (this.state.activeItem) {
			/*
			case 'menu1':
				component = <Info />;
				break;*/
			case 'menu1':
				component = <GameOne />;
				break;
		}

	return (

		<ErrorBoundary>
		<div className='container'>
			<Menu>
				<Menu.Item
					name='menu1'
					active={true}
					active={this.state.activeItem === 'menu1'}
					onClick={this.handleMenuItemClick.bind(this)}
					>GameOne
				</Menu.Item>
				<Menu.Item
					name='menu2'
					active={true}
					active={this.state.activeItem === 'menu2'}
					onClick={this.handleMenuItemClick.bind(this)}
					>GameOne
				</Menu.Item>
			</Menu>
			{component}
		</div>
		</ErrorBoundary>
		
		);
	}

}