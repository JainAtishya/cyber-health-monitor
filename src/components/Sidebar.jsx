import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Key,
  ShieldAlert,
  Laptop,
  Wifi,
  Bell,
} from 'lucide-react';

const Sidebar = ({ onLinkClick }) => {
  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/password-check', icon: Key, label: 'Password Check' },
    { path: '/breach-check', icon: ShieldAlert, label: 'Breach Check' },
    { path: '/device-security', icon: Laptop, label: 'Device Security' },
    { path: '/network-security', icon: Wifi, label: 'Network Security' },
    { path: '/alerts', icon: Bell, label: 'Alerts' },
  ];

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-purple-500/30 shadow-xl overflow-y-auto">
      <div className="p-4 sm:p-6 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-purple-500/50 shadow-lg shadow-purple-500/20'
                  : 'hover:bg-slate-700/50 border border-transparent'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={`w-5 h-5 transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-gray-400 group-hover:text-cyan-400'
                  }`}
                />
                <span
                  className={`font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-gray-300 group-hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
