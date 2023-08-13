import React, {FunctionComponent, useState} from "react";
import RegularText from "../components/Texts/RegularText";
import {
    Dimensions,
    ImageBackground, StyleSheet, TextInput,
    View, ScrollView, TouchableOpacity
} from "react-native";
import RegularButton from "../components/Buttons/RegularButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PulseInfo from "../components/Modals/PulseInfo";
import LiveVersion from "../components/Modals/LiveVersionModal";
import FutureVersion from "../components/Modals/FutureVersionModal";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Feedback: FunctionComponent = () => {

    const [isLiveVersionModalVisible, setLiveVersionModalVisible] = useState<boolean>(false);
    const [isFutureVersionModalVisible, setFutureVersionModalVisible] = useState<boolean>(false);

    return (
        <>
            <ImageBackground
                source={require('../assets/bgs/back1.png')}
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <ImageBackground
                    source={require('../assets/bgs/bg2.png')}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                    imageStyle={{opacity: 0.4}}
                >
                    <ScrollView style={{
                        flex:1,
                    }}>
                        <RegularText textStyles={{
                            textAlign: "justify",
                            width: windowWidth * 0.9,
                            marginHorizontal: windowWidth * 0.05,
                            fontSize: 14,
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            fontFamily: "TenorSans_400Regular",
                            marginTop: windowHeight*0.1,
                        }}>Дорогой пользователь, в скором времени приложение будет дополнено большим количеством
                            инструментов, которые позволят еще глубже исследовать ваше здоровье и улучшать внутреннее и
                            внешнее состояние.</RegularText>

                        <View style={{
                            flexDirection: "column",
                            marginTop: windowHeight*0.05,
                        }}>
                            <RegularButton btnStyles={{
                                width: windowWidth * 0.8,
                                height: 100,
                                marginHorizontal: windowWidth * 0.1,
                                backgroundColor: "rgba(139, 223, 216, 0.5)",
                                borderRadius: 10,
                                marginTop: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} onPress={() => setLiveVersionModalVisible(true)}>
                                <RegularText textStyles={{
                                    textAlign: "center",
                                    fontSize: 24,
                                    color: "#FFFFFF",
                                    fontFamily: "TenorSans_400Regular",
                                }}>Live-версия</RegularText>

                            </RegularButton>
                            <LiveVersion isVisible={isLiveVersionModalVisible} setIsVisible={setLiveVersionModalVisible}/>

                            <RegularButton btnStyles={{
                                width: windowWidth * 0.8,
                                height: 100,
                                marginHorizontal: windowWidth * 0.1,
                                backgroundColor: "rgba(139, 223, 216, 0.5)",
                                borderRadius: 10,
                                marginTop: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} onPress={() => setFutureVersionModalVisible(true)}>
                                <RegularText textStyles={{
                                    textAlign: "center",
                                    fontSize: 24,
                                    color: "#FFFFFF",
                                    fontFamily: "TenorSans_400Regular",
                                }}>Future-версия</RegularText>
                            </RegularButton>
                                <FutureVersion isVisible={isFutureVersionModalVisible} setIsVisible={setFutureVersionModalVisible}/>

                        </View>

                        <View style={{
                            flexDirection: "row",
                            marginTop: windowHeight*0.07,
                            width: windowWidth * 0.9,
                        }}>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: windowWidth * 0.04,
                                marginLeft: windowWidth * 0.03,
                            }}>
                                <MaterialCommunityIcons name="cursor-default-click-outline" size={50}
                                                        color="rgba(139, 223, 216, 0.8)"/>
                            </View>
                            <RegularText textStyles={{
                                textAlign: "justify",
                                width: windowWidth * 0.75,
                                fontSize: 16,
                                color: "#FFFFFF",
                                fontWeight: "bold",
                                fontFamily: "TenorSans_400Regular",
                            }}>Желаете стать одним из первых обладателей Future-версии и получить персональную скидку на
                                ее приобретение? Кликайте «хочу» и мы вышлем вам всю информацию в преддверии
                                запуска.</RegularText>
                        </View>

                        <View style={{
                            width: windowWidth * 0.75,
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: windowWidth*0.125,
                        }}>
                        <RegularButton btnStyles={{
                            backgroundColor: "rgba(139, 223, 216, 0.5)",
                            marginTop: 30,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            width: windowWidth * 0.8,
                            marginBottom: 10,
                        }}
                                       textStyles={{
                                           fontSize: 20,
                                           color: "#FFFFFF",
                                           fontWeight: "bold",
                                           fontFamily: "TenorSans_400Regular",
                                       }}
                                       onPress={() => {/* Handle submission */
                                       }}>Хочу</RegularButton>


                        </View>


                    </ScrollView>
                </ImageBackground>
            </ImageBackground>

        </>


);
};


export default Feedback;

