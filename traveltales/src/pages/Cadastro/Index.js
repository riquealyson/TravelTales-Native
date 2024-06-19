import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';



export default function Cadastro({navigation}) {
  const handleCadastro = () => {
    // Adicione aqui a lógica de cadastro
  };

  const [texto, setTexto] = useState('');

  const limparTexto = () => {
    setTexto('')
  }
  const handleBack = () => {
    limparTexto()
    navigation.navigate('Login')
  }

  return (
    <LinearGradient
      colors={['#e98046', '#f09851', '#f29e53', '#fcb861', '#ced5b3', '#bcdecf', '#a2d6c4', '#b5e1d2']}
      style={styles.cad}
    >
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
      <MaterialIcons name="arrow-back-ios" size={24} color="#b5e1d2" />
      </TouchableOpacity>

      <View style={styles.modal}>
        <View style={styles.logoCad}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            onChangeText={setTexto}
            placeholderTextColor="gray"
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setTexto}
            placeholderTextColor="gray"
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            onChangeText={setTexto}
            placeholderTextColor="gray"
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Criar senha"
            onChangeText={setTexto}
            placeholderTextColor="gray"
            secureTextEntry
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            onChangeText={setTexto}
            placeholderTextColor="gray"
            secureTextEntry
            required
          />
          <TouchableOpacity style={styles.cadastrarButton} onPress={handleCadastro}>
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modal: {
    backgroundColor: 'transparent',
    height: '70%',
    alignItems: 'center',
    borderRadius: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0,
    width: 300,
    marginVertical: 10,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(63, 60, 60)',
    fontSize: 14,
  },
  cadastrarButton: {
    justifyContent: 'center',
    textAlign: 'center',
    width: '40%',
    height: 56,
    marginVertical: 30,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    transition: 'all 50ms',
    backgroundColor: '#FFFDFC',
    color: 'black',
  },
  btnText: {
    textAlign: 'center'
  },
  logoCad: {
    alignSelf: 'center',
    
  },
  backButton: {
    position: 'absolute',
    top: '8%',
    left: '10%',
  },
});



