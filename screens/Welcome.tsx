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
import {ImageSourcePropType} from 'react-native'
const WelcomeContainer = styled.ImageBackground`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 100%;
`;

const TopImage = styled.Image`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 40%;
  height: 25%;
`;

const OverlayImage = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 150%;
  opacity: 0.3;
`;


const Welcome: FunctionComponent = () => {
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
            <WelcomeContainer source={assets[0] as ImageSourcePropType}>
                <OverlayImage source={assets[1] as ImageSourcePropType}>
                </OverlayImage>

                <TopSection>
                    <TopImage source={assets[2] as ImageSourcePropType}></TopImage>

                    <BigText textStyles={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: 26,
                        color: "rgba(209, 229, 240, 1)"
                    }}>
                        Добро пожаловать!
                    </BigText>

                    <RegularText
                        textStyles={{width: "100%", marginTop: 10, color: "rgba(195, 216, 228, 1)", fontSize: 17}}>
                        SoundCure by Elepha
                    </RegularText>

                    <BigText textStyles={{
                        width: "70%",
                        marginTop: 100,
                        fontSize: 20,
                        textAlign: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        color: "rgba(242, 242, 242, 1)"
                    }}>
                        Проверьте свой уровень стресса и оптимизируйте внутреннее состояние
                    </BigText>

                </TopSection>

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
                        textStyles={{
                            fontSize: 18,
                            textAlign: "center",
                            color: "#FFFFFF",
                            backgroundColor: "transparent",
                        }}
                        onPress={() => navigation.navigate("Rec")}> Полетели!
                    </RegularButton>
                </LinearGradient>

            </WelcomeContainer>
            }

        </>
    );
};
export default Welcome;
