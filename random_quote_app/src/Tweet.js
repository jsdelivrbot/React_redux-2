import React from 'react';

class Tweet extends React.Component {
  render(){
    return(
      <div className="btn btn-default btn-item"> 
        <a href={'https://twitter.com/intent/tweet?text=' + this.props.quote} target="_blank">
        Tweet
        </a>
      </div>
    )
  }
}

export default Tweet;