"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const skinConditions = [
  {
    title: "Eczema",
    description: "Dry, itchy, and inflamed skin causing discomfort",
    image: "/key.mp4",
  },
  {
    title: "Psoriasis",
    description: "Scaly patches causing irritation and inflammation",
    image: "/key.mp4",
  },
  {
    title: "Premature Aging",
    description: "Early signs of aging and loss of skin elasticity",
    image: "/key.mp4",
  },
]

const painPoints = [
  "Constant itching and discomfort",
  "Expensive specialized products",
  "Temporary relief from conventional treatments",
  "Side effects from chemical ingredients",
  "Limited natural alternatives",
]

const dairySensitivities = [
  { type: "Lactose Intolerance", percentage: 65 },
  { type: "Milk Protein Allergy", percentage: 35 },
  { type: "Digestive Issues", percentage: 45 },
]

function HealthChallenges() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Modern Health Challenges of human</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how donkey milk provides natural solutions to common health concerns that many people face today.
          </p>
        </motion.div>

        <Tabs defaultValue="skin" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto">
            <TabsTrigger value="skin">Skin Health</TabsTrigger>
            <TabsTrigger value="health">Health Concerns</TabsTrigger>
            <TabsTrigger value="solutions">Solutions</TabsTrigger>
          </TabsList>

          {/* Skin Health Tab */}
          <TabsContent value="skin" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative rounded-xl">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {skinConditions.map((condition, index) => (
                        <CarouselItem key={index}>
                          <video autoPlay controls={false} loop muted playsInline>
                            <source src={condition.image} type="video/mp4" />
                          </video>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                  </Carousel>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-primary/10 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-2">67% of people struggle with sensitive skin conditions</h3>
                  <p className="text-muted-foreground">
                    Common skin concerns affect millions worldwide, impacting both physical comfort and emotional
                    well-being.
                  </p>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Common Pain Points</h4>
                    <ul className="space-y-3">
                      {painPoints.map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Health Concerns Tab */}
          <TabsContent value="health" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Dairy Sensitivity Comparison</h3>
                  <div className="space-y-4">
                    {dairySensitivities.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.type}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <blockquote className="text-lg italic border-l-4 border-primary pl-4">
                    "We're seeing a significant rise in lactose intolerance and dairy sensitivities globally. This has
                    created a pressing need for alternative solutions that are both natural and effective."
                    <footer className="mt-2 text-sm text-muted-foreground">- Dr. Sarah Mitchell, Nutritionist</footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Solutions Tab */}
          <TabsContent value="solutions" className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Natural vs. Conventional Solutions</h3>
                <Accordion type="single" collapsible>
                  <AccordionItem value="ingredients">
                    <AccordionTrigger>Common Chemical Ingredients</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li>Parabens - Synthetic preservatives</li>
                        <li>Sulfates - Harsh cleansing agents</li>
                        <li>Phthalates - Artificial fragrances</li>
                        <li>Synthetic colors and dyes</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="environmental">
                    <AccordionTrigger>Environmental Impact</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>Traditional dairy farming impact:</p>
                        <ul className="list-disc pl-6">
                          <li>High water consumption</li>
                          <li>Large carbon footprint</li>
                          <li>Land use intensity</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cost">
                    <AccordionTrigger>Cost Analysis</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>Average monthly spending:</p>
                        <ul className="list-disc pl-6">
                          <li>Multiple specialized products: $150-200</li>
                          <li>Natural donkey milk solution: $60-80</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default HealthChallenges 
