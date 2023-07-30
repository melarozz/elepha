import React, {useState, useEffect, useCallback, FC} from 'react';
import {View, TextInput, Button, Alert, TouchableOpacity, Image, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';
import RegularText from "../components/Texts/RegularText";
import RegularButton from "../components/Buttons/RegularButton";
import {RootStackScreenProps} from "../navigators/types";
import {loadUserDataUtil} from "./utils";

const InputStyle: {
    marginTop: number,
    marginLeft: number,
    marginRight: number,
    backgroundColor: string,
    color: string,
    fontFamily: string,
} = {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    fontFamily: "TenorSans_400Regular",
};


const EditProfile: FC<RootStackScreenProps<'EditProfile'>> = ({navigation}) => {
    // const navigation = useNavigation();
    const [pic, setPic] = useState<string>("https://images.unsplash.com/photo-1526045612212-70caf35c14df");
    const [name, setName] = useState<string>('Михаил');
    const [birthDate, setBirthDate] = useState<string>('24.04.2004');
    const [gender, setGender] = useState<string>('M');
    const [weight, setWeight] = useState<string>("95");
    const [height, setHeight] = useState<string>("175");
    const [pressure, setPressure] = useState<string>('120/90');


    useEffect(() => {
        loadUserDataUtil(
            setPic,
            setName,
            setBirthDate,
            setGender,
            setWeight,
            setHeight,
            setPressure
        ).then();
    }, [
        setPic,
        setName,
        setBirthDate,
        setGender,
        setWeight,
        setHeight,
        setPressure
    ]);

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
                name,
                pic,
                birthDate,
                gender,
                weight,
                height,
                pressure,
            };
            console.log(userData)
            const userDataJSON = JSON.stringify(userData);
            await AsyncStorage.setItem('userData', userDataJSON);
            console.log(await AsyncStorage.getItem('userData'))
            navigation.navigate('Profile');
        } catch (error) {
            // Handle error, if any
        }
    }, [name, pic, birthDate, gender, weight, height, pressure]);

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
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: "100%",
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
                        <TouchableOpacity onPress={handleImageSelection}>

                            <View style={{
                                position: "absolute",
                                alignSelf: "center",
                                marginTop: 5,
                            }}>
                                <MaterialCommunityIcons name="camera" size={24} color="white"/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    marginTop: 50,
                    width: "70%",
                }}>
                    <View
                        style={{
                            borderRadius: 15,
                            backgroundColor: 'rgba(168, 168, 166, 0.3)',
                        }}
                    >
                        <TextInput
                            style={InputStyle}
                            placeholder="Имя"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />

                        <TextInput
                            style={InputStyle}
                            placeholder="Дата рождения"
                            value={birthDate}
                            onChangeText={(text) => setBirthDate(text)}
                        />

                        <TextInput
                            style={InputStyle}
                            placeholder="Пол"
                            value={gender}
                            onChangeText={(text) => setGender(text)}
                        />

                        <TextInput
                            style={InputStyle}
                            placeholder="Вес"
                            value={weight}
                            onChangeText={(text) => setWeight(text)}
                        />

                        <TextInput
                            style={InputStyle}
                            placeholder="Рост"
                            value={height}
                            onChangeText={(text) => setHeight(text)}
                        />

                        <TextInput
                            style={InputStyle}
                            placeholder="Давление"
                            value={pressure}
                            onChangeText={(text) => setPressure(text)}
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
                                width: "50%",
                                height: "15%",
                                marginTop: 20,
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <RegularButton onPress={saveUserData}>
                                <RegularText textStyles={{
                                    fontFamily: "TenorSans_400Regular",
                                    color: "white"
                                }}> Сохранить </RegularText>
                            </RegularButton>
                        </LinearGradient>
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
                                width: "50%",
                                height: "15%",
                                marginTop: 20,
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <RegularButton onPress={handleCancel}>
                                <RegularText textStyles={{
                                    fontFamily: "TenorSans_400Regular",
                                    color: "white"
                                }}> Отменить </RegularText>
                            </RegularButton>
                        </LinearGradient>
                    </View>
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default EditProfile;
