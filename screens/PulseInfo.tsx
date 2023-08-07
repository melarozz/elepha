import React from 'react';
import {View, Modal, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import RegularText from "../components/Texts/RegularText";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const personalDataText: { fontFamily: string; color: string; fontSize: number, textAlign: string, padding: number } = {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "TenorSans_400Regular",
    textAlign: "center",
    padding: 20,
};

const PulseInfo = ({isVisible, setIsVisible}) => {
    return (
        <Modal visible={isVisible} animationType="fade" transparent>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>

                <View style={{backgroundColor: "rgb(85,179,180)", padding: 5, borderRadius: 10, width: 200}}>
                    <TouchableOpacity onPress={() => setIsVisible(false)}
                                      style={{
                                          justifyContent: "flex-end", alignItems: "flex-end"
                                      }}>
                        <MaterialCommunityIcons name="close" size={24} color="#000000"/>
                    </TouchableOpacity>
                    <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Curabitur aliquam ultrices ante, in ornare augue. In mollis lectus risus, in.</RegularText>
                </View>

            </View>
        </Modal>
    );
};

export default PulseInfo;
