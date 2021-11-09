import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/Onboarding';
import Login from '../Screens/Login';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Startuplogo from '../Screens/Startuplogo';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  const [isFirstlunch, setIsFirstlunch] = React.useState(null);
  let RouteScreen;
  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLunched', 'true');
        setIsFirstlunch(true);
      } else {
        setIsFirstlunch(false);
      }
    });
  }, []);
  if (isFirstlunch == null) {
    return null;
  } else if (isFirstlunch == true) {
    RouteScreen = 'OnboardingScreen';
  } else {
    RouteScreen = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={RouteScreen}>
      <Stack.Screen
        name="Startuplogo"
        component={Startuplogo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
