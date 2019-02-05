import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { connectRouter } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import currentBalanceReducer from './currentBalanceReducer';

export default (history) => {
  const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: []
  };
  
  const rootReducer = combineReducers({
    router: connectRouter(history),
    balance: currentBalanceReducer
  });

  return persistReducer(rootPersistConfig, rootReducer);
};
