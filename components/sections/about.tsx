import { MoveRight } from 'lucide-react'

export function About() {
  return (
    <section id="nosotros" className="intro section">
      <div className="section-kicker">01 / NOSOTROS</div>
      <div>
        <h2>Todo lo que necesitás<br /><span>para la logística.</span></h2>
        <p>Somos una empresa con trabajo y responsabilidad supimos ganar un lugar en el rubro del transporte. Desde nuestro comienzo, crecimos junto a nuestros clientes cubriendo y adaptándonos a sus necesidades en logística y distribución, siendo versátiles y competitivos ya que al ser una empresa familiar tenemos la ventaja de no tercerizar nuestro servicio, esto tiene como prioridad tener el menor costo y la mayor rentabilidad para nuestros clientes.</p>
        <a href="#contacto" className="text-link">Conocé nuestra forma de trabajar <MoveRight strokeWidth={1} className="h-4 w-4" /></a>
      </div>
    </section>
  )
}
