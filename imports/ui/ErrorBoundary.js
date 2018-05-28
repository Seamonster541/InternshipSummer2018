import { Component } from 'react';

export default class ErrorBoundary extends Component {
	constructor(props){
		super(props)
		this.state = {
			hasError: false,
			error: null,
			info: null,
		};
	}

	componentDidCatch(error, info) {
		this.setState({
			hasError: true,
			error: error,
			info: info,
		});
	}

	render(){
		if (this.state.hasError) {
			return (
				<div>
					<h1>Something went wrong!</h1>
					<h1>Error message</h1>
					{this.state.error.toString()}
					<br /> <br />
					<h1>Info</h1>
					{this.state.info.componentStack}
				</div>
			);
		}
		return this.props.children;
	}

}