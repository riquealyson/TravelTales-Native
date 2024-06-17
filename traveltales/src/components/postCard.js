import React from "react";
import { useState, useEffect } from "react";
import {TouchableOpacity, Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');
const aspectRatio = 350 / 358;

export default function PostCard({ posts }) {
    const [postsData, setPosts] = useState([]);

    useEffect(() => {
        setPosts(posts);
    }, [posts]);
    
    return (
        <View>
            {postsData &&
                postsData.map((p, i) => (
                    <View style={styles.container} key={i}>
                        <View style={styles.containerHeader}>
                            <Image source={p.profileImg} style={styles.perfilFoto} />
                            <Text style={styles.perfilNome}>{p.profileNome}</Text>
                            <TouchableOpacity 
                                onPress={() => {
                                    

                                }}>

                                <MaterialIcons
                                    name={screenWidth > 500 ? "bookmark-outline" : "bookmark-outline"}
                                    size={screenWidth > 500 ? 48 : 32}
                                    color={'#E88046'} />
                            </TouchableOpacity>
                        </View>
                        <Image source={p.postImg} style={styles.perfilPost} />
                    </View>
                ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        marginBottom: 32,
        flex: 1,
        alignItems: 'center',

    },
    containerHeader: {
        width: screenWidth * 0.8,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#EFEFEF',
        borderTopStartRadius: 18,
        borderTopEndRadius: 18
    },
    perfilNome: {
        flex: 1,
        color: '#e88046',
        fontSize: 20,
    },
    perfilFoto: {
        width: 40,
        height: 40,
        marginRight: 16
    },
    perfilPost: {
        width: screenWidth * 0.8,
        height: (screenWidth * 0.8) / aspectRatio,
        resizeMode: 'contain'
    }
})