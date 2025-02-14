"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = {
  milk: {
    title: "Milk",
    questions: [
      {
        q: "What are the benefits of donkey milk?",
        a: "Donkey milk is rich in vitamins, minerals, and essential fatty acids. It's known for its anti-inflammatory properties and is closest to human breast milk in composition.",
      },
      {
        q: "How long does the milk stay fresh?",
        a: "When properly refrigerated (2-4°C), our fresh donkey milk stays good for 3-4 days. We recommend consuming it within this timeframe for optimal benefits.",
      },
      {
        q: "Is donkey milk safe for infants?",
        a: "While donkey milk is naturally similar to human breast milk, please consult with your pediatrician before introducing it to infants.",
      },
    ],
  },
  donkeysAndFarms: {
    title: "Donkeys And Farms",
    questions: [
      {
        q: "What type of donkeys do you have in your farm?",
        a: "We maintain a herd of Mediterranean and Balkan donkeys, breeds known for producing high-quality milk. These donkeys are specifically chosen for their gentle nature and excellent milk production.",
      },
      {
        q: "Do you use any chemicals or growth hormones to increase milk production?",
        a: "No, we never use chemicals or growth hormones. Our donkeys produce milk naturally, and we prioritize their health and well-being over production quantity.",
      },
      {
        q: "What type of feeds do you use?",
        a: "We use organic hay, fresh grass, and specially formulated feed that includes a mix of grains and minerals. All feed is sourced from certified organic suppliers.",
      },
      {
        q: "Are your donkeys free range? How do you milk the donkeys?",
        a: "Yes, our donkeys are free to roam in large pastures during the day. We milk them twice daily using gentle, manual milking techniques that ensure both comfort and hygiene.",
      },
      {
        q: "How do you handle sick donkeys?",
        a: "Sick donkeys are immediately quarantined and treated by our veterinarian. Their milk is not used until they are fully recovered and cleared by our veterinary team.",
      },
      {
        q: "Is your milk organic?",
        a: "Yes, we follow organic farming practices and are certified organic. Our entire process from feed to final product meets strict organic standards.",
      },
      {
        q: "Can I visit your farm?",
        a: "Yes! We welcome visitors by appointment. Please contact us to schedule a tour where you can meet our donkeys and learn about our milking process.",
      },
    ],
  },
  milkingAndQuality: {
    title: "Milking And Quality Checks",
    questions: [
      {
        q: "How often do you test the milk?",
        a: "We conduct daily quality tests on every batch of milk and send weekly samples to independent laboratories for comprehensive analysis.",
      },
      {
        q: "What safety standards do you follow?",
        a: "We adhere to HACCP principles and maintain ISO 22000 certification for food safety management. Our facility is regularly inspected by health authorities.",
      },
    ],
  },
  deliveryAndDistribution: {
    title: "Delivery And Distribution",
    questions: [
      {
        q: "Which areas do you deliver to?",
        a: "We currently deliver to all major cities within a 100km radius of our farm. For specific location queries, please check our delivery checker tool.",
      },
      {
        q: "How is the milk transported?",
        a: "We use temperature-controlled vehicles and specialized cooling containers to maintain optimal temperature throughout transit.",
      },
    ],
  },
  subscriptionAndPayment: {
    title: "Subscription And Payment",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, digital wallets, and bank transfers. All payments are processed through secure payment gateways.",
      },
      {
        q: "Can I pause my subscription?",
        a: "Yes, you can pause your subscription anytime through your account dashboard or by contacting our customer service.",
      },
    ],
  },
  contactUs: {
    title: "Contact Us",
    questions: [
      {
        q: "How can I reach customer service?",
        a: "You can reach us via email at support@donkeymilk.com, phone at 1-800-DONKEY, or through the contact form on our website.",
      },
      {
        q: "What are your business hours?",
        a: "Our customer service team is available Monday through Friday, 9 AM to 6 PM local time.",
      },
    ],
  },
}

export function FAQSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">FAQs</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {Object.entries(faqData).map(([key, section]) => (
              <AccordionItem key={key} value={key} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">{section.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    {section.questions.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-medium text-foreground">{item.q}</h3>
                        <p className="text-muted-foreground text-sm">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

