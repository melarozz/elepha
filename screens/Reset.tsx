import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import RegularButton from "../components/Buttons/RegularButton";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";

const Reset: React.FC = () => {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isConfirmationCodeRequested, setIsConfirmationCodeRequested] = useState(false);

  const handleRequestConfirmationCode = () => {
    
    setIsConfirmationCodeRequested(true);
    
  };

  const handleConfirm = () => {
    setIsConfirmationCodeRequested(false);
    setEmail('');
    setConfirmationCode('');
    navigation.navigate("Login");

  };

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
          {isConfirmationCodeRequested ? (
            <>
              <RegularText style={styles.title}>Введите код подтверждения</RegularText>
              <TextInput
                style={styles.input}
                placeholder="Код"
                placeholderTextColor="white"
                value={confirmationCode}
                onChangeText={setConfirmationCode}
                keyboardType="numeric"
              />
              <View style={styles.container2}>
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
                height: "45%",
                
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 15,
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
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="white"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View style={styles.container2}>
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
                height: "40%",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 15,
              }}
            >
              <RegularButton
                textStyles={styles.buttonText}
                onPress={handleRequestConfirmationCode}
              >
                Сбросить
              </RegularButton>
              </LinearGradient>
              </View>
            </>
          )}
        </View>
      </View>
    </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  greenContainer: {
    backgroundColor: 'rgba(195, 195, 193, 0.3)',
    borderRadius: 15,
    padding: 20,
    width: "100%",
    height: "30%",
    
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
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFFFFF",
    backgroundColor: "transparent",
    padding: 15,
  },
  container2: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  }
});

export default Reset;
