"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { Factory, Leaf, Shield, Heart } from "lucide-react"

// SVG Splash component for reusability
const MilkSplash = ({ className = "", delay = 0 }) => (
  <motion.path
    className={className}
    d="M0,0 C25,-10 50,-10 75,0 C100,10 125,10 150,0"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{
      pathLength: 1,
      opacity: [0, 0.5, 0],
      scale: [0.8, 1.1, 0.9],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    stroke="white"
    strokeWidth="2"
    fill="none"
  />
)

const features = [
  {
    title: "Premium Quality",
    description: "Sourced from our carefully nurtured donkeys, ensuring the highest quality milk.",
    icon: Shield,
    position: "top-left",
  },
  {
    title: "Eco-Conscious",
    description: "Sustainable farming practices that respect nature and our animals.",
    icon: Leaf,
    position: "top-right",
  },
  {
    title: "Artisanal Process",
    description: "Traditional methods combined with modern quality standards.",
    icon: Factory,
    position: "bottom-left",
  },
  {
    title: "Made with Love",
    description: "Every bottle is crafted with dedication and care for your wellbeing.",
    icon: Heart,
    position: "bottom-right",
  },
]

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const bottleY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const splashY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const springConfig = { damping: 15, stiffness: 100 }
  const bottleYSpring = useSpring(bottleY, springConfig)
  const splashYSpring = useSpring(splashY, springConfig)

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.className =
      "fixed w-4 h-4 bg-primary/20 rounded-full pointer-events-none blur-lg transition-transform duration-200 z-50"
    document.body.appendChild(cursor)

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", updateCursor)
    return () => {
      window.removeEventListener("mousemove", updateCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-background to-background/95"
      style={{
        backgroundImage:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09PT09PT09PSKb78gAAAABXRSTlMAAQICAwNk6/jqAAAAMElEQVQ4y2NgGAWjYBSMAhQ4AMQ/gPgvEP8H4v9A/B+I/wHxXyD+B8T/gfgHEAMAszwMYP6DAT8AAAAASUVORK5CYII=')",
        backgroundSize: "100px 100px",
        backgroundOpacity: "0.02",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Key Facts About Our Milk
          </h2>
          <p className="text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Discover the pure, natural goodness of donkey milk. Rich in nutrients and carefully crafted for your
            wellbeing.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {/* Center bottle */}
          <div className="lg:col-span-3 order-first lg:order-none">
            <motion.div
              className="relative w-full max-w-[380px] mx-auto"
              style={{ y: prefersReducedMotion ? 0 : bottleYSpring }}
            >
              <motion.div
                animate={{
                  y: prefersReducedMotion ? 0 : [-8, 0, -8],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Premium donkey milk bottle"
                  width={380}
                  height={380}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>

              {/* Milk splashes */}
              <motion.div className="absolute inset-0 z-0" style={{ y: prefersReducedMotion ? 0 : splashYSpring }}>
                <svg className="w-full h-full">
                  <MilkSplash delay={0} />
                  <MilkSplash delay={0.5} className="rotate-45" />
                  <MilkSplash delay={1} className="rotate-90" />
                  <MilkSplash delay={1.5} className="rotate-135" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Feature cards */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`
                bg-white rounded-xl p-6 shadow-lg hover:shadow-xl
                transition-all duration-300
                border border-border/5
                backdrop-blur-sm
                ${index === 0 ? "lg:col-start-1" : ""}
                ${index === 1 ? "lg:col-start-3" : ""}
                ${index === 2 ? "lg:col-start-1" : ""}
                ${index === 3 ? "lg:col-start-3" : ""}
              `}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-8 h-8 mb-4"
              >
                <feature.icon className="w-full h-full stroke-2 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-base text-[#666666] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}

          {/* Blueberry decoration */}
          <motion.div
            className="absolute -top-12 -right-12 w-32 h-32 hidden lg:block"
            animate={{
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/placeholder.svg"
              alt="Fresh blueberries"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

