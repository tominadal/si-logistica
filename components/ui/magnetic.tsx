'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Magnetic({ children, className = '', href, onClick }: { children: React.ReactNode; className?: string; href?: string; onClick?: () => void }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Adjusted spring for a more snappy/natural feel
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const content = (
    <motion.span 
      style={{ x: sx, y: sy }} 
      onMouseMove={(e) => { 
        const r = e.currentTarget.getBoundingClientRect()
        // Reduces the magnetic pull radius slightly
        x.set((e.clientX - r.left - r.width / 2) * 0.15)
        y.set((e.clientY - r.top - r.height / 2) * 0.15) 
      }} 
      onMouseLeave={() => { 
        x.set(0)
        y.set(0) 
      }} 
      className={`inline-flex items-center gap-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.span>
  )
  
  if (href) {
    // If href starts with #, make it a smooth scroll anchor or just normal anchor
    return <a href={href} onClick={onClick}>{content}</a>
  }
  
  return content
}
