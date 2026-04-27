import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <img
                src="https://hdeuxkoofkdawswvqxny.supabase.co/storage/v1/object/public/logos/Logo%20SistSeg360%20preta.png"
                alt="SistSeg360"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Sistemas de gestão personalizados para transformar a operação do seu negócio.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/sistseg360/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Soluções</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#solucoes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Segurança Privada
                </Link>
              </li>
              <li>
                <Link href="#solucoes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Gestão de Condomínios
                </Link>
              </li>
              <li>
                <Link href="#solucoes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Sistemas Personalizados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Empresa</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#beneficios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#planos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/termos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/lgpd" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  LGPD
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SistSeg360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
