// In their component
import { startRescueTeamTracking } from '../services/locationService';

const RescueTeamScreen = () => {
  useEffect(() => {
    startRescueTeamTracking('rm7865'); // Replace with actual team ID
  }, []);
  
  return <LocateScreen />;
};
