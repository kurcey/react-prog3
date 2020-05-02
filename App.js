import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Home from './components/Home';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
