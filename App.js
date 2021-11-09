// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppStack from './Navigations/AppStack';
import Provider from './Navigations/Provider';
function App() {
  return <Provider />;
}

export default App;
