'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  ['“Nos mudaron la oficina completa en un día y sin frenar la operación. El equipo fue impecable en el trato de todos los equipos delicados y mobiliario de gran porte. Absolutamente recomendables para cualquier empresa.”', 'Mariana G. — Administración'],
  ['“La trazabilidad de cada entrega nos dio la tranquilidad que necesitábamos para crecer. Saber exactamente en qué punto del país está nuestra mercadería no tiene precio en este rubro.”', 'Pablo R. — Retail'],
  ['“Respuesta rápida, camiones en excelente estado y un trato realmente humano de principio a fin. En un mercado lleno de opciones genéricas, ellos se destacan por el compromiso real con el cliente.”', 'Lucía F. — Textil'],
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="proof section">
      <div className="section-kicker">05 / EXPERIENCIAS</div>
      <div className="proof-head">
        <h2>Ellos ya<br/><span>se movieron.</span></h2>
        <Quote strokeWidth={1} />
      </div>
      
      <div className="relative mt-14">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.article 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full min-h-[220px] border border-[var(--line)] p-8 flex flex-col justify-between shadow-sm rounded-xl"
            >
              <p className="text-[22px] leading-[1.15] tracking-tight">{testimonials[index][0]}</p>
              <small className="font-mono text-[11px] text-[var(--orange)] uppercase mt-8 block">{testimonials[index][1]}</small>
            </motion.article>
          </AnimatePresence>
        </div>
        
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)} 
                aria-label={`Ir al testimonio ${i + 1}`}
                className={`h-[6px] rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-[var(--orange)]' : 'w-2 bg-[var(--line)]'}`} 
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Anterior" className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] hover:bg-[var(--line)] transition-colors">
              <ChevronLeft strokeWidth={1} />
            </button>
            <button onClick={next} aria-label="Siguiente" className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] hover:bg-[var(--line)] transition-colors">
              <ChevronRight strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
