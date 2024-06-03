import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';


import Home from "./pages/Home/Index";


const Nav = createBottomTabNavigator();

export default function Routes() {
    return (
        <Nav.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: "8%",
                    borderTopWidth: 0,
                }
            }}
            initialRouteName="Home">
            <Nav.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <MaterialIcons name="home" size={28} color={'#1E1E1E'} />
                        }
                        return <MaterialIcons name="home" size={28} color={'#8B6396'} />
                    }
                }} />

        </Nav.Navigator>
    )
}