import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProductCard } from "./product-card";
import { Button } from "@/components/ui/button";

function FeaturedProducts() {
  return (
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
  )
}

export default FeaturedProducts
