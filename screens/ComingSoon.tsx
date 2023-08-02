import React, {FunctionComponent} from "react";
import RegularText from "../components/Texts/RegularText";
import {
    ImageBackground, StyleProp, StyleSheet, TextStyle,
    View,
} from "react-native";


const ComingSoon: FunctionComponent = () => {

    return (
        <>

            <ImageBackground
                source={require('../assets/bgs/back1.png')}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ImageBackground
                    source={require('../assets/bgs/bg2.png')}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    imageStyle={{opacity: 0.4}}
                >

                    <View>
                        <RegularText textStyles={({
                            width: "100%",
                            marginTop: 10,
                            color: "rgba(195, 216, 228, 1)",
                            fontSize: 17,
                            textAlign: "center",
                            fontFamily: "TenorSans_400Regular",
                        } as unknown) as StyleProp<TextStyle>}>В разработке</RegularText>
                    </View>


                </ImageBackground>
            </ImageBackground>


        </>

    );
};


export default ComingSoon;

