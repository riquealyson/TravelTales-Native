import React from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";


import PostCard from "../../components/postCard";

const posts = [
    { profileImg: require('@/assets/perfil1.png'), profileNome: 'Hannah Baker', postImg: require('@/assets/postImg1.png') },
    { profileImg: require('@/assets/perfil2.png'), profileNome: 'Caleb Vitor', postImg: require('@/assets/postImg2.png') }
]

export default function Salvos() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>
                Lugares salvos
            </Text>
            <ScrollView>
                <PostCard posts={posts} />
            </ScrollView>

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
    titulo: {
        backgroundColor: '#E88046',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 24,
        marginBottom: 32

    }
})