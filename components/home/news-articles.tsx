import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const newsArticles = [
  {
    content:
      "Native Milk Believes In Bringing Milk That Is Pure, Antibiotic-And-Hormone Free And With Nurturing Benefits Straight To Consumer's Doorstep. Their Cows Are Cared For And Grace Fresh At Their Farm, With Future Being The Largest Dairy Producer Globally, Its Considerable Growth Can Be Attributed To The Feed Location And Addition That Has Been Characteristic Of This Industry.",
    logo: "/placeholder.svg",
    alt: "HOSPITALITY WORLD from Economic Times",
  },
  {
    content:
      "Native Milk Is A Premium Farm-To-Home A2 Milk Company. Native Milk Is Currently To Convert Their Milk From Farm To Consumers With Its Own Sourcing, Processing And Last-Mile Delivery Infrastructure. Its Products Include Milk And Ghee Currently, With Other Products In The Pipeline. The Company Operates On A D2C Subscription Model In The Front End While Endeavours To Increase Farmer Income And Quality Of Milk Procured In The Supply Chain.",
    logo: "/placeholder.svg",
    alt: "BW DiSRUPT",
  },
  {
    content:
      "Native Milk, The Farm-To-Home A2 Milk Brand Is Winning Hearts In Mumbai And Pune For The Right Reasons. With Their Deep Farm Linkages(700 Free Grazing Gir Cows), Dedicated Farm Managers And Delivery Staff, The Brand Today Has More Than 50,000 Milk Deliveries In A Month. It Has A Range Of Value Added Products Made From A2 Milk Including Hand Churned Bilona Ghee, Cobia A2 Raw Pressed Oil And Rabdis Besides Their Best Seller Of Paneer, Curd And Masth Dahi.",
    logo: "/placeholder.svg",
    alt: "BombayTimes",
  },
]

function NewsArticles() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-[1280px] mx-auto px-4">
        <h2 className="text-center mb-12 text-[32px] font-semibold text-[rgb(17,24,39)]">News Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <Card
              key={index}
              className="w-full lg:w-[380px] h-[420px] bg-lime-100/30 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.05)] p-6 transition-transform hover:scale-[1.02] mx-auto"
            >
              <CardContent className="h-full flex flex-col justify-between p-0">
                <p className="text-[14px] leading-[1.6] text-[rgb(55,65,81)]">{article.content}</p>
                <div className="h-[40px] relative mt-4">
                  <Image src={article.logo || "/placeholder.svg"} alt={article.alt} fill className="object-contain" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsArticles
