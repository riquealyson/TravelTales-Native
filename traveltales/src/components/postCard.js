import React from "react";
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
                        <Image source={p.postImg} />
                    </View>
                ))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    perfilNome: {
        color: '#e88046',
        fontSize: '23px',
    },
    perfilFoto: {
        width: 36,
        height: 36
    },
    perfilPost: {
        flex: 1
    }
})