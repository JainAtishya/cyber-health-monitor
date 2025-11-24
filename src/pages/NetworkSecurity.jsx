import { Wifi, Signal, Globe, Shield, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

const NetworkSecurity = () => {
  const [networkInfo, setNetworkInfo] = useState({
    effectiveType: 'unknown',
    downlink: 0,
    rtt: 0,
    isOnline: navigator.onLine,
  });

  useEffect(() => {
    // Get network information if available
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      setNetworkInfo({
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0,
        isOnline: navigator.onLine,
      });

      // Listen for changes
      connection.addEventListener('change', () => {
        setNetworkInfo({
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
          isOnline: navigator.onLine,
        });
      });
    }

    // Listen for online/offline events
    const handleOnline = () => setNetworkInfo(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setNetworkInfo(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getNetworkTypeColor = () => {
    const type = networkInfo.effectiveType;
    if (type === '4g') return 'text-green-400 border-green-500/50';
    if (type === '3g') return 'text-cyan-400 border-cyan-500/50';
    if (type === '2g') return 'text-yellow-400 border-yellow-500/50';
    return 'text-gray-400 border-gray-500/50';
  };

  const getNetworkSafetyScore = () => {
    if (!networkInfo.isOnline) return 0;
    if (window.location.protocol === 'https:' && networkInfo.effectiveType === '4g') return 90;
    if (window.location.protocol === 'https:') return 75;
    if (networkInfo.effectiveType === '4g') return 60;
    return 40;
  };

  const safetyScore = getNetworkSafetyScore();

  const getSafetyColor = () => {
    if (safetyScore >= 80) return 'from-green-500 to-emerald-600';
    if (safetyScore >= 60) return 'from-cyan-500 to-blue-600';
    if (safetyScore >= 40) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-rose-600';
  };

  const getSafetyBorderColor = () => {
    if (safetyScore >= 80) return 'border-green-500/50';
    if (safetyScore >= 60) return 'border-cyan-500/50';
    if (safetyScore >= 40) return 'border-yellow-500/50';
    return 'border-red-500/50';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <Wifi className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Network Security
        </h1>
        <p className="text-gray-400">Monitor your network connection and safety</p>
      </div>

      {/* Online Status */}
      <div className={`backdrop-blur-xl bg-gradient-to-br ${
        networkInfo.isOnline
          ? 'from-green-900/20 to-green-950/20 border-green-500/30'
          : 'from-red-900/20 to-red-950/20 border-red-500/30'
      } rounded-2xl border shadow-2xl p-8`}>
        <div className="flex items-center space-x-4">
          <div className={`p-4 rounded-xl ${
            networkInfo.isOnline ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}>
            <Globe className={`w-8 h-8 ${
              networkInfo.isOnline ? 'text-green-400' : 'text-red-400'
            }`} />
          </div>
          <div>
            <h3 className={`text-2xl font-bold ${
              networkInfo.isOnline ? 'text-green-400' : 'text-red-400'
            }`}>
              {networkInfo.isOnline ? 'Connected' : 'Offline'}
            </h3>
            <p className="text-gray-300">
              {networkInfo.isOnline
                ? 'You are connected to the internet'
                : 'No internet connection detected'}
            </p>
          </div>
        </div>
      </div>

      {/* Network Safety Meter */}
      <div className={`backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl border ${getSafetyBorderColor()} shadow-2xl p-8`}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-2">Network Safety Score</h2>
          <p className="text-gray-400 text-sm">Based on connection type and security</p>
        </div>
        
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48">
            <svg className="transform -rotate-90" width="192" height="192">
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="currentColor"
                strokeWidth="16"
                fill="none"
                className="text-slate-700/30"
              />
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="url(#safetyGradient)"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 80}`}
                strokeDashoffset={`${2 * Math.PI * 80 * (1 - safetyScore / 100)}`}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="safetyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className={`${getSafetyColor().split(' ')[0].replace('from-', 'text-')}`} stopOpacity="1" />
                  <stop offset="100%" className={`${getSafetyColor().split(' ')[1].replace('to-', 'text-')}`} stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`text-5xl font-bold bg-gradient-to-br ${getSafetyColor()} bg-clip-text text-transparent`}>
                {safetyScore}
              </div>
              <div className="text-gray-400 text-xs mt-1">out of 100</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getSafetyColor()} text-white`}>
            {safetyScore >= 80 ? 'Excellent' : safetyScore >= 60 ? 'Good' : safetyScore >= 40 ? 'Fair' : 'Poor'}
          </span>
        </div>
      </div>

      {/* Network Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border ${getNetworkTypeColor()} shadow-lg p-6`}>
          <div className="flex items-center space-x-3 mb-3">
            <Signal className={`w-6 h-6 ${getNetworkTypeColor().split(' ')[0]}`} />
            <h3 className="text-gray-300 font-semibold">Connection Type</h3>
          </div>
          <p className={`text-2xl font-bold uppercase ${getNetworkTypeColor().split(' ')[0]}`}>
            {networkInfo.effectiveType || 'Unknown'}
          </p>
        </div>

        <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border border-purple-500/30 shadow-lg p-6">
          <div className="flex items-center space-x-3 mb-3">
            <Shield className="w-6 h-6 text-purple-400" />
            <h3 className="text-gray-300 font-semibold">Downlink Speed</h3>
          </div>
          <p className="text-2xl font-bold text-purple-400">
            {networkInfo.downlink ? `${networkInfo.downlink} Mbps` : 'N/A'}
          </p>
        </div>

        <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border border-purple-500/30 shadow-lg p-6">
          <div className="flex items-center space-x-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-purple-400" />
            <h3 className="text-gray-300 font-semibold">Round Trip Time</h3>
          </div>
          <p className="text-2xl font-bold text-purple-400">
            {networkInfo.rtt ? `${networkInfo.rtt} ms` : 'N/A'}
          </p>
        </div>
      </div>

      {/* Security Tips */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl border border-purple-500/30 shadow-2xl p-8">
        <h3 className="text-xl font-bold text-gray-200 mb-4">Network Security Tips</h3>
        <ul className="space-y-3">
          {[
            'Always use HTTPS websites when possible',
            'Avoid public Wi-Fi for sensitive transactions',
            'Use a VPN on untrusted networks',
            'Keep your router firmware updated',
            'Use strong encryption (WPA3) for your Wi-Fi',
            'Disable network sharing on public networks',
          ].map((tip, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"></div>
              <span className="text-gray-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NetworkSecurity;
