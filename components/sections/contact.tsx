'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({ 
  name: z.string().min(2, 'Ingresá tu nombre'), 
  email: z.string().email('Revisá tu email'), 
  phone: z.string().min(8, 'Ingresá un teléfono'), 
  service: z.string().min(1, 'Elegí un servicio'), 
  message: z.string().min(10, 'Contanos un poco más'), 
  website: z.string().max(0).optional() 
})
type FormData = z.infer<typeof schema>

function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) })
  const [state, setState] = useState<'idle' | 'success' | 'error'>('idle')
  
  const submit = async (data: FormData) => { 
    try { 
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      })
      if (!res.ok) throw new Error('submit')
      setState('success')
      reset() 
    } catch { 
      setState('error') 
    } 
  }
  
  return (
    <form onSubmit={handleSubmit(submit)} className="contact-form" noValidate>
      <input {...register('website')} tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot" />
      <div className="form-grid">
        {([['name', 'Nombre', 'text'], ['email', 'Email', 'email'], ['phone', 'Teléfono', 'tel']] as const).map(([key, label, type]) => (
          <label key={key}>
            <span>{label}</span>
            <input type={type} {...register(key)} aria-invalid={!!errors[key]} placeholder={label} />
            {errors[key] && <small>{errors[key]?.message}</small>}
          </label>
        ))}
        <label>
          <span>Tipo de Servicio</span>
          <select {...register('service')} defaultValue="">
            <option value="" disabled>Seleccioná una opción</option>
            <option>Mudanza</option>
            <option>Logística y distribución</option>
            <option>Almacenaje</option>
          </select>
          {errors.service && <small>{errors.service.message}</small>}
        </label>
        <label className="full">
          <span>Qué desea enviar</span>
          <input {...register('message')} placeholder="Contanos qué necesitás trasladar" aria-invalid={!!errors.message} />
          {errors.message && <small>{errors.message.message}</small>}
        </label>
      </div>
      <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-4 text-[14px] font-bold text-white transition-colors hover:bg-[#cc4500] mt-8 border-0 cursor-pointer disabled:opacity-50">
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'} <ArrowUpRight strokeWidth={1} className="h-4 w-4" />
      </button>
      {state === 'success' && <p className="form-status success">Gracias. Recibimos tu consulta y te contactaremos pronto.</p>}
      {state === 'error' && <p className="form-status error">No pudimos enviar el formulario. Escribinos por WhatsApp.</p>}
    </form>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="contact section">
      <div className="section-kicker">04 / CONTACTO</div>
      <div className="contact-layout">
        <div>
          <h2>Hagamos que<br /><span>suceda.</span></h2>
          <p>Contanos qué necesitás. Nuestro equipo está listo para ayudarte.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
