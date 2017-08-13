import React from 'react';
import Newquote from './Newquote.js';
import Tweet from './Tweet.js';


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
  this.state = {
    quote: 'Hello!',
    width: 'A'
  };
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

changeStyle(){
  var quoteElement = document.getElementsByClassName('quote-content')[0];
  if(this.state.width === 'A'){
    quoteElement.style.width = '500px';
    console.log('sm');
    this.setState({
      width: 'B'
    });
  } else {
    console.log('baddddd');
    quoteElement.style.width = '800px';
    this.setState({
      width: 'A'
    });
  }
}

// Helper function to handle click event.
handleClick() {
  this.fetchQuote();
  this.changeStyle();
}

  render(){
    return (
      <div className="quote-container">
        <div className="quote-content">
          <h2>{this.state.quote}</h2> 
        </div>
        <div className="buttons">
          <Tweet quoteContent={this.state.quote}/>
          <Newquote onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Quote;