'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  ['¿Hacen envíos al interior?', 'Sí. Contamos con cobertura nacional y coordinamos cada recorrido para que tu carga llegue a destino en tiempo y forma.'],
  ['¿Cómo funciona el control satelital?', 'Cada unidad de nuestra flota está monitoreada en tiempo real. Te mantenemos informado durante todo el traslado.'],
  ['¿Qué incluye el servicio de mudanza?', 'Incluye coordinación, carga, traslado y descarga. También podemos sumar embalaje y manejo especializado para materiales delicados.'],
  ['¿Cuentan con servicio de almacenaje?', 'Sí, disponemos de depósitos con seguridad las 24 horas para el resguardo de mercadería a corto, mediano y largo plazo.'],
  ['¿Cuáles son los tiempos de entrega promedio?', 'Los tiempos varían según el destino. Dentro de AMBA entregamos en 24hs, y para el interior del país el plazo promedio es de 48 a 72hs hábiles.']
]

export function FAQ() {
  return (
    <section className="faq section">
      <div className="section-kicker">06 / PREGUNTAS FRECUENTES</div>
      <div className="faq-layout">
        <h2>Lo que querés<br/><span>saber.</span></h2>
        <Accordion className="faq-list">
          {faqs.map(([question, answer], i) => (
            <AccordionItem key={question} value={`faq-${i}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>
                <p>{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
