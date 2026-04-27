import { Shield, Building2, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    icon: Shield,
    title: "Segurança Privada",
    status: "Em breve",
    statusColor: "bg-primary",
    description:
      "Escalas inteligentes, rondas em tempo real e fechamento de folha sem erros. Sua equipe monitorada, seu lucro protegido.",
    features: [
      "Gestão de escalas e plantões",
      "Controle de ponto eletrônico",
      "Registro de ocorrências",
      "Gestão de equipamentos",
      "Relatórios gerenciais",
      "App mobile para vigilantes",
    ],
    disabled: true,
  },
  {
    icon: Building2,
    title: "Gestão de Condomínios",
    status: "Em breve",
    statusColor: "bg-primary",
    description:
      "O fim do caos na comunicação e nas reservas. Integração nativa com sistemas de segurança para uma gestão de alto nível.",
    features: [
      "Controle financeiro completo",
      "Reserva de áreas comuns",
      "Gestão de assembleias",
      "Portal do morador",
      "Controle de acesso",
      "Gestão de manutenções",
    ],
    disabled: false,
  },
  {
    icon: Briefcase,
    title: "Personalizado",
    status: "Sob consulta",
    statusColor: "bg-muted-foreground",
    description:
      "Criamos do seu jeito. Seu nicho, suas regras, sua operação — desenvolvemos uma solução sob medida para o seu negócio.",
    features: [
      "Análise de requisitos",
      "Desenvolvimento personalizado",
      "Integração com sistemas existentes",
      "Treinamento completo",
      "Suporte dedicado",
      "Atualizações contínuas",
    ],
    disabled: false,
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nossas Soluções
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sistemas prontos e sob medida
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Oferecemos soluções prontas para segmentos específicos e também desenvolvemos 
            sistemas personalizados para atender às necessidades únicas do seu negócio.
          </p>
        </div>

        {/* Diferencial de Integração */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-sm font-semibold text-primary">O diferencial que faz a diferença</p>
          <p className="mt-2 text-muted-foreground">
            Para empresas de segurança, o maior problema é a operação não falar com o financeiro. Para condomínios, é não ter visibilidade do que acontece no plantão. A <span className="font-semibold text-foreground">SistSeg360</span> elimina esses gargalos integrando toda a operação em uma única plataforma — seja você gestor de uma empresa de segurança ou administrador de um condomínio.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 ${solution.disabled ? "opacity-60 grayscale" : "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"}`}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <solution.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Status Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
                <span className={`h-2 w-2 rounded-full ${solution.statusColor}`} />
                <span className="text-xs font-medium text-muted-foreground">
                  {solution.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
              <p className="mt-3 text-muted-foreground">{solution.description}</p>

              {/* Features List */}
              <ul className="mt-6 space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <Button variant="outline" className="w-full gap-2" asChild>
                  <Link href="#planos">
                    Saber mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Hover Gradient */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
