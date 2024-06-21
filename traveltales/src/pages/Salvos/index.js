import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, Alert } from "react-native";
import PostCard from "../../components/postCard";

const Salvos = () => {
    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        loadSavedPosts();
    }, []);

    const loadSavedPosts = async () => {
        try {
            const response = await fetch("http://192.168.0.111:3001/posts");
            if (response.ok) {
                const savedPosts = await response.json();
                setPostsData(savedPosts);
            } else {
                throw new Error(`Erro ao carregar posts salvos: ${response.status}`);
            }
        } catch (error) {
            console.error('Erro ao carregar posts salvos:', error);
            Alert.alert('Erro ao carregar posts salvos, tente novamente mais tarde.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>
                Lugares salvos
            </Text>
            <ScrollView>
                <PostCard posts={postsData} setPosts={setPostsData} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDFC',
        alignItems: 'center',
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
        marginBottom: 32,
    },
});

export default Salvos;
