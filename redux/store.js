import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {persistStore, persistReducer, purgeStoredState} from 'redux-persist';

import rootReducer from './reducers';

import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

export let persistor = persistStore(store);
export default store;
//persistor.persist();
// persistor.purge();
