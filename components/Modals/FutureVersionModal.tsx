import React from 'react';
import {View, Modal, TouchableOpacity, StyleProp, ViewStyle, Dimensions} from 'react-native';
import RegularText from "../Texts/RegularText";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const personalDataText: {
    fontFamily: string;
    color: string;
    fontSize: number,
    textAlign: string,
    paddingVertical: number,
    marginHorizontal: number,
    width: number
} = {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "TenorSans_400Regular",
    textAlign: "left",
    paddingVertical: 5,
    marginHorizontal: 15,
    width: windowWidth * 0.8,
};

const ContainerText: {
    backgroundColor: string;
    borderRadius: number,
    borderWidth: number,
    borderColor: string,
    margin: number,
} = {
    backgroundColor: "transparent",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    margin: 5,
};


const FutureVersion = ({isVisible, setIsVisible}) => {
    return (
        <Modal visible={isVisible} animationType="fade" transparent>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>

                <View style={{
                    backgroundColor: "rgba(103,195,196,0.9)",
                    padding: 5,
                    borderRadius: 10,
                    width: windowWidth * 0.9,

                }}>
                    <TouchableOpacity onPress={() => setIsVisible(false)}
                                      style={{
                                          justifyContent: "flex-end", alignItems: "flex-end"
                                      }}>
                        <MaterialCommunityIcons name="close" size={24} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Автоматическое снятие
                            замеров
                            ваших физиологических показателей посредством
                            пульсометра с электронными датчиками</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Анализ вариабельности
                            сердечного ритма с прямой трансляцией данных в приложении</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Удобный интерфейс для
                            контроля и отслеживания данных, с отражением их на персональных графиках</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Отслеживание динамики
                            вашего
                            состояния по периодам</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Более трех аудиоматриц с
                            развернутым описанием их наполнения и структуры</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Рекомендации по
                            прослушиванию
                            аудиоматриц на основе замеров и анализа HVR</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Обратная связь и
                            поддержка команды ElephaHealth по улучшению вашего здоровья и состояния</RegularText>
                    </View>

                </View>

            </View>
        </Modal>
    );
};

export default FutureVersion;
