import React, {FunctionComponent, useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";
import {colors} from "../components/colors";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import RegularButton from "../components/Buttons/RegularButton";
import RecContainer from "./RecContainer";
import {ImageBackground, View, StyleSheet, Modal, TouchableOpacity, Text, Dimensions} from "react-native";

import MusicPlayer from "../components/MusicPlayer";

const windowHeight = Dimensions.get("window").height;
const Rec: FunctionComponent = () => {
    const [selectedMood, setSelectedMood] = useState<"ВОССТАНОВЛЕНИЕ" | "БАЛАНС" | "АКТИВАЦИЯ">("ВОССТАНОВЛЕНИЕ");
    const [isMoodSelectionVisible, setIsMoodSelectionVisible] = useState<boolean>(true);



    const handleResetMood = () => {
        setIsMoodSelectionVisible(true);
        setSelectedMood("ВОССТАНОВЛЕНИЕ");
    }

    return (
        <>
            <StatusBar style="light"/>
            <View style={{flex:1, justifyContent: 'space-between'}}>
            <RecContainer selectedMood={selectedMood} onResetMood={handleResetMood} setSelectedMood={setSelectedMood}/>
            </View>
        </>
    );
};


export default Rec;
