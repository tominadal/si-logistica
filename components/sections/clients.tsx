'use client'

const createLogoSvg = (name: string, font: string, color: string = '#000000') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="200" height="50"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="${font}" font-size="24" font-weight="900" fill="${color}">${name}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function Clients() {
  const logos = [
    { name: 'Movistar', url: createLogoSvg('Movistar', 'Arial, sans-serif', '#019df4') },
    { name: 'TELECOM', url: createLogoSvg('TELECOM', 'Arial Black, sans-serif', '#002672') },
    { name: 'nextel', url: createLogoSvg('nextel', 'Trebuchet MS, sans-serif', '#f58220') },
    { name: 'HUAWEI', url: createLogoSvg('HUAWEI', 'Arial, sans-serif', '#e3001b') },
    { name: 'RICKY SARKANY', url: createLogoSvg('RICKY SARKANY', 'Georgia, serif', '#000000') },
    { name: 'REVER PASS', url: createLogoSvg('REVER PASS', 'Impact, sans-serif', '#d31145') },
    { name: 'Old Bridge', url: createLogoSvg('Old Bridge', 'Times New Roman, serif', '#000000') },
    { name: 'OPQ MANÍ', url: createLogoSvg('OPQ MANÍ', 'Comic Sans MS, cursive', '#009933') },
  ]
  
  // Duplicamos para que la cinta infinita sea fluida
  const repeated = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="py-14 bg-[var(--muted)] overflow-hidden border-b border-[var(--line)]">
      <div 
        className="flex gap-16 w-max items-center"
        style={{ animation: 'marquee 22s linear infinite' }}
      >
        {repeated.map((logo, i) => (
          <img 
            key={`${logo.name}-${i}`} 
            src={logo.url} 
            alt={`Logo de ${logo.name}`} 
            className="h-[30px] md:h-[40px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  )
}
