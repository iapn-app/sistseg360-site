"use client"

import { useState } from "react"
import { Check, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plansSeguranca = [
  {
    name: "Essencial",
    description: "Para empresas começando a digitalizar a operação",
    price: "497",
    highlight: false,
    badge: null,
    features: [
      "Até 20 usuários",
      "Módulos operacionais essenciais",
      "Rondas e ocorrências",
      "App mobile para vigilantes",
      "Relatórios básicos",
      "Suporte por e-mail",
      "Backup diário",
    ],
  },
  {
    name: "Operacional",
    description: "Para empresas em crescimento que precisam de controle total",
    price: "897",
    highlight: true,
    badge: "Mais Popular",
    features: [
      "Até 100 usuários",
      "Todos os módulos",
      "Escalas inteligentes",
      "Financeiro completo",
      "Relatórios avançados",
      "Suporte prioritário",
      "Backup em tempo real",
      "App mobile completo",
      "Integrações API",
    ],
  },
  {
    name: "Corporativo",
    description: "Para grandes operações com necessidades específicas",
    price: "Sob consulta",
    highlight: false,
    badge: null,
    features: [
      "Usuários ilimitados",
      "Módulos personalizados",
      "White-label disponível",
      "Suporte dedicado 24/7",
      "SLA garantido",
      "Treinamento presencial",
      "Infraestrutura dedicada",
    ],
  },
]

const plansCondominio = [
  {
    name: "Básico",
    description: "Para um condomínio que quer sair do papel e do WhatsApp",
    price: "197",
    highlight: false,
    badge: null,
    features: [
      "1 condomínio",
      "Portal do síndico",
      "Controle de visitantes",
      "Ocorrências",
      "Rondas de segurança",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Gestor",
    description: "Para gestores que administram múltiplos condomínios",
    price: "397",
    highlight: true,
    badge: "Mais Popular",
    features: [
      "Até 5 condomínios",
      "Todos os módulos do Básico",
      "Reserva de áreas comuns",
      "Gestão de correspondências",
      "Relatórios gerenciais",
      "Suporte prioritário",
      "App para moradores",
    ],
  },
  {
    name: "Administradora",
    description: "Para administradoras com grande volume de condomínios",
    price: "Sob consulta",
    highlight: false,
    badge: null,
    features: [
      "Condomínios ilimitados",
      "White-label disponível",
      "Suporte dedicado 24/7",
      "Integrações personalizadas",
      "SLA garantido",
    ],
  },
]

export function Pricing() {
  const [segment, setSegment] = useState<"seguranca" | "condominio">("seguranca")

  const plans = segment === "seguranca" ? plansSeguranca : plansCondominio

  return (
    <section id="planos" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Planos e Preços
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Preços transparentes, sem surpresas. Sem fidelidade, sem carência — cancele quando quiser. Queremos ser parceiros do seu negócio, não te prender em contrato. Todos os planos incluem atualizações gratuitas e acesso a novos recursos.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-xl border border-border/50 bg-secondary p-1">
            <button
              onClick={() => setSegment("seguranca")}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                segment === "seguranca"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Empresa de Segurança
            </button>
            <button
              onClick={() => setSegment("condominio")}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                segment === "condominio"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Condomínio
            </button>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-primary/30 bg-primary/5 px-6 py-4 text-center">
          <p className="text-sm font-medium text-primary">
            Implantação avaliada em R$2.000 inclusa gratuitamente em todos os planos · Primeiros 3 meses com 50% de desconto · Sem fidelidade, cancele quando quiser
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          key={segment}
          className="mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-300"
          style={{ animation: "fadeIn 0.3s ease" }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-primary bg-card shadow-xl shadow-primary/10"
                  : "border-border/50 bg-card/50 hover:border-border hover:bg-card"
              }`}
            >
              {plan.badge && (
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
                  {plan.price === "Sob consulta" ? (
                    <span className="text-3xl font-bold text-foreground">Sob consulta</span>
                  ) : (
                    <>
                      <span className="text-sm font-medium text-muted-foreground">R$</span>
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/mês</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
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

              <div className="mt-8">
                <Button
                  className="w-full"
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contato">
                    {plan.price === "Sob consulta" ? "Fale Conosco" : "Começar Agora"}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
