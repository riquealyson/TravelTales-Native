import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Buscar() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        getLocationAsync();
    }, []);

    const getLocationAsync = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão de localização não concedida');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);
        } catch (error) {
            console.error('Erro ao obter localização:', error);
            Alert.alert('Erro ao obter localização, verifique as permissões.');
        }
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchText)}&key=AIzaSyDaV0XMeXOqGMqIjK5SBC-f5m93wVHFKmQ`);

            if (!response.ok) {
                throw new Error(`Erro ao buscar endereço: ${response.status}`);
            }

            const data = await response.json();

            if (data.status === 'OK') {
                setSearchResults(data.results);
                if (data.results.length > 0) {
                    const firstResult = data.results[0];
                    setSelectedLocation({
                        latitude: firstResult.geometry.location.lat,
                        longitude: firstResult.geometry.location.lng,
                    });
                }
            } else {
                setSearchResults([]);
                setSelectedLocation(null);
                Alert.alert('Nenhum resultado encontrado para o endereço fornecido.');
            }
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
            Alert.alert('Erro ao buscar endereço, tente novamente mais tarde.');
        }
    };

    const centerMapOnCurrentLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão de localização não concedida');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);
            setSelectedLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        } catch (error) {
            console.error('Erro ao obter localização:', error);
            Alert.alert('Erro ao obter localização, verifique as permissões.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <MaterialIcons name='search' size={32} color={'#E88046'} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquisar endereço"
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmitEditing={handleSearch}
                />
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -23.5505,
                    longitude: -46.6333,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={selectedLocation ? {
                    latitude: selectedLocation.latitude,
                    longitude: selectedLocation.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                } : currentLocation ? {
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                } : undefined}
            >
                {currentLocation && (
                    <Marker
                        coordinate={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                        }}
                        title="Minha Localização"
                        pinColor="#4169E1"
                    />
                )}
                {selectedLocation && (
                    <Marker
                        coordinate={selectedLocation}
                        title="Local pesquisado"
                    />
                )}
            </MapView>
            <TouchableOpacity style={styles.locationButton} onPress={centerMapOnCurrentLocation}>
                <MaterialIcons name='my-location' size={32} color={'#E88046'} />
                <Text style={styles.buttonText}>Minha Localização</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDFC',
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 24,
        marginBottom: 16,
        padding: '2%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        borderRadius: 12,
    },
    searchInput: {
        paddingLeft: 10,
        fontSize: 18,
        flex: 1,
    },
    map: {
        width: '100%',
        height: '70%',
    },
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 16,
        backgroundColor: '#EFEFEF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        elevation: 3,
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#E88046',
    },
});
