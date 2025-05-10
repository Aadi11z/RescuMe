// In their component
import { startRescueTeamTracking } from '../services/locationService';

const RescueTeamScreen = () => {
  useEffect(() => {
    startRescueTeamTracking('team456'); // Replace with actual team ID
  }, []);
  
  return <LocateScreen />;
};
