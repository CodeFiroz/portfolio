import React from 'react'
import { motion } from 'framer-motion'
import LoopSlider from './LoopSlider'
import { ArrowUpRight } from 'lucide-react'

const Works = () => {
  let works = [];

  for(let i= 1; i < 17; i++){
    works.push(`/works/${i}.jpg`)
  }


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
       
      </motion.div>
    </motion.section>
  )
}

export default Works