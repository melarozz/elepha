import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient"; 
import {colors} from "../components/colors";
import {Container} from "../components/shared"
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";
import {useNavigation} from "@react-navigation/native";
import background from "./../assets/bgs/back1.png";
import background2 from "./../assets/bgs/bg2.png";
import logo from "./../assets/bgs/elepha_logo.png";

import {ImageBackground, Image, TouchableOpacity} from "react-native";

import {StackNavigationProp } from "@react-navigation/stack";
import {RootStackParamList} from "./../navigators/RootStack";

const WelcomeContainer = styled(ImageBackground)`
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 40%;
  height: 25%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 40px;

`;
const OverlayImage = styled(Image)`
  position:absolute;
  width: 100%;
  height: 150%;
  resize-mode: stretch;
  opacity: 0.3;
`;

const Welcome: FunctionComponent  = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar style='light'/>
      
      <WelcomeContainer source={background}>
        <OverlayImage source={background2}>
        </OverlayImage>
        
        <TopSection>
          <TopImage source={logo}></TopImage>

          <BigText textStyles={{width: "100%", textAlign: "center"}}>
          Добро пожаловать!
          </BigText>

          <RegularText textStyles={{width: "100%",marginTop: 10}}>
            SoundCure by Elepha
          </RegularText>

          <BigText textStyles={{width: "70%",marginTop: 100, fontSize: 20, textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
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
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
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
          
        <RegularButton textStyles={{
                fontSize: 18,
                textAlign: "center",
                color: "#FFFFFF",
                backgroundColor: "transparent",
              }}
              onPress={() => navigation.navigate("Rec") }> Полетели!
         </RegularButton>
        </LinearGradient>
       
      </WelcomeContainer>
      
    </>
  );
};
export default Welcome;