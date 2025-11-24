const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-20 h-20">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-purple-500/30"></div>
        
        {/* Spinning Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-purple-500 animate-spin"></div>
        
        {/* Inner Pulse */}
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 animate-pulse"></div>
      </div>
      
      <p className="text-gray-400 font-medium animate-pulse">{message}</p>
    </div>
  );
};

export default Loader;
