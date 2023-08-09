//card.tsx
import React from 'react';
import {View, Dimensions, StyleProp, TextStyle, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import RegularText from "../components/Texts/RegularText";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import BigText from "../components/Texts/BigText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const HorizontalCard = ({title, subtitle1, subtitle2, onClose}) => {

    return (
        <Card containerStyle={{
            backgroundColor: "white",
            borderRadius: 15,
            width: windowWidth * 0.8,
            height: 500,
            marginHorizontal: windowWidth * 0.05,
            marginVertical: windowHeight * 0.2,

        }}>
            <View style={{
                justifyContent: "space-between"
            }}>


                <TouchableOpacity onPress={onClose}
                                  style={{
                                      justifyContent: "flex-end", alignItems: "flex-end"
                                  }}>
                    <MaterialCommunityIcons name="close" size={24} color="#000000"/>
                </TouchableOpacity>


                <BigText textStyles={({
                    color: "#000000",
                    fontSize: 24,
                    textAlign: "left",
                    fontFamily: "TenorSans_400Regular"
                } as unknown) as StyleProp<TextStyle>}>{title}</BigText>


                    <RegularText textStyles={({
                        color: "rgba(109, 147, 149, 1)",
                        fontSize: 16,
                        textAlign: "left",
                        fontFamily: "TenorSans_400Regular"
                    } as unknown) as StyleProp<TextStyle>}>{subtitle1}</RegularText>
                    <RegularText textStyles={({
                        color: "#000000",
                        fontSize: 16,
                        textAlign: "left",
                        fontFamily: "TenorSans_400Regular"
                    } as unknown) as StyleProp<TextStyle>}>{subtitle2}</RegularText>


            </View>

        </Card>
    );
};

export default HorizontalCard;
