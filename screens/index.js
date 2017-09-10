import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
//  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
//  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
}
