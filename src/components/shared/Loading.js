import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loadingContainer">
        <div className="loading"></div>
      </div>
    );
  }
}

export default Loading;
