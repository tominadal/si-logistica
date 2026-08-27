import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Metrics } from '@/components/sections/metrics'
import { Clients } from '@/components/sections/clients'
import { About } from '@/components/sections/about'
import { Coverage } from '@/components/sections/coverage'
import { Services } from '@/components/sections/services'
import { Marquee } from '@/components/sections/marquee'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <main>
      <div className="grain" />
      <Navbar />
      <Hero />
      <Metrics />
      <Clients />
      <About />
      <Coverage />
      <Services />
      <Marquee />
      <Testimonials />
      <FAQ />
      <Contact />
      
      <div className="relative w-full h-[350px]">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 bg-[#30302f] text-white px-6 py-3 rounded-full shadow-lg font-mono text-[11px] uppercase tracking-widest border border-white/20 whitespace-nowrap">
          Juan B Justo 3460, Ciudadela, Argentina
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.47355152061!2d-58.54471952425958!3d-34.61746405822363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7e55fa43d3b%3A0xb3641775f0a3e875!2sAv.%20Juan%20B.%20Justo%203460%2C%20B1702%20Ciudadela%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-70"
        />
      </div>
      
      <Footer />
    </main>
  )
}
