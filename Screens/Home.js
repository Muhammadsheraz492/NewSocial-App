import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {ImagefromFont} from '../Redux/counterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const TAkePHotoFromFront = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      dispatch(ImagefromFont(image.path));
      // console.log(image);
    });
  };

  const TAkeGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      dispatch(ImagefromFont(image.path));
      console.log(image);
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => TAkePHotoFromFront()}>
        <View>
          <Text>Pick IMage From openCamera</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TAkeGallery()}>
        <View style={{marginTop: 40}}>
          <Text>Pick IMage From TAkeGallery </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
