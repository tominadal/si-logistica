import Link from 'next/link'
import { FileQuestion, MoveLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center text-foreground">
      <FileQuestion className="mb-6 h-16 w-16 text-orange-500" />
      <h2 className="mb-2 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">404 - No Encontrado</h2>
      <p className="mb-8 max-w-[500px] text-muted-foreground">
        La página que estás buscando no existe o fue movida a otra dirección.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-background"
      >
        <MoveLeft className="h-4 w-4" />
        Volver al inicio
      </Link>
    </div>
  )
}
