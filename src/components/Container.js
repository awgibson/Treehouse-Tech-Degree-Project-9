//This container is a wrapper for the image gallery. When it loads it calls the fetch method to load photos.

//Bring in dependencies
import React, { Component } from 'react';

//Bring in components
import Gallery from './Gallery';

class Container extends Component {
  //ComponentDidMount calls the handleFetch method in App.js to update the state to new photos

  componentDidMount(q = this.props.query) {
    this.props.handleFetch(q);
  }

  render() {
    return (
      <div className="container">
        {/* Conditional to see if the loading state is true. If so, a loading text will appear then disappear when the images
      have loaded */}
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
