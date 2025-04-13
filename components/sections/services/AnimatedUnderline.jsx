//components/sections/services/AnimatedUnderline.jsx
import { motion } from 'framer-motion';

export const AnimatedUnderline = () => (
  <svg
    className="absolute -bottom-1 left-0 w-full h-[12px]"
    viewBox="0 0 100 12"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>

    <motion.path
      d="M0,1 Q50,10 100,1"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
    />
  </svg>
);
