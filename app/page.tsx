import Image from "next/image"
import { Button } from "@/components/ui/button"
import Testimonials from "../components/testimonial"
import ContactForm from "../components/contact-us"

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Discover the Power of Nature's Perfect Milk</h1>
          <p className="text-xl mb-8">Experience the unique health benefits of premium donkey milk</p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">Explore Our Products</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Pure"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Pure & Natural</h2>
            <p>Ethically sourced from happy, healthy donkeys</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Nutritious"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Highly Nutritious</h2>
            <p>Packed with essential vitamins and minerals</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Scientifically Proven"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Scientifically Proven</h2>
            <p>Backed by extensive research and studies</p>
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-center">Why Choose Lumina Lactis?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Highest quality donkey milk available</li>
            <li>Ethical farming practices ensuring animal welfare</li>
            <li>Comprehensive health benefits for various conditions</li>
            <li>Scientifically validated nutritional profile</li>
            <li>Transparent production process from farm to bottle</li>
          </ul>
        </section>
      </div>

      <Testimonials />
      <ContactForm />
    </div>
  )
}

