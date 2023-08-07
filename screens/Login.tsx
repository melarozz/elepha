import * as React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, StyleProp, TextStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import RegularButton from "../components/Buttons/RegularButton";
import {useNavigation} from "@react-navigation/native";
import {colors} from "../components/colors";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [showForgotPassword, setShowForgotPassword] = useState<boolean>(true);

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        setShowForgotPassword(text.length === 0);
    };

    const navigation = useNavigation<any>();
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
                        height: 350,
                        justifyContent: "space-between",
                    }}>
                        <View>
                            <TextInput
                                style={({
                                    width: '100%',
                                    height: 40,
                                    borderColor: 'white',
                                    borderWidth: 1,
                                    marginBottom: 10,
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

                            <View style={{
                                position: "relative",
                            }}>
                                <TextInput
                                    style={({
                                        width: '100%',
                                        height: 40,
                                        borderColor: 'white',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        paddingHorizontal: 10,
                                        borderRadius: 15,
                                        fontFamily: "TenorSans_400Regular",
                                        color: "white",
                                    } as unknown) as StyleProp<TextStyle>}
                                    placeholder="Пароль"
                                    placeholderTextColor="white"
                                    value={password}
                                    onChangeText={handlePasswordChange}
                                    secureTextEntry
                                />
                                {showForgotPassword && (
                                    <RegularButton
                                        textStyles={({
                                            fontSize: 18,
                                            textAlign: "center",
                                            color: "#FFFFFF",
                                            backgroundColor: "transparent",
                                            fontFamily: "TenorSans_400Regular",
                                        } as unknown) as StyleProp<TextStyle>}
                                        onPress={() => navigation.navigate("Reset")}
                                    >
                                        Забыли пароль?
                                    </RegularButton>
                                )}
                            </View>
                        </View>

                        <View>
                            <View style={{
                                width: "100%",
                                height: "35%",
                                backgroundColor: colors.blue,
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>

                                <RegularButton
                                    textStyles={({
                                        fontSize: 18,
                                        textAlign: "center",
                                        color: "#FFFFFF",
                                        backgroundColor: "transparent",
                                        fontFamily: "TenorSans_400Regular",
                                    } as unknown) as StyleProp<TextStyle>}
                                    onPress={() => navigation.navigate("Rec")}
                                >
                                    Войти
                                </RegularButton>
                            </View>


                            <RegularButton
                                textStyles={({
                                    fontSize: 18,
                                    textAlign: "center",
                                    color: "#FFFFFF",
                                    backgroundColor: "transparent",
                                    marginTop: 10,
                                    fontFamily: "TenorSans_400Regular",
                                } as unknown) as StyleProp<TextStyle>}
                                onPress={() => navigation.navigate("Register")}
                            >
                                Регистрация
                            </RegularButton>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default Login;
