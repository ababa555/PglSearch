/** @format */

import React from 'react';
import {AppRegistry} from 'react-native';
import MainComponent from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
    return (
      <Provider store={store}>
        <MainComponent  />
      </Provider>
    )
  }

AppRegistry.registerComponent(appName, () => App);
