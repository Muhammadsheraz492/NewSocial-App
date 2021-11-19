// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native-animatable';
import firestore from '@react-native-firebase/firestore';

import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// import AppStack from './AuthStack';
import AppStack from './AppStack';
<<<<<<< HEAD
import AuthStack from './AuthStack';
=======

import Drawer from './drawer';
>>>>>>> master
function RouteScreen() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  // const data = async () => {
  // firestore().collection('users').doc('NzR7Qwu1OpddwjcUF8NF').delete();
  // .update({
  //   passwd: 'new paaswd',
  // })
  // .then(e => console.log('Updated'));
  // const usersCollection = await firestore().collection('sheraz').get();
  // .doc('wezXL6bvUelwWbkShqpF')
  // .get();
  // console.log(usersCollection.docs);
  //   usersCollection.forEach(element => {
  //     console.log(element.data());
  //   });
  // };
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount

    // data();
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
<<<<<<< HEAD
      {user ? <AppStack /> : <AuthStack />}
=======
      {user ? <Drawer /> : <AppStack />}
>>>>>>> master
    </NavigationContainer>
  );
}

export default RouteScreen;
