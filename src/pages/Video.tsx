import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>VideoPage!</Text>
    </View>
  );
}

export default VideoPage
