import React, { Component } from 'react';

class SearchBar extends Component{

	constructor(props) {
		super(props);

		this.state = {term: 'If these trees could talk'}
	}

	render() {
		

		return (
			<div className="search-bar">
				<input

				value={this.state.term}
				onChange={this.onInputChange.bind(this)}
				onKeyPress={this.onKeyPress.bind(this)}
				on/>
			</div>
		)
	}

	onKeyPress(e) {
		const term = e.target.value;
		const {onVideoSearch} = this.props;
		
		if (e.key === 'Enter') {
			onVideoSearch(term);
		}
	}

	onInputChange(e) {
		const {onVideoSearch} = this.props;
		const term = e.target.value;
		console.log('just typing', term);
    	this.setState({
			term: term
		})
		onVideoSearch(term);	
		
	}
}

export default SearchBar;