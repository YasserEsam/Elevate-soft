// components/sections/services/ServiceIcon.jsx
import { memo } from 'react';
import { motion } from 'framer-motion';

const iconAnimation = {
  hover: { scale: 1.1 },
  transition: { type: 'spring', stiffness: 300 }
};

export const ServiceIcon = memo(({ service }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center w-16 h-16 mb-6 rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-110"
      style={{ 
        background: `linear-gradient(135deg, ${service.color}ee, ${service.color}99)`,
        boxShadow: `0 8px 20px -8px ${service.shadowColor}`,
        willChange: 'transform'
      }}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      <service.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
      
      {/* Animated particles */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-white bottom-2 left-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0.6, 0],
          scale: [0.8, 2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0
        }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-white top-3 right-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0.7, 0],
          scale: [0.8, 2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5
        }}
      />
    </motion.div>
  );
});

ServiceIcon.displayName = 'ServiceIcon';