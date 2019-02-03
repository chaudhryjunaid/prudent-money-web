import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { history } from './configureStore';
import Home from './containers/Home';

const Router = (props) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/' render={() => <div>I will always be displayed!</div>} />
      </Switch>
    </ConnectedRouter>
  )
};

export default Router;
