import React, {useState, useCallback} from 'react';
import {View, TextInput, StyleSheet, ImageBackground, Modal, StyleProp, TextStyle, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import RegularButton from "../components/Buttons/RegularButton";
import RegularText from "../components/Texts/RegularText";
import {useNavigation} from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {colors} from "../components/colors";
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import GenderModal from "./GenderModal";
const windowWidth = Dimensions.get("window").width - 100;

const options = [
    { label: 'Option 1', value: 'M' },
    { label: 'Option 2', value: 'F' },
];

const inputStyle = {
    width: windowWidth,
    height: "4%",
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
    const [lastName, setLastName] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [pulse, setPulse] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');

    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
    const [confirmationCode, setConfirmationCode] = useState<string>('');

    const handleRegister = () => {
        setShowConfirmationModal(!showConfirmationModal);
    };
    const handleConfirm = () => {
        setConfirmationCode('');
        navigation.navigate("Login");
    };

    const handleGenderChange = (gender) => {
        setGender(gender);
    };
    const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);

    const handleDatePickerConfirm = useCallback((date: Date) => {
        setBirthDate(date.toISOString()); // Store the selected date in ISO string format
        setDatePickerVisible(false); // Close the date picker modal
    }, []);

    const handleDatePickerCancel = useCallback(() => {
        setDatePickerVisible(false); // Close the date picker modal without selecting a date
    }, []);

    const [isGenderModalVisible, setGenderModalVisible] = useState<boolean>(false);
    const toggleGenderModal = () => {
        setGenderModalVisible(!isGenderModalVisible);
    }



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
                        width: "100%"
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
                            placeholder="Фамилия"
                            placeholderTextColor="white"
                            value={lastName}
                            onChangeText={setLastName}
                        />

                        <View style={(inputStyle) as StyleProp<TextStyle>}>
                            <RegularButton
                                textStyles={({
                                    textAlign: "left",
                                    width: windowWidth,
                                    padding: 5,
                                    fontFamily: "TenorSans_400Regular",
                                    color: "white"
                                } as unknown) as StyleProp<TextStyle>}
                                onPress={() => setGenderModalVisible(true)}
                            >
                                {gender ? gender : 'Выбрать пол'}
                            </RegularButton>
                        </View>



                        <View style={(inputStyle) as StyleProp<TextStyle>}>
                        <RegularButton
                            textStyles={({
                                textAlign: "left",
                                width: windowWidth,
                                padding: 5,
                                fontFamily: "TenorSans_400Regular",
                                color: "white"
                            } as unknown) as StyleProp<TextStyle>}
                            onPress={() => setDatePickerVisible(true)} // Show the date picker modal when the button is pressed
                        >
                            {birthDate ? new Date(birthDate).toLocaleDateString() : "Выбрать дату рождения"} {/* Display the selected date or the default text */}
                        </RegularButton>
                        </View>

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
                            placeholder="Номер телефона"
                            placeholderTextColor="white"
                            value={mobile}
                            onChangeText={setMobile}
                            keyboardType="phone-pad"
                        />

                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Компания"
                            placeholderTextColor="white"
                            value={company}
                            onChangeText={setCompany}
                        />

                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Рост"
                            placeholderTextColor="white"
                            value={height}
                            onChangeText={setHeight}
                        />

                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Вес"
                            placeholderTextColor="white"
                            value={weight}
                            onChangeText={setWeight}
                        />

                        <TextInput
                            style={(inputStyle) as StyleProp<TextStyle>}
                            placeholder="Средний пульс"
                            placeholderTextColor="white"
                            value={pulse}
                            onChangeText={setPulse}
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
                        <View style={{
                            width: "100%",
                            height: "10%",
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
                                onPress={handleRegister}
                            >
                                Зарегистрироваться
                            </RegularButton>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 5,
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
                                <View style={{
                                    width: windowWidth,
                                    height: "5%",
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
                                        onPress={handleConfirm}
                                    >
                                        Подтвердить
                                    </RegularButton>
                                </View>
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </Modal>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDatePickerConfirm}
                    onCancel={handleDatePickerCancel}
                />

                <GenderModal
                    isVisible={isGenderModalVisible}
                    onFemalePress={() => {
                        setGender('Ж');
                        setGenderModalVisible(false);
                    }}
                    onMalePress={() => {
                        setGender('М');
                        setGenderModalVisible(false);
                    }}
                />

            </ImageBackground>
        </ImageBackground>
    );
};

export default Register;
