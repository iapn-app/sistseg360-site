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
            Sua empresa sangra dinheiro todo mês.
            <span className="block text-primary">Você só ainda não viu onde.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Chega de gestão no feeling. O SistSeg360 é o SaaS que centraliza tudo — equipes, contratos,
            finanças e clientes — em uma única tela. Enquanto você usa planilha, seu concorrente já automatizou.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href="https://grupoesquematiza.sistseg360.com.br" target="_blank" rel="noopener noreferrer">
                Demonstração Gratuita
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

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
            <div className="aspect-video bg-[#0a0a0f] p-6">
              <div className="grid h-full grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 space-y-3 rounded-xl bg-[#12121a] p-4">
                  <div className="h-8 w-full rounded-lg bg-primary/30" />
                  <div className="h-6 w-3/4 rounded-lg bg-[#1a1a24]" />
                  <div className="h-6 w-full rounded-lg bg-[#1a1a24]" />
                  <div className="h-6 w-5/6 rounded-lg bg-[#1a1a24]" />
                  <div className="h-6 w-full rounded-lg bg-[#1a1a24]" />
                  <div className="mt-auto h-6 w-2/3 rounded-lg bg-[#1a1a24]" />
                </div>
                {/* Main Content */}
                <div className="col-span-3 space-y-4">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-xl bg-[#12121a] p-4">
                      <div className="h-3 w-16 rounded bg-[#1a1a24]" />
                      <div className="mt-2 h-6 w-20 rounded bg-primary/40" />
                      <div className="mt-1 h-2 w-12 rounded bg-green-500/40" />
                    </div>
                    <div className="rounded-xl bg-[#12121a] p-4">
                      <div className="h-3 w-20 rounded bg-[#1a1a24]" />
                      <div className="mt-2 h-6 w-16 rounded bg-primary/30" />
                      <div className="mt-1 h-2 w-10 rounded bg-orange-500/40" />
                    </div>
                    <div className="rounded-xl bg-[#12121a] p-4">
                      <div className="h-3 w-14 rounded bg-[#1a1a24]" />
                      <div className="mt-2 h-6 w-24 rounded bg-primary/20" />
                      <div className="mt-1 h-2 w-8 rounded bg-primary/40" />
                    </div>
                  </div>
                  {/* Chart Area */}
                  <div className="flex-1 rounded-xl bg-[#12121a] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="h-4 w-32 rounded bg-[#1a1a24]" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 rounded bg-[#1a1a24]" />
                        <div className="h-6 w-16 rounded bg-[#1a1a24]" />
                      </div>
                    </div>
                    <div className="flex h-32 items-end gap-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t ${i % 2 === 0 ? "bg-primary/60" : "bg-orange-500/60"}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow Effect */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
