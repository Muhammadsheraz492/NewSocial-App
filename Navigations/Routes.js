// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native-animatable';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AppStack from './AppStack';

import Drawer from './drawer';
function RouteScreen() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // if (!user) {
  //   console.log(user);
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }
  return (
    <NavigationContainer>
      {user ? <Drawer /> : <AppStack />}
    </NavigationContainer>
  );
}

export default RouteScreen;
