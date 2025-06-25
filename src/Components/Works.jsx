import React from 'react'
import { motion } from 'framer-motion'
import LoopSlider from './LoopSlider'
import { ArrowUpRight } from 'lucide-react'

const Works = () => {
  const works = [
    "https://yashjain.design/wp-content/uploads/2024/05/Frame-17-1024x768.png",
    "https://yashjain.design/wp-content/uploads/2024/05/Frame-18-1024x768.png",
    "https://yashjain.design/wp-content/uploads/2024/06/raj-1024x768.jpg",
    "https://yashjain.design/wp-content/uploads/2024/05/Frame-20-1024x768.png",
    "https://yashjain.design/wp-content/uploads/2024/05/Frame-15-1536x1152.png"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  const buttonVariants = {
    rest: { 
      backgroundColor: '#f59e0b',
      color: '#000'
    },
    hover: {
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#d97706',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      className='w-full py-20 bg-zinc-200 dark:bg-zinc-800'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1 
        className="text-center text-slate-800 dark:text-zinc-100 text-4xl md:text-5xl font-pixel mb-2"
        variants={itemVariants}
      >
        Our Works
      </motion.h1>

      <motion.div 
        className="my-10 md:my-16"
        variants={itemVariants}
      >
        <LoopSlider works={works} />
      </motion.div>

      <motion.div 
        className="flex justify-center items-center"
        variants={itemVariants}
      >
        <motion.button 
          className='flex items-center gap-3 px-8 py-3 bg-amber-500 dark:bg-amber-600 font-medium rounded-full ring-1 ring-amber-600/20 dark:ring-amber-500/30 text-sm hover:ring-2 hover:ring-amber-600/40 transition-all'
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          View All Works 
          <motion.span
            animate={{
              x: [0, 4, 0],
              y: [0, -4, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUpRight size={16}/>
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default Works