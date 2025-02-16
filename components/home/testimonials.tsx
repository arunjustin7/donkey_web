"use client"
import Image from "next/image"
import { Minus } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    content:
      "I have been consuming Native A2 milk since 3 months and I am happy customer of Native milk. Delivery service is also good. I feel light after having this milk as compared to regular milk. Consulted my doctor also before consuming it so thumbs up to this product.",
    author: "Bushra",
    avatar: "/placeholder.svg",
  },
]

function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-[1280px] mx-auto px-4">
        <h2 className="text-center mb-12 text-[32px] font-semibold text-[rgb(17,24,39)]">Testimonial</h2>
        <Carousel className="relative max-w-[800px] mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center text-center px-4 md:px-8">
                  <p className="text-[14px] leading-[1.6] text-[rgb(55,65,81)] max-w-[600px] mb-8">
                    {testimonial.content}
                  </p>
                  <div className="w-12 h-12 rounded-full overflow-hidden relative mb-2">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-medium text-[rgb(55,65,81)]">{testimonial.author}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 w-10 h-10 rounded-full bg-black text-white hover:bg-black/90">
            <Minus className="h-4 w-4" />
          </CarouselPrevious>
          <CarouselNext className="absolute -right-12 w-10 h-10 rounded-full bg-black text-white hover:bg-black/90">
            <Minus className="h-4 w-4" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
