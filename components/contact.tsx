"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const whatsappNumber = "5521991678071"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, vi o site da SistSeg360 e gostaria de uma demonstração do sistema para meu negócio.")}`

  return (
    <section id="contato" className="relative py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Entre em Contato
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pronto para transformar sua gestão?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Fale com nossa equipe e descubra como a SistSeg360 pode ajudar 
            seu negócio a crescer com mais eficiência.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Fale com a gente
              </h3>
              <p className="mt-2 text-muted-foreground">
                Nossa equipe está pronta para entender seu negócio e apresentar 
                a melhor solução para suas necessidades.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <a
                    href="mailto:contato@sistseg360.com.br"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    contato@sistseg360.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefone / WhatsApp</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    (21) 99167-8071
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Localização</p>
                  <p className="text-muted-foreground">
                    Atendemos todo o Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <p className="text-sm font-medium text-foreground">
                Resposta garantida em até 24 horas
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Nossa equipe comercial entrará em contato para agendar uma demonstração 
                personalizada do sistema.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border/50 bg-card p-8">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  Mensagem enviada!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Obrigado pelo contato. Nossa equipe retornará em breve.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nome da empresa"
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(21) 99999-9999"
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="segment" className="text-sm font-medium text-foreground">
                    Segmento de interesse
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    required
                    className="flex h-9 w-full rounded-md border border-input bg-secondary/50 px-3 py-1 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="seguranca">Segurança Privada</option>
                    <option value="facilities">Facilities</option>
                    <option value="condominio">Administradora de Condomínios</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos sobre seu negócio e suas necessidades..."
                    rows={4}
                    required
                    className="resize-none bg-secondary/50"
                  />
                </div>

                <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                  {isLoading ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
