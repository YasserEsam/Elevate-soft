//components/sections/services/StatsCard.jsx
import { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const StatsCard = memo(({ stat, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center hover:shadow-md transition-all"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
        <stat.icon className="h-6 w-6" />
      </div>
      <h4 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h4>
      <p className="text-gray-600">{stat.label}</p>
    </motion.div>
  );
});

StatsCard.displayName = "StatsCard";