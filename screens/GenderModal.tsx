import React from 'react';
import {View, Modal, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import RegularText from "../components/Texts/RegularText";

const personalDataText: { fontFamily: string; color: string; fontSize: number, textAlign: string } = {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "TenorSans_400Regular",
    textAlign: "center",
};

const GenderModal = ({isVisible, onFemalePress, onMalePress}) => {
    return (
        <Modal visible={isVisible} animationType="fade" transparent>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
                <TouchableOpacity onPress={onFemalePress}>
                    <View style={{
                        backgroundColor: "rgb(85,179,180)",
                        padding: 20,
                        borderRadius: 10,
                        marginBottom: 10,
                        width: 200
                    }}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Женский</RegularText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onMalePress}>
                    <View style={{backgroundColor: "rgb(85,179,180)", padding: 20, borderRadius: 10, width: 200}}>
                        <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Мужской</RegularText>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default GenderModal;
