"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Droplet, TreeDeciduous } from "lucide-react"

const metrics = [
  {
    label: "Carbon Offset",
    value: 2500,
    unit: "kg",
    icon: Leaf,
    color: "bg-green-100 dark:bg-green-900",
  },
  {
    label: "Water Saved",
    value: 15000,
    unit: "L",
    icon: Droplet,
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    label: "Trees Planted",
    value: 500,
    unit: "",
    icon: TreeDeciduous,
    color: "bg-amber-100 dark:bg-amber-900",
  },
]

function SustainabilityMetrics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Sustainable Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to sustainable practices that benefit both our customers and the planet
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`${metric.color} overflow-hidden`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="w-12 h-12 text-[#86C232]" />
                    <div className="text-4xl font-bold">
                      {metric.value.toLocaleString()}
                      <span className="text-2xl">{metric.unit}</span>
                    </div>
                  </div>
                  <div className="text-lg font-medium">{metric.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SustainabilityMetrics
