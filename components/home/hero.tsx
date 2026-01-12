import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#faf7f2]">
      <Image
        src="/imgs/don8.png"
        alt="Serene rural landscape with donkeys"
        width={1920}
        height={600}
        className="absolute left-1/2 top-0 size-full -translate-x-1/2 object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/80 via-[#faf7f2]/50 to-transparent">
        <div className="container flex h-full flex-col justify-center gap-6 py-20">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-[#2C3E50] sm:text-6xl">
            Pure Donkey Milk,
            <br />
            Straight from Nature
          </h1>
          <p className="max-w-xl text-lg text-[#242e37]">
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
  )
}

export default Hero
