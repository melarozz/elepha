import React, {useState, useCallback} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    ImageBackground,
    Modal,
    StyleProp,
    TextStyle,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import RegularButton from "../components/Buttons/RegularButton";
import RegularText from "../components/Texts/RegularText";
import {useNavigation} from "@react-navigation/native";
import {colors} from "../components/colors";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import GenderModal from "./GenderModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createUser} from "../Api";
import {format} from "date-fns";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PulseInfo from "./PulseInfo";

const windowWidth = Dimensions.get("window").width - 100;

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
    const [pic, setPic] = useState<string>("https://images.unsplash.com/photo-1526045612212-70caf35c14df");
    const [name, setName] = useState<string>('');
    const [push1, setPush1] = useState<string>('10:30');
    const [push2, setPush2] = useState<string>('15:00');
    const [push3, setPush3] = useState<string>('20:00');
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


    const [isGenderModalVisible, setGenderModalVisible] = useState<boolean>(false);
    const [isPulseModalVisible, setPulseModalVisible] = useState<boolean>(false);
    const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);

    const saveUserData = useCallback(async () => {
        try {
            const userData = {
                pic,
                name,
                lastName,
                push1,
                push2,
                push3,
                birthDate,
                gender,
                company,
                weight,
                height,
                pulse,
                email,
                password,
                mobile,
            };
            // const userData = { // жсон с данными, который мы отправляем на бек
            //     name: 'adawdawd',
            //     lastName: 'awdawdawd',
            //     birthDate: '2003-02-30',
            //     gender: "M",
            //     company: 'awdawdaw',
            //     weight: '111',
            //     height: '111',
            //     pulse: '111',
            //     email: 'daneel3@gmail.com',
            //     password: 'awdawdawd',
            //     mobile: '+79059030557',
            //     username: 'sfdfv',
            //     pressure: '111'
            // };
            await createUser(userData);
            const userDataJSON = JSON.stringify(userData);
            await AsyncStorage.setItem('userData', userDataJSON);
            // console.log()
            await AsyncStorage.getItem('userData')
        } catch (error) {
            console.log(error);
        }
    }, [
        pic, name, lastName, push1, push2, push3, birthDate,
        gender, company, weight,
        height, pulse, mobile,
        password, email
    ]);


    const handleRegister = useCallback(async () => {
        setShowConfirmationModal(!showConfirmationModal);
        await saveUserData();
    }, [
        saveUserData,
        setShowConfirmationModal,
        showConfirmationModal
    ]);

    const handleConfirm = () => {
        setConfirmationCode('');
        navigation.navigate("Login");
    };


    const handleDatePickerConfirm = useCallback((date: Date) => {
        const formattedDate = format(date, 'dd-MM-yyyy');
        setBirthDate(formattedDate);
        setDatePickerVisible(false);
    }, []);

    const handleDatePickerCancel = useCallback(() => {
        setDatePickerVisible(false);
    }, []);


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
                                {gender ? gender : 'Пол'}
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
                                {birthDate ? birthDate : "Дата рождения"} {/* Display the selected date or the default text */}
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

                        <View style={{
                            flexDirection: "row",
                        }}>
                        <TextInput
                            style={({...inputStyle, height:30}) as StyleProp<TextStyle>}
                            placeholder="Средний пульс"
                            placeholderTextColor="white"
                            value={pulse}
                            onChangeText={setPulse}
                        />
                            <View style={{
                                justifyContent: "center",
                                marginLeft: 10,
                            }}>
                        <TouchableOpacity onPress={() => setPulseModalVisible(true)}>
                            <MaterialCommunityIcons name="information-outline" size={20} color="#FFFFFF"/>
                        </TouchableOpacity>
                            </View>
                        </View>

                        {/*onPress={() => setGenderModalVisible(true)}*/}


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

                <PulseInfo isVisible={isPulseModalVisible} setIsVisible={setPulseModalVisible}/>

            </ImageBackground>
        </ImageBackground>
    );
};

export default Register;
