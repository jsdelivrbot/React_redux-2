import React, { Component } from 'react'; // whenever we need to jsx in the file, need to import React

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}
	
	render() {
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
} // definds a new js class searchbar give it access to every functionality that React.component has 

 export default SearchBar;