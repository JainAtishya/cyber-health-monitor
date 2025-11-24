import { useState } from 'react';
import { Key, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const checks = [
    { label: 'At least 8 characters', test: () => password.length >= 8 },
    { label: 'Contains uppercase letter', test: () => /[A-Z]/.test(password) },
    { label: 'Contains lowercase letter', test: () => /[a-z]/.test(password) },
    { label: 'Contains number', test: () => /[0-9]/.test(password) },
    { label: 'Contains special character', test: () => /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const passedChecks = checks.filter((check) => check.test()).length;
  const strength = passedChecks === 0 ? 0 : (passedChecks / checks.length) * 100;

  const getStrengthColor = () => {
    if (strength >= 80) return 'bg-green-500';
    if (strength >= 60) return 'bg-cyan-500';
    if (strength >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStrengthLabel = () => {
    if (strength >= 80) return 'Strong';
    if (strength >= 60) return 'Good';
    if (strength >= 40) return 'Fair';
    if (strength > 0) return 'Weak';
    return 'Very Weak';
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <Key className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Password Strength Checker
        </h1>
        <p className="text-gray-400">Test your password security in real-time</p>
      </div>

      {/* Password Input */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-8">
        <label className="block text-gray-300 text-sm font-medium mb-3">
          Enter Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password here..."
            className="w-full px-4 py-4 pr-12 bg-slate-900/50 border border-purple-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Strength Meter */}
        {password && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Password Strength</span>
              <span className={`text-sm font-semibold ${
                strength >= 80 ? 'text-green-400' :
                strength >= 60 ? 'text-cyan-400' :
                strength >= 40 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {getStrengthLabel()}
              </span>
            </div>
            <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden">
              <div
                className={`h-full ${getStrengthColor()} transition-all duration-500 rounded-full shadow-lg`}
                style={{ width: `${strength}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Requirements Checklist */}
        <div className="mt-8 space-y-3">
          <h3 className="text-gray-300 font-semibold mb-4">Password Requirements</h3>
          {checks.map((check, index) => {
            const passed = check.test();
            return (
              <div
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  passed
                    ? 'bg-green-500/10 border border-green-500/30'
                    : 'bg-slate-800/30 border border-slate-700/30'
                }`}
              >
                {passed ? (
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
                <span className={passed ? 'text-green-400' : 'text-gray-500'}>
                  {check.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PasswordCheck;
