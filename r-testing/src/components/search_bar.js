import React, { Component } from 'react';

const SEARCH_REQ_HEADERS = new Headers();
SEARCH_REQ_HEADERS.append("Accept", "application/json");
const REQ_INIT = {
  method: 'GET',
  headers: SEARCH_REQ_HEADERS,
  mode: 'cors'
};

class SearchBar extends Component {
    constructor(props){
      super(props);
      //Set initial state;
      this.state = {
        term: '',
        searchResults: []
      };

      //Bind methods.
      this.handleChange = this.handleChange.bind(this);
      this.displayResults = this.displayResults.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Fetch data from Wikimedia API.
    fetchData(searchTerm){
		//https://www.reddit.com/r/cats.json?limit=1    	
			let myURL = `https://www.reddit.com/r/${searchTerm}.json?limit=10`;

      let myRequest = new Request(myURL, REQ_INIT)
      
      fetch(myRequest)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        // console.log(obj)
        if (!(obj && obj.data && obj.data.children)) return [];

        let results = obj.data.children.map((child) => {
        	return child.data;
        });

        console.log('request results', results)
        this.displayResults(results);
      })
      .catch(x => {console.error(x)});
    }

    //Handle change method.
    handleChange(event) {
      this.setState({
        term: event.target.value
      });
    }

    //Handle submit method.
    handleSubmit(event) {
      event.preventDefault();
      if(!this.state.term){
        return
      }
      // console.log('A name was submitted: ' + this.state.term);
      
      this.setState({
        searchResults:[]
      })
      //put a spinner
      this.fetchData(this.state.term);
    }

    //Display results method.
    displayResults(results){
      let newState = {
        searchResults: results
      }
      this.setState(newState)      
    }


    renderOneResult(result){
      const url = encodeURI(`https://www.reddit.com${result.permalink}`)
        return (
          <div className="resultItem" key={result.id}>
            <img alt="" src={result.thumbnail} />
            <h3 className="resultItem-title">
              <a href={url} target="_blank" rel="noreferrer">{result.title}</a>
            </h3>
            <div className="resultItem-author">{result.author}</div>
            <div className="resultItem-comments">{result.num_comments}</div>
            <button className="resultItem-tweet-btn">tweet</button>
          </div>
        )
    }

    //renderSpinner method
    renderSpinner(){
      
    }

    render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input placeholder="Type in here..." type="text" value={this.state.term} onChange={this.handleChange} />
              <button className="btn btn-default">submit</button>
            </label>
          </form>
          <div>
            {
              this.state.searchResults.map(result => {
                return this.renderOneResult(result)
              })
            }
          </div>
            
        </div>
      );
    }
}


 export default SearchBar;