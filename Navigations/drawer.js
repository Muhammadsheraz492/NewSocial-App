import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Login from '../Screens/Login';
// import {Ionicons} from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logout from '../Screens/Logout';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerContent from './DrawerContent';
import Home from '../Screens/Home';
const Tab = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
import {useSelector} from 'react-redux';
const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          //  title: "Main Screen",
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'cyan',
          },
          headerTintColor: 'white',

          headerLeft: () => (
            // <Ionicons name="ios-menu" size={24} color="black" />
            <Ionicons.Button
              name="ios-menu"
              size={22}
              backgroundColor="cyan"
              color="white"
              onPress={() => navigation.openDrawer()}></Ionicons.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const Drawer = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeStackScreen}
      drawerContent={props => <DrawerContent {...props} />}
      style={{
        backgroundColor: 'yellow',
      }}>
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen name="About" component={About} /> */}
    </Tab.Navigator>
  );
};

export default Drawer;
