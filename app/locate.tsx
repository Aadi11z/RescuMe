import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function MapWithCheckpoints() {
  // Dubai coordinates
  const dubaiCenter = {
    latitude: 25.2048,
    longitude: 55.2708,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  // Checkpoint coordinates
  const checkpoints = [
    {
      id: 'checkpoint1',
      coordinate: {
        latitude: 25.2048,
        longitude: 55.2708,
      },
      color: 'blue',
      title: 'Checkpoint 1 (Blue)'
    },
    {
      id: 'checkpoint2',
      coordinate: {
        latitude: 25.2200,
        longitude: 55.2900,
      },
      color: 'red',
      title: 'Checkpoint 2 (Red)'
    }
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={dubaiCenter}
      >
        {/* Markers */}
        {checkpoints.map((point) => (
          <Marker
            key={point.id}
            coordinate={point.coordinate}
            pinColor={point.color}
            title={point.title}
          />
        ))}

        {/* Path between checkpoints */}
        <Polyline
          coordinates={checkpoints.map(p => p.coordinate)}
          strokeColor="#FF0000"
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
