import Image from "next/image"
import { Brain, Activity, LineChart, Users } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  return (
    <>
      <section className="py-24 bg-blue-50" id="features">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Adaptive training visualization"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Breakthrough Technology</h2>
              <p className="text-xl text-muted-foreground">
                Advanced haptic feedback combined with cognitive training exercises to restore touch sensitivity. Our device adapts to your progress, ensuring optimal rehabilitation results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-primary" />
                  <span>Personalized neural rehabilitation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" />
                  <span>Real-time sensory feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold">Track Your Progress</h2>
              <p className="text-xl text-muted-foreground">
                Monitor your rehabilitation journey with detailed analytics and progress reports. See how your sensory perception improves over time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <LineChart className="w-6 h-6 text-primary" />
                  <span>Detailed progress analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  <span>Share results with your healthcare team</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Progress tracking dashboard"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Clinical validation visualization"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Clinically Validated</h2>
              <p className="text-xl text-muted-foreground">
                Developed in partnership with leading medical institutions and validated through extensive clinical studies. Trust in a solution backed by science.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-primary" />
                  <span>Evidence-based approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" />
                  <span>Proven rehabilitation outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
