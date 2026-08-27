import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Configura los datos para enviar a formsubmit de forma segura
    const formData = new URLSearchParams()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string)
    })
    formData.append('_subject', 'Nueva consulta desde SI Logística')
    formData.append('_captcha', 'false')

    // El email de destino está oculto en el servidor
    const formSubmitUrl = 'https://formsubmit.co/ajax/info@silogistica.com.ar'

    const res = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })

    if (!res.ok) {
      throw new Error('Error al enviar a FormSubmit')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error en /api/contact:', error)
    return NextResponse.json(
      { error: 'No se pudo procesar la solicitud' },
      { status: 500 }
    )
  }
}
