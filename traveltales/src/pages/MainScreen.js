import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "../Routes";




export default function MainScreen() {
    return (
        <NavigationContainer>
            <StatusBar />
            <Routes />
        </NavigationContainer>
    );
}