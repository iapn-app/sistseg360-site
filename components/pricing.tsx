import { Check, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Para pequenas empresas começando a digitalização",
    price: "297",
    period: "/mês",
    highlight: false,
    badge: null,
    features: [
      "Até 10 usuários",
      "Módulos essenciais",
      "Relatórios básicos",
      "Suporte por e-mail",
      "Backup diário",
      "App mobile básico",
    ],
  },
  {
    name: "Professional",
    description: "Para empresas em crescimento que precisam de mais recursos",
    price: "597",
    period: "/mês",
    highlight: true,
    badge: "Melhor Custo-Benefício do Mercado",
    features: [
      "Até 50 usuários",
      "Todos os módulos",
      "Relatórios avançados",
      "Suporte prioritário",
      "Backup em tempo real",
      "App mobile completo",
      "Integrações API",
      "Treinamento online",
    ],
  },
  {
    name: "Enterprise",
    description: "Para grandes operações com necessidades específicas",
    price: "Sob consulta",
    period: "",
    highlight: false,
    badge: null,
    features: [
      "Usuários ilimitados",
      "Módulos personalizados",
      "Relatórios sob medida",
      "Suporte dedicado 24/7",
      "Infraestrutura dedicada",
      "App white-label",
      "Integrações customizadas",
      "Treinamento presencial",
      "SLA garantido",
    ],
    extraInfo: "White-label disponível para grandes frotas e grupos de segurança.",
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Planos e Preços
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Preços transparentes, sem surpresas. Todos os planos incluem atualizações 
            gratuitas e acesso a novos recursos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-primary bg-card shadow-xl shadow-primary/10"
                  : "border-border/50 bg-card/50 hover:border-border hover:bg-card"
              }`}
            >
              {plan.highlight && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    <Award className="h-3.5 w-3.5" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price.includes("consulta") ? "" : "R$"}
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full ${
                      plan.highlight ? "bg-primary" : "bg-primary/20"
                    }`}>
                      <Check className={`h-3 w-3 ${
                        plan.highlight ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.extraInfo && (
                <div className="mt-6 rounded-lg bg-primary/10 p-3">
                  <p className="text-xs text-primary">{plan.extraInfo}</p>
                </div>
              )}

              <div className="mt-8">
                <Button
                  className="w-full"
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contato">
                    {plan.price.includes("consulta") ? "Fale Conosco" : "Começar Agora"}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Garantia de 30 dias. Se não ficar satisfeito, devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  )
}
