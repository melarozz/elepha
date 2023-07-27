import React, {FunctionComponent} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";
import {colors} from "../components/colors";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import RegularButton from "../components/Buttons/RegularButton";
import {useNavigation} from "@react-navigation/native";
import {useAssets} from "expo-asset";
import {ImageBackground, ImageSourcePropType, View, Image, StyleProp, TextStyle} from 'react-native'



const Edited: FunctionComponent = () => {
    const navigation = useNavigation<any>();
    const [assets, error] = useAssets([
        require('../assets/bgs/back1.png'),
        require('../assets/bgs/bg2.png'),
        require('../assets/bgs/elepha_logo.png')
    ]);

    return (
        <>
            <StatusBar style='light'/>
            {assets &&
                <ImageBackground source={assets[0] as ImageSourcePropType} style={{
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%",
                }}>
                    <ImageBackground
                        source={assets[1] as ImageSourcePropType}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "150%",
                            opacity: 0.3,
                        }}
                    >
                    </ImageBackground>

                    <View style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "100%",
                        flex: 1,
                    }}>
                        <Image
                            source={assets[2] as ImageSourcePropType}
                            style={{
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: 30,
                                width: "40%",
                                height: "25%",
                            }}></Image>

                        <BigText textStyles={({
                            width: "100%",
                            textAlign: "center",
                            fontSize: 26,
                            color: "rgba(209, 229, 240, 1)",
                            fontFamily: "TenorSans_400Regular",
                        } as unknown) as StyleProp<TextStyle>}>
                            Изменения сохранены
                        </BigText>





                    </View>

                    <LinearGradient
                        colors={[
                            "rgba(100, 135, 136, 1)",
                            "rgba(117, 160, 161, 1)",
                            "rgba(108, 175, 167, 1)",
                            "rgba(150, 202, 200, 0.69)",
                        ]}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
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
                            onPress={() => navigation.navigate("Profile")}> Вернуться
                        </RegularButton>
                    </LinearGradient>
                </ImageBackground>
            }

        </>
    );
};
export default Edited;
