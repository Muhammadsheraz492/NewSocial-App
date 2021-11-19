import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
const Splash = ({navigation}) => {
  setInterval(() => {
    navigation.navigate('Login');
  }, 3000);
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{height: 5}} />
      <View
        style={{
          height: '4%',
          width: '90%',
          alignItems: 'flex-start',
          //   borderWidth: 3,
        }}>
        <View
          style={{
            borderWidth: 2,
            width: '15%',
            backgroundColor: '#FFA451',
            borderColor: '#FFA451',
            borderRadius: 10,
            // alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              color: 'white',
            }}>
            time
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Image  /> */}
        <Animatable.Image
          animation={'zoomInUp'}
          //   style={{width: 200, height: 200}}
          source={require('../assets/Image/Splash.png')}
        />
      </View>
    </View>
  );
};

export default Splash;
