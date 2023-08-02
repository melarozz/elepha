/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export type RootStackParamList = {
    Welcome: undefined;
    Rec: undefined;
    Login: undefined;
    Reset: undefined;
    Register: undefined;
    Profile: undefined;
    TabScreens: undefined;
    EditProfile: undefined;
    Edited: undefined;
    ComingSoon: undefined;

};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
    Screen>;
