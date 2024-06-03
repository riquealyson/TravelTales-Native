import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import PostCard from '../../components/postCard'


export default function Home() {
    const posts = [
        {profileImg: require('@/assets/splash.png'), profileNome: 'Hannah Baker', postImg: require('@/assets/splash.png')},
        {profileImg: require('@/assets/splash.png'), profileNome: 'Hannah Baker', postImg: require('@/assets/splash.png')},
        {profileImg: require('@/assets/splash.png'), profileNome: 'Hannah Baker', postImg: require('@/assets/splash.png')},
    ]
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.pesquisar}>
                <MaterialIcons name='search' size={32} />
                <Text style={styles.pesquisa}>Pesquisa</Text>
            </View>
            <ScrollView>
                <PostCard posts={posts} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 16
    },
    pesquisar: {

        flexDirection: 'row',
        marginTop: '5%',
        marginHorizontal: '2%',
        paddingTop: '5%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    pesquisa: {
        paddingLeft: 10,
        fontSize: 18
    }
})