import React from 'react';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import RootStack from "./navigators/RootStack"; 
import Rec from "./screens/Rec";
import Welcome from "./screens/Welcome";

export default function App() {
  
  let [fontsLoaded] = useFonts({
    "TenorSans-Regular": require("./assets/fonts/TenorSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <RootStack/>
  );
};
