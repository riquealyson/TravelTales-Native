import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import Home from "./pages/Home/Index";


const Nav = createBottomTabNavigator();
const Stack = createStackNavigator();

function HeaderHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: { backgroundColor: '#efefef' },
                    headerLeft: () => (
                        <TouchableOpacity
                        style = {{marginLeft: 48}}
                        onPress = {() => {

                        }}
                        >
                        <MaterialIcons name="star" size={28} color={'#E88046'} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <View style={styles.header}>
                            <Image source={require('../assets/logo.png')} style={styles.headerLogo}/>
                        </View>
                    ),
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity
                        style = {{marginRight: 48}}
                        onPress = {() => {

                        }}
                        >
                        <MaterialIcons name="nightlight" size={28} color={'#E88046'} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator >
    )
}




export default function Routes() {
    return (
        <Nav.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    borderTopWidth: 0,
                },
            }}
            initialRouteName="Home">
            <Nav.Screen name="Home" component={HeaderHome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="home-sharp" size={28} color={'#E88046'} />
                        }
                        return <Ionicons name="home-outline" size={28} color={'#8B6396'} />
                    }
                }} />

        </Nav.Navigator>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLogo:{
        width: 48,
        height: 48
    }
})