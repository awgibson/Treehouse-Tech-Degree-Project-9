import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Container from './Container';
import FileNotFound from './FileNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Container query="dr pepper" {...props} />}
        />
        <Route path="/cats" render={props => <Container query="cats" {...props} />} />
        <Route
          path="/mountains"
          render={props => <Container query="mountains" {...props} />}
        />
        <Route path="/coffee" render={props => <Container query="coffee" {...props} />} />
        <Route path="/search/:searchQuery?" render={props => <Container {...props} />} />
        <Route component={FileNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
