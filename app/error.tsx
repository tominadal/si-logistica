'use client'

import { useEffect } from 'react'
import { AlertTriangle, MoveLeft, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Aquí se podrían loggear los errores a un servicio externo
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center text-foreground">
      <AlertTriangle className="mb-6 h-16 w-16 text-orange-500" />
      <h2 className="mb-2 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">Algo salió mal</h2>
      <p className="mb-8 max-w-[500px] text-muted-foreground">
        Ocurrió un error inesperado. Por favor, intentá de nuevo o volvé al inicio.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-background"
        >
          <RefreshCcw className="h-4 w-4" />
          Reintentar
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground bg-transparent px-6 py-3 font-bold text-foreground transition-colors hover:bg-foreground hover:text-background focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
        >
          <MoveLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
