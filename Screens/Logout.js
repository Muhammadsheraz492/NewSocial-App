import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {AuthContext} from '../Navigations/AuthProvider';
const Logout = () => {
  const {Logout} = useContext(AuthContext);
  return (
    <Pressable onPress={() => Logout()}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text style={{color: 'black'}}>Logout</Text>
      </View>
    </Pressable>
  );
};

export default Logout;
