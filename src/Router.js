import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { history } from './configureStore';
import Home from './containers/Home';
import CurrentBalance from './containers/CurrentBalance';

const Router = (props) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/current-balance' component={CurrentBalance} />
        <Route path='/' render={() => <div>I will always be displayed!</div>} />
      </Switch>
    </ConnectedRouter>
  )
};

export default Router;
