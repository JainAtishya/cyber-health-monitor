import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PasswordCheck from "./pages/PasswordCheck";
import BreachCheck from "./pages/BreachCheck";
import DeviceSecurity from "./pages/DeviceSecurity";
import NetworkSecurity from "./pages/NetworkSecurity";
import Alerts from "./pages/Alerts";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/password-check" element={<PasswordCheck />} />
        <Route path="/breach-check" element={<BreachCheck />} />
        <Route path="/device-security" element={<DeviceSecurity />} />
        <Route path="/network-security" element={<NetworkSecurity />} />
        <Route path="/alerts" element={<Alerts />} />
      </Route>
    </Routes>
  );
}

export default App;
