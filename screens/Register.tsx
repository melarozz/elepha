import React, {useState} from 'react';
import {View, TextInput, StyleSheet, ImageBackground, Modal, StyleProp, TextStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import RegularButton from "../components/Buttons/RegularButton";
import RegularText from "../components/Texts/RegularText";
import {useNavigation} from "@react-navigation/native";

const inputStyle = {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    fontFamily: "TenorSans_400Regular",
    color: "white"
};


const Register: React.FC = () => {
    const navigation = useNavigation<unknown>();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
    const [confirmationCode, setConfirmationCode] = useState<string>('');

    const handleRegister = () => {
        // console.log('Name:', name);
        // console.log('Email:', email);
        // console.log('Mobile Number:', mobile);
        // console.log('Password:', password);
        // console.log('Confirm Password:', confirmPassword);
        // console.log(showConfirmationModal);
        setShowConfirmationModal(!showConfirmationModal);
        // console.log(showConfirmationModal);
    };
    const handleConfirm = () => {
        //setShowConfirmationModal(!showConfirmationModal);
        // console.log(showConfirmationModal);
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
                    }}>
                        <RegularText textStyles={{
                            fontSize: 24,
                            marginBottom: 20,
                            color: "#FFFFFF",
                            textAlign: "center",
                            fontFamily: "TenorSans_400Regular",
                        }}>Регистрация</RegularText>
                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Имя"
                            placeholderTextColor="white"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Email"
                            placeholderTextColor="white"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Мобильный номер"
                            placeholderTextColor="white"
                            value={mobile}
                            onChangeText={setMobile}
                            keyboardType="phone-pad"
                        />
                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Пароль"
                            placeholderTextColor="white"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Подтвердите пароль"
                            placeholderTextColor="white"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                        <LinearGradient
                            colors={[
                                "rgba(100, 135, 136, 1)",
                                "rgba(117, 160, 161, 1)",
                                "rgba(108, 175, 167, 1)",
                                "rgba(150, 202, 200, 0.69)",
                            ]}
                            start={{x: 0, y: 0}}
                            end={{x: 0, y: 1}}
                            style={{
                                width: "70%",
                                height: "15%",
                                marginTop: 30,
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <RegularButton
                                textStyles={{
                                    fontSize: 18,
                                    textAlign: "center",
                                    color: "#FFFFFF",
                                    backgroundColor: "transparent",
                                    fontFamily: "TenorSans_400Regular",
                                }}
                                onPress={handleRegister}
                            >
                                Зарегистрироваться
                            </RegularButton>
                        </LinearGradient>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 30,
                            width: "100%",
                        }}>
                            <RegularButton
                                textStyles={{
                                    fontSize: 18,
                                    textAlign: "center",
                                    color: "#FFFFFF",
                                    backgroundColor: "transparent",
                                    marginTop: 30,
                                    fontFamily: "TenorSans_400Regular",
                                }}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Уже есть аккаунт?
                            </RegularButton>
                        </View>
                    </View>
                </View>

                {/* Confirmation Code Modal */}
                <Modal visible={showConfirmationModal} animationType="fade" transparent={true}>
                    <ImageBackground source={require('../assets/bgs/back1.png')}
                                     style={{
                                         flex: 1,
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                     }}>
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
                                backgroundColor: 'transparent',
                            }}>
                                <RegularText textStyles={{
                                    fontSize: 24,
                                    marginBottom: 20,
                                    color: "#FFFFFF",
                                    textAlign: "center",
                                    fontFamily: "TenorSans_400Regular",
                                }}>Введите код подтверждения</RegularText>
                                <TextInput
                                    style={(inputStyle) as StyleProp<TextStyle>}
                                    placeholder="Код"
                                    placeholderTextColor="white"
                                    value={confirmationCode}
                                    onChangeText={setConfirmationCode}
                                    keyboardType="numeric"
                                />
                                <LinearGradient
                                    colors={[
                                        "rgba(100, 135, 136, 1)",
                                        "rgba(117, 160, 161, 1)",
                                        "rgba(108, 175, 167, 1)",
                                        "rgba(150, 202, 200, 0.69)",
                                    ]}
                                    start={{x: 0, y: 0}}
                                    end={{x: 0, y: 1}}
                                    style={{
                                        width: "100%",
                                        height: "5%",
                                        marginTop: 30,
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        borderRadius: 15,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <RegularButton
                                        textStyles={{
                                            fontSize: 18,
                                            textAlign: "center",
                                            color: "#FFFFFF",
                                            backgroundColor: "transparent",
                                            fontFamily: "TenorSans_400Regular",
                                        }}
                                        onPress={handleConfirm}
                                    >
                                        Подтвердить
                                    </RegularButton>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </Modal>
            </ImageBackground>
        </ImageBackground>
    );
};

export default Register;
