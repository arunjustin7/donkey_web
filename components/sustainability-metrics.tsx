"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function SustainabilityMetrics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const metrics = [
    {
      label: "Carbon Offset",
      value: "2,500",
      unit: "kg",
      color: "bg-green-100 dark:bg-green-900",
    },
    {
      label: "Water Saved",
      value: "15,000",
      unit: "L",
      color: "bg-blue-100 dark:bg-blue-900",
    },
    {
      label: "Trees Planted",
      value: "500",
      unit: "",
      color: "bg-amber-100 dark:bg-amber-900",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <Card key={metric.label} className={metric.color}>
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold">
                {metric.value}
                {metric.unit}
              </div>
              <div className="mt-2 text-sm font-medium">{metric.label}</div>
            </motion.div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

