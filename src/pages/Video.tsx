import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function VideoPage() {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor('#5a6aae');
      StatusBar.setBarStyle('light-content')
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>VideoPage!</Text>
    </SafeAreaView>
  );
}

export default VideoPage
