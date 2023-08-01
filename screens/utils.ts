import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadUserDataUtil(
    setPic: (string) => void,
    setName: (string) => void,
    setLastName: (string) => void,
    setBirthDate: (string) => void,
    setGender: (string) => void,
    setCompany: (string) => void,
    setWeight: (string) => void,
    setHeight: (string) => void,
    setPulse: (string) => void

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
            setPulse(userData.pulse);
            setLastName(userData.lastName);
            setCompany(userData.company);
        }
    } catch (error) {
        // Handle error, if any
    }
}
