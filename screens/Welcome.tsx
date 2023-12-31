import React, {FunctionComponent} from "react";
import {StatusBar} from "expo-status-bar";
import {LinearGradient} from "expo-linear-gradient";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import RegularButton from "../components/Buttons/RegularButton";
import {useNavigation} from "@react-navigation/native";
import {useAssets} from "expo-asset";
import {
    ImageBackground,
    ImageSourcePropType,
    View,
    Image,
    StyleProp,
    TextStyle,
    ViewStyle,
    ImageStyle
} from "react-native";
import LottieView from "lottie-react-native";
import {colors} from "../components/colors";

const waves = require('../assets/whiteWaves.json');
const Welcome: FunctionComponent = () => {
    const navigation = useNavigation<any>();
    const [assets, error] = useAssets([
        require('../assets/bgs/back1.png'),
        require('../assets/bgs/bg2.png'),
        require('../assets/bgs/elepha_logo.png')
    ]);

    return (
        <>

            {assets &&
                <ImageBackground source={assets[0] as ImageSourcePropType} style={({
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%",
                }) as StyleProp<ViewStyle>}>
                    <ImageBackground
                        source={assets[1] as ImageSourcePropType}
                        style={({
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            opacity: 0.3,
                        }) as StyleProp<ViewStyle>}
                    />

                    <View style={({
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "100%",
                        flex: 1,
                    }) as StyleProp<ViewStyle>}>
                        <Image
                            source={assets[2] as ImageSourcePropType}
                            style={({
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: 30,
                                width: "40%",
                                height: "25%",
                            }) as StyleProp<ImageStyle>}></Image>

                        <BigText textStyles={({
                            width: "100%",
                            textAlign: "center",
                            fontSize: 26,
                            color: "rgba(209, 229, 240, 1)",
                            fontFamily: "TenorSans_400Regular",
                        } as unknown) as StyleProp<TextStyle>}>
                            Добро пожаловать!
                        </BigText>

                        <RegularText
                            textStyles={({
                                width: "100%",
                                marginTop: 10,
                                color: "rgba(195, 216, 228, 1)",
                                fontSize: 17,
                                textAlign: "center",
                                fontFamily: "TenorSans_400Regular",
                            } as unknown) as StyleProp<TextStyle>}>
                            SoundCure by Elepha
                        </RegularText>

                        <BigText textStyles={({
                            width: "70%",
                            marginTop: 100,
                            fontSize: 20,
                            textAlign: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                            color: "rgba(242, 242, 242, 1)",
                            fontFamily: "TenorSans_400Regular",
                        } as unknown) as StyleProp<TextStyle>}>
                            Проверьте свой уровень стресса и оптимизируйте внутреннее состояние
                        </BigText>

                        <LottieView
                            source={waves}
                            autoPlay={true}
                            loop={true}
                            speed={1.3}
                            style={{width: '100%'}}
                        />
                    </View>

                    <View
                        style={{
                            width: "70%",
                            height: "5%",
                            marginBottom: 50,
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: 120,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: colors.blue
                        }}
                    >
                        <RegularButton
                            textStyles={({
                                fontSize: 18,
                                textAlign: "center",
                                color: "#FFFFFF",
                                backgroundColor: "transparent",
                                fontFamily: "TenorSans_400Regular",
                            } as unknown) as StyleProp<TextStyle>}
                            onPress={() => navigation.navigate("Login")}> Полетели!
                        </RegularButton>
                    </View>
                </ImageBackground>
            }
        </>
    );
};

export default Welcome;
