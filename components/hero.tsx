import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Building2, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Novo: Sistema para Condomínios em breve
            </span>
          </div>

          {/* Headline - Copy Agressiva */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Você sabe o que está acontecendo
            <span className="block text-primary">agora no seu posto?</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            O SistSeg360 é o sistema que dá visibilidade total para empresas de segurança privada e administradoras de condomínio — rondas, escalas, ocorrências e relatórios em tempo real. Sem papel. Sem WhatsApp. Sem surpresas.
          </p>


          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Segurança Privada</p>
                <p className="text-xs text-muted-foreground">Sistema ativo</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Condomínios</p>
                <p className="text-xs text-muted-foreground">Em desenvolvimento</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview - Mockup Realista */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-muted-foreground">dashboard.sistseg360.com.br</span>
            </div>
            <div className="bg-[#0a0a0f] p-4">
              <img
                src="https://hdeuxkoofkdawswvqxny.supabase.co/storage/v1/object/public/assets/Dashboard%20Sistseg360%20demo.png"
                alt="Dashboard SistSeg360"
                className="w-full object-contain"
              />
            </div>
          </div>
          {/* Glow Effect */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
