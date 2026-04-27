"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "5521991678071"
  const message = "Olá, vi o site da SistSeg360 e gostaria de uma demonstração do sistema para meu negócio."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
        1
      </span>
    </a>
  )
}
