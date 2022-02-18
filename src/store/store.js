import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer, postReducer, uiReducer, userReducer} from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'auth'],
};

const initStore = () => {
  const reducers = {
    auth: authReducer,
    ui: uiReducer,
    user: userReducer,
    post: postReducer,
  };
  const middleware = [applyMiddleware(...[thunk])];

  const reducer = combineReducers(reducers);

  const persistedReducer = persistReducer(persistConfig, reducer);

  const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(...middleware),
  );

  const persistor = persistStore(store);

  return {store, persistor};
};

export default initStore;
