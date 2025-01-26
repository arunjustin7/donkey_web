import Image from "next/image"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Health Enthusiast",
        image: "/placeholder.svg?height=100&width=100",
        quote: "Lumina Lactis has transformed my health. The benefits of donkey milk are truly remarkable!",
    },
    {
        name: "Dr. Michael Chen",
        role: "Nutritionist",
        image: "/placeholder.svg?height=100&width=100",
        quote: "As a nutritionist, I highly recommend Lumina Lactis. The scientific backing is impressive.",
    },
    {
        name: "Emma Rodriguez",
        role: "Fitness Trainer",
        image: "/placeholder.svg?height=100&width=100",
        quote: "My clients have seen amazing results with Lumina Lactis. It's a game-changer in nutrition.",
    },
]

export default function Testimonials() {
    return (
        <section className="bg-blue-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="italic">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

