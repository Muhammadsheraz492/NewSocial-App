import {placeholder} from '@babel/types';
import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import AntDesign from 'react-native-vector-icons/AntDesign';

const TextInputScreen = ({IconName, IconType, Color, placeholder}) => {
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
        borderWidth: 1,
        // alignItems:''
        // borderColor: '#fff',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center', left: '9%'}}>
          <AntDesign name={IconType} size={30} />
        </View>
        <View
          style={{
            // borderWidth: 2,
            // alignItems:''
            height: 55,
            borderLeftWidth: 1,
            // alignItems: 'center',
            left: '20%',
            justifyContent: 'center',
            // borderColor: '#fff',
          }}>
          <TextInput
            style={{left: 10}}
            placeholder={placeholder}
            value={IconName}
          />
        </View>
      </View>
    </View>
  );
};

export default TextInputScreen;
