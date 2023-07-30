import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadUserDataUtil(
    setPic: (string) => void,
    setName: (string) => void,
    setBirthDate: (string) => void,
    setGender: (string) => void,
    setWeight: (string) => void,
    setHeight: (number) => void,
    setPressure: (string) => void
) {
    try {
        const userDataJSON = await AsyncStorage.getItem('userData');
        if (userDataJSON !== null) {
            const userData = JSON.parse(userDataJSON);
            setPic(userData.pic);
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
}
