import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.props.deleteBand}>Delete</button>
      </div>
    );
  }
};

export default Band;
