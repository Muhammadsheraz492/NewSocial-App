// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';

function RouteScreen() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default RouteScreen;
