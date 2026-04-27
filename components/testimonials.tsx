import { Star } from "lucide-react"

const testimonials = [
  {
    photo: "https://hdeuxkoofkdawswvqxny.supabase.co/storage/v1/object/public/assets/William.jpg",
    text: "Antes vivíamos no caos — planilhas, sistemas isolados que não conversavam, informação espalhada em WhatsApp. Hoje tenho tudo em um lugar só: escalas, ocorrências, financeiro e relatórios em tempo real. O SistSeg360 transformou a forma como gerenciamos nossa operação.",
    name: "William",
    role: "CEO – Grupo Esquematiza | Corporate Security • Risk Assessment | Public Safety Senior Officer (Major)",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 flex justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative max-w-2xl w-full rounded-2xl border border-border/50 bg-card p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-lg leading-relaxed">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
