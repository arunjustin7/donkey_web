import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { SustainabilityMetrics } from "@/components/sustainability-metrics"
import { HealthChallenges } from "@/components/health-challenges"
import { FAQSection } from "@/components/faq-section"
import { NewsArticles } from "@/components/news-articles"
import { TestimonialSection } from "@/components/testimonial-section"
import { KeyFacts } from "@/components/key-facts"
import { ProductShowcase } from "@/components/product-showcase"
import { MilkFacts } from "@/components/milk-facts"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-[#faf7f2]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serene%20Rural%20Landscape%20With%20Donkeys%20And%20Farmhouse%20(1).jpg-NyqIOXAS0Lw6YbecADuGJYoLZocLvi.jpeg"
          alt="Serene rural landscape with donkeys"
          width={1920}
          height={600}
          className="absolute left-1/2 top-0 h-full w-[90%] -translate-x-1/2 object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/95 via-[#faf7f2]/70 to-transparent">
          <div className="container flex h-full flex-col justify-center gap-6 py-20">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-[#2C3E50] sm:text-6xl">
              Pure Donkey Milk,
              <br />
              Straight from Nature
            </h1>
            <p className="max-w-xl text-lg text-[#5D6D7E]">
              Experience the remarkable benefits of pure donkey milk. Ethically sourced from our family farm and
              naturally nurturing.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#8CC63F] hover:bg-[#7AB62F] text-white" asChild>
                <Link href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#8CC63F] text-[#8CC63F] hover:bg-[#8CC63F] hover:text-white"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">Lab tested and certified pure</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Truck className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Fresh to your doorstep</p>
              </div>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 lg:col-span-1">
            <CardContent className="flex items-center gap-4 p-6">
              <Leaf className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Sustainable Practices</h3>
                <p className="text-sm text-muted-foreground">Eco-friendly farming</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <Button variant="ghost" asChild>
              <Link href="/products">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              name="Pure Donkey Milk"
              description="Fresh raw milk, ethically sourced"
              price={12.99}
              image="/placeholder.svg"
            />
            <ProductCard
              name="Milk Bath Soap"
              description="Gentle cleansing with natural ingredients"
              price={8.99}
              image="/placeholder.svg"
            />
            <ProductCard
              name="Face Cream"
              description="Anti-aging moisturizer"
              price={29.99}
              image="/placeholder.svg"
            />
            <ProductCard
              name="Powdered Milk"
              description="Long-lasting and convenient"
              price={19.99}
              image="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* Add Product Showcase section */}
      <ProductShowcase />

      {/* Health Challenges Section */}
      <HealthChallenges />
      {/* Add Key Facts section after Health Challenges */}
      <KeyFacts />

      {/* Subscription Plans */}
      <section className="container">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Flexible Subscriptions</h2>
            <p className="mt-2 text-muted-foreground">Choose the perfect plan for your needs</p>
          </div>
          <SubscriptionPlans />
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="container">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Impact</h2>
            <p className="mt-2 text-muted-foreground">Making a difference with every purchase</p>
          </div>
          <SustainabilityMetrics />
        </div>
      </section>

      {/* Add News Articles and Testimonial sections before FAQ */}
      <NewsArticles />
      <TestimonialSection />

      {/* Add the FAQ section and Milk Facts */}
      <FAQSection />
      <MilkFacts />
    </div>
  )
}

