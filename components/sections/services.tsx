'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Truck, Package, Check, MoveRight, Phone, Boxes, Grid2X2, LayoutGrid } from 'lucide-react'

const services = [
  { title: 'Mudanzas a todo el país', text: 'Flota de última generación y trato cordial. Profesionales capacitados para traslado de hogares y empresas (Telecomunicaciones, Textil).', icon: Truck, wide: true },
  { title: 'Recepción y almacenaje', text: 'Almacén Central con playón exclusivo para la recepción de carga y espacios totalmente seguros.', icon: Package },
  { title: 'Preparación de pedidos', text: 'Preparación de pedidos especializada para despachos rápidos y seguros a todo el país.', icon: Check },
  { title: 'Distribución nacional', text: 'Entregas en Capital y GBA con móviles exclusivos. Envíos al País a través de Expresos de primera línea.', icon: MoveRight },
  { title: 'Gestión de inventarios', text: 'Desarrollo de control de stock con tecnologías de última generación.', icon: Boxes },
  { title: 'Atención al cliente', text: 'Ejecutivos de cuenta en constante comunicación con cada cliente para soluciones a medida.', icon: Phone },
]

export function Services() {
  const [view, setView] = useState<'bento' | 'grid'>('bento')

  return (
    <section id="servicios" className="services section">
      <div className="services-head">
        <div>
          <div className="section-kicker">03 / SERVICIOS</div>
          <h2>Una solución<br /><span>en movimiento.</span></h2>
        </div>
        <div className="view-toggle" role="group" aria-label="Vista de servicios">
          <button aria-label="Vista bento" className={view === 'bento' ? 'active' : ''} onClick={() => setView('bento')}><Grid2X2 strokeWidth={1} /></button>
          <button aria-label="Vista grilla" className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')}><LayoutGrid strokeWidth={1} /></button>
        </div>
      </div>
      <div className={`service-grid ${view}`}>
        {services.map((s, i) => {
          const waLink = `https://wa.me/5491160010784?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.title)}`
          return (
            <motion.article
              whileHover={{ y: -6 }}
              key={s.title}
              className={s.wide ? 'wide' : ''}
              onClick={() => window.open(waLink, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <s.icon strokeWidth={1} />
              <span>0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ArrowUpRight strokeWidth={1} />
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
