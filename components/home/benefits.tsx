"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Heart, Brain, Sparkles, Baby, Sun, Shield } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Heart Health",
    description: "Rich in omega-3 fatty acids supporting cardiovascular health",
  },
  {
    icon: Brain,
    title: "Cognitive Function",
    description: "Essential nutrients for brain development and function",
  },
  {
    icon: Sparkles,
    title: "Anti-Aging",
    description: "Natural compounds that help maintain youthful skin",
  },
  {
    icon: Baby,
    title: "Infant-Friendly",
    description: "Closest to human breast milk in composition",
  },
  {
    icon: Sun,
    title: "Energy Boost",
    description: "Natural vitamins and minerals for sustained energy",
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "Strengthens natural defense mechanisms",
  },
]

function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="pt-24  bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Health Benefits</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why donkey milk has been treasured for centuries as a natural source of wellness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <benefit.icon className="w-12 h-12 text-[#86C232]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>

                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#86C232]/5 to-transparent rounded-lg -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
    </div>
    </section>
  )
}

export default Benefits
