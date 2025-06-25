import React from 'react'
import Pills from './Pills'
import { Info } from 'lucide-react'
import { motion } from 'framer-motion'
import hero from '/hero.png'

const Hero = () => {
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
        stiffness: 100
      }
    }
  }

  const ImageVariants = {
    hidden: { y: 20, opacity: 0, scale: '0.5', rotate:'40deg' },
    visible: {
      y: 0,
      scale: '1',
      opacity: 1,
      rotate: '0deg',
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      className='px-5 py-16 min-h-screen flex flex-col justify-center items-center sm:p-20 text-center max-w-4xl mx-auto'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

    <motion.div
    initial="hidden"
      animate="visible"
      variants={ImageVariants}
    >
      <img src={hero} alt="" width={130} />

    </motion.div>


      <motion.h1 
        className='text-4xl font-bold text-zinc-800 dark:text-zinc-100'
        variants={itemVariants}
      >
        Hi, I am &#123; <span className='font-pixel text-amber-500'>Firoz</span> &#125;
      </motion.h1>

      <motion.p 
        className='mt-3 text-zinc-600 dark:text-zinc-300 text-lg'
        variants={itemVariants}
      >
        Web Developer passionate about building fast, responsive, and user-friendly websites.
      </motion.p>

      <motion.div 
        className="flex justify-center items-center flex-wrap gap-3 my-8"
        variants={containerVariants}
      >
        {[
          { skill: "TailwindCSS", color: "sky" },
          { skill: "Javascript", color: "amber" },
          { skill: "NextJS", color: "indigo" },
          { skill: "ReactJS", color: "sky" },
          { skill: "MongoDB", color: "emerald" },
          { skill: "ExpressJS", color: "amber" },
          { skill: "NodeJS", color: "teal" },
          { skill: "Wordpress", color: "blue" },
        ].map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Pills content={item.skill} color={item.color} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='mt-8'
        variants={itemVariants}
      >
        <motion.div
          className='inline-flex justify-center items-center gap-2 bg-slate-50 dark:bg-zinc-800 py-2 px-4 pr-3 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-500 dark:text-zinc-400 hover:shadow-sm transition-all duration-200'
          whileHover={{ y: -2 }}
        >
          <Info size={16} className='flex-shrink-0' />
          <span>
            If you're searching for a Website designer to transform your ideas into reality,{' '}
            <a href="#" className='text-blue-500 dark:text-blue-400 font-medium hover:underline'>
              Let's Connect!
            </a>
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero