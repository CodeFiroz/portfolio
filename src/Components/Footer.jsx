import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer 
      className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-end px-5 py-10 lg:p-20 lg:pb-5 bg-zinc-900 border-t border-zinc-800 gap-8 lg:gap-0"
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Left - Copyright (moves to bottom on mobile) */}
      <motion.div 
        className="w-full lg:w-auto text-center lg:text-right space-y-2 lg:order-2"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.a
          href="mailto:khanfiroz4045@gmail.com"
          className="inline-flex items-center justify-center lg:justify-end gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-zinc-300 text-sm transition-colors w-full lg:w-auto"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={16} />
          <span className="truncate max-w-[200px] sm:max-w-none">khanfiroz4045@gmail.com</span>
        </motion.a>
        
        <motion.p 
          className='text-sm text-zinc-400 flex items-center justify-center lg:justify-end gap-1'
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          Designed with <Heart size={14} className="text-rose-500 fill-rose-500" /> by Firoz
        </motion.p>
        
        <p className='text-xs text-zinc-600 text-center lg:text-right'>
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </motion.div>

      {/* Right - Main Heading (centered on mobile) */}
      <motion.h2
        className='text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-zinc-300 hover:text-amber-400 font-black font-serif cursor-pointer text-center lg:text-left w-full lg:w-auto'
        initial={{ x: -40 }}
        whileInView={{ x: 0 }}
        whileHover={{
          color: "#f59e0b",
          transition: { duration: 0.3 }
        }}
        whileTap={{
          color: "#f59e0b" // For mobile touch feedback
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10
        }}
      >
        <motion.span
          className="inline-block"
          whileHover={{
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.6 }
          }}
          whileTap={{
            rotate: [0, 5, -5, 0] // For mobile touch feedback
          }}
        >
          Say Hi!
        </motion.span>
      </motion.h2>
    </motion.footer>
  )
}

export default Footer