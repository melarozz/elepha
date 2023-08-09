import React, {FunctionComponent} from "react";
import RegularText from "../components/Texts/RegularText";
import {
    Dimensions,
    ImageBackground,  StyleSheet, TextInput,
    View,
} from "react-native";
import RegularButton from "../components/Buttons/RegularButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Feedback: FunctionComponent = () => {

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

                    <View style={{
                        width: windowWidth * 0.75,
                        padding: 20,
                        backgroundColor: "rgba(139, 223, 216, 0.5)",
                        borderRadius: 10,
                        marginTop: 20,
                    }}>
                        <RegularText textStyles={{
                            textAlign: "center",
                            fontSize: 20,
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            fontFamily: "TenorSans_400Regular",
                            marginBottom: 15,
                        }}>Возникли вопросы или пожелания? Заполните форму обратной связи</RegularText>
                        <TextInput
                            style={{
                                marginBottom: 10,
                                padding: 10,
                                borderColor: "#ccc",
                                borderWidth: 1,
                                borderRadius: 5,
                                fontSize: 16,
                                color: "#FFFFFF",
                                fontWeight: "bold",
                                fontFamily: "TenorSans_400Regular",
                            }}
                            placeholder="Имя"
                        />

                        <TextInput
                            style={{
                                marginBottom: 10,
                                padding: 10,
                                borderColor: "#ccc",
                                borderWidth: 1,
                                borderRadius: 5,
                                fontSize: 16,
                                color: "#FFFFFF",
                                fontWeight: "bold",
                                fontFamily: "TenorSans_400Regular",
                            }}
                            placeholder="Номер телефона"
                        />

                        <TextInput
                            style={{
                                marginBottom: 10,
                                padding: 10,
                                borderColor: "#ccc",
                                borderWidth: 1,
                                borderRadius: 5,
                                height: windowHeight * 0.3,
                                fontSize: 16,
                                color: "#FFFFFF",
                                fontWeight: "bold",
                                fontFamily: "TenorSans_400Regular",
                            }}
                            placeholder="Оставьте Ваш отзыв"
                            multiline
                        />

                    </View>
                    <RegularButton btnStyles={{
                        backgroundColor: "rgba(139, 223, 216, 0.5)",
                        marginTop: 30,
                        height: 50,
                        width: windowWidth*0.75,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                                   textStyles={{
                                       fontSize: 20,
                                       color: "#FFFFFF",
                                       fontWeight: "bold",
                                       fontFamily: "TenorSans_400Regular",
                                   }}
                                   onPress={() => {/* Handle submission */
                                   }}>Отправить</RegularButton>


                </ImageBackground>
            </ImageBackground>


        </>

    );
};


export default Feedback;

