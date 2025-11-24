import { Bell, Filter } from 'lucide-react';
import { useState } from 'react';
import AlertCard from '../components/AlertCard';
import { allAlerts } from '../data/alerts';

const Alerts = () => {
  const [filter, setFilter] = useState('all');

  const filteredAlerts = filter === 'all' 
    ? allAlerts 
    : allAlerts.filter(alert => alert.severity === filter);

  const severityCounts = {
    all: allAlerts.length,
    high: allAlerts.filter(a => a.severity === 'high').length,
    medium: allAlerts.filter(a => a.severity === 'medium').length,
    low: allAlerts.filter(a => a.severity === 'low').length,
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Security Alerts
          </h1>
          <p className="text-sm sm:text-base text-gray-400">Monitor and manage security notifications</p>
        </div>
        <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/30 w-fit">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          <span className="text-sm sm:text-base text-gray-200 font-semibold">{allAlerts.length} Total</span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border border-purple-500/30 shadow-lg p-4 sm:p-6">
        <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
          <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
          <h3 className="text-sm sm:text-base text-gray-200 font-semibold">Filter by Severity</h3>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
          {[
            { key: 'all', label: 'All', fullLabel: 'All Alerts', color: 'from-purple-500 to-cyan-500' },
            { key: 'high', label: 'High', fullLabel: 'High Priority', color: 'from-red-500 to-rose-600' },
            { key: 'medium', label: 'Medium', fullLabel: 'Medium Priority', color: 'from-yellow-500 to-orange-600' },
            { key: 'low', label: 'Low', fullLabel: 'Low Priority', color: 'from-green-500 to-emerald-600' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === item.key
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                  : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              <span className="sm:hidden">{item.label}</span>
              <span className="hidden sm:inline">{item.fullLabel}</span>
              <span className="ml-1">({severityCounts[item.key]})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))
        ) : (
          <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border border-purple-500/30 shadow-lg p-8 sm:p-12 text-center">
            <Bell className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-2">No alerts found</h3>
            <p className="text-sm sm:text-base text-gray-500">There are no {filter} priority alerts at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alerts;
