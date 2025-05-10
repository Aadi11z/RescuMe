import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { startStrandedTracking, startRescueTeamTracking } from '../services/locationService';

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

  // Start live tracking
  useEffect(() => {
    let cleanups: (() => void)[] = [];
    
    const setupTracking = async () => {
      const strandedCleanup = await startStrandedTracking(userId);
      const rescueCleanup = await startRescueTeamTracking(teamId);
      
      if (strandedCleanup) cleanups.push(strandedCleanup);
      if (rescueCleanup) cleanups.push(rescueCleanup);
    };

    setupTracking();
    
    return () => cleanups.forEach(fn => fn());
  }, [userId, teamId]);

  // Firestore listeners
  useEffect(() => {
    const rescueUnsub = onSnapshot(doc(db, 'rescueTeams', teamId), (doc) => {
      const loc = doc.data()?.location;
      if (loc) setRescueLocation({ latitude: loc.latitude, longitude: loc.longitude });
    });

    const strandedUnsub = onSnapshot(doc(db, 'strandedUsers', userId), (doc) => {
      const loc = doc.data()?.location;
      if (loc) setStrandedLocation({ latitude: loc.latitude, longitude: loc.longitude });
    });

    return () => {
      rescueUnsub();
      strandedUnsub();
    };
  }, []);

  // Rest of your map rendering code...
}
