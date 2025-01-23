import Navbar from '@/components/Navbar'
import { Hero } from "@/components/hero"
import { Press } from "@/components/press"
import { Features } from "@/components/features"
import { OrderCta } from "@/components/ordercta"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Press />
      <Features />
      <OrderCta />
      <Footer />
    </main>
  )
}


