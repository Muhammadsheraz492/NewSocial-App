import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
const TextInput = () => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <AntDesign name="user" size={25} color="#666" />
        {/* <FontAwesome /> */}
      </View>
      <View>
        <Text>bucyrvc</Text>
      </View>
    </View>
  );
};

export default TextInput;
