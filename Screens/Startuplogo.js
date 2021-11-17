import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Startuplogo = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('OnboardingScreen');
  }, 3000);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{
          width: '90%',
          height: '50%',
          borderColor: 'black',
          borderWidth: 3,
          borderRadius: 200,
          justifyContent: 'center',
          backgroundColor: 'yellow',
        }}
        source={require('../assets/rn-social-logo.png')}
      />
    </View>
  );
};

export default Startuplogo;

const styles = StyleSheet.create({});
