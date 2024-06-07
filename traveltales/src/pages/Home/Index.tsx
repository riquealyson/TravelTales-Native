import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import PostCard from '../../components/postCard'

const { width: screenWidth } = Dimensions.get('window');



export default function Home() {
    const posts = [
        {profileImg: require('@/assets/perfil1.png'), profileNome: 'Hannah Baker', postImg: require('@/assets/postImg1.png')},
        {profileImg: require('@/assets/perfil2.png'), profileNome: 'Caleb Vitor', postImg: require('@/assets/postImg2.png')},
        {profileImg: require('@/assets/perfil3.png'), profileNome: 'Vitor Chaves', postImg: require('@/assets/postImg3.png')},
        {profileImg: require('@/assets/perfil4.png'), profileNome: 'Cintia Paula', postImg: require('@/assets/postImg4.png')},
    ]
    
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.pesquisar}>
                <MaterialIcons name='search' size={32} color={'#E88046'}/>
                <Text style={styles.pesquisa}>Pesquisa</Text>
            </View>
            <ScrollView style={styles.scroll}>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    pesquisar: {
        flexDirection: 'row',
        width: screenWidth * 0.8,
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
    },
    scroll: {
        width: '90%'
    }
})