import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function VideoDetails() {

  // const navigation = useNavigation();

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     StatusBar.setTranslucent(true)
  //   });

  //   return unsubscribe;
  // }, [navigation]);
  return (
    <SafeAreaView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Image source={require('../assets/pexels-pixabay.jpg')} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      <Text>VideoDetails!</Text>
    </SafeAreaView >
  );
}

export default VideoDetails
