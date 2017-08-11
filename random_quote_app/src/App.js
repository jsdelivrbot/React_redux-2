import React, { Component } from 'react';
import './App.css';
import Quote from "./Quote.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote />
        <div className='container1'></div>
		<div className='container2'></div>
		<div className='container3'></div>
      </div>
    );
  }
}

export default App;
