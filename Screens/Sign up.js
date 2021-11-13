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
  const [ConfirmPassword, setConfirmPassword] = useState();
  const onChangeTextEmail = val => {
    console.log(val);
    setEmail(val);
  };
  const onChangeTextPassword = val => {
    console.log(val);
    setPassword(val);
  };
  const onChangeTextConfirmPassword = val => {
    console.log(val);
    setConfirmPassword(val);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'white',
          }}>
          <View style={{height: 40}} />
          <View
            style={{
              alignItems: 'center',
              //   justifyContent: 'center',
            }}>
            <Text style={{fontSize: 25}}>Create an account</Text>
          </View>
          <View style={{height: 40}} />
          <View style={{}}>
            <FormsInput
              placeholderText="Enter Email"
              iconType="user"
              labelText={Email}
              onChangeText={val => onChangeTextEmail(val)}
            />
          </View>
          <View style={{height: 30}} />
          <View style={{}}>
            <FormsInput
              placeholderText="Password"
              iconType="lock"
              labelText={Password}
              onChangeText={val => onChangeTextPassword(val)}
            />
          </View>
          <View style={{height: 30}} />
          <View style={{}}>
            <FormsInput
              placeholderText=" Confirm Password"
              iconType="lock"
              labelText={ConfirmPassword}
              onChangeText={val => onChangeTextConfirmPassword(val)}
              secureTextEntry={true}
            />
          </View>
          <View>
            <FormsButton
              buttonTitle={'Sign up'}
              onPress={() => alert('fbvhb')}
            />
          </View>
          <View style={{height: 30}} />
          <View style={{width: '90%', alignItems: 'center'}}>
            <Text>By Register you Confirm that you acepts our</Text>
            <View style={{flexDirection: 'row'}}>
              <Pressable onPress={() => alert('This is Terms and Service')}>
                <Text style={{color: '#e88832'}}>Terms and Service</Text>
              </Pressable>
              <Text> and </Text>
              <Pressable onPress={() => alert('This is Privacy Police')}>
                <Text style={{color: '#e88832'}}>Privacy Police</Text>
              </Pressable>
            </View>
          </View>
          <View style={{height: 20}} />
          <View style={{width: '90%', alignSelf: 'center'}}>
            <SocialButton
              btnType="facebook"
              buttonTitle="Sign up with FaceBook"
              color={'#4867aa'}
              backgroundColor={'#e6eaf4'}
            />
          </View>
          <View style={{height: 20}} />
          <View
            style={{alignItems: 'center', width: '90%', alignSelf: 'center'}}>
            <SocialButton
              btnType="google"
              buttonTitle="Sign up with Google"
              color={'#de4d41'}
              backgroundColor="#f5e7ea"
            />
          </View>
          <View style={{height: 20}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
