import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';
import RouterComponent from './Router';

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <RouterComponent />
    </PersistGate>
  </Provider>
);
