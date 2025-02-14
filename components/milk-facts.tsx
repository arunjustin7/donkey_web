"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Leaf, Droplets, ShieldCheck, Apple } from "lucide-react"

const facts = [
  {
    title: "Farm Fresh Quality",
    description: "Our milk comes directly from our sustainable farm, ensuring the highest quality and freshness.",
    icon: ShieldCheck,
  },
  {
    title: "Natural Processing",
    description: "We use minimal processing techniques to maintain the natural goodness of our milk.",
    icon: Droplets,
  },
  {
    title: "Sustainable Practices",
    description: "Our farm implements eco-friendly practices to protect the environment and ensure animal welfare.",
    icon: Leaf,
  },
  {
    title: "Rich in Nutrients",
    description: "Every bottle is packed with essential nutrients for a healthy lifestyle.",
    icon: Apple,
  },
]

export function MilkFacts() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#333333] mb-12"
        >
          Facts About Our Milk
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div className="w-full lg:w-1/2 relative" style={{ y }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download__11_-removebg-4F28IbC1GXLL3Dsf1bic8SAjWIvRgP.png"
                alt="Donkey milk bottle with cute donkeys"
                width={600}
                height={600}
                className="w-full max-w-[400px] mx-auto"
                priority
              />

              {/* Animated milk drops */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white/10 blur-2xl rounded-full"
              />
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-[#FFF8E7] rounded-lg transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#4CAF50]/10 p-2">
                      <fact.icon className="w-5 h-5 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="text-[#4CAF50] text-lg font-semibold mb-2">{fact.title}</h3>
                      <p className="text-[#666666] text-sm leading-relaxed">{fact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

