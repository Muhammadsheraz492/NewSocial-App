import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {ImagefromFont} from '../Redux/counterSlice';
import storage from '@react-native-firebase/storage';
const Home = () => {
  const [Uploading, setUploading] = useState('');
  const dispatch = useDispatch();
  const TAkePHotoFromFront = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 400,
      cropping: true,
      compressImageMaxHeight: 300,
      compressImageMaxHeight: 300,
      compressImageQuality: 0.7,
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
      setUploading(image.path);
      dispatch(ImagefromFont(image.path));
      console.log(image);
    });
  };

  const Mutlimap = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      setUploading(images.path);
      console.log(images);
    });
  };

  const uploadImage = async () => {
    if (Uploading == null) {
      return null;
    }
    const uploadUri = Uploading;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    // setUploading(true);
    // setTransferred(0);

    // const storageRef = storage().ref(`photos/${filename}`);
    // const task = storageRef.putFile(uploadUri);

    // Set transferred state
    // task.on('state_changed', taskSnapshot => {
    //   console.log(
    //     `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
    //   );

    //   setTransferred(
    //     Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
    //       100,
    //   );
    // });

    try {
      // await task;
      // const url = await storageRef.getDownloadURL();
      // setUploading(false);
      // setImage(null);
      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      // return url;
      // await Storage().ref;
      await storage().ref(filename).putFile(uploadUri);
    } catch (e) {
      console.log(e);
      // return null;
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => Mutlimap()}>
        <View>
          <Text>Pick IMage From openCamera</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TAkeGallery()}>
        <View style={{marginTop: 40}}>
          <Text>Pick IMage From TAkeGallery </Text>
        </View>
        <View style={{height: 100, width: 100}}>
          <Image style={{height: 50, width: 50}} source={{uri: Uploading}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => uploadImage()}>
        <View style={{marginTop: 40}}>
          <Text>Post </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
