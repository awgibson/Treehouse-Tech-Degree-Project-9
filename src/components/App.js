import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from './config';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  state = {
    query: '',
    photos: []
  };
  apiKey = config.api;

  componentDidMount() {
    if (window.location.pathname === '/') {
      this.handleFetch('dr pepper');
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
    console.log(this.match, 'props app');
    return (
      <BrowserRouter>
        <div className="container">
          <Header handleFetch={this.handleFetch} />
          <Route
            exact
            path="/"
            render={props => <Gallery photoData={this.state.photos} />}
          />

          <Route
            path="/cats"
            render={props => <Gallery photoData={this.state.photos} />}
          />
          <Route
            path="/dogs"
            render={props => <Gallery photoData={this.state.photos} />}
          />
          <Route
            path="/computers"
            render={props => <Gallery photoData={this.state.photos} />}
          />

          <Route
            path="/search"
            render={props => <Gallery photoData={this.state.photos} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
