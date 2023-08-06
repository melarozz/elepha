import {StatusBar} from 'expo-status-bar';
import Navigation from './navigators/Navigation';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
SplashScreen.preventAutoHideAsync();
import * as dotenv from 'dotenv'
import { TenorSans_400Regular} from "@expo-google-fonts/tenor-sans";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // This will ignore all logs, including warnings


const App = () => {
    dotenv.config();
    const [fontsLoaded] = useFonts({
        TenorSans_400Regular
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView
            style={s.container}
            onLayout={onLayoutRootView}
        >
            <Navigation/>
            <StatusBar style="auto"/>
        </GestureHandlerRootView>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
