import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const whatsapp = 'https://wa.me/5491160010784'
const logoUrl = '/logo.png'

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:items-center justify-between gap-10 bg-[#30302f] text-[#f2f2ee] p-[32px_8vw]">
      <div className="flex flex-col gap-4">
        <a href="#inicio" className="brand" aria-label="SI Logística, inicio">
          <Image src={logoUrl} alt="SI Logística" width={60} height={32} priority sizes="60px" className="object-contain filter grayscale" />
        </a>
        <p className="text-[11px] opacity-60">© {new Date().getFullYear()} SI Logística. Hecho para mover.</p>
      </div>
      
      <div className="flex flex-1 justify-around text-[13px] opacity-80 font-mono">
        <a href="tel:+541160010784" className="hover:text-[var(--orange)] transition-colors">(011) 15 6001 0784</a>
        <a href="mailto:info@silogistica.com.ar" className="hover:text-[var(--orange)] transition-colors">info@silogistica.com.ar</a>
      </div>

      <div className="footer-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href={whatsapp} className="footer-wa hover:opacity-80 transition-opacity">WhatsApp <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" /></a>
      </div>
    </footer>
  )
}
