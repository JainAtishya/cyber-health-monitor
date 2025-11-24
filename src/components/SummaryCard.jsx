const SummaryCard = ({ icon: Icon, title, value, status, gradient }) => {
  const statusColors = {
    excellent: 'text-green-400 border-green-500/50',
    good: 'text-cyan-400 border-cyan-500/50',
    warning: 'text-yellow-400 border-yellow-500/50',
    danger: 'text-red-400 border-red-500/50',
  };

  return (
    <div className={`relative p-6 rounded-xl bg-gradient-to-br ${gradient} backdrop-blur-xl border ${statusColors[status]} shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg bg-slate-900/50 ${statusColors[status]}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${statusColors[status]} bg-slate-900/50`}>
            {status}
          </div>
        </div>

        <h3 className="text-gray-300 text-sm font-medium mb-2">{title}</h3>
        <p className={`text-3xl font-bold ${statusColors[status]}`}>{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
