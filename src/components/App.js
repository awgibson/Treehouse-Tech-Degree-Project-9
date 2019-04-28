import React, { Component } from 'react';

import config from './config';
import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';

class App extends Component {
  state = { photos: [] };
  apiKey = config.api;

  componentDidMount() {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        this.apiKey
      }&tags=dog&per_page=12&format=json&nojsoncallback=1`
    )
      .then(res => res.json())
      .then(res => this.setState({ photos: res.photos.photo }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        {console.log(this.state.photos[0], 'from app')}
        <Gallery photoData={this.state.photos} />
      </div>
    );
  }
}

export default App;
