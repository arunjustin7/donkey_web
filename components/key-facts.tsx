"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Factory, Leaf, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const facts = [
  {
    title: "In-House Production",
    text: "Our farm and processing facility are integrated, optimizing quality control and ensuring the freshest product delivery.",
    icon: Factory,
    position: "top-left",
  },
  {
    title: "Eco-Friendly Brand",
    text: "Located in one of the most pristine regions, our farm maintains the highest environmental standards.",
    icon: Leaf,
    position: "top-right",
  },
  {
    title: "Quality Guarantee",
    text: "Regular testing in our accredited laboratory ensures consistent quality and safety standards.",
    icon: Shield,
    position: "bottom-left",
  },
  {
    title: "Made with Care",
    text: "We are passionate about our craft, constantly improving to deliver the finest donkey milk products.",
    icon: Heart,
    position: "bottom-right",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: (position: string) => ({
    opacity: 0,
    x: position.includes("left") ? -50 : 50,
    y: position.includes("top") ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function KeyFacts() {
  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] font-bold tracking-[1px] text-[#5D4037] mb-4"
          >
            Key Facts About Our Donkey Milk
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] leading-[1.6] text-[#666666] max-w-[800px] mx-auto"
          >
            Pure donkey milk and wellness products - nature's gift for health and vitality. Rich in nutrients that
            support overall wellbeing and skin health.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          <div className="lg:col-span-3 order-2 lg:order-none">
            <div className="relative max-w-[400px] mx-auto">
              <Image
                src="/placeholder.svg"
                alt="Donkey milk bottle"
                width={400}
                height={600}
                className="relative z-10"
              />
              {/* Milk splash effects */}
              <div className="absolute inset-0 z-0">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-white/20 blur-xl rounded-full"
                />
              </div>
              <motion.div whileHover={{ scale: 1.05 }} className="mt-8 text-center">
                <Button size="lg" className="bg-[#86C232] hover:brightness-110 transition-all">
                  Order Now
                </Button>
              </motion.div>
            </div>
          </div>

          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              custom={fact.position}
              variants={cardVariants}
              className={`
                bg-white rounded-xl p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)]
                hover:shadow-lg transition-shadow duration-300
                ${index === 0 ? "lg:col-start-1" : ""}
                ${index === 1 ? "lg:col-start-3" : ""}
                ${index === 2 ? "lg:col-start-1" : ""}
                ${index === 3 ? "lg:col-start-3" : ""}
              `}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#4A90E2]/10 p-2">
                  <fact.icon className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#5D4037] mb-2">{fact.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{fact.text}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 hidden lg:block">
            <Image
              src="/placeholder.svg"
              alt="Decorative blueberries"
              width={120}
              height={120}
              className="opacity-50"
            />
          </div>

          {/* Connecting lines */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg className="w-full h-full">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M300,200 L500,200 M700,200 L900,200"
                stroke="#E0E0E0"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

