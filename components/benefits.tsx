import {
  Zap,
  Lock,
  BarChart3,
  Headphones,
  Cloud,
  Smartphone,
} from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Troque 10 planilhas por 1 clique",
    description:
      "Elimine tarefas manuais e repetitivas. Nossos sistemas automatizam processos para aumentar sua produtividade.",
  },
  {
    icon: Lock,
    title: "Blindagem de dados nível bancário",
    description:
      "Seus dados protegidos com criptografia de ponta. Backups automáticos e controle de acesso por níveis.",
  },
  {
    icon: BarChart3,
    title: "Decisões baseadas em lucro, não em palpites",
    description:
      "Dashboards em tempo real e relatórios personalizados. Tome decisões baseadas em dados concretos.",
  },
  {
    icon: Headphones,
    title: "Suporte que realmente resolve",
    description:
      "Equipe de suporte pronta para ajudar. Atendimento humanizado via chat, telefone ou e-mail.",
  },
  {
    icon: Cloud,
    title: "100% na Nuvem",
    description:
      "Acesse de qualquer lugar, a qualquer momento. Sem necessidade de instalação ou servidores locais.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Aplicativos nativos para Android e iOS. Gerencie seu negócio direto do celular.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Por que a SistSeg360
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tecnologia que impulsiona resultados
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Combinamos expertise técnica com entendimento profundo do seu negócio 
            para entregar soluções que realmente fazem a diferença.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 rounded-2xl border border-border/50 bg-card p-8 sm:grid-cols-3 sm:p-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary sm:text-5xl">99.9%</p>
            <p className="mt-2 text-muted-foreground">Uptime garantido</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary sm:text-5xl">24/7</p>
            <p className="mt-2 text-muted-foreground">Suporte disponível</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary sm:text-5xl">360°</p>
            <p className="mt-2 text-muted-foreground">Visão completa do negócio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
