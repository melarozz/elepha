import React, {useState} from 'react';
import {View, TextInput, StyleSheet, ImageBackground, StyleProp, TextStyle} from 'react-native';
import RegularButton from "../components/Buttons/RegularButton";
import {useNavigation} from "@react-navigation/native";
import {LinearGradient} from 'expo-linear-gradient';
import RegularText from "../components/Texts/RegularText";
import {colors} from "../components/colors";

const Reset: React.FC = () => {
    const navigation = useNavigation<any>();

    const [email, setEmail] = useState<string>('');
    const [confirmationCode, setConfirmationCode] = useState<string>('');
    const [isConfirmationCodeRequested, setIsConfirmationCodeRequested] = useState<boolean>(false);

    const handleRequestConfirmationCode = () => {
        setIsConfirmationCodeRequested(true);
    };

    const handleConfirm = () => {
        setIsConfirmationCodeRequested(false);
        setEmail('');
        setConfirmationCode('');
        navigation.navigate("Login");
    };

    return (
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
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    width: "100%",
                }}>
                    <View style={{
                        backgroundColor: 'rgba(195, 195, 193, 0.3)',
                        borderRadius: 15,
                        padding: 20,
                        width: "100%",
                        height: 200,
                        justifyContent: "space-between",
                    }}>
                        {isConfirmationCodeRequested ? (
                            <>
                                <RegularText textStyles={({
                                    fontSize: 20,
                                    color: "#FFFFFF",
                                    textAlign: "center",
                                    fontFamily: "TenorSans_400Regular",
                                } as unknown) as StyleProp<TextStyle>}>
                                    Введите код подтверждения</RegularText>
                                <TextInput
                                    style={({
                                        width: '100%',
                                        marginTop: 5,
                                        height: 40,
                                        borderColor: 'white',
                                        borderWidth: 1,
                                        paddingHorizontal: 10,
                                        borderRadius: 15,
                                        fontFamily: "TenorSans_400Regular",
                                        color: "white",
                                    } as unknown) as StyleProp<TextStyle>}
                                    placeholder="Код"
                                    placeholderTextColor="white"
                                    value={confirmationCode}
                                    onChangeText={setConfirmationCode}
                                    keyboardType="numeric"
                                />
                                <View style={{
                                    flex: 1,
                                    justifyContent: "center",
                                }}>
                                    <View style={{
                                        width: "100%",
                                        height: "40%",
                                        backgroundColor: colors.blue,
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        borderRadius: 15,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 20,
                                    }}>

                                        <RegularButton
                                            textStyles={({
                                                fontSize: 18,
                                                textAlign: "center",
                                                color: "#FFFFFF",
                                                backgroundColor: "transparent",
                                                fontFamily: "TenorSans_400Regular",
                                            } as unknown) as StyleProp<TextStyle>}
                                            onPress={handleConfirm}
                                        >
                                            Подтвердить
                                        </RegularButton>
                                    </View>
                                </View>
                            </>
                        ) : (
                            <>
                                <TextInput
                                    style={({
                                        width: '100%',
                                        height: 40,
                                        borderColor: 'white',
                                        borderWidth: 1,
                                        marginTop: 20,
                                        paddingHorizontal: 10,
                                        borderRadius: 15,
                                        fontFamily: "TenorSans_400Regular",
                                        color: "white",
                                    } as unknown) as StyleProp<TextStyle>}
                                    placeholder="Email"
                                    placeholderTextColor="white"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                                <View>
                                    <View style={{
                                        width: "100%",
                                        height: "40%",
                                        backgroundColor: colors.blue,
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        borderRadius: 15,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 30,
                                    }}>

                                        <RegularButton
                                            textStyles={({
                                                fontSize: 18,
                                                textAlign: "center",
                                                color: "#FFFFFF",
                                                backgroundColor: "transparent",
                                                fontFamily: "TenorSans_400Regular",
                                            } as unknown) as StyleProp<TextStyle>}
                                            onPress={handleRequestConfirmationCode}
                                        >
                                            Сбросить
                                        </RegularButton>
                                    </View>
                                </View>

                            </>
                        )}
                    </View>
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default Reset;
