import Image from 'next/image'
import { Check, ArrowUpRight } from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'

const whatsapp = 'https://wa.me/5491160010784'

export function Coverage() {
  return (
    <section id="cobertura" className="country section">
      <div className="country-copy">
        <div className="section-kicker">02 / COBERTURA</div>
        <h2>Mudanzas<br /><span>a todo el país.</span></h2>
        <p>Sabemos lo importante que es para su empresa contar con un envío a tiempo. Trabajamos en todo el país para lograr que sus pertenencias lleguen rápido y seguro. Contamos con profesionales altamente capacitados para el traslado de materiales delicados, ofreciendo soluciones a la altura de sus necesidades.</p>
        <ul>
          {['Control Satelital', 'Documentación en Regla', 'Camiones que llegan a Destino'].map(x => (
            <li key={x}><Check strokeWidth={1} />{x}</li>
          ))}
        </ul>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-4 text-[14px] font-bold text-white transition-colors hover:bg-[#cc4500]">
          Cotizar mi mudanza <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
        </a>
      </div>
      <div className="country-image group relative overflow-hidden flex items-end p-[22px] text-[var(--lime)] font-mono text-[11px] min-h-[620px]">
        <video 
          src="/cobertura.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/65 z-10 transition-colors group-hover:bg-black/40" />
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <p className="text-white text-lg font-bold mb-4 uppercase tracking-widest">Seguinos</p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <span className="relative z-30">CAPITAL → TODO EL PAÍS</span>
      </div>
    </section>
  )
}
