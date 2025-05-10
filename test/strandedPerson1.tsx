// In their component
import { startStrandedTracking } from '../services/locationService';

const StrandedUserScreen = () => {
  useEffect(() => {
    startStrandedTracking('user1'); // Replace with actual user ID
  }, []);
  
  return <LocateScreen />;
};
