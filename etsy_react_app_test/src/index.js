import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import YTSearch from 'youtube-api-search';
// import SearchBar from './components/search_bar';
// import VideoList from './components/video_list';
// import VideoDetail from './components/video_detail';
const API_KEY = 'w4kl15san4n93vl9sc0b01m8';

var myHeaders = new Headers();//create new headers.
	myHeaders.append("Accept", "application/json");//customize header.

	// Create init 
	var myInit = {
	      method: 'GET',
	      headers: myHeaders,
	      mode: 'no-cors',
	      cache: 'default'
	    };

	// Clone request.
	var myRequest = new Request('https://openapi.etsy.com/v2/listings/active?&limit=5&sort_on=score&api_key=w4kl15san4n93vl9sc0b01m8', myInit);


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listings: []
		}
		this.getListing = this.getListing.bind(this);
	}

	
	getListing(){
		var t = this;
		fetch(myRequest)
		.then((response) => {
			return response.json();
		})
		.then((obj) => {
			t.setState({
				listings: obj.results[0]
			})
		})
	}

	componentDidMount(){
  		this.getListing();
	}

	handleClick(){
		this.getListing();
	}

	render(){
		return (
			<button onClick={this.handleClick}>
				click me
			</button>
			<div>
				{this.state.listings}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));