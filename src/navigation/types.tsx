import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';


type NativeStackParamList = {
  Home: undefined;
  VideoDetails: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<NativeStackParamList, 'Home'>;
export type HomeScreenRouteProp = RouteProp<NativeStackParamList, 'Home'>;
