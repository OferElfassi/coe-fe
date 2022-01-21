import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import {uiReducer, userReducer} from './reducers';

const setMainRoot = () => {};

const setAuthRoot = () => {};

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['user'],
};

const initStore = () => {
  const reducers = {
    ui: uiReducer,
    user: userReducer,
  };
  const middleware = [applyMiddleware(...[thunk])];

  const reducer = combineReducers(reducers);

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(persistedReducer, {}, compose(...middleware));

  persistStore(store, null, () => {
    console.log('newstore', store.getState());

    if (store.getState().user.isLoggedIn) {
      setMainRoot();
    } else {
      setAuthRoot();
    }
  });
  return store;
};

export default initStore;
