export function Marquee() {
  const words = ['RECEPCIÓN', 'ALMACENAJE', 'DISTRIBUCIÓN', 'ATENCIÓN']
  // Duplicamos varias veces para asegurar que llene pantallas muy anchas y el loop -50% sea perfecto
  const repeated = [...words, ...words, ...words, ...words]
  
  return (
    <section className="marquee-section">
      <div className="marquee">
        {repeated.map((word, i) => (
          <span key={i} className="flex items-center gap-[40px]">
            <span>{word}</span>
            <i>*</i>
          </span>
        ))}
      </div>
    </section>
  )
}
