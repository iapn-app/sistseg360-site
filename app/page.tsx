import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Benefits } from "@/components/benefits"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Benefits />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
