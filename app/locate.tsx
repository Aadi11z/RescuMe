import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LocateScreen() {
  // State to hold user location
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [eta, setEta] = useState<number>(15); // Placeholder ETA (minutes)
  const [sliderValue, setSliderValue] = useState<number>(0);

  useEffect(() => {
    const getLocation = async () => {
      // Request permission for location access
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Get current location
      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude: coords.latitude, longitude: coords.longitude });
    };

    getLocation();
  }, []);

  const handleSuggestRoute = () => {
    // Simulate route suggestion (You can implement real route logic here)
    alert('Route suggested based on your current location.');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Map View */}
        {location && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={location} title="You are here" />
          </MapView>
        )}

        {/* ETA Slider */}
        <View style={styles.sliderContainer}>
          <Text style={styles.etaText}>ETA: {eta} minutes</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={30}
            step={1}
            value={sliderValue}
            onValueChange={(value) => {
              setSliderValue(value);
              setEta(Math.round(value)); // Updating ETA based on slider value
            }}
          />
        </View>

        {/* Suggest Route Button */}
        <View style={styles.buttonContainer}>
          <Button title="Suggest Route" onPress={handleSuggestRoute} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  map: {
    width: '100%',
    height: '70%',
  },
  sliderContainer: {
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '80%',
  },
  etaText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
