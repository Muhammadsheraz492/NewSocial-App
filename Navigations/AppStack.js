import React from 'react';
import {Text} from 'react-native-animatable';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/Onboarding';
import Login from '../Screens/Login';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Startuplogo from '../Screens/Startuplogo';
import Signup from '../Screens/Sign up';

import {View} from 'react-native-animatable';
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
    GoogleSignin.configure({
      webClientId:
        '1014234649355-n3kqfk092vro5o0hnl04p53hq8ppu9hg.apps.googleusercontent.com',
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
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({navigation}) => ({
          // headerShown: false,
          title: ' ',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View>
              <FontAwesome.Button
                name="long-arrow-left"
                size={20}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
