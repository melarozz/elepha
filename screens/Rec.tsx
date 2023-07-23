import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import TabScreens from "./../navigators/TabScreens";

import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";
import {useNavigation} from "@react-navigation/native";
import background2 from "./../assets/bgs/bg2.png";

import { ImageBackground, Image, View, StyleSheet} from "react-native";

import MusicPlayer from "../components/MusicPlayer";

const RecContainer = styled(ImageBackground)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.View`
  background-color: rgba(14, 83, 80, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TopSection = styled.View`
  position: relative;
  width: 90%;
  height: 55%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  flex: 1;
  background-color: rgba(168, 168, 166, 0.3);
`;

const Rec: FunctionComponent = () => {
  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeatEnabled, setIsRepeatEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); 
  const [duration, setDuration] = useState(0); 

  const handlePlayPausePress = () => {
    setIsPlaying(!isPlaying);
    // Implement play/pause logic here
  };

  const handlePreviousPress = () => {
    // Implement logic to play the previous track here
  };

  const handleNextPress = () => {
    // Implement logic to play the next track here
  };

  const handleRepeatPress = () => {
    setIsRepeatEnabled(!isRepeatEnabled);
  };

  return (
    <>
      <StatusBar style="light" />

      <RecContainer source={background2}>
        <Overlay />
          <View style={styles.container1}>
          <BigText
              textStyles={{
                width: "80%",
                textAlign: "left",
                color: "#C4C4C4",
                marginLeft: 10,
              }}
            >
              Рекомендации
            </BigText>
            </View>
          <TopSection>
            <RegularText
              textStyles={{
                fontSize: 20,
                width: "70%",
                textAlign: "left",
                color: "rgba(139, 223, 216, 1)",
                padding: "1%",
              }}
            >Матрица на восстановление
            </RegularText>
            

            
            <MusicPlayer
              trackName="Sample Track" 
              isRepeatEnabled={isRepeatEnabled}
              isPlaying={isPlaying}
              onPlayPausePress={handlePlayPausePress}
              onPreviousPress={handlePreviousPress}
              onNextPress={handleNextPress}
              onRepeatPress={handleRepeatPress}
              currentTime={"1:56"}
              duration={"3:57"}
            />
          

            <RegularText textStyles={{fontSize: 16,textAlign: "left", marginLeft: "5%", marginBottom: 5}}>Данная аудиоматрица:</RegularText>
            <RegularText textStyles={{fontSize: 16,textAlign: "left", marginLeft: "5%", marginBottom: 5}}>· обладает глубоким успокаивающим воздействием,</RegularText>
            <RegularText textStyles={{fontSize: 16,textAlign: "left", marginLeft: "5%", marginBottom: 5}}>· улучшает сон,</RegularText>
            <RegularText textStyles={{fontSize: 16,textAlign: "left", marginLeft: "5%", marginBottom: 5}}>· избавляет от депрессивных состояний,</RegularText>
            <RegularText textStyles={{fontSize: 16,textAlign: "left", marginLeft: "5%", marginBottom: 5}}>· восстанавливает работу ЦНС,</RegularText>
            <RegularText textStyles={{fontSize: 16,textAlign: "left", marginLeft: "5%", marginBottom: 5}}>· снимает состояние тревожности,</RegularText>
            <RegularText textStyles={{fontSize: 16,textAlign: "left", marginLeft: "5%", marginBottom: "5%"}}>· помогает формировать новые нейронные связи.</RegularText>
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
              width: "90%", 
              height: "5%", 
              marginLeft: "auto", 
              marginRight: "auto",
              marginTop: 5,
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
              onPress={() => navigation.navigate("Welcome") }> Сделать замер снова
         </RegularButton> 
        </LinearGradient>
      </RecContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container1:{
    marginTop: "25%",
  },
  
});

export default Rec;
