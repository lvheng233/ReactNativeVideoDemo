import { Text, View, Button } from 'react-native';
import { HomeScreenNavigationProp } from '../navigation/types';

interface Props {
  navigation: HomeScreenNavigationProp;
}

function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title="Go to VideoDetails" onPress={() => navigation.navigate('VideoDetails')} />
    </View>
  );
}

export default Home
