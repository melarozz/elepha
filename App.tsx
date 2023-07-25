import {StatusBar} from 'expo-status-bar';
import Navigation from './navigators/Navigation';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import {fonts} from './utils/fonts';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
SplashScreen.preventAutoHideAsync();

const App = () => {
    const [fontsLoaded] = useFonts({
        [fonts.abel]: require('./assets/fonts/tenorsansregular.ttf'),
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