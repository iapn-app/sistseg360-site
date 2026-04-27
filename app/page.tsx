import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Benefits } from "@/components/benefits"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Testimonials />
        <Benefits />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
