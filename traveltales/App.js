import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";
import { SafeAreaView } from "react-native";



export default function App() {
  return (
    
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    
  );
}


