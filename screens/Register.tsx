import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RegularButton from "../components/Buttons/RegularButton";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import { useNavigation } from "@react-navigation/native";

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile Number:', mobile);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    setShowConfirmationModal(true);
    
  };
   const handleConfirm = () => {
    // Perform any necessary confirmation code validation here
    // For demonstration purposes, we'll just close the modal and navigate back to "Welcome"
    setShowConfirmationModal(false);
    setConfirmationCode('');

    navigation.navigate("Login");
  };


  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./../assets/bgs/back1.png')}
      style={styles.backgroundImage}
    >
      <ImageBackground
        source={require('./../assets/bgs/bg2.png')}
        style={styles.overlay}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={styles.container}>
          <View style={styles.greenContainer}>
            <RegularText style={styles.title}>Регистрация</RegularText>
            <TextInput
              style={styles.input}
              placeholder="Имя"
              placeholderTextColor="white"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Мобильный номер"
              placeholderTextColor="white"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="white"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
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
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
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
                }}
                onPress={handleRegister}
              >
                Зарегистрироваться
              </RegularButton>
            </LinearGradient>
            <View style={styles.buttonContainer}>
              <RegularButton
                textStyles={{
                  fontSize: 18,
                  textAlign: "center",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                  marginTop: 30,
                }}
                onPress={() => navigation.navigate("Login")}
              >
                Уже есть аккаунт?
              </RegularButton>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Confirmation Code Modal */}
      <Modal visible={showConfirmationModal} animationType="fade">
      <ImageBackground source={require('./../assets/bgs/back1.png')}
      style={styles.backgroundImage}>
      <ImageBackground
        source={require('./../assets/bgs/bg2.png')}
        style={styles.overlay}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={styles.modalContainer}>
          <RegularText style={styles.title}>Введите код подтверждения</RegularText>
              <TextInput
                style={styles.input}
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
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
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
                textStyles={styles.buttonText}
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
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenContainer: {
    backgroundColor: 'rgba(195, 195, 193, 0.3)', // Green container with 20% opacity
    borderRadius: 15,
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default Register;
