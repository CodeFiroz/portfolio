import React from 'react';
import { motion } from 'framer-motion';

const Pills = ({
  content,
  className = '',
  color = 'indigo' // options: indigo, emerald, rose, amber, sky
}) => {
  // Color variants
  const colorVariants = {
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-700',
      border: 'border-indigo-100',
      hoverBg: 'bg-indigo-100',
      gradientFrom: 'from-indigo-100',
      gradientTo: 'to-violet-100'
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-100',
      hoverBg: 'bg-emerald-100',
      gradientFrom: 'from-emerald-100',
      gradientTo: 'to-teal-100'
    },
    rose: {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-100',
      hoverBg: 'bg-rose-100',
      gradientFrom: 'from-rose-100',
      gradientTo: 'to-pink-100'
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-100',
      hoverBg: 'bg-amber-100',
      gradientFrom: 'from-amber-100',
      gradientTo: 'to-orange-100'
    },
    sky: {
      bg: 'bg-sky-50',
      text: 'text-sky-700',
      border: 'border-sky-100',
      hoverBg: 'bg-sky-100',
      gradientFrom: 'from-sky-100',
      gradientTo: 'to-blue-100'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-100',
      hoverBg: 'bg-green-100',
      gradientFrom: 'from-green-100',
      gradientTo: 'to-green-100'
    },
     teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-100',
      hoverBg: 'bg-teal-100',
      gradientFrom: 'from-teal-100',
      gradientTo: 'to-teal-100'
    },
     blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-100',
      hoverBg: 'bg-blue-100',
      gradientFrom: 'from-blue-100',
      gradientTo: 'to-blue-100'
    },
     stone: {
      bg: 'bg-stone-50',
      text: 'text-stone-700',
      border: 'border-stone-100',
      hoverBg: 'bg-stone-100',
      gradientFrom: 'from-stone-100',
      gradientTo: 'to-stone-100'
    }
  };

  const selectedColor = colorVariants[color] || colorVariants.indigo;

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <div className={`
        ${selectedColor.bg} ${selectedColor.text} ${selectedColor.border}
        px-4 py-1 rounded-full text-sm font-medium inline-flex items-center
        border backdrop-blur-sm transition-all duration-200
        overflow-hidden relative group
      `}>
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${selectedColor.gradientFrom} ${selectedColor.gradientTo}`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content with subtle shine effect */}
        <motion.span 
          className='relative z-10'
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.2 } 
          }}
        >
          {content}
        </motion.span>
        
        {/* Subtle shine effect on hover */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-white/30"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
};

export default Pills;