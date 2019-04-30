import React, { Component } from 'react';

import config from './config';
import Header from './Header';
import Gallery from './Gallery';

class Container extends Component {
  state = {
    query: '',
    photos: []
  };
  apiKey = config.api;

  componentDidMount() {
    console.log(this.props.query);
    if (this.props.query) {
      this.handleFetch(this.props.query);
    } else {
      this.handleFetch(this.props.match.params.searchQuery);
    }
  }

  handleFetch = q => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        this.apiKey
      }&tags=${q}&per_page=12&format=json&nojsoncallback=1`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          query: q,
          photos: res.photos.photo
        })
      )
      .catch(err => console.log('Unable to fetch image', err));
  };

  render() {
    return (
      <div className="container">
        <Header handleFetch={this.handleFetch} />
        <Gallery photoData={this.state.photos} />
      </div>
    );
  }
}

export default Container;
