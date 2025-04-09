//components/sections/services/StatsCard.jsx
import { motion } from "framer-motion";

export const StatsCard = ({ stat, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
        <stat.icon className="h-6 w-6" />
      </div>
      <h4 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h4>
      <p className="text-gray-600">{stat.label}</p>
    </motion.div>
  );
};