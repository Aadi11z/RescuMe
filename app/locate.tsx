import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import LocateScreen from '../screens/LocateScreen'; // adjust this path as needed

export default function LocatePage() {
  const { userId, teamId } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (!userId || !teamId) {
      router.replace('/'); // prefer replace over push for redirecting
    }
  }, [userId, teamId]);

  if (!userId || !teamId) return null;

  return (
    <LocateScreen userId={userId as string} teamId={teamId as string} />
  );
}
