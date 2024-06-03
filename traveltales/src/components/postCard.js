import React from "react";
import { useState, useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function PostCard({ posts }) {
    const [postsData, setPosts] = useState([]);

    useEffect(() => {
        setPosts(posts);
    }, [posts]);
    return (
        <SafeAreaView>
            {postsData &&
                postsData.map((p, i) => (
                    <View style={styles.container} key={i}>
                        <Image source={p.profileImg} style={styles.perfilFoto} />
                        <Text style={styles.perfilNome}>{p.profileNome}</Text>
                        <MaterialIcons name="bookmark" size={24} />
                        <Image source={p.postImg} style={styles.perfilPost} />
                    </View>
                ))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    perfilNome: {
        flex: 1,
        color: '#e88046',
        fontSize: 20,
    },
    perfilFoto: {
        width: 35,
        height: 40
    },
    perfilPost: {
        width: 400,
        height: 350
    }
})