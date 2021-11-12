import React from 'react';
import {View, Text} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = () => {
  return (
    <View
      style={{
        top: '10%',
        // alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        height: '8%',
        // backgroundColor: 'black',
        borderWidth: 2,
        // alignItems:''
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center', left: '9%'}}>
          <AntDesign name="user" size={30} />
        </View>
        <View
          style={{
            // borderWidth: 2,
            // alignItems:''
            height: 55,
            borderLeftWidth: 2,
            // alignItems: 'center',
            left: '13%',
            justifyContent: 'center',
          }}>
          <Text>gfvgf</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
