import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <img alt="app logo" className="App-logo" src="http://i.imgur.com/jwoxE.gif" /><br />
        <SearchBar className="form-control" />
      </div>
    );
  }
}

export default App;
