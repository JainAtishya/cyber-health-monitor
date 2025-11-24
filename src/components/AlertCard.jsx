import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

const AlertCard = ({ alert }) => {
  const severityConfig = {
    high: {
      icon: AlertTriangle,
      bgColor: 'from-red-500/10 to-red-900/10',
      borderColor: 'border-red-500/50',
      textColor: 'text-red-400',
      iconBg: 'bg-red-500/20',
    },
    medium: {
      icon: Info,
      bgColor: 'from-yellow-500/10 to-yellow-900/10',
      borderColor: 'border-yellow-500/50',
      textColor: 'text-yellow-400',
      iconBg: 'bg-yellow-500/20',
    },
    low: {
      icon: CheckCircle,
      bgColor: 'from-green-500/10 to-green-900/10',
      borderColor: 'border-green-500/50',
      textColor: 'text-green-400',
      iconBg: 'bg-green-500/20',
    },
  };

  const config = severityConfig[alert.severity] || severityConfig.medium;
  const Icon = config.icon;

  return (
    <div className={`p-4 sm:p-5 rounded-xl bg-gradient-to-br ${config.bgColor} backdrop-blur-xl border ${config.borderColor} shadow-lg hover:scale-[1.02] transition-all duration-300`}>
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className={`p-2 sm:p-3 rounded-lg ${config.iconBg} flex-shrink-0`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${config.textColor}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 mb-2">
            <h3 className={`font-semibold text-base sm:text-lg ${config.textColor} leading-tight`}>
              {alert.title}
            </h3>
            <span className="text-xs text-gray-500 whitespace-nowrap">{alert.timestamp}</span>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            {alert.description}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <span className={`text-xs font-semibold uppercase tracking-wider ${config.textColor}`}>
              {alert.severity} Priority
            </span>
            {alert.actionable && (
              <button className={`px-3 py-1.5 rounded-md text-xs font-medium ${config.textColor} ${config.iconBg} hover:opacity-80 transition-opacity w-full sm:w-auto`}>
                Take Action
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
