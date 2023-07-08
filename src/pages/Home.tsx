import { Text, View, Button, StatusBar } from 'react-native';
import { HomeScreenNavigationProp } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

interface Props {
  navigation: HomeScreenNavigationProp;
}

function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor('#00bfa5');
      StatusBar.setBarStyle('dark-content')
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title="Go to VideoDetails" onPress={() => navigation.navigate('VideoDetails')} />
    </View>
  );
}

export default Home
