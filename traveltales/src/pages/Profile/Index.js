import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {
  const [nomeUser, setNome] = useState("");
  const [emailUser, setEmail] = useState("");
  
 

  async function qme() {
    try {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        setNome(user.nome);
        setEmail(user.email);
        
      }
    } catch (error) {
      console.error('Erro ao recuperar dados do AsyncStorage:', error);
    }
  }

  useEffect(() => {
   
    qme();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao deslogar:", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.containerb}>
        <Image
          source={require("../../../assets/persona.png")}
          style={styles.imagem}
        />
        <Text style={styles.titulo}> Meu perfil </Text>
        <View style={styles.dados}>
          <View style={styles.linha}>
            <MaterialIcons name="person" size={32} color={"#A5D7C6"} />
            <Text style={styles.texto}> Meus dados</Text>
          </View>
          <Text style={styles.texto1}>Nome</Text>
          <Text style={styles.dado}>{nomeUser}</Text>
          <Text style={styles.texto1}>Email</Text>
          <Text style={styles.dado}>{emailUser}</Text>
          <TouchableOpacity style={styles.linha}>
            <MaterialIcons
              name="exit-to-app"
              size={32}
              color={"#A5D7C6"}
              onPress={logout}
            />
            <Text style={styles.texto}> Deslogar </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: "#FFFDFC",
    justifyContent: "top",
    alignItems: "center",
  },
  containerb: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: "#FFFDFC",
    alignItems: "left",
  },
  imagem: {
    width: "50%",
    aspectRatio: 1 / 1,
    margin: "10%",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "500",
  },
  dados: {
    width: "80%",
    gap: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: "8%",
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "10%",
  },
  texto: {
    fontSize: 24,
  },
  texto1: {
    fontSize: 24,
  },
  dado: {
    fontSize: 18,
    color: "#787373",
  },
});
