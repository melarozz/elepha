import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadUserDataUtil(
    setPic: (string) => void,
    setName: (string) => void,
    setLastName: (string) => void,
    setPush1: (string) => void,
    setPush2: (string) => void,
    setPush3: (string) => void,
    setBirthDate: (string) => void,
    setGender: (string) => void,
    setCompany: (string) => void,
    setWeight: (string) => void,
    setHeight: (string) => void,
    setPulse: (string) => void,
    setUsername: (string) => void,
    setEmail: (string) => void,
    setPassword: (string) => void,
) {
    try {
        const userDataJSON = await AsyncStorage.getItem('userData');
        console.log("loadutil", userDataJSON);
        if (userDataJSON !== null) {
            const userData = JSON.parse(userDataJSON);
            setPic(userData.pic);
            setName(userData.name);
            setLastName(userData.lastName);
            setPush1(userData.push1);
            setPush2(userData.push2);
            setPush3(userData.push3);
            setBirthDate(userData.birthDate);
            setGender(userData.gender);
            setCompany(userData.company);
            setWeight(userData.weight);
            setHeight(userData.height);
            setPulse(userData.pulse);
            setUsername(userData.username);
            setEmail(userData.email);
            setPassword(userData.password);
        }
    } catch (error) {
        // Handle error, if any
    }
}

