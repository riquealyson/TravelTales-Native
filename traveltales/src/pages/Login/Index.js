import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Login({ navigation }) {

    const handleLogin = () => {

    }

    const handleOpenModal = () => {
        navigation.navigate('Cadastro')
    };

    return (
        <LinearGradient
            colors={['#e98046', '#f09851', '#f29e53', '#fcb861', '#ced5b3', '#bcdecf', '#a2d6c4', '#b5e1d2']}
            style={styles.container}
        >

            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo} resizeMode="contain"/>
            </View>
            <View style={styles.loginContainer}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="gray"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="gray"
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Não tem uma conta ainda?</Text>
                    <TouchableOpacity onPress={handleOpenModal}>
                        <Text style={styles.signupLink}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        marginTop: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '60%',
    },
    loginContainer: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 10,
        color: 'grey',
        backgroundColor: 'transparent',
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: 50,
        marginVertical: 20,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: '#FFFDFC',
    },
    loginButtonText: {
        color: 'black',
    },
    signupContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        color: '#FEFEFE',
    },
    signupText: {
        color: '#FEFEFE',
        marginBottom: 10,
    },
    signupLink: {
        color: '#FEFEFE',
        fontWeight: 'bold',
    },
});
