<<<<<<< HEAD
import React, {useContext} from 'react';
import {View, Text, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../Navigations/AuthProvider';
const Home = () => {
  const {Logout} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',
      }}>
      <Pressable onPress={() => Logout()}>
        <Text>Log Out</Text>
      </Pressable>
=======
import React from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>jfdvbhjdfbvh</Text>
>>>>>>> master
    </View>
  );
};

export default Home;
