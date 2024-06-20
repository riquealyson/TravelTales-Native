import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import Home from "./pages/Home/Index";
import Salvos from "./pages/Salvos";
import Profile from "./pages/Profile/Index";
import Buscar from "./pages/Buscar";



const Nav = createBottomTabNavigator();
const Stack = createStackNavigator();

function HeaderHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeHeader"
                component={Home}
                options={{
                    headerStyle: { backgroundColor: '#efefef' },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 48 }}
                            onPress={() => {

                            }}
                        >
                            <MaterialIcons name="star" size={28} color={'#E88046'} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <View style={styles.header}>
                            <Image source={require('../assets/logo.png')} style={styles.headerLogo} />
                        </View>
                    ),
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 48 }}
                            onPress={() => {

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
function HeaderSalvos() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SalvosHeader"
                component={Salvos}
                options={{
                    headerStyle: { backgroundColor: '#efefef' },
                    headerTitle: () => (
                        <View style={styles.header}>
                            <Image source={require('../assets/logo.png')} style={styles.headerLogo} />
                        </View>
                    ),
                    headerTitleAlign: 'left',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 48 }}
                            onPress={() => {

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
function HeaderBuscar() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BuscarHeader"
                component={Buscar}
                options={{
                    headerStyle: { backgroundColor: '#efefef' },
                    headerTitle: () => (
                        <View style={styles.header}>
                            <Image source={require('../assets/logo.png')} style={styles.headerLogo} />
                        </View>
                    ),
                    headerTitleAlign: 'left',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 48 }}
                            onPress={() => {

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
                    paddingBottom: 8,
                    paddingTop: 8
                },
            }}
            initialRouteName="Home">
            <Nav.Screen name="Home" component={HeaderHome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        textAlignVertical: "top",
                        fontSize: 14,
                        color: '#E88046',
                    },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="home-sharp" size={28} color={'#E88046'} />
                        }
                        return <Ionicons name="home-outline" size={28} color={'#E88046'} />
                    }
                }} />
            <Nav.Screen name="Salvos" component={HeaderSalvos}
                options={{
                    tabBarLabel: 'Salvos',
                    tabBarLabelStyle: {
                        textAlignVertical: "top",
                        fontSize: 14,
                        color: '#E88046',
                    },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="bookmark" size={28} color={'#E88046'} />
                        }
                        return <Ionicons name="bookmark-outline" size={28} color={'#E88046'} />
                    }
                }} />
            <Nav.Screen name="Buscar" component={HeaderBuscar}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarLabelStyle: {
                        textAlignVertical: "top",
                        fontSize: 14,
                        color: '#E88046',
                    },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="search-circle" size={28} color={'#E88046'} />
                        }
                        return <Ionicons name="search" size={28} color={'#E88046'} />
                    }
                }} />
            <Nav.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarLabelStyle: {
                        textAlignVertical: "top",
                        fontSize: 14,
                        color: '#E88046',
                    },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="person" size={28} color={'#E88046'} />
                        }
                        return <Ionicons name="person-outline" size={28} color={'#E88046'} />
                    }
                }}
            />


        </Nav.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 38
    },
    headerLogo: {
        width: 48,
        height: 48
    }
})