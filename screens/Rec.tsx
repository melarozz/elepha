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

import { ImageBackground, Image, View, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";

import MusicPlayer from "../components/MusicPlayer";

const RecContainer = styled(ImageBackground)`
  background-color: ${colors.secondary};
  justify-content: flex-start;
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
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  flex: 1;
  max-height: 60%;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(168, 168, 166, 0.3);
  marginTop: 20;
  marginBottom: 20;
`;

const Rec: FunctionComponent = () => {
  const navigation = useNavigation();

  const [selectedMood, setSelectedMood] = useState<"mood1" | "mood2" | "mood3">("mood1");
  const [isMoodSelectionVisible, setIsMoodSelectionVisible] = useState(true);

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

  const handleResetMood = () => {
    setIsMoodSelectionVisible(true);
    setSelectedMood("mood1");
  }

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
          <TopSection style={{
            backgroundColor:
              selectedMood === "mood1"
                ? "rgba(168, 168, 166, 0.3)"
                : selectedMood === "mood2"
                ? "rgba(252, 210, 185, 0.3)"
                : "rgba(220, 234, 192, 0.3)",
          }}>
            
             <RegularText
              textStyles={{
                fontSize: 20,
                width: "100%",
                textAlign: "left",
                marginTop: "10%",
                marginLeft: 10,
                 color:
                selectedMood === "mood1"
                  ? "rgba(139, 223, 216, 1)"
                  : selectedMood === "mood2"
                  ? "rgba(252, 210, 185, 1)"
                  : "rgba(180, 224, 85, 1)",
                
              }}
            > {selectedMood === "mood1"
              ? "Матрица \n на восстановление"
              : selectedMood === "mood2"
              ? "Матрица \n на внутренний баланс"
              : "Матрица \n на активацию работы мозга"}
            </RegularText>
            

            
            <MusicPlayer
              trackName="Sample Track" 
              isRepeatEnabled={isRepeatEnabled}
              isPlaying={isPlaying}
              onPlayPausePress={handlePlayPausePress}
              onPreviousPress={handlePreviousPress}
              onNextPress={handleNextPress}
              onRepeatPress={handleRepeatPress}
              currentTime={"1:07"}
              duration={"3:57"}
            />
          
            <RegularText textStyles={{fontSize: 16,textAlign: "left", marginLeft: "5%", marginTop: 5, lineHeight: 25}}>{selectedMood === "mood1"
              ? "Данная аудиоматрица:\n·обладает глубоким успокаивающим воздействием,\n·улучшает сон,\n·избавляет от депрессивных состояний,\n·восстанавливает работу ЦНС,\n·снимает состояние тревожности,\n·помогает формировать новые нейронные связи."
              : selectedMood === "mood2"
              ? "Данная аудиоматрица:\n·помогает синхронизировать работу двух полушарий мозга,\n·для расширения сознания,\n·сгармонизировать общее самочувствие,\n·переносить психоэмоциональные перезагрузки,\n·обладает стресс-протекторным действием."
              : "Данная аудиоматрица:\n·улучшает когнитивные способности,\n·повышает проводимость нервных импульсов для быстрого принятия решений,\n·увеличивается энергетический резерв мозга,\n·повышается работоспособность и мотивация."}</RegularText>
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
          
        <RegularButton 
              btnStyles={{marginTop: 5}}
              textStyles={{
                fontSize: 18,
                textAlign: "center",
                color: "#FFFFFF",
                backgroundColor: "transparent",
              }}
              onPress={ handleResetMood }> Изменить состояние
         </RegularButton> 
        </LinearGradient>
        
        {selectedMood === "mood1" && (
        <Modal visible={isMoodSelectionVisible} animationType="fade">
          <ImageBackground source={require('./../assets/bgs/back1.png')} style={styles.backgroundImage}>
          <ImageBackground
            source={require('./../assets/bgs/bg2.png')}
            style={styles.overlay}
            imageStyle={{ opacity: 0.4 }}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedMood("mood1");
                  setIsMoodSelectionVisible(false);
                }}
                style={styles.moodOption}
              >
                <Text style={styles.moodOptionText}>Mood 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedMood("mood2");
                  setIsMoodSelectionVisible(false);
                }}
                style={styles.moodOption}
              >
                <Text style={styles.moodOptionText}>Mood 2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedMood("mood3");
                  setIsMoodSelectionVisible(false);
                }}
                style={styles.moodOption}
              >
                <Text style={styles.moodOptionText}>Mood 3</Text>
              </TouchableOpacity>
            </View>
            </ImageBackground>
            </ImageBackground>
          </Modal>
        )}
      </RecContainer>

    </>
  );
};

const styles = StyleSheet.create({
  container1:{
    marginTop: "25%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  moodOption: {
    padding: 20,
    backgroundColor: "rgba(139, 223, 216, 0.5)",
    margin: 10,
    borderRadius: 8,
  },
  moodOptionText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Rec;
