// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';
import RouteScreen from './Routes';
function Provider() {
  return <RouteScreen />;
}

export default Provider;
