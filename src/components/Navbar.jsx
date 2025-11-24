import { User, Bell, LogOut, Menu, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Guest';

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 shadow-lg shadow-purple-500/20">
      <div className="flex items-center justify-between px-3 sm:px-6 py-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all"
          >
            <Menu className="w-5 h-5 text-cyan-400" />
          </button>

          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hidden sm:block">
            Cyber Health Monitor
          </h1>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          <button 
            onClick={() => navigate('/alerts')}
            className="relative p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          <div className="hidden sm:flex items-center space-x-3 px-3 sm:px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/30">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-200 font-medium text-sm sm:text-base">{username}</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 transition-all duration-300 hover:scale-105"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
