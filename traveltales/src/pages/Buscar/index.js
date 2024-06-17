import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Buscar(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.pesquisar}>
                <MaterialIcons name='search' size={32} color={'#E88046'}/>
                <Text style={styles.pesquisa}>Pesquisa</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 0,
        backgroundColor: '#FFFDFC',
        alignItems: 'center'
    },
    pesquisar: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 24,
        marginBottom: 32,
        padding: '2%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        borderRadius: 12
    },
    pesquisa: {
        paddingLeft: 10,
        fontSize: 18
    }
})