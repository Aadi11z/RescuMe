// services/locationService.ts
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import * as Location from 'expo-location';
import { firebaseApp } from '../config/firebase';

const db = getFirestore(firebaseApp);

// For Stranded Users
export const startStrandedTracking = async (userId: string) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return;

  Location.watchPositionAsync(
    { accuracy: Location.Accuracy.High },
    (location) => {
      setDoc(doc(db, 'strandedUsers', userId), {
        location: location.coords,
        timestamp: new Date()
      });
    }
  );
};

// For Rescue Teams
export const startRescueTeamTracking = async (teamId: string) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return;

  Location.watchPositionAsync(
    { accuracy: Location.Accuracy.High },
    (location) => {
      setDoc(doc(db, 'rescueTeams', teamId), {
        location: location.coords,
        timestamp: new Date()
      });
    }
  );
};
