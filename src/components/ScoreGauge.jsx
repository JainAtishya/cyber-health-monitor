import { useEffect, useState } from 'react';

const ScoreGauge = ({ score, maxScore = 100 }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  const getColor = () => {
    if (percentage >= 80) return 'text-green-400 stroke-green-400';
    if (percentage >= 60) return 'text-cyan-400 stroke-cyan-400';
    if (percentage >= 40) return 'text-yellow-400 stroke-yellow-400';
    return 'text-red-400 stroke-red-400';
  };

  const getGradient = () => {
    if (percentage >= 80) return 'from-green-500 to-emerald-600';
    if (percentage >= 60) return 'from-cyan-500 to-blue-600';
    if (percentage >= 40) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-rose-600';
  };

  return (
    <div className="relative flex items-center justify-center">
      <svg className="transform -rotate-90" width="280" height="280">
        {/* Background Circle */}
        <circle
          cx="140"
          cy="140"
          r="120"
          stroke="currentColor"
          strokeWidth="20"
          fill="none"
          className="text-slate-700/30"
        />
        
        {/* Progress Circle */}
        <circle
          cx="140"
          cy="140"
          r="120"
          stroke="url(#gradient)"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out drop-shadow-lg"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className={getColor()} stopOpacity="1" />
            <stop offset="100%" className={getColor()} stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className={`text-6xl font-bold bg-gradient-to-br ${getGradient()} bg-clip-text text-transparent`}>
          {animatedScore}
        </div>
        <div className="text-gray-400 text-sm font-medium mt-2">Cyber Health Score</div>
        <div className={`text-xs font-semibold mt-1 uppercase tracking-wider ${getColor()}`}>
          {percentage >= 80 ? 'Excellent' : percentage >= 60 ? 'Good' : percentage >= 40 ? 'Fair' : 'Poor'}
        </div>
      </div>
    </div>
  );
};

export default ScoreGauge;
