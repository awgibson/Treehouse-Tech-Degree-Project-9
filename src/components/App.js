//Bring in dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Bring in components
import config from './config'; //config file for API
import Header from './Header';
import Container from './Container';
import FileNotFound from './FileNotFound';

class App extends Component {
  //Store state of query, photo array, and the loading state.
  state = {
    query: '',
    photos: [],
    loading: true
  };

  //API key
  apiKey = config.api;

  //Method to handle fetching photos
  handleFetch = q => {
    //Loading state is set to true first to display loading screen properly
    this.setState({
      loading: true
    });

    //Fetch statement passing in the api key and the query to search
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        this.apiKey
      }&tags=${q}&per_page=24&format=json&nojsoncallback=1`
    )
      //Convert to jason
      .then(res => res.json())

      //Set state
      .then(res =>
        this.setState({
          query: q, //Query set to search term
          photos: res.photos.photo, //Photo array
          loading: false //Loading state set to false so pictures display
        })
      )

      //Console log fetching error
      .catch(err => console.log('Unable to fetch image', err));
  };

  render() {
    return (
      //Use browser router
      <BrowserRouter>
        {/* Header component loads and is sent props method. This lives outside of the Container component since it does not need to re-render */}
        <Header handleFetch={this.handleFetch} />
        <Switch>
          {/* The static result routes direct to the same componenet but pass in a search query for the page to use for images.
          The Nav buttons or just going to these URLs will both work */}

          {/* Main route to '/' */}
          <Route
            exact
            path="/"
            render={() => (
              <Container
                query="dr pepper"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />

          {/* Cat route to '/cats' */}
          <Route
            exact
            path="/cats"
            render={() => (
              <Container
                query="cats"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />

          {/* Mountains route to '/mountains' */}
          <Route
            exact
            path="/mountains"
            render={() => (
              <Container
                query="mountains"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />

          {/* Coffee route to '/coffee' */}
          <Route
            exact
            path="/coffee"
            render={() => (
              <Container
                query="coffee"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />

          {/* Search route to '/search' 
        The same default query is present as the '/' for consistancy */}
          <Route
            exact
            path="/search"
            render={() => (
              <Container
                query="dr pepper"
                loading={this.state.loading}
                handleFetch={this.handleFetch}
                photoData={this.state.photos}
              />
            )}
          />

          {/* 404 page route */}
          <Route component={FileNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
