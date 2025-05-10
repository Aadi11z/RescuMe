import { getFirestore, doc, setDoc } from 'firebase/firestore';
import * as Location from 'expo-location';
import { firebaseApp } from '../config/firebase';

const db = getFirestore(firebaseApp);

// Returns cleanup function for tracking
export const startStrandedTracking = async (userId: string) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return () => {};

  const sub = await Location.watchPositionAsync(
    { accuracy: Location.Accuracy.High },
    (location) => {
      setDoc(doc(db, 'strandedUsers', userId), {
        location: location.coords,
        timestamp: new Date()
      });
    }
  );

  return () => sub.remove();
};

export const startRescueTeamTracking = async (teamId: string) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return () => {};

  const sub = await Location.watchPositionAsync(
    { accuracy: Location.Accuracy.High },
    (location) => {
      setDoc(doc(db, 'rescueTeams', teamId), {
        location: location.coords,
        timestamp: new Date()
      });
    }
  );

  return () => sub.remove();
};
