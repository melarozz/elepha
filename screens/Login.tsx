import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RegularButton from "../components/Buttons/RegularButton";
import Register from "./Register";
import Welcome from "./Welcome";
import Reset from "./Reset";
import { useNavigation } from "@react-navigation/native";

import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(true);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handlePasswordChange = (text: any[]|React.SetStateAction<string>) => {
    setPassword(text);
    setShowForgotPassword(text.length === 0);
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
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="white"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
              />
              {showForgotPassword && (
                <RegularButton
                  textStyles={{
                    fontSize: 18,
                    textAlign: "center",
                    color: "#FFFFFF",
                    backgroundColor: "transparent",
                  }}
                  onPress={() => navigation.navigate("Reset")}
                >
                  Забыли пароль?
                </RegularButton>
              )}
            </View>

            
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
                onPress={() => navigation.navigate("Welcome")}
              >
                Войти
              </RegularButton>
              </LinearGradient>
            

            <RegularButton
              textStyles={{
                fontSize: 18,
                textAlign: "center",
                color: "#FFFFFF",
                backgroundColor: "transparent",
                marginTop: 30,
              }}
              onPress={() => navigation.navigate("Register")}
            >
              Регистрация
            </RegularButton>
          </View>
        </View>
      </ImageBackground>
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
    backgroundColor: 'rgba(195, 195, 193, 0.3)',
    borderRadius: 15,
    padding: 20,
    width: "100%",
    height: "40%",
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
  passwordContainer: {
    position: "relative",
  },
  
});

export default Login;
