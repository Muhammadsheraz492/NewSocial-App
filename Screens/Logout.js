import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useSelector, useDispatch} from 'react-redux';
import {AuthContext} from '../Navigations/AuthProvider';
const Logout = ({navigation}) => {
  const {Logout} = useContext(AuthContext);
  const count = useSelector(state => state.counter.value);
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
