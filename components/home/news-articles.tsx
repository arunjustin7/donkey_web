"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Milk, Leaf, Heart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function NewsletterPage() {
  const articles = [
    {
      id: 1,
      title: "Native Milk Believes in Bringing Milk That Is Pure",
      description:
        "Antibiotic-and-hormone free milk with nurturing benefits straight to consumer's doorstep. Our cows are cared for with grace fresh at their farm, ensuring the highest quality dairy products.",
      icon: <Milk className="w-5 h-5" />,
      image: "/imgs/don7.png",
    },
    {
      id: 2,
      title: "Native Milk Is A Premium Farm-To-Home A2 Milk Company",
      description:
        "Converting milk from farm to consumers with our own sourcing, processing and last-mile delivery infrastructure. Operating on a D2C subscription model for maximum freshness.",
      icon: <Leaf className="w-5 h-5" />,
      image: "/imgs/don6.png",
    },
    {
      id: 3,
      title: "Native Milk Is Winning Hearts in Mumbai And Pune",
      description:
        "With deep farm linkages and dedicated delivery staff, we deliver more than 50,000 milk bottles monthly. Our range includes hand-churned bilona ghee and premium dairy products.",
      icon: <Heart className="w-5 h-5" />,
      image: "/imgs/don4.png",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF9F6" }}>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/imgs/don8.png"
          alt="Serene farm landscape with donkeys"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#2C3E50" }}>
            News Articles
          </h1>
          <p className="text-lg md:text-xl font-medium" style={{ color: "#D4A017" }}>
            Discover the Latest from Native Milk
          </p>
        </div>
      </div>

      {/* Articles Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card
                className="group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden"
                style={{ backgroundColor: "#F8F9FA" }}
              >
                <CardContent className="p-0">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 p-2 rounded-full" style={{ backgroundColor: "#6B8E23" }}>
                      <div className="text-white">{article.icon}</div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-opacity-80 transition-colors"
                      style={{ color: "#6B8E23" }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "#333333" }}>
                      {article.description}
                    </p>
                    <Button
                      className="w-full group/btn"
                      style={{
                        backgroundColor: "#D4A017",
                        color: "white",
                      }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="py-16" style={{ backgroundColor: "#8cc63f" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Native Milk</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on our premium farm-to-home dairy products, health
            benefits, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 outline-none"
              style={{ backgroundColor: "#F5E9D7" }}
            />
            <Button
              className="px-8 py-3"
              style={{
                backgroundColor: "#D4A017",
                color: "white",
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer
        className="py-8 border-t"
        style={{
          backgroundColor: "#FAF9F6",
          borderColor: "#6B8E23",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Milk className="w-8 h-8" style={{ color: "#6B8E23" }} />
            <span className="text-2xl font-bold" style={{ color: "#6B8E23" }}>
              Native Milk
            </span>
          </div>
          <p className="text-sm" style={{ color: "#333333" }}>
            Premium Farm-to-Home A2 Milk & Dairy Products
          </p>
        </div>
      </footer> */}
    </div>
  )
}
