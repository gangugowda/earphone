import { Routes, Route } from "react-router-dom";

import Splash from "../pages/Splash";
import Dashboard from "../pages/Dashboard";
import Bluetooth from "../pages/Bluetooth";
import LiveDetection from "../pages/LiveDetection";
import AIAssistant from "../pages/AIAssistant";
import HearingHealth from "../pages/HearingHealth";
import LiveSession from "../pages/LiveSession";
import Settings from "../pages/Settings";
import EmergencyAlert from "../pages/EmergencyAlert";

function AppRouter() {
  return (
    <Routes>
      {/* Splash Screen */}
      <Route path="/" element={<Splash />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Bluetooth */}
      <Route path="/bluetooth" element={<Bluetooth />} />

      {/* Live Detection */}
      <Route path="/live-detection" element={<LiveDetection />} />

      {/* AI Assistant */}
      <Route path="/assistant" element={<AIAssistant />} />

      {/* Hearing Health */}
      <Route path="/health" element={<HearingHealth />} />

      {/* Live Session */}
      <Route path="/live-session" element={<LiveSession />} />

      {/* Emergency Alert */}
      <Route path="/emergency-alert" element={<EmergencyAlert />} />

      {/* Settings */}
      <Route path="/settings" element={<Settings />} />

      {/* Fallback Route */}
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;