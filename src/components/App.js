import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from './config';
import Header from './Header';
import Container from './Container';
import FileNotFound from './FileNotFound';

class App extends Component {
  state = {
    query: '',
    photos: [],
    loading: true
  };
  apiKey = config.api;

  handleFetch = q => {
    this.setState({
      loading: true
    });

    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        this.apiKey
      }&tags=${q}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          query: q,
          photos: res.photos.photo,
          loading: false
        })
      )
      .catch(err => console.log('Unable to fetch image', err));
  };

  render() {
    return (
      <BrowserRouter>
        <Header handleFetch={this.handleFetch} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Container
                query="dr pepper"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />
          <Route
            exact
            path="/cats"
            render={props => (
              <Container
                query="cats"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />
          <Route
            exact
            path="/mountains"
            render={props => (
              <Container
                query="mountains"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />
          <Route
            exact
            path="/coffee"
            render={props => (
              <Container
                query="coffee"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={props => (
              <Container
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />
          <Route component={FileNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
