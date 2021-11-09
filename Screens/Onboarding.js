import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Onbording from 'react-native-onboarding-swiper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const OnboardingScreen = ({navigation}) => {
  const Skip = ({...props}) => (
    <Pressable {...props}>
      <View style={{marginLeft: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Skip</Text>
      </View>
    </Pressable>
  );
  const Done = ({...props}) => (
    <Pressable {...props}>
      <View style={{right: '5%'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}> Done </Text>
      </View>
    </Pressable>
  );
  const Dot = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'black' : 'white';
    return (
      <View
        style={{
          height: 7,
          width: 7,
          marginHorizontal: 3,

          backgroundColor,
          borderRadius: 10,
        }}
      />
    );
  };

  return (
    <Onbording
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      DotComponent={Dot}
      onDone={() => navigation.navigate('Login')}
      onSkip={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
