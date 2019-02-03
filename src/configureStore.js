import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './redux/rootReducer';

export const history = createBrowserHistory();

const logger = createLogger();

export default function configureStore(initialState = {}) {
  const middlewares = [
    routerMiddleware(history),
    thunkMiddleware
  ];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(createRootReducer(history), initialState, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
}
