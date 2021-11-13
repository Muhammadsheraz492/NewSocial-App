import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
// import TextInputScreen from '../Components/TextInput';
import FormsButton from '../Components/Formsbtn';
import FormsInput from '../Components/FormsInput';
import SocialButton from '../Components/SocialButton';
const Signup = () => {
  const [Email, setEmail] = useState();
  // const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const onChangeTextEmail = val => {
    console.log(val);
    setEmail(val);
  };
  const onChangeTextPassword = val => {
    console.log(val);
    setPassword(val);
  };

  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Animatable.Image
            animation={'zoomInUp'}
            style={{width: 200, height: 200}}
            source={require('../assets/rn-social-logo.png')}
          />
        </View>
        <View style={{}}>
          <FormsInput
            placeholderText="Enter Email"
            iconType="user"
            labelText={Email}
            onChangeText={val => onChangeTextEmail(val)}
          />
        </View>
        <View style={{marginTop: 30}} />
        <View style={{}}>
          <FormsInput
            placeholderText="Password"
            iconType="lock"
            labelText={Email}
            onChangeText={val => onChangeTextPassword(val)}
          />
        </View>
        <View>
          <FormsButton buttonTitle={'Sign ln'} onPress={() => alert('fbvhb')} />
        </View>
        <View style={{height: 30}} />
        <TouchableOpacity>
          <View style={{width: '93%', alignItems: 'flex-end'}}>
            <Text>Forget Password</Text>
          </View>
        </TouchableOpacity>
        <View style={{height: 20}} />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <SocialButton
            btnType="facebook"
            buttonTitle="FaceBook"
            color={'#4867aa'}
            backgroundColor={'#e6eaf4'}
          />
        </View>
        <View style={{height: 20}} />
        <View style={{alignItems: 'center', width: '90%', alignSelf: 'center'}}>
          <SocialButton
            btnType="google"
            buttonTitle="Google"
            color={'#de4d41'}
            backgroundColor="#f5e7ea"
          />
        </View>
        <View style={{height: 20}} />

        <View
          style={{
            alignItems: 'center',
            width: '90%',

            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text>Don't have an account ?</Text>
          <Pressable onPress={() => alert('dcb')}>
            <Text style={{fontSize: 18}}> create here</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
