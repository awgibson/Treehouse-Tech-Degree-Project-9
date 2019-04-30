import React, { Component } from 'react';

import Gallery from './Gallery';

class Container extends Component {
  componentDidMount(q = this.props.query) {
    this.props.handleFetch(q);
  }

  render() {
    return (
      <div className="container">
        {this.props.loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <Gallery photoData={this.props.photoData} />
        )}
      </div>
    );
  }
}

export default Container;
