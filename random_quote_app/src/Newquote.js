import React from 'react';

class Newquote extends React.Component {
  render(){
    return(
      <button onClick={this.props.onClick} className="btn btn-default btn-item">
        New Quote
      </button>
    )
  }
}

export default Newquote;