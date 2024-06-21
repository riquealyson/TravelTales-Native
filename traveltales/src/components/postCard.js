import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: screenWidth } = Dimensions.get('window');
const aspectRatio = 350 / 358;

export default function PostCard({ posts }) {
    const [postsData, setPosts] = useState([]);

    useEffect(() => {
        setPosts(posts);
    }, [posts]);

    const handleSalvarPost = async (post) => {
        try {
            const userString = await AsyncStorage.getItem('user');
            if (!userString) {
                Alert.alert('Usuário não encontrado');
                return;
            }
            const user = JSON.parse(userString);

            const data = {
                cod: post.cod.toString(),
                user_id: user.nome,
                profileImg: post.profileImg,
                profileNome: post.profileNome,
                postImg: post.postImg,
            };

            const response = await fetch("http://192.168.0.111:3001/salvarPost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Erro ao salvar o post: ${response.status}`);
            }

            // Atualiza o estado do post como salvo
            const updatedPosts = postsData.map(p => {
                if (p.cod === post.cod) {
                    return { ...p, saved: true };
                }
                return p;
            });
            setPosts(updatedPosts);

        } catch (error) {
            console.error("Erro ao salvar o post:", error);
            Alert.alert("Erro ao salvar o post, tente novamente mais tarde.");
        }
    };

    return (
        <View>
            {postsData.map((p, i) => (
                <View style={styles.container} key={i}>
                    <View style={styles.containerHeader}>
                        <Image source={p.profileImg} style={styles.perfilFoto} />
                        <Text style={styles.perfilNome}>{p.profileNome}</Text>
                        <TouchableOpacity onPress={() => handleSalvarPost(p)}>
                            <MaterialIcons
                                name={p.saved ? "bookmark" : "bookmark-outline"}
                                size={screenWidth > 500 ? 48 : 32}
                                color={p.saved ? '#FFA500' : '#E88046'} />
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
        borderTopEndRadius: 18,
    },
    perfilNome: {
        flex: 1,
        color: '#e88046',
        fontSize: 20,
    },
    perfilFoto: {
        width: 40,
        height: 40,
        marginRight: 16,
    },
    perfilPost: {
        width: screenWidth * 0.8,
        height: (screenWidth * 0.8) / aspectRatio,
        resizeMode: 'contain',
    },
});
