'use client'

import { ArrowUpRight, Truck, Package, Check, MoveRight, Phone, Boxes } from 'lucide-react'

const services = [
  { title: 'Mudanzas a todo el país', text: 'Flota de última generación y trato cordial. Profesionales capacitados para traslado de hogares y empresas (Telecomunicaciones, Textil).', icon: Truck, wide: true },
  { title: 'Recepción y almacenaje', text: 'Almacén Central con playón exclusivo para la recepción de carga y espacios totalmente seguros.', icon: Package },
  { title: 'Preparación de pedidos', text: 'Preparación de pedidos especializada para despachos rápidos y seguros a todo el país.', icon: Check },
  { title: 'Distribución nacional', text: 'Entregas en Capital y GBA con móviles exclusivos. Envíos al País a través de Expresos de primera línea.', icon: MoveRight, wide: true },
  { title: 'Gestión de inventarios', text: 'Desarrollo de control de stock con tecnologías de última generación.', icon: Boxes },
  { title: 'Atención al cliente', text: 'Ejecutivos de cuenta en constante comunicación con cada cliente para soluciones a medida.', icon: Phone },
]

export function Services() {
  return (
    <section id="servicios" className="services section">
      <div className="services-head">
        <div>
          <div className="section-kicker">03 / SERVICIOS</div>
          <h2>Una solución<br /><span>en movimiento.</span></h2>
        </div>
      </div>
      <div className="service-grid grid">
        {services.map((s, i) => {
          const waLink = `https://wa.me/5491160010784?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.title)}`
          return (
            <a href={waLink} target="_blank" rel="noopener noreferrer" key={s.title} className={s.wide ? 'wide' : ''}>
              <article>
                <s.icon strokeWidth={1} />
                <span>0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ArrowUpRight strokeWidth={1} />
              </article>
            </a>
          )
        })}
      </div>
    </section>
  )
}
