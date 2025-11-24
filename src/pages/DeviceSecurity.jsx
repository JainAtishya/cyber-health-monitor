import { Laptop, Monitor, Smartphone, Globe, Lock, Unlock } from 'lucide-react';
import { useEffect, useState } from 'react';

const DeviceSecurity = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    browser: '',
    os: '',
    platform: '',
    isSecure: false,
    screenResolution: '',
    deviceType: '',
  });

  useEffect(() => {
    const userAgent = navigator.userAgent;
    
    // Detect Browser
    let browser = 'Unknown';
    if (userAgent.indexOf('Chrome') > -1) browser = 'Google Chrome';
    else if (userAgent.indexOf('Safari') > -1) browser = 'Safari';
    else if (userAgent.indexOf('Firefox') > -1) browser = 'Firefox';
    else if (userAgent.indexOf('Edge') > -1) browser = 'Microsoft Edge';
    else if (userAgent.indexOf('Opera') > -1) browser = 'Opera';

    // Detect OS
    let os = 'Unknown';
    if (userAgent.indexOf('Win') > -1) os = 'Windows';
    else if (userAgent.indexOf('Mac') > -1) os = 'MacOS';
    else if (userAgent.indexOf('Linux') > -1) os = 'Linux';
    else if (userAgent.indexOf('Android') > -1) os = 'Android';
    else if (userAgent.indexOf('iOS') > -1) os = 'iOS';

    // Detect Device Type
    let deviceType = 'Desktop';
    if (/Mobi|Android/i.test(userAgent)) deviceType = 'Mobile';
    else if (/Tablet|iPad/i.test(userAgent)) deviceType = 'Tablet';

    setDeviceInfo({
      browser,
      os,
      platform: navigator.platform,
      isSecure: window.location.protocol === 'https:',
      screenResolution: `${window.screen.width} x ${window.screen.height}`,
      deviceType,
    });
  }, []);

  const getDeviceIcon = () => {
    if (deviceInfo.deviceType === 'Mobile') return Smartphone;
    if (deviceInfo.deviceType === 'Tablet') return Laptop;
    return Monitor;
  };

  const DeviceIcon = getDeviceIcon();

  const infoCards = [
    { label: 'Browser', value: deviceInfo.browser, icon: Globe },
    { label: 'Operating System', value: deviceInfo.os, icon: Monitor },
    { label: 'Device Type', value: deviceInfo.deviceType, icon: DeviceIcon },
    { label: 'Platform', value: deviceInfo.platform, icon: Laptop },
    { label: 'Screen Resolution', value: deviceInfo.screenResolution, icon: Monitor },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <Laptop className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Device Security
        </h1>
        <p className="text-gray-400">Monitor your device's security status</p>
      </div>

      {/* Connection Security */}
      <div className={`backdrop-blur-xl bg-gradient-to-br ${
        deviceInfo.isSecure
          ? 'from-green-900/20 to-green-950/20 border-green-500/30'
          : 'from-red-900/20 to-red-950/20 border-red-500/30'
      } rounded-2xl border shadow-2xl p-8`}>
        <div className="flex items-center space-x-4">
          <div className={`p-4 rounded-xl ${
            deviceInfo.isSecure ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}>
            {deviceInfo.isSecure ? (
              <Lock className="w-8 h-8 text-green-400" />
            ) : (
              <Unlock className="w-8 h-8 text-red-400" />
            )}
          </div>
          <div>
            <h3 className={`text-2xl font-bold ${
              deviceInfo.isSecure ? 'text-green-400' : 'text-red-400'
            }`}>
              {deviceInfo.isSecure ? 'Secure Connection' : 'Insecure Connection'}
            </h3>
            <p className="text-gray-300">
              {deviceInfo.isSecure
                ? 'Your connection is encrypted with HTTPS'
                : 'Warning: Your connection is not secure (HTTP)'}
            </p>
          </div>
        </div>
      </div>

      {/* Device Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border border-purple-500/30 shadow-lg hover:scale-105 transition-all duration-300 p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30">
                <card.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">{card.label}</p>
                <p className="text-gray-200 font-semibold text-lg">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Tips */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl border border-purple-500/30 shadow-2xl p-8">
        <h3 className="text-xl font-bold text-gray-200 mb-4">Security Recommendations</h3>
        <ul className="space-y-3">
          {[
            'Keep your browser and operating system up to date',
            'Enable automatic security updates',
            'Use antivirus software and keep it updated',
            'Avoid connecting to public Wi-Fi without VPN',
            'Enable firewall protection',
            'Use strong, unique passwords for all accounts',
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

export default DeviceSecurity;
