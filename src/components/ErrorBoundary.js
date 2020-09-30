import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.error) {
			return <h1>OOOOPSSS THAT'S NOT GOOD</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;