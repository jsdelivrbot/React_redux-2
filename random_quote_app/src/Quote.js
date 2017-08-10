import React from 'react';
import Newquote from './Newquote.js';


var myHeaders = new Headers();//create new headers.
myHeaders.append("Accept", "application/json");//customize header.

// Create init 
var myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };

// Clone request.
var myRequest = new Request('https://icanhazdadjoke.com/', myInit);

class Quote extends React.Component {
constructor(props) {
  super(props);
  this.state = {quote: 'Hello!'};
  // Bind "this" to handleClick event.
  this.handleClick = this.handleClick.bind(this);
}

// Fetch data from API.
fetchQuote() {
  var t = this;
  fetch(myRequest)
  .then((response) => {
    return response.json();
  })
  .then((obj) => {
    t.setState({
      quote: obj.joke
    })
  })
}

// Mount the component.
componentDidMount(){
  this.fetchQuote();
}

// Helper function to handle click event.
handleClick() {
  this.fetchQuote();
  console.log('lalala');
}

render(){
  console.log(this.props.foo);
  return (
    <div className="quote-content">
      <h2>{this.state.quote}</h2> 
      <div className="tweet-btn"> 
        <a href={'https://twitter.com/intent/tweet?text=' + this.state.quote} target="_blank">
        Tweet
        </a>
      </div>
      <Newquote onClick={this.handleClick} foo="bar" />
    </div>
  );
}
}

export default Quote;