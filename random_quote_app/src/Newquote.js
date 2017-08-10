import React from 'react';

class Newquote extends React.Component {
	render(){
		console.log(this.props.foo);
		console.log(this.props.onClick);
		return(
			<button onClick={this.props.handleClick} className="new-quote">
				more
			</button>
		)
	}
}

export default Newquote;