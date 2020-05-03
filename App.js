import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';

import {setLocalNotification} from './utils/helpers';

import Home from './components/Home';

class App extends Component {
  state = {};
  render() {
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
  componentDidMount() {
    setLocalNotification();
  }
}

export default App;
