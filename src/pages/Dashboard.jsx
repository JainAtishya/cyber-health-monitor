import { Key, ShieldAlert, Laptop, Wifi } from 'lucide-react';
import ScoreGauge from '../components/ScoreGauge';
import SummaryCard from '../components/SummaryCard';
import AlertCard from '../components/AlertCard';
import { cyberHealthScore } from '../data/scoreMock';
import { recentAlerts } from '../data/alerts';

const Dashboard = () => {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Dashboard Overview
        </h1>
        <p className="text-sm sm:text-base text-gray-400">Monitor your cybersecurity health at a glance</p>
      </div>

      {/* Cyber Health Score */}
      <div className="flex justify-center py-4 sm:py-8">
        <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-4 sm:p-6 lg:p-8">
          <ScoreGauge score={cyberHealthScore} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          icon={Key}
          title="Password Health"
          value="85%"
          status="good"
          gradient="from-slate-900/80 to-slate-800/80"
        />
        <SummaryCard
          icon={Laptop}
          title="Device Security"
          value="92%"
          status="excellent"
          gradient="from-slate-900/80 to-slate-800/80"
        />
        <SummaryCard
          icon={Wifi}
          title="Network Safety"
          value="78%"
          status="good"
          gradient="from-slate-900/80 to-slate-800/80"
        />
        <SummaryCard
          icon={ShieldAlert}
          title="Breach Risk"
          value="Low"
          status="excellent"
          gradient="from-slate-900/80 to-slate-800/80"
        />
      </div>

      {/* Recent Alerts */}
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-200">Recent Alerts</h2>
          <a href="/alerts" className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          {recentAlerts.slice(0, 4).map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
