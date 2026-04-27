import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'SistSeg360 | Pare de perder dinheiro com gestão amadora',
  description: 'O único ecossistema que integra Segurança Privada, Facilities e Gestão Condominial em uma única tela. Substitua planilhas confusas por automação de elite.',
  keywords: ['sistema de gestão', 'software segurança privada', 'gestão de vigilantes', 'gestão de condomínio', 'SaaS', 'automação empresarial', 'facilities'],
  openGraph: {
    title: 'SistSeg360 | Domine sua operação em 360°',
    description: 'O único ecossistema que integra Segurança Privada, Facilities e Gestão Condominial em uma única tela.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
