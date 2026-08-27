'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-provider'

const whatsapp = 'https://wa.me/5491160010784'
const logoUrl = '/logo_nombre.png'

const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [menu, setMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' } // triggers when section is half way down
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-[5vw] py-4 transition-all duration-300 ${menu ? 'bg-background' : 'bg-background/70 backdrop-blur-md border-b border-line'}`}>
      <a href="#inicio" className="block w-[100px] shrink-0" aria-label="SI Logística, inicio">
        <Image src={logoUrl} alt="SI Logística" width={100} height={32} priority sizes="100px" className="h-auto w-full object-contain filter drop-shadow-md" />
      </a>
      
      <nav className={`fixed inset-0 top-[72px] flex flex-col items-start gap-8 bg-background p-[10vw] text-3xl font-bold transition-transform duration-300 md:static md:flex-row md:items-center md:gap-[30px] md:bg-transparent md:p-0 md:text-sm md:font-normal ${menu ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            onClick={() => setMenu(false)}
            className={`transition-all hover:text-orange-500 ${activeSection === link.href.substring(1) ? 'text-orange-500 font-semibold underline decoration-2 underline-offset-4' : 'text-foreground/80'}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2 md:gap-3 z-50">
        <ThemeToggle />
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden" onClick={() => setMenu(!menu)} aria-label="Abrir menú">
          {menu ? <X strokeWidth={1} className="h-5 w-5" /> : <Menu strokeWidth={1} className="h-5 w-5" />}
        </button>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-[var(--orange)] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#cc4500]">
          WhatsApp <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}
