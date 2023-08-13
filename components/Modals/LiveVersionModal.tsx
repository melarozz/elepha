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

const LiveVersion = ({isVisible, setIsVisible}) => {
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
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Самостоятельный замер
                            пульса</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Три аудиоматрицы,
                            корректирующие работу нервной системы</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Подбор аудиоматриц на
                            основе
                            ваших физиологических показателей</RegularText>
                    </View>
                    <View style={(ContainerText) as StyleProp<ViewStyle>}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>✓ Рекомендации по
                            восстановлению здоровья</RegularText>
                    </View>
                </View>

            </View>
        </Modal>
    );
};

export default LiveVersion;
