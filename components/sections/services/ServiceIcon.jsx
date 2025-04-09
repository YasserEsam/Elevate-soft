//components/sections/services/ServiceIcon.jsx
export const ServiceIcon = ({ service }) => {
  return (
    <div 
      className={`relative flex items-center justify-center w-16 h-16 mb-6 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-110`}
      style={{ 
        background: `linear-gradient(135deg, ${service.color}ee, ${service.color}99)`,
        boxShadow: `0 8px 20px -8px ${service.shadowColor}`
      }}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      <service.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
      
      {/* Animated particles */}
      <div className="absolute w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-60 bottom-2 left-2 animate-ping-slow"></div>
      <div className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-70 top-3 right-3 animate-ping-slow delay-500"></div>
    </div>
  );
};