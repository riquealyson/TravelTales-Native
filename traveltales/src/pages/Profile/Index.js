import React from "react";
import { TouchableOpacity, StatusBar, Image, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Profile() {
    const nomeUser = 'userName'
    const emailUser = 'userEmail'

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <Image source={require('../../../assets/persona.png')} style={styles.imagem} />
            <Text style={styles.titulo}> Meu perfil </Text>
            <View style={styles.dados}>
                <View style={styles.linha}>
                    <MaterialIcons name="person" size={32} color={'#A5D7C6'}/>
                    <Text style={styles.texto}> Meus dados</Text>
                </View>
                <Text style={styles.texto1}>Nome</Text>
                <Text style={styles.dado} >{nomeUser}</Text>
                <Text style={styles.texto1}>Email</Text>
                <Text style={styles.dado}>{emailUser}</Text>
                <TouchableOpacity style={styles.linha}>
                    <MaterialIcons name="exit-to-app" size={32} color={'#A5D7C6'}/>
                    <Text style={styles.texto}> Deslogar </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 0,
        backgroundColor: '#FFFDFC',
        justifyContent: 'top',
        alignItems: 'center'
    },
    imagem: {
        width: '50%',
        aspectRatio: 1 / 1,
        margin: '10%'
    },
    titulo: {
        fontSize: 30,
        fontWeight: '500'
    }, 
    dados: {
        width: '80%',
        gap: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: '8%'
    },
    linha:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '10%'
    },
    texto:{
        fontSize: 24
    },
    texto1:{
        fontSize: 24,
    },
    dado: {
        fontSize: 18,
        color: '#787373'
    }
})