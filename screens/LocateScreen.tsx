import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Props {
  userId: string;
  teamId: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

export default function LocateScreen({ userId, teamId }: Props) {
  const [rescueLocation, setRescueLocation] = useState<Location | null>(null);
  const [strandedLocation, setStrandedLocation] = useState<Location | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'rescueTeams', teamId), (doc) => {
      const location = doc.data()?.location;
      if (location) {
        setRescueLocation({
          latitude: location.latitude,
          longitude: location.longitude
        });
      }
    });
    return unsubscribe;
  }, [teamId]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'strandedUsers', userId), (doc) => {
      const location = doc.data()?.location;
      if (location) {
        setStrandedLocation({
          latitude: location.latitude,
          longitude: location.longitude
        });
      }
    });
    return unsubscribe;
  }, [userId]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 25.2048,
          longitude: 55.2708,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
      >
        {rescueLocation && (
          <Marker
            coordinate={rescueLocation}
            title="Rescue Team"
            pinColor="blue"
          />
        )}

        {strandedLocation && (
          <Marker
            coordinate={strandedLocation}
            title="Stranded User"
            pinColor="red"
          />
        )}

        {rescueLocation && strandedLocation && (
          <Polyline
            coordinates={[rescueLocation, strandedLocation]}
            strokeColor="#FF0000"
            strokeWidth={2}
          />
        )}
      </MapView>

      <View style={styles.infoPanel}>
        <Text>
          Stranded Coordinates: {'\n'}
          {strandedLocation?.latitude?.toFixed(5)}, {'\n'}
          {strandedLocation?.longitude?.toFixed(5)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoPanel: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
