/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './types';

const prefix = Linking.createURL('/');

const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      Login: '/Login',
      Welcome: '/Welcome',
      Profile: '/Index',
      Rec: '/Rec',
      Register: '/Register',
      Reset: '/Reset',
      EditProfile: '/EditProfile',
      Edited: "/Edited",
      ComingSoon: "/ComingSoon",
    },
    initialRouteName: 'Login',
  },
};

export default linkingConfiguration;
