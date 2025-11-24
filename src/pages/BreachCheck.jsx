import { useState } from 'react';
import { ShieldAlert, Mail, Search, AlertTriangle, CheckCircle } from 'lucide-react';
import Loader from '../components/Loader';
import { checkEmailBreach } from '../data/breachMock';

const BreachCheck = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      const breachData = checkEmailBreach(email);
      setResult(breachData);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <ShieldAlert className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Data Breach Checker
        </h1>
        <p className="text-gray-400">Check if your email has been compromised in data breaches</p>
      </div>

      {/* Search Form */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-8">
        <form onSubmit={handleCheck} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-3">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-11 pr-4 py-4 bg-slate-900/50 border border-purple-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Check for Breaches</span>
          </button>
        </form>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-12">
          <Loader message="Scanning breach databases..." />
        </div>
      )}

      {/* Results */}
      {result && !loading && (
        <div className={`backdrop-blur-xl bg-gradient-to-br ${
          result.breached
            ? 'from-red-900/20 to-red-950/20 border-red-500/30'
            : 'from-green-900/20 to-green-950/20 border-green-500/30'
        } rounded-2xl border shadow-2xl p-8 animate-slide-up`}>
          <div className="flex items-start space-x-4">
            <div className={`p-4 rounded-xl ${
              result.breached ? 'bg-red-500/20' : 'bg-green-500/20'
            }`}>
              {result.breached ? (
                <AlertTriangle className="w-8 h-8 text-red-400" />
              ) : (
                <CheckCircle className="w-8 h-8 text-green-400" />
              )}
            </div>

            <div className="flex-1">
              <h3 className={`text-2xl font-bold mb-2 ${
                result.breached ? 'text-red-400' : 'text-green-400'
              }`}>
                {result.breached ? 'Breach Detected!' : 'All Clear!'}
              </h3>
              <p className="text-gray-300 mb-4">{result.message}</p>

              {result.breached && result.breaches && (
                <div className="mt-6 space-y-4">
                  <h4 className="text-gray-400 font-semibold">Found in {result.breaches.length} breach(es):</h4>
                  {result.breaches.map((breach, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-slate-900/50 border border-red-500/20"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-red-400 font-semibold">{breach.name}</h5>
                        <span className="text-xs text-gray-500">{breach.date}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{breach.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {breach.compromisedData.map((data, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-xs"
                          >
                            {data}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Recommended Actions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                      <li>Change your password immediately</li>
                      <li>Enable two-factor authentication</li>
                      <li>Monitor your accounts for suspicious activity</li>
                      <li>Use unique passwords for each account</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreachCheck;
