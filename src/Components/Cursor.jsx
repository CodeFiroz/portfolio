import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target;
      setIsHovering(
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[data-cursor-hover]')
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] will-change-transform"
      animate={{
        x: position.x - 20, // Center the image
        y: position.y - 20,
        scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        rotate: isHovering ? [0, 10, -10, 0] : 0,
        opacity: 1
      }}
      transition={{
        x: { type: "spring", mass: 0.1, stiffness: 500, damping: 20 },
        y: { type: "spring", mass: 0.1, stiffness: 500, damping: 20 },
        scale: { type: "spring", stiffness: 500, damping: 15 },
        rotate: isHovering ? { duration: 0.6, repeat: Infinity } : { duration: 0.3 }
      }}
    >
      {/* Using an emoji as image */}
      {/* <div className="text-4xl">👆</div> */}
      
      {/* Alternative: Custom SVG image */}
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="m11.433 16.464l1.203-1.202l2.626-2.626l1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508c-.146-.662-.963-.963-2.596-1.565l-5.45-2.007C6.861 4.152 5.231 3.55 4.391 4.39c-.84.84-.24 2.47.962 5.73l2.007 5.45c.602 1.633.903 2.45 1.565 2.596c.662.145 1.277-.47 2.508-1.702Z" clip-rule="evenodd"/><path d="m12.636 15.262l3.938 3.938c.408.408.612.612.84.706c.302.126.643.126.946 0c.228-.094.432-.298.84-.706c.407-.408.611-.612.706-.84a1.238 1.238 0 0 0 0-.946c-.095-.228-.299-.432-.706-.84l-3.939-3.938l-2.625 2.626Z" opacity=".5"/></g></svg>
      
      {/* Alternative: PNG/WebP image */}
      {/* <img 
        src="/cursor-icon.png" 
        alt="Cursor" 
        className="w-10 h-10 object-contain"
      /> */}
    </motion.div>
  );
};

export default Cursor;