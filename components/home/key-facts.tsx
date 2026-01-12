"use client"

import { Factory, Leaf, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const facts1 = [
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
]

const facts2 = [
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

function KeyFacts() {
  return (
    <section className="py-10x bg-[#F8F9FA] overflow-hidden">
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

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            {facts1.map((fact, index) => (
              <motion.div
                key={fact.title}
                custom={fact.position}
                variants={cardVariants}
                className={`mb-6 md:mb-20 bg-white rounded-xl p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#86C232]/10 p-2">
                    <fact.icon className="w-6 h-6 text-[#86C232]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#5D4037] mb-2">{fact.title}</h3>
                    <p className="text-[#666666] text-sm leading-relaxed">{fact.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-6 md:mb-0">
            <Image
              src="/last.png"
              alt="Donkey milk bottle with cute donkeys"
              width={600}
              height={600}
              className="w-full max-w-[160px] mx-auto"
              priority
            />
            <Button size="lg" className="block mx-auto bg-[#86C232] hover:brightness-110 transition-all">
              Order Now
            </Button>
          </div>

          <div>
            {facts2.map((fact, index) => (
              <motion.div
                key={fact.title}
                custom={fact.position}
                variants={cardVariants}
                className={`mb-6 md:mb-20 bg-white rounded-xl p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#86C232]/10 p-2">
                    <fact.icon className="w-6 h-6 text-[#86C232]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#5D4037] mb-2">{fact.title}</h3>
                    <p className="text-[#666666] text-sm leading-relaxed">{fact.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFacts
