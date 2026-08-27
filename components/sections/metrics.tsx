'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

function Counter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  
  const springValue = useSpring(0, { 
    stiffness: 50, 
    damping: 20, 
    duration: duration * 1000 
  })

  useEffect(() => {
    if (inView) {
      springValue.set(value)
    }
  }, [inView, springValue, value])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString()
      }
    })
  }, [springValue])

  return (
    <span className="tabular-nums">
      {suffix === '+' ? '+' : ''}
      <span ref={ref}>0</span>
      {suffix !== '+' ? suffix : ''}
    </span>
  )
}

export function Metrics() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useInView(sectionRef, { once: true, margin: '-100px' })
  
  const items = [
    { value: 10, suffix: '+', label: 'Años de experiencia' },
    { value: 5000, suffix: '+', label: 'Entregas exitosas' },
    { value: 100, suffix: '%', label: 'Flota monitoreada' }
  ]

  return (
    <section className="metrics section" ref={sectionRef}>
      <div className="section-kicker">EN NÚMEROS</div>
      <div className="metric-grid">
        {items.map((item, index) => (
          <motion.div 
            key={item.label} 
            initial={{ opacity: 0, y: 30 }} 
            animate={isVisible ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <strong>
              <Counter value={item.value} suffix={item.suffix} />
            </strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
