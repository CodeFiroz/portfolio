import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-end items-center gap-5 px-5 lg:px-10 py-4'>

        <a href="mailto:khanfiroz4045@gmail.com" className='flex items-center text-sm gap-2 bg-amber-50 px-3 py-1 rounded-full ring-2 ring-amber-100 text-amber-950 cursor-pointer duration-300 hover:text-zinc-900 hover:bg-amber-100 hover:ring-amber-200 hover:scale-95 hover:shadow-[4px_4px_0px_#FEF3C6]'>
            <span><Mail size={15} /></span>
            <span>khanfiroz4045@gmail.com</span>
        </a>

        <div className="flex item-center gap-4">
            <a href="https://www.instagram.com/sarcastic.firoz/" target="_blank" className='text-gray-500 hover:text-zinc-800 cursor-pointer'><Instagram size={18} /></a>
            <a href='https://www.linkedin.com/in/firoz-ansari-web' target='_blank' className='text-gray-500 hover:text-zinc-800 cursor-pointer'><Linkedin size={18} /></a>
            <a href='https://github.com/CodeFiroz' target='_blank' className='text-gray-500 hover:text-zinc-800 cursor-pointer'><Github size={18} /></a>
        </div>

    </div>
  )
}

export default Header