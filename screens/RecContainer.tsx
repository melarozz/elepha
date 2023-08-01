import React, {FunctionComponent, useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";
import {colors} from "../components/colors";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import RegularButton from "../components/Buttons/RegularButton";
import {ImageBackground, View, StyleSheet, Modal, TouchableOpacity, Text} from "react-native";

import MusicPlayer from "../components/MusicPlayer";

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
  height: 40%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  background-color: rgba(168, 168, 166, 0.3);

`;
const RecContainer = ({selectedMood, onResetMood, setSelectedMood}) => {

    const [isMoodSelectionVisible, setIsMoodSelectionVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isRepeatEnabled, setIsRepeatEnabled] = useState<boolean>(false);


    const handleResetMood = () => {
        setIsMoodSelectionVisible(true);
        setSelectedMood("ВОССТАНОВЛЕНИЕ");
        onResetMood(); // Call the onResetMood function passed as a prop
    };
    const handlePlayPausePress = () => {
        setIsPlaying(!isPlaying);

    };

    const handlePreviousPress = () => {
        // Implement logic to play the previous track
    };

    const handleNextPress = () => {
        // Implement logic to play the next track
    };

    const handleRepeatPress = () => {
        setIsRepeatEnabled(!isRepeatEnabled);
    };


    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground source={require("../assets/bgs/bg2.png")}
                             style={{
                                 flex: 1,
                                 justifyContent: "space-between",
                                 paddingVertical: 30,
                             }}>
                <Overlay/>
                <View style={{
                    marginTop: "25%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}>
                    <BigText
                        textStyles={{
                            width: "80%",
                            textAlign: "left",
                            color: "#C4C4C4",
                            marginLeft: 10,
                            fontFamily: "TenorSans_400Regular",
                            fontSize: 24,

                        }}
                    >
                        Рекомендации
                    </BigText>
                </View>


                <TopSection style={{
                    backgroundColor:
                        selectedMood === "ВОССТАНОВЛЕНИЕ"
                            ? "rgba(168, 168, 166, 0.3)"
                            : selectedMood === "БАЛАНС"
                                ? "rgba(252, 210, 185, 0.3)"
                                : "rgba(220, 234, 192, 0.3)",
                }}>


                    <RegularText
                        textStyles={{
                            fontSize: 20,
                            width: "100%",
                            textAlign: "left",
                            marginTop: "5%",
                            marginLeft: 10,
                            fontFamily: "TenorSans_400Regular",
                            color:
                                selectedMood === "ВОССТАНОВЛЕНИЕ"
                                    ? "rgba(139, 223, 216, 1)"
                                    : selectedMood === "БАЛАНС"
                                        ? "rgba(252, 210, 185, 1)"
                                        : "rgba(180, 224, 85, 1)",

                        }}
                    >{selectedMood === "ВОССТАНОВЛЕНИЕ"
                        ? "Матрица\nна восстановление"
                        : selectedMood === "БАЛАНС"
                            ? "Матрица\nна внутренний баланс"
                            : "Матрица\nна активацию работы мозга"}
                    </RegularText>


                    <RegularText textStyles={{
                        fontFamily: "TenorSans_400Regular",
                        color: "white",
                        fontSize: 14,
                        textAlign: "left",
                        marginLeft: "5%",
                        marginTop: 5,
                        lineHeight: 20
                    }}>{selectedMood === "ВОССТАНОВЛЕНИЕ"
                        ? "Данная аудиоматрица:\n• обладает глубоким успокаивающим воздействием,\n• улучшает сон,\n• избавляет от депрессивных состояний,\n• восстанавливает работу ЦНС,\n• снимает состояние тревожности,\n• помогает формировать новые нейронные связи."
                        : selectedMood === "БАЛАНС"
                            ? "Данная аудиоматрица:\n• помогает синхронизировать работу двух полушарий мозга,\n• для расширения сознания,\n• сгармонизировать общее самочувствие,\n• переносить психоэмоциональные перезагрузки,\n• обладает стресс-протекторным действием."
                            : "Данная аудиоматрица:\n• улучшает когнитивные способности,\n• повышает проводимость нервных импульсов для быстрого принятия решений,\n• увеличивается энергетический резерв мозга,\n• повышается работоспособность и мотивация."}</RegularText>
                </TopSection>

                <MusicPlayer mood={selectedMood}/>


                <View style={{
                    width: "85%",
                    height: "5%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 5,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:
                        selectedMood === "ВОССТАНОВЛЕНИЕ"
                            ? "rgba(168, 168, 166, 0.3)"
                            : selectedMood === "БАЛАНС"
                                ? "rgba(252, 210, 185, 0.3)"
                                : "rgba(220, 234, 192, 0.3)",
                }}
                >

                    <RegularButton
                        btnStyles={{marginTop: 5}}
                        textStyles={{
                            fontSize: 18,
                            textAlign: "center",
                            color: "#FFFFFF",
                            backgroundColor: "transparent",
                            fontFamily: "TenorSans_400Regular",

                        }}
                        onPress={handleResetMood}> Изменить состояние
                    </RegularButton>
                </View>

                {selectedMood === "ВОССТАНОВЛЕНИЕ" && (
                    <Modal visible={isMoodSelectionVisible} animationType="fade">
                        <ImageBackground source={require('../assets/bgs/back1.png')} style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground
                                source={require('../assets/bgs/bg2.png')}
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                imageStyle={{opacity: 0.4}}
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedMood("ВОССТАНОВЛЕНИЕ");
                                            setIsMoodSelectionVisible(false);
                                        }}
                                        style={{
                                            padding: 20,
                                            backgroundColor: "rgba(139, 223, 216, 0.5)",
                                            margin: 10,
                                            borderRadius: 8,
                                        }}
                                    >
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 18,
                                            width: 200,
                                            justifyContent: 'center',
                                            color: "#FFFFFF",
                                            fontFamily: "TenorSans_400Regular",
                                        }}>ВОССТАНОВЛЕНИЕ</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedMood("БАЛАНС");
                                            setIsMoodSelectionVisible(false);
                                        }}
                                        style={{
                                            padding: 20,
                                            backgroundColor: "rgba(139, 223, 216, 0.5)",
                                            margin: 10,
                                            borderRadius: 8,
                                        }}
                                    >
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 18,
                                            width: 200,
                                            justifyContent: 'center',
                                            color: "#FFFFFF",
                                            fontFamily: "TenorSans_400Regular",
                                        }}>БАЛАНС</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedMood("АКТИВАЦИЯ");
                                            setIsMoodSelectionVisible(false);
                                        }}
                                        style={{
                                            padding: 20,
                                            backgroundColor: "rgba(139, 223, 216, 0.5)",
                                            margin: 10,
                                            borderRadius: 8,
                                        }}
                                    >
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 18,
                                            width: 200,
                                            justifyContent: 'center',
                                            color: "#FFFFFF",
                                            fontFamily: "TenorSans_400Regular",
                                        }}>АКТИВАЦИЯ</Text>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </ImageBackground>
                    </Modal>

                )}
            </ImageBackground>
        </View>
    );
};


export default RecContainer;
