// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './AuthProvider';
import AppStack from './AppStack';
import RouteScreen from './Routes';
function Provider() {
  return (
    <AuthProvider>
      <RouteScreen />
    </AuthProvider>
  );
}

export default Provider;
