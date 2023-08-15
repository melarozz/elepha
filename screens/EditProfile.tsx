import React, {useState, useEffect, useCallback, FC} from 'react';
import {
    View,
    TextInput,
    Alert,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    StyleProp,
    TextStyle,
    ViewStyle,
    Modal, Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import RegularText from '../components/Texts/RegularText';
import RegularButton from '../components/Buttons/RegularButton';
import {RootStackScreenProps} from '../navigators/types';
import {loadUserDataUtil} from './utils';
import {CSSProp} from 'styled-components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';
import GenderModal from "../components/Modals/GenderModal";
import {colors} from "../components/colors";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const totalStyles: CSSProp = {fontFamily: "TenorSans_400Regular"};
const rowStyle: CSSProp = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
};
const personalDataText: { fontFamily: string; color: string; fontSize: number } = {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "TenorSans_400Regular",
};

const personalDataInput: {
    paddingHorizontal: number,
    fontFamily: string;
    color: string;
    fontSize: number,
    backgroundColor: string,
    borderRadius: number
} = {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "TenorSans_400Regular",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 15,
};

const grayBoxLine: {
    alignItems: string;
    flexDirection: string;
    marginBottom: number;
    justifyContent: string
} = {flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10};
const grayBoxText: { fontFamily: string; color: string; fontSize: number; fontWeight: string } = {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "TenorSans_400Regular"
};


const EditProfile: FC<RootStackScreenProps<'EditProfile'>> = ({navigation}) => {

    const [pic, setPic] = useState<string>("https://images.unsplash.com/photo-1526045612212-70caf35c14df");
    const [name, setName] = useState<string>('Михаил');
    const [birthDate, setBirthDate] = useState<string>('24.04.2004');
    const [gender, setGender] = useState<string>('M');
    const [weight, setWeight] = useState<string>("95");
    const [height, setHeight] = useState<string>("175");
    const [lastName, setLastName] = useState<string>('Иванов');
    const [company, setCompany] = useState<string>('Название компании');
    const [pulse, setPulse] = useState<string>('80');
    const [push1, setPush1] = useState<string>('10:30');
    const [push2, setPush2] = useState<string>('15:00');
    const [push3, setPush3] = useState<string>('20:00');

    const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);
    const [isPush1TimePickerVisible, setPush1TimePickerVisible] = useState<boolean>(false);
    const [isPush2TimePickerVisible, setPush2TimePickerVisible] = useState<boolean>(false);
    const [isPush3TimePickerVisible, setPush3TimePickerVisible] = useState<boolean>(false);
    const [isGenderModalVisible, setGenderModalVisible] = useState<boolean>(false);


    useEffect(() => {
        loadUserDataUtil(
            setPic,
            setName,
            setLastName,
            setPush1,
            setPush2,
            setPush3,
            setBirthDate,
            setGender,
            setCompany,
            setWeight,
            setHeight,
            setPulse
        ).then();
    }, [
        setPic,
        setName,
        setLastName,
        setPush1,
        setPush2,
        setPush3,
        setBirthDate,
        setGender,
        setCompany,
        setWeight,
        setHeight,
        setPulse
    ]);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };


    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const showTimePicker = useCallback((item: string) => {
        if (item === 'push1') {
            setPush1TimePickerVisible(true);
        } else if (item === 'push2') {
            setPush2TimePickerVisible(true);
        } else if (item === 'push3') {
            setPush3TimePickerVisible(true);
        }
    }, []);

    const hideTimePicker = useCallback((item: string) => {
        if (item === 'push1') {
            setPush1TimePickerVisible(false);
        } else if (item === 'push2') {
            setPush2TimePickerVisible(false);
        } else if (item === 'push3') {
            setPush3TimePickerVisible(false);
        }
    }, []);


    const handleDatePicker = useCallback((date: Date) => {
        const formattedDate = format(date, 'yyyy-MM-dd');
        setBirthDate(formattedDate);
        hideDatePicker();
    }, []);

    const handleTimePicker = useCallback((time: Date, item: String) => {
        const formattedTime = format(time, 'HH:mm');
        if (item === 'push1') {
            setPush1(formattedTime);
            hideTimePicker('push1');
        } else if (item === 'push2') {
            setPush2(formattedTime);
            hideTimePicker('push2');
        } else if (item === 'push3') {
            setPush3(formattedTime);
            hideTimePicker('push3');
        }

    }, []);


    const toggleGenderModal = () => {
        setGenderModalVisible(!isGenderModalVisible);
    }


    const handleImageSelection = useCallback(async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            if (result.assets) {
                setPic(result.assets[0].uri);
            }
        }

    }, []);


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
            };
            console.log(userData)

            const userDataJSON = JSON.stringify(userData);
            await AsyncStorage.setItem('userData', userDataJSON);
            console.log(await AsyncStorage.getItem('userData'))
            navigation.navigate('Profile');
        } catch (error) {
            // Handle error, if any
        }
    }, [pic, name, lastName, push1, push2, push3, birthDate, gender, company, weight, height, pulse]);

    const handleCancel = useCallback(() => {
        Alert.alert(
            "Вы уверены?",
            "Изменения не будут сохранены",
            [
                {
                    text: "Нет, вернуться",
                    style: "cancel",
                    onPress: () => {
                    }
                },
                {
                    text: "Да, уйти",
                    onPress: () => {
                        navigation.navigate('Profile');
                    }
                }
            ],
            {cancelable: false}
        );
    }, []);

    return (


        <ImageBackground source={require('../assets/bgs/bg2.png')}
                         style={{
                             backgroundColor: colors.secondary,
                             justifyContent: "flex-start",
                             width: "100%",
                             height: "100%"
                         }}>
            <View style={{
                backgroundColor: 'rgba(14, 83, 80, 0.4)',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}>
            </View>

            <ScrollView style={{
                flex: 1,
                padding: 20,
            }}>


                {/*user info*/}
                <View style={{
                    flexDirection: "column",
                    marginTop: 50,
                }}
                >
                    <View>
                        <Image
                            source={{uri: pic}}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 8,
                                marginRight: "auto",
                                marginLeft: "auto",
                            }}
                        />


                            <View style={{
                                alignSelf: "center",
                                marginTop: 5,
                            }}>
                                <TouchableOpacity onPress={handleImageSelection}>
                                <MaterialCommunityIcons name="camera" size={24} color="white"/>
                                </TouchableOpacity>
                            </View>

                    </View>

                    <View style={{
                        flex: 1,

                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                    }}>
                        <RegularText textStyles={({
                            fontSize: 18,
                            color: "#FFFFFF",
                            marginRight: 5,
                            marginTop: 10,
                            ...totalStyles
                        } as unknown) as StyleProp<TextStyle>}>Имя</RegularText>

                    </View>

                    <View style={{
                        justifyContent: 'center',
                        flex: 1,
                        alignItems: "flex-start",
                        height: 30,
                        backgroundColor: "rgba(168, 168, 166, 0.3)",
                        borderRadius: 15,
                        marginTop: 5,

                    }}>
                        <TextInput
                            style={{...personalDataInput, marginLeft: 10}}
                            placeholder="Имя"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />

                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <RegularText textStyles={({
                            fontSize: 18,
                            color: "#FFFFFF",
                            marginRight: 5,
                            marginTop: 10,
                            ...totalStyles
                        } as unknown) as StyleProp<TextStyle>}>Фамилия</RegularText>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        flex: 1,
                        alignItems: "flex-start",
                        backgroundColor: "rgba(168, 168, 166, 0.3)",
                        height: 30,
                        borderRadius: 15,
                        marginTop: 5,
                    }}>
                        <TextInput
                            style={{...personalDataInput, marginLeft: 10}}
                            placeholder="Фамилия"
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        />

                    </View>

                    {/*

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <MaterialCommunityIcons name="bell" size={20} color="#FFFFFF"/>
                            <RegularText textStyles={({
                                fontSize: 16,
                                color: "#FFFFFF",
                                ...totalStyles
                            } as unknown) as StyleProp<TextStyle>}>Напоминания замеров</RegularText>
                        </View>

                    </View>


                    <View style={{
                        backgroundColor: "rgba(168, 168, 166, 0.3)",
                        borderRadius: 15,
                        marginTop: 5,
                        padding: 10,
                    }}>
                        <View style={(grayBoxLine) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>Утро</RegularText>
                            <TouchableOpacity onPress={() => showTimePicker('push1')}>
                                <View style={personalDataInput}>
                                    <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>
                                        {push1}
                                    </RegularText>
                                </View>
                            </TouchableOpacity>

                            <DateTimePickerModal
                                isVisible={isPush1TimePickerVisible}
                                mode="time"
                                is24Hour={true}
                                onConfirm={(time) => handleTimePicker(time, 'push1')}
                                onCancel={() => hideTimePicker('push1')}
                            />
                        </View>

                        <View style={(grayBoxLine) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>День</RegularText>
                            <TouchableOpacity onPress={() => showTimePicker('push2')}>
                                <View style={personalDataInput}>
                                    <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>
                                        {push2}
                                    </RegularText>
                                </View>
                            </TouchableOpacity>

                            <DateTimePickerModal
                                isVisible={isPush2TimePickerVisible}
                                mode="time"
                                is24Hour={true}
                                onConfirm={(time) => handleTimePicker(time, 'push2')}
                                onCancel={() => hideTimePicker('push2')}
                            />
                        </View>

                        <View style={(grayBoxLine) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>Вечер</RegularText>
                            <TouchableOpacity onPress={() => showTimePicker('push3')}>
                                <View style={personalDataInput}>
                                    <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>
                                        {push3}
                                    </RegularText>
                                </View>
                            </TouchableOpacity>

                            <DateTimePickerModal
                                isVisible={isPush3TimePickerVisible}
                                mode="time"
                                is24Hour={true}
                                onConfirm={(time) => handleTimePicker(time, 'push3')}
                                onCancel={() => hideTimePicker('push3')}
                            />
                        </View>
                    </View>*/}
                </View>

                {/*detailed user info*/}
                <View style={{marginVertical: 10}}>
                    <RegularText textStyles={{
                        fontSize: 20,
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        fontFamily: "TenorSans_400Regular",
                    }}>Личные данные</RegularText>
                    <View style={{
                        backgroundColor: "rgba(168, 168, 166, 0.3)",
                        borderRadius: 15,
                        marginTop: 5,
                        padding: 10,
                    }}>
                        <View>
                            <View style={(rowStyle) as StyleProp<ViewStyle>}>
                                <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Дата
                                    рождения</RegularText>
                                <TouchableOpacity onPress={showDatePicker}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: "rgba(255,255,255,0.2)",
                                        borderRadius: 15,
                                        paddingHorizontal: 10,
                                    }}>
                                        <RegularText
                                            textStyles={(personalDataText) as StyleProp<ViewStyle>}>{birthDate}</RegularText>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleDatePicker}
                                onCancel={hideDatePicker}
                            />
                        </View>


                        <View style={(rowStyle) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Пол</RegularText>
                            <TouchableOpacity onPress={toggleGenderModal}>
                                <View style={personalDataInput}>
                                    <RegularText
                                        textStyles={(personalDataText) as StyleProp<ViewStyle>}>{gender === 'M' ? 'Мужской' : 'Женский'}</RegularText>
                                </View>
                            </TouchableOpacity>
                        </View>


                        {/*<View style={(rowStyle) as StyleProp<ViewStyle>}>*/}
                        {/*    <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Компания</RegularText>*/}
                        {/*    <TextInput*/}
                        {/*        style={personalDataInput}*/}
                        {/*        placeholder="Компания"*/}
                        {/*        value={company}*/}
                        {/*        onChangeText={(text) => setCompany(text)}*/}
                        {/*    />*/}

                        {/*</View>*/}

                        <View style={(rowStyle) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Вес</RegularText>
                            <TextInput
                                style={personalDataInput}
                                placeholder="Вес"
                                value={weight}
                                onChangeText={(text) => setWeight(text)}
                            />

                        </View>

                        <View style={(rowStyle) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Рост</RegularText>
                            <TextInput
                                style={personalDataInput}
                                placeholder="Рост"
                                value={height}
                                onChangeText={(text) => setHeight(text)}
                            />

                        </View>

                        <View style={(rowStyle) as StyleProp<ViewStyle>}>
                            <RegularText
                                textStyles={(personalDataText) as StyleProp<ViewStyle>}>Средний пульс</RegularText>
                            <TextInput
                                style={personalDataInput}
                                placeholder="Средний пульс"
                                value={pulse}
                                onChangeText={(text) => setPulse(text)}
                            />
                        </View>
                    </View>

                    <View style={{
                        marginVertical: 10,
                        height: 100,
                        justifyContent: "flex-start",
                        alignItems: "center"

                    }}>
                        <View
                            style={{
                                width: "100%",
                                height: 35,
                                marginTop: 10,
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "rgba(168, 168, 166, 0.3)",
                            }}
                        >
                            <RegularButton onPress={saveUserData}>
                                <RegularText textStyles={{
                                    fontFamily: "TenorSans_400Regular",
                                    color: "white"
                                }}> Сохранить </RegularText>
                            </RegularButton>
                        </View>

                        <View
                            style={{
                                width: "100%",
                                height: 35,
                                marginTop: 10,
                                marginHorizontal: "auto",
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "rgba(168, 168, 166, 0.3)",
                                marginBottom: windowHeight*0.1,
                            }}
                        >
                            <RegularButton onPress={handleCancel}>
                                <RegularText textStyles={{
                                    fontFamily: "TenorSans_400Regular",
                                    color: "white"
                                }}> Отменить </RegularText>
                            </RegularButton>

                        </View>


                    </View>

                </View>
            </ScrollView>

            <GenderModal
                isVisible={isGenderModalVisible}
                onFemalePress={() => {
                    setGender('F');
                    setGenderModalVisible(false);
                }}
                onMalePress={() => {
                    setGender('M');
                    setGenderModalVisible(false);
                }}
            />

        </ImageBackground>


    );
};

export default EditProfile;
