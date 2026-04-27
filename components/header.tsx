"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#solucoes", label: "Soluções" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#planos", label: "Planos" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Sist<span className="text-primary">Seg</span>360
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#contato">Entrar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#contato">Demonstração Gratuita</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border/40 pt-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="#contato">Entrar</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="#contato">Demonstração Gratuita</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
