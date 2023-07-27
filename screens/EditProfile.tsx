import React, {useState, useEffect, useCallback} from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditProfile = () => {
    const navigation = useNavigation();
    const [name, setName] = useState<string>('Михаил');
    const [birthDate, setBirthDate] = useState<string>('24.04.2004');
    const [gender, setGender] = useState<string>('M');
    const [weight, setWeight] = useState<string>("95");
    const [height, setHeight] = useState<string>("175");
    const [pressure, setPressure] = useState<string>('120/90');


    useEffect(() => {
        loadUserData();
    }, []);
    const loadUserData = async () => {
        try {
            const userDataJSON = await AsyncStorage.getItem('userData');
            if (userDataJSON !== null) {
                const userData = JSON.parse(userDataJSON);
                setName(userData.name);
                setBirthDate(userData.birthDate);
                setGender(userData.gender);
                setWeight(userData.weight);
                setHeight(userData.height);
                setPressure(userData.pressure);
            }
        } catch (error) {
            // Handle error, if any
        }
    };


    const saveUserData = async () => {
        try {
            const userData = {
                name,
                birthDate,
                gender,
                weight,
                height,
                pressure,
                // Add other user data properties here if needed
            };

            const userDataJSON = JSON.stringify(userData);
            await AsyncStorage.setItem('userData', userDataJSON);

            // Once the data is saved, you can navigate back to the UserDataScreen
            navigation.navigate('Profile');
        } catch (error) {
            // Handle error, if any
        }
    };

    const handleCancel = () => {
        Alert.alert(
            "Вы уверены?",
            "Изменения не будут сохранены",
            [
                {
                    text: "Нет, вернуться",
                    style: "cancel",
                    onPress: () => {}
                },
                {
                    text: "Да, сохранить",
                    onPress: () => {
                        loadUserData();
                        navigation.navigate('Profile');
                    }
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View
            style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(109, 147, 149, 1)',
            }}
        >
            <View
                style={{
                    marginTop: '25%',
                    borderRadius: 15,
                    width: '70%',
                    backgroundColor: 'white',
                }}
            >
                <TextInput
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'rgba(150, 202, 200, 0.3)',
                    }}
                    placeholder="Имя"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <TextInput
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'rgba(150, 202, 200, 0.3)',
                    }}
                    placeholder="Дата рождения"
                    value={birthDate}
                    onChangeText={(text) => setBirthDate(text)}
                />

                <TextInput
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'rgba(150, 202, 200, 0.3)',
                    }}
                    placeholder="Пол"
                    value={gender}
                    onChangeText={(text) => setGender(text)}
                />

                <TextInput
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'rgba(150, 202, 200, 0.3)',
                    }}
                    placeholder="Вес"
                    value={weight}
                    onChangeText={(text) => setWeight(text)}
                />

                <TextInput
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'rgba(150, 202, 200, 0.3)',
                    }}
                    placeholder="Рост"
                    value={height}
                    onChangeText={(text) => setHeight(text)}
                />

                <TextInput
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'rgba(150, 202, 200, 0.3)',
                    }}
                    placeholder="Давление"
                    value={pressure}
                    onChangeText={(text) => setPressure(text)}
                />

                <Button title="Сохранить" onPress={saveUserData} />
                <Button title="Отменить" onPress={handleCancel} />
            </View>
        </View>
    );
};

export default EditProfile;
