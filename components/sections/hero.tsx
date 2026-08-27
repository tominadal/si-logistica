'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

const whatsapp = 'https://wa.me/5491160010784?text=Hola,%20quisiera%20hacer%20una%20consulta.'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <video 
        className="hero-image" 
        src="/hero.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      />
      <div className="hero-copy mt-0 md:-mt-16" style={{ paddingTop: '14vh' }}>
        <p className="eyebrow">LOGÍSTICA / MUDANZAS / DISTRIBUCIÓN</p>
        <motion.h1 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Movemos<br /><em>lo que importa.</em>
        </motion.h1>
        
        <div className="flex flex-col gap-2 my-8 text-[15px]">
          <span className="flex items-center gap-2"><Check strokeWidth={1.5} className="text-[var(--lime)] w-5 h-5" /> Más de 10 años de experiencia.</span>
          <span className="flex items-center gap-2"><Check strokeWidth={1.5} className="text-[var(--lime)] w-5 h-5" /> Trato cordial y humano.</span>
          <span className="flex items-center gap-2"><Check strokeWidth={1.5} className="text-[var(--lime)] w-5 h-5" /> Seguridad en cada entrega.</span>
        </div>

        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-4 text-[14px] font-bold text-white transition-colors hover:bg-[#cc4500]">
          Hablemos por WhatsApp <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
        </a>
      </div>
      <div className="hero-foot">
        <span>Flota monitoreada satelitalmente</span>
        <span>L a V 8:00 — 18:00 / Sáb 9:00 — 13:00</span>
        <span>01 / 04</span>
      </div>
    </section>
  )
}
